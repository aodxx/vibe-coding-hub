function listRecordsForUser_(userId) {
  return readRecords_()
    .filter(function (record) {
      return String(record.lineUserId) === String(userId);
    })
    .sort(function (a, b) {
      return String(b.createdAt).localeCompare(String(a.createdAt));
    });
}

function createRecord_(payload, user) {
  payload = payload || {};
  var title = String(payload.title || "").trim();
  var note = String(payload.note || "").trim();
  var amount = Number(payload.amount);

  if (!title || title.length > 100) {
    throw new ApiError("VALIDATION_ERROR", "ชื่อรายการต้องมี 1-100 ตัวอักษร");
  }
  if (!isFinite(amount) || amount < 0 || amount > 1000000000) {
    throw new ApiError("VALIDATION_ERROR", "จำนวนเงินต้องอยู่ระหว่าง 0 ถึง 1,000,000,000");
  }
  if (note.length > 500) {
    throw new ApiError("VALIDATION_ERROR", "หมายเหตุต้องไม่เกิน 500 ตัวอักษร");
  }

  var now = new Date().toISOString();
  return appendRecord_({
    id: Utilities.getUuid(),
    createdAt: now,
    lineUserId: user.userId,
    displayName: user.displayName,
    title: title,
    amount: amount,
    note: note,
    status: "active",
    updatedAt: now
  });
}
