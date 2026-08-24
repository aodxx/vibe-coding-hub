(function () {
  "use strict";

  function assertConfigured() {
    var config = window.APP_CONFIG || {};
    if (!config.LIFF_ID || config.LIFF_ID.indexOf("PASTE_") === 0) {
      throw new Error("ยังไม่ได้ตั้งค่า LIFF_ID ใน config.js");
    }
    if (!config.API_URL || config.API_URL.indexOf("PASTE_") === 0) {
      throw new Error("ยังไม่ได้ตั้งค่า API_URL ใน config.js");
    }
    if (!window.liff) {
      throw new Error("โหลด LIFF SDK ไม่สำเร็จ กรุณาตรวจอินเทอร์เน็ต");
    }
  }

  async function initialize() {
    assertConfigured();
    await window.liff.init({ liffId: window.APP_CONFIG.LIFF_ID });
    if (!window.liff.isLoggedIn()) {
      window.liff.login();
      return null;
    }

    var idToken = window.liff.getIDToken();
    if (!idToken) {
      throw new Error("LIFF app ต้องเปิด scope openid เพื่อรับ ID token");
    }
    var profile = await window.liff.getProfile();
    return { idToken: idToken, profile: profile };
  }

  window.LineAuth = Object.freeze({ initialize: initialize });
})();
