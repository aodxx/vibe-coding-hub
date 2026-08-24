(function () {
  "use strict";

  async function callApi(action, idToken, payload) {
    var controller = new AbortController();
    var timeout = window.setTimeout(function () {
      controller.abort();
    }, 20000);

    var body = new URLSearchParams({
      payload: JSON.stringify({
        action: action,
        idToken: idToken,
        payload: payload || {}
      })
    });

    try {
      var response = await fetch(window.APP_CONFIG.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: body.toString(),
        redirect: "follow",
        signal: controller.signal
      });
      var text = await response.text();
      var result;
      try {
        result = JSON.parse(text);
      } catch (error) {
        throw new Error("Backend ตอบกลับไม่ใช่ JSON ตรวจ Deployment URL อีกครั้ง");
      }
      if (!result.ok) {
        throw new Error(result.error && result.error.message || "ทำรายการไม่สำเร็จ");
      }
      return result.data;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error("Backend ใช้เวลานานเกินไป กรุณาลองใหม่");
      }
      throw error;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  window.KitApi = Object.freeze({ call: callApi });
})();
