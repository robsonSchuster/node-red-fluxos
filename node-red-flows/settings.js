module.exports = {
  // Caminho para o arquivo de flows
  flowFile: '/opt/render/project/src/data/flows.json',

  // Chave secreta para criptografar credenciais (substitua por uma chave segura)
  credentialSecret: "sua-chave-secreta-aqui",

  // Configurações de autenticação (opcional)
  adminAuth: null,

  // Configurações de UI (opcional)
  ui: {
    path: "/ui", // Caminho da interface do usuário
  },

  // Configurações de logging
  logging: {
    console: {
      level: "info", // Nível de log
      metrics: false,
      audit: false,
    },
  },

  // Configurações de contexto
  contextStorage: {
    default: {
      module: "memory", // Armazenamento de contexto em memória
    },
  },

  // Configurações de editor
  editorTheme: {
    projects: {
      enabled: false, // Desabilita projetos (opcional)
    },
  },

  // Configurações de segurança
  security: {
    apiMaxLength: "10mb", // Tamanho máximo de payload para APIs
  },
};
