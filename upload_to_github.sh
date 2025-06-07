#!/bin/bash

echo "=== SCRIPT DE UPLOAD PARA GITHUB - TAIS DECOR ==="
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "README.md" ] || [ ! -d "app" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do projeto tais_decor_website"
    exit 1
fi

echo "✅ Projeto encontrado no diretório correto"
echo ""

# Verificar se o git está inicializado
if [ ! -d ".git" ]; then
    echo "❌ Erro: Repositório Git não inicializado"
    exit 1
fi

echo "✅ Repositório Git inicializado"
echo ""

# Solicitar o nome de usuário do GitHub
echo "📝 Digite seu nome de usuário do GitHub:"
read -p "Usuário: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Erro: Nome de usuário não pode estar vazio"
    exit 1
fi

echo ""
echo "🔗 URL do repositório: https://github.com/$GITHUB_USER/tais-decor-website"
echo ""

# Verificar se o remote já existe
if git remote get-url origin >/dev/null 2>&1; then
    echo "⚠️  Remote 'origin' já existe. Removendo..."
    git remote remove origin
fi

# Adicionar o remote
echo "🔗 Adicionando remote do GitHub..."
git remote add origin "https://github.com/$GITHUB_USER/tais-decor-website.git"

if [ $? -eq 0 ]; then
    echo "✅ Remote adicionado com sucesso"
else
    echo "❌ Erro ao adicionar remote"
    exit 1
fi

echo ""
echo "📤 Fazendo push para o GitHub..."
echo "⚠️  Você será solicitado a inserir suas credenciais do GitHub"
echo ""

# Fazer o push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCESSO! Projeto enviado para o GitHub"
    echo ""
    echo "🔗 Acesse seu repositório em:"
    echo "   https://github.com/$GITHUB_USER/tais-decor-website"
    echo ""
    echo "📋 Resumo do que foi enviado:"
    echo "   - ✅ Código completo do Next.js"
    echo "   - ✅ Configuração do Prisma"
    echo "   - ✅ Todas as páginas e componentes"
    echo "   - ✅ Arquivos de configuração"
    echo "   - ✅ README.md completo"
    echo "   - ✅ .gitignore configurado"
    echo ""
else
    echo ""
    echo "❌ Erro ao fazer push para o GitHub"
    echo ""
    echo "🔧 Possíveis soluções:"
    echo "   1. Verifique se o repositório 'tais-decor-website' existe no GitHub"
    echo "   2. Verifique suas credenciais do GitHub"
    echo "   3. Certifique-se de ter permissões para push no repositório"
    echo ""
    echo "💡 Para criar o repositório no GitHub:"
    echo "   1. Acesse: https://github.com/new"
    echo "   2. Nome: tais-decor-website"
    echo "   3. NÃO inicialize com README, .gitignore ou licença"
    echo "   4. Execute este script novamente"
fi
