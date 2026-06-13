# Portfólio — Rafael Filipuci

Portfólio pessoal desenvolvido com foco em performance, acessibilidade e código bem estruturado. Dark, minimalista e responsivo.

🔗 **https://rafael-filipuci.vercel.app**

## Seções

- **Hero** — apresentação com animação de digitação e foto editorial
- **Projetos** — destaque para o projeto principal + grid de projetos
- **Sobre mim** — trajetória, experiência profissional e tecnologias
- **Contato** — formulário com validação e integração via WhatsApp

## Tecnologias

- React
- TypeScript
- Vite
- TailwindCSS v4
- Shadcn/UI + BaseUI
- React Hook Form
- Zod

## Rodando localmente

### Clone o repositório

```bash
git clone https://github.com/Filipuci/portfolio.git
```

### Entre na pasta

```bash
cd portfolio
```

### Instale as dependências

```bash
npm install
```

### Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Abra o arquivo `.env` e preencha com seus dados:

```env
VITE_PUBLIC_ZAP=55SEUDDDSEUNUMERO
```

O número deve conter:

- DDI (55)
- DDD
- Número

Sem espaços ou caracteres especiais.

Exemplo:

```env
VITE_PUBLIC_ZAP=5511999999999
```

### Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## Deploy

O projeto está hospedado na Vercel.

Para realizar seu próprio deploy, configure a variável de ambiente `VITE_PUBLIC_ZAP` no painel da Vercel:

```txt
Settings → Environment Variables
```

## Licença

Este projeto é pessoal.

Sinta-se livre para se inspirar na estrutura e implementação, mas evite copiar diretamente o conteúdo, identidade visual ou design.
