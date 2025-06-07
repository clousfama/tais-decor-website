#!/bin/bash

echo "🚀 CONFIGURAÇÃO AUTOMÁTICA DO REPOSITÓRIO GITHUB - TAIS DECOR"
echo "=============================================================="
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "README.md" ] || [ ! -d "app" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do projeto tais_decor_website"
    exit 1
fi

echo "✅ Projeto encontrado no diretório correto"
echo ""

# Solicitar informações do usuário
echo "📝 Configuração do GitHub:"
read -p "Digite seu nome de usuário do GitHub: " GITHUB_USER
read -p "Digite seu email do GitHub: " GITHUB_EMAIL

if [ -z "$GITHUB_USER" ] || [ -z "$GITHUB_EMAIL" ]; then
    echo "❌ Erro: Nome de usuário e email são obrigatórios"
    exit 1
fi

echo ""
echo "🔧 Configurando Git..."

# Configurar Git
git config --global user.name "$GITHUB_USER"
git config --global user.email "$GITHUB_EMAIL"

# Remover .git existente se houver
if [ -d ".git" ]; then
    echo "🗑️  Removendo repositório Git existente..."
    rm -rf .git
fi

# Inicializar novo repositório
echo "🆕 Inicializando novo repositório Git..."
git init
git branch -M main

# Adicionar todos os arquivos (exceto os ignorados)
echo "📁 Adicionando arquivos ao repositório..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit inicial..."
git commit -m "🎉 Projeto completo da Tais Decor - Upload inicial

✨ Funcionalidades incluídas:
- 🏠 Website completo em Next.js
- 🎨 Interface moderna com Tailwind CSS
- 📱 Design responsivo
- 🗃️ Banco de dados com Prisma
- 📧 Sistema de contato
- 🖼️ Galeria de projetos
- 📝 Blog integrado
- 🔧 Configurações completas

🛠️ Tecnologias:
- Next.js 14+
- React 18
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Radix UI Components"

echo ""
echo "🌐 Configurando remote do GitHub..."
echo "📋 Instruções para criar o repositório no GitHub:"
echo ""
echo "1. Acesse: https://github.com/new"
echo "2. Nome do repositório: tais-decor-website-completo"
echo "3. Descrição: Website completo da Tais Decor - Sistema de gestão e apresentação de projetos de decoração"
echo "4. Marque como PÚBLICO"
echo "5. NÃO inicialize com README, .gitignore ou licença"
echo "6. Clique em 'Create repository'"
echo ""

read -p "Pressione ENTER após criar o repositório no GitHub..."

# Adicionar remote
git remote add origin "https://github.com/$GITHUB_USER/tais-decor-website-completo.git"

echo ""
echo "📤 Fazendo push para o GitHub..."
echo "⚠️  Você será solicitado a inserir suas credenciais do GitHub"
echo ""

# Fazer push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCESSO! Projeto enviado para o GitHub com sucesso!"
    echo ""
    echo "🔗 Acesse seu repositório em:"
    echo "   https://github.com/$GITHUB_USER/tais-decor-website-completo"
    echo ""
    echo "📋 Resumo do que foi enviado:"
    echo "   ✅ Código completo do Next.js"
    echo "   ✅ Configuração do Prisma"
    echo "   ✅ Todas as páginas e componentes"
    echo "   ✅ Sistema de contato funcional"
    echo "   ✅ Galeria de projetos"
    echo "   ✅ Blog integrado"
    echo "   ✅ Interface responsiva"
    echo "   ✅ Componentes UI completos"
    echo "   ✅ Arquivos de configuração"
    echo "   ✅ README.md detalhado"
    echo "   ✅ .gitignore configurado"
    echo ""
    echo "🚀 Próximos passos:"
    echo "   1. Configure as variáveis de ambiente (.env)"
    echo "   2. Configure o banco de dados PostgreSQL"
    echo "   3. Execute 'npm install' no diretório app/"
    echo "   4. Execute 'npx prisma generate' para gerar o cliente Prisma"
    echo "   5. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
    echo ""
else
    echo ""
    echo "❌ Erro ao fazer push para o GitHub"
    echo ""
    echo "🔧 Possíveis soluções:"
    echo "   1. Verifique se o repositório foi criado corretamente no GitHub"
    echo "   2. Verifique suas credenciais do GitHub"
    echo "   3. Certifique-se de ter permissões para push no repositório"
    echo "   4. Tente executar: git push -u origin main"
    echo ""
fi
