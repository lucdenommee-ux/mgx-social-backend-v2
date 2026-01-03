function mustGet(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}
function getOptional(name, fallback = "") {
  return process.env[name] || fallback;
}
module.exports = { mustGet, getOptional };
