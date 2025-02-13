#!/bin/bash

# Verifique se o diretório foi clonado
if [ ! -d "$HOME/node-red-fluxos" ]; then
    echo "Clonando repositório do Node-RED"
    git clone https://github.com/robsonSchuster/node-red-fluxos.git $HOME/node-red-fluxos
else
    echo "Repositório já clonado."
fi

# Copie o arquivo flows.json para o local correto
cp $HOME/node-red-fluxos/node-red-flows/flows.json /opt/render/node-red-flows/flows.json

# Inicie o Node-RED
npm start
