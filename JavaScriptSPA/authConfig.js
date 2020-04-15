
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_configuration_.html
const msalConfig = {
  auth: {
    clientId: "7f7da1e9-4caf-40d7-8288-3170b8cdc873",//"e760cab2-b9a1-4c0d-86fb-ff7084abd902",
    authority: "https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1A_signup_signin", //"https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1_susi",//"https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1_susi",//https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
    //authority: "https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1_susi",//"https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1A_signup_signin",//"https://edson0320201b2c.b2clogin.com/tfp/edson0320201b2c.onmicrosoft.com/B2C_1_susi",//https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
    validateAuthority: false
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
  }
};

// Add here scopes for id token to be used at the MS Identity Platform endpoint
// For a full list of available authentication parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const loginRequest = {
  scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
const tokenRequest = {
  scopes: apiConfig.b2cScopes,  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};
