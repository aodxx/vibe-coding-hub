(function () {
  "use strict";

  var session = null;
  var elements = {};

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    collectElements();
    elements.form.addEventListener("submit", handleSubmit);
    elements.retry.addEventListener("click", start);
    await start();
  }

  function collectElements() {
    elements.loading = document.getElementById("loading");
    elements.error = document.getElementById("error-panel");
    elements.errorMessage = document.getElementById("error-message");
    elements.retry = document.getElementById("retry-button");
    elements.app = document.getElementById("app");
    elements.profileImage = document.getElementById("profile-image");
    elements.profileName = document.getElementById("profile-name");
    elements.form = document.getElementById("record-form");
    elements.submit = document.getElementById("submit-button");
    elements.status = document.getElementById("form-status");
    elements.list = document.getElementById("record-list");
    elements.empty = document.getElementById("empty-state");
  }

  async function start() {
    setView("loading");
    try {
      session = await window.LineAuth.initialize();
      if (!session) return;
      renderProfile(session.profile);
      await refreshRecords();
      setView("app");
    } catch (error) {
      showFatalError(error.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("", "");
    elements.submit.disabled = true;
    elements.submit.textContent = "กำลังบันทึก…";

    var formData = new FormData(elements.form);
    var payload = {
      title: String(formData.get("title") || "").trim(),
      amount: Number(formData.get("amount")),
      note: String(formData.get("note") || "").trim()
    };

    if (!payload.title || !Number.isFinite(payload.amount) || payload.amount < 0) {
      setFormStatus("กรุณากรอกชื่อรายการและจำนวนเงินให้ถูกต้อง", "error");
      resetSubmit();
      return;
    }

    try {
      await window.KitApi.call("records.create", session.idToken, payload);
      elements.form.reset();
      setFormStatus("บันทึกรายการสำเร็จ", "success");
      await refreshRecords();
    } catch (error) {
      setFormStatus(error.message, "error");
    } finally {
      resetSubmit();
    }
  }

  async function refreshRecords() {
    elements.list.setAttribute("aria-busy", "true");
    try {
      var data = await window.KitApi.call("records.list", session.idToken);
      renderRecords(data.records || []);
    } finally {
      elements.list.setAttribute("aria-busy", "false");
    }
  }

  function renderProfile(profile) {
    elements.profileName.textContent = profile.displayName || "ผู้ใช้ LINE";
    if (profile.pictureUrl) {
      elements.profileImage.src = profile.pictureUrl;
      elements.profileImage.hidden = false;
    }
  }

  function renderRecords(records) {
    elements.list.replaceChildren();
    elements.empty.hidden = records.length !== 0;
    records.forEach(function (record) {
      var article = document.createElement("article");
      article.className = "record-card";

      var content = document.createElement("div");
      var title = document.createElement("h3");
      var note = document.createElement("p");
      var date = document.createElement("time");
      var amount = document.createElement("strong");

      title.textContent = record.title;
      note.textContent = record.note || "ไม่มีหมายเหตุ";
      date.dateTime = record.createdAt;
      date.textContent = formatDate(record.createdAt);
      amount.textContent = formatMoney(record.amount);

      content.append(title, note, date);
      article.append(content, amount);
      elements.list.append(article);
    });
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB"
    }).format(Number(value) || 0);
  }

  function formatDate(value) {
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value || "");
    return new Intl.DateTimeFormat("th-TH", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  }

  function setView(view) {
    elements.loading.hidden = view !== "loading";
    elements.error.hidden = view !== "error";
    elements.app.hidden = view !== "app";
  }

  function showFatalError(message) {
    elements.errorMessage.textContent = message;
    setView("error");
  }

  function setFormStatus(message, type) {
    elements.status.textContent = message;
    elements.status.className = "form-status " + (type || "");
  }

  function resetSubmit() {
    elements.submit.disabled = false;
    elements.submit.textContent = "บันทึกรายการ";
  }
})();
