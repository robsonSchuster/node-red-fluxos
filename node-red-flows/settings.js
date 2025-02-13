module.exports = {
   flowFile: '/opt/render/project/src/data/flows.json', // Caminho correto para o flows.json
  credentialSecret: "sua-chave-secreta", // Adicione uma chave secreta para criptografar credenciais
    uiPort: process.env.PORT || 1880, // porta do servidor
    userDir: '/opt/render/node-red-flows', // diretório de usuário do Node-RED
    editorTheme: {
        projects: { enabled: false } // desabilita projetos
    }
};
