const { mustGet, getOptional } = require("./env");

function getMetaAuthUrl() {
  const appId = mustGet("META_APP_ID");
  const redirectUri = mustGet("META_REDIRECT_URI");
  const scope = getOptional("META_SCOPES", "public_profile,email");
  const state = getOptional("META_STATE", "mgx");

  const params = new URLSearchParams({
    client_id: appId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope,
    state,
  });

  return `https://www.facebook.com/v19.0/dialog/oauth?${params.toString()}`;
}

module.exports = { getMetaAuthUrl };
