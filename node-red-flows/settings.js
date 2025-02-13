module.exports = {
    flowsFile: process.env.FLOWS_FILE || '/opt/render/node-red-flows/flows.json',
    credentialSecret: process.env.CREDENTIAL_SECRET || "minhaSenhaSegura",
    uiPort: process.env.PORT || 1880,
    userDir: '/opt/render/node-red-flows',
};
