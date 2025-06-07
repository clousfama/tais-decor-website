# 🎨 Tais Decor - Website Completo

> Sistema completo de gestão e apresentação de projetos de decoração desenvolvido em Next.js

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5+-2D3748?style=for-the-badge&logo=prisma)

## 📋 Sobre o Projeto

O **Tais Decor** é um website completo desenvolvido para apresentar e gerenciar projetos de decoração. O sistema oferece uma interface moderna e responsiva, permitindo que clientes visualizem portfólio, entrem em contato e acompanhem o blog da empresa.

### ✨ Funcionalidades Principais

- 🏠 **Homepage moderna** com apresentação da empresa
- 🖼️ **Galeria de projetos** com filtros e categorias
- 📧 **Sistema de contato** integrado com banco de dados
- 📝 **Blog** para compartilhar dicas e tendências
- 📱 **Design responsivo** para todos os dispositivos
- 🎨 **Interface elegante** com componentes reutilizáveis
- 🔍 **SEO otimizado** para melhor visibilidade
- ⚡ **Performance otimizada** com Next.js

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 14+** - Framework React para produção
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

### Backend & Database
- **Prisma ORM** - Object-Relational Mapping
- **PostgreSQL** - Banco de dados relacional
- **Next.js API Routes** - Endpoints serverless

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Git** - Controle de versão

## 📁 Estrutura do Projeto

```
tais_decor_website/
├── app/                          # Aplicação Next.js
│   ├── app/                      # App Router (Next.js 13+)
│   │   ├── api/                  # API Routes
│   │   │   └── contact/          # Endpoint de contato
│   │   ├── blog/                 # Páginas do blog
│   │   ├── contato/              # Página de contato
│   │   ├── galeria/              # Galeria de projetos
│   │   ├── servicos/             # Página de serviços
│   │   ├── sobre/                # Página sobre
│   │   ├── globals.css           # Estilos globais
│   │   ├── layout.tsx            # Layout principal
│   │   └── page.tsx              # Homepage
│   ├── components/               # Componentes React
│   │   ├── ui/                   # Componentes de interface
│   │   ├── footer.tsx            # Rodapé
│   │   ├── navbar.tsx            # Navegação
│   │   └── theme-provider.tsx    # Provedor de tema
│   ├── hooks/                    # Custom hooks
│   ├── lib/                      # Utilitários e configurações
│   ├── prisma/                   # Schema do banco de dados
│   ├── package.json              # Dependências do projeto
│   ├── tailwind.config.ts        # Configuração do Tailwind
│   └── tsconfig.json             # Configuração do TypeScript
├── .gitignore                    # Arquivos ignorados pelo Git
├── README.md                     # Documentação do projeto
└── setup_github_repo.sh          # Script de configuração do GitHub
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL configurado
- Git instalado

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/tais-decor-website-completo.git
cd tais-decor-website-completo
```

### 2. Instale as dependências

```bash
cd app
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` no diretório `app/` com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/tais_decor"

# Next.js
NEXTAUTH_SECRET="seu-secret-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configure o banco de dados

```bash
# Gerar o cliente Prisma
npx prisma generate

# Executar migrações
npx prisma db push

# (Opcional) Visualizar o banco de dados
npx prisma studio
```

### 5. Execute o projeto

```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm run build
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting do código
```

## 🎨 Componentes UI

O projeto inclui uma biblioteca completa de componentes UI baseados no Radix UI:

- **Formulários**: Input, Textarea, Select, Checkbox, Radio Group
- **Navegação**: Navigation Menu, Breadcrumb, Pagination
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Overlay**: Dialog, Popover, Tooltip, Sheet
- **Layout**: Card, Separator, Accordion, Tabs
- **Dados**: Table, Calendar, Date Picker

## 🗃️ Banco de Dados

### Modelo de Dados

```prisma
model ContactForm {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String
  eventType   String
  eventDate   DateTime?
  guestCount  Int?
  budget      String?
  location    String?
  message     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Suporte completo ao Next.js
- **Railway**: Deploy com banco PostgreSQL incluído
- **Heroku**: Com add-on PostgreSQL

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Desenvolvimento**: Equipe Tais Decor
- **Design**: Interface moderna e responsiva
- **Backend**: API robusta com Prisma

## 📞 Contato

- **Website**: [Tais Decor](https://tais-decor.vercel.app)
- **Email**: contato@taisDecor.com
- **GitHub**: [@clousfama](https://github.com/clousfama)

---

<div align="center">
  <p>Desenvolvido com ❤️ para a Tais Decor</p>
  <p>© 2024 Tais Decor. Todos os direitos reservados.</p>
</div>
