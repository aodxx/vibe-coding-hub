var PROPERTY_KEYS = Object.freeze({
  SPREADSHEET_ID: "SPREADSHEET_ID",
  LINE_LOGIN_CHANNEL_ID: "LINE_LOGIN_CHANNEL_ID",
  APP_ENV: "APP_ENV"
});

function getConfig_() {
  var properties = PropertiesService.getScriptProperties();
  var config = {
    spreadsheetId: properties.getProperty(PROPERTY_KEYS.SPREADSHEET_ID),
    lineLoginChannelId: properties.getProperty(PROPERTY_KEYS.LINE_LOGIN_CHANNEL_ID),
    appEnv: properties.getProperty(PROPERTY_KEYS.APP_ENV) || "production"
  };

  if (!config.spreadsheetId || !config.lineLoginChannelId) {
    throw new ApiError("NOT_CONFIGURED", "Backend ยังตั้งค่าไม่ครบ กรุณารัน setupProject");
  }
  return config;
}

function getConfigurationStatus_() {
  var properties = PropertiesService.getScriptProperties();
  return {
    spreadsheet: Boolean(properties.getProperty(PROPERTY_KEYS.SPREADSHEET_ID)),
    lineLogin: Boolean(properties.getProperty(PROPERTY_KEYS.LINE_LOGIN_CHANNEL_ID)),
    environment: properties.getProperty(PROPERTY_KEYS.APP_ENV) || "not-set"
  };
}
