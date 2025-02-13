module.exports = {
  flowFile: '/opt/render/project/src/data/flows.json', // Caminho para o arquivo de flows
  credentialSecret: "sua-chave-secreta", // Chave secreta para criptografar credenciais
  adminAuth: null, // Autenticação de administrador (opcional)
  httpNodeRoot: '/', // Raiz da API HTTP
  httpAdminRoot: '/admin', // Raiz da interface de administração
  userDir: '/opt/render/.node-red', // Diretório de usuário
  functionGlobalContext: {}, // Contexto global para funções
  logging: {
    console: {
      level: 'info', // Nível de log
      metrics: false,
      audit: false
    }
  }
};
