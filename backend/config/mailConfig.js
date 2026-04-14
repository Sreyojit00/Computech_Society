const SibApiV3Sdk = require("sib-api-v3-sdk");

// Initialize Brevo API
const client = SibApiV3Sdk.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_PASS;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

module.exports = apiInstance;
