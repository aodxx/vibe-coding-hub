var RECORD_HEADERS = Object.freeze([
  "id",
  "createdAt",
  "lineUserId",
  "displayName",
  "title",
  "amount",
  "note",
  "status",
  "updatedAt"
]);

function getSpreadsheet_() {
  return SpreadsheetApp.openById(getConfig_().spreadsheetId);
}

function ensureRecordsSheet_() {
  var spreadsheet = getSpreadsheet_();
  var sheet = spreadsheet.getSheetByName("Records");
  if (!sheet) sheet = spreadsheet.insertSheet("Records");

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, RECORD_HEADERS.length).setValues([RECORD_HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, RECORD_HEADERS.length).setFontWeight("bold");
  } else {
    var existing = sheet.getRange(1, 1, 1, RECORD_HEADERS.length).getValues()[0];
    if (existing.join("|") !== RECORD_HEADERS.join("|")) {
      throw new ApiError("SCHEMA_MISMATCH", "หัวตาราง Records ไม่ตรงกับ Schema ของ Kit");
    }
  }
  return sheet;
}

function readRecords_() {
  var sheet = ensureRecordsSheet_();
  if (sheet.getLastRow() < 2) return [];

  var values = sheet.getRange(
    2, 1, sheet.getLastRow() - 1, RECORD_HEADERS.length
  ).getValues();

  return values.map(function (row) {
    var result = {};
    RECORD_HEADERS.forEach(function (header, index) {
      var value = row[index];
      result[header] = value instanceof Date ? value.toISOString() : value;
    });
    return result;
  });
}

function appendRecord_(record) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var sheet = ensureRecordsSheet_();
    sheet.appendRow(RECORD_HEADERS.map(function (header) {
      var value = record[header];
      return typeof value === "string" ? safeCellText_(value) : value;
    }));
    SpreadsheetApp.flush();
    return record;
  } catch (error) {
    if (error && error.name === "ApiError") throw error;
    throw new ApiError("WRITE_FAILED", "บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่");
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function safeCellText_(value) {
  if (/^[=+\-@]/.test(value)) return "'" + value;
  return value;
}
