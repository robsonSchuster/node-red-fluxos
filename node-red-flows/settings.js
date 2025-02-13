module.exports = {
    flowsFile: '/opt/render/node-red-flows/flows.json', // caminho do arquivo de fluxos
    credentialSecret: "minhaSenhaSegura", // senha de criptografia
    uiPort: process.env.PORT || 1880, // porta do servidor
    userDir: '/opt/render/node-red-flows', // diretório de usuário do Node-RED
    editorTheme: {
        projects: { enabled: false } // desabilita projetos
    }
};
