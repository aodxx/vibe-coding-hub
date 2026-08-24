var SETUP_VALUES = Object.freeze({
  SPREADSHEET_ID: "PASTE_SPREADSHEET_ID_HERE",
  LINE_LOGIN_CHANNEL_ID: "PASTE_LINE_LOGIN_CHANNEL_ID_HERE",
  APP_ENV: "production"
});

function setupProject() {
  if (SETUP_VALUES.SPREADSHEET_ID.indexOf("PASTE_") === 0 ||
      SETUP_VALUES.LINE_LOGIN_CHANNEL_ID.indexOf("PASTE_") === 0) {
    throw new Error("แก้ค่า SETUP_VALUES ใน Setup.gs ก่อนรัน setupProject");
  }

  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: SETUP_VALUES.SPREADSHEET_ID.trim(),
    LINE_LOGIN_CHANNEL_ID: SETUP_VALUES.LINE_LOGIN_CHANNEL_ID.trim(),
    APP_ENV: SETUP_VALUES.APP_ENV
  }, false);

  ensureRecordsSheet_();
  return {
    ok: true,
    message: "ตั้งค่า Backend และสร้างชีต Records เรียบร้อย",
    status: getConfigurationStatus_()
  };
}
