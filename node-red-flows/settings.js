module.exports = {
    flowFile: process.env.FLOWS_FILE_PATH || "/opt/render/node-red-flows/flows.json",
    credentialSecret: "minhaSenhaSegura",
    uiPort: process.env.PORT || 1880,
};
