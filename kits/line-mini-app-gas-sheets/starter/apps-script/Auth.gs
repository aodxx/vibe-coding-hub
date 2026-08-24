function verifyLineIdToken_(idToken) {
  if (!idToken || typeof idToken !== "string") {
    throw new ApiError("UNAUTHORIZED", "กรุณาเข้าสู่ระบบผ่าน LINE");
  }

  var config = getConfig_();
  var response;
  try {
    response = UrlFetchApp.fetch("https://api.line.me/oauth2/v2.1/verify", {
      method: "post",
      contentType: "application/x-www-form-urlencoded",
      payload: {
        id_token: idToken,
        client_id: config.lineLoginChannelId
      },
      muteHttpExceptions: true
    });
  } catch (error) {
    throw new ApiError("AUTH_SERVICE_UNAVAILABLE", "ติดต่อระบบยืนยันตัวตนไม่ได้ กรุณาลองใหม่");
  }

  if (response.getResponseCode() !== 200) {
    throw new ApiError("UNAUTHORIZED", "LINE session ไม่ถูกต้องหรือหมดอายุ");
  }

  var profile;
  try {
    profile = JSON.parse(response.getContentText());
  } catch (error) {
    throw new ApiError("AUTH_INVALID_RESPONSE", "ระบบยืนยันตัวตนตอบกลับไม่ถูกต้อง");
  }

  if (!profile.sub) {
    throw new ApiError("UNAUTHORIZED", "ไม่พบรหัสผู้ใช้จาก LINE");
  }

  return {
    userId: profile.sub,
    displayName: profile.name || "",
    pictureUrl: profile.picture || ""
  };
}
