function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function jsonOk(res, payload) {
  json(res, 200, payload);
}

function jsonError(res, statusCode, message) {
  json(res, statusCode, { ok: false, error: message });
}

module.exports = { json, jsonOk, jsonError };
