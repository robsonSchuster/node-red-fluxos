module.exports = {
    // Define o caminho do arquivo de fluxos, com fallback para uma variável de ambiente
    flowsFile: process.env.FLOWS_FILE || '/opt/render/node-red-flows/flows.json',
    
    // Define uma senha segura para criptografar credenciais
    credentialSecret: process.env.CREDENTIAL_SECRET || "minhaSenhaSegura",

    // Configura a porta do servidor, caso não seja definida no ambiente
    uiPort: process.env.PORT || 1880,

    // Se for necessário, desabilite projetos ou defina outras opções aqui
    editorTheme: {
        projects: { enabled: false }
    },

    // Configuração do diretório de usuário (os fluxos serão salvos aqui)
    userDir: '/opt/render/node-red-flows',

    // Outras opções de configuração do Node-RED podem ser ajustadas aqui
};
