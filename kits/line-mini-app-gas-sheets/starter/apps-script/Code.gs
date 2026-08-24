function doGet(e) {
  var action = e && e.parameter && e.parameter.action || "health";
  if (action === "health") {
    return successOutput_({
      service: "line-mini-app-gas-sheets",
      version: "0.1.0",
      configured: getConfigurationStatus_()
    });
  }
  return errorOutput_(new ApiError("METHOD_NOT_ALLOWED", "Action นี้ต้องเรียกด้วย POST"));
}

function doPost(e) {
  try {
    var request = parseRequest_(e);
    if (request.action === "health") {
      return successOutput_({
        service: "line-mini-app-gas-sheets",
        version: "0.1.0",
        configured: getConfigurationStatus_()
      });
    }

    var user = verifyLineIdToken_(request.idToken);
    if (request.action === "records.list") {
      return successOutput_({ records: listRecordsForUser_(user.userId) });
    }
    if (request.action === "records.create") {
      return successOutput_({ record: createRecord_(request.payload, user) });
    }
    throw new ApiError("ACTION_NOT_FOUND", "ไม่พบ action ที่เรียก");
  } catch (error) {
    return errorOutput_(error);
  }
}

function parseRequest_(e) {
  var raw = e && e.parameter && e.parameter.payload;
  if (!raw && e && e.postData) raw = e.postData.contents;
  if (!raw) throw new ApiError("BAD_REQUEST", "ไม่พบ request payload");

  var request;
  try {
    request = JSON.parse(raw);
  } catch (error) {
    throw new ApiError("BAD_REQUEST", "request payload ต้องเป็น JSON");
  }
  if (!request.action || typeof request.action !== "string") {
    throw new ApiError("BAD_REQUEST", "กรุณาระบุ action");
  }
  return request;
}

function ApiError(code, message) {
  this.name = "ApiError";
  this.code = code;
  this.message = message;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

function successOutput_(data) {
  return jsonOutput_({
    ok: true,
    data: data,
    meta: { timestamp: new Date().toISOString() }
  });
}

function errorOutput_(error) {
  var isKnown = error && error.name === "ApiError";
  return jsonOutput_({
    ok: false,
    error: {
      code: isKnown ? error.code : "INTERNAL_ERROR",
      message: isKnown ? error.message : "ระบบขัดข้อง กรุณาลองใหม่"
    },
    meta: { timestamp: new Date().toISOString() }
  });
}

function jsonOutput_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
