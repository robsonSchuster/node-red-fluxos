module.exports = {
    flowFile: '/opt/render/project/src/data/flows.json',
    credentialSecret: "minhaSenhaSegura", // senha de criptografia
    uiPort: process.env.PORT || 1880, // porta do servidor
    userDir: '/opt/render/node-red-flows', // diretório de usuário do Node-RED
    editorTheme: {
        projects: { enabled: false } // desabilita projetos
    }
};
