module.exports = {
  flowFile: '/opt/render/project/src/data/flows.json', // Caminho para o arquivo de flows
  credentialSecret: "sua-chave-secreta-aqui", // Chave secreta para criptografar credenciais
  userDir: '/opt/render/project/src/data', // Diretório de usuário personalizado
  adminAuth: null, // Autenticação de administrador (opcional)
  ui: {
    path: "/ui", // Caminho da interface do usuário
  },
  logging: {
    console: {
      level: "info", // Nível de log
      metrics: false,
      audit: false,
    },
  },
  contextStorage: {
    default: {
      module: "memory", // Armazenamento de contexto em memória
    },
  },
  editorTheme: {
    projects: {
      enabled: false, // Desabilita projetos (opcional)
    },
  },
  security: {
    apiMaxLength: "10mb", // Tamanho máximo de payload para APIs
  },
};
