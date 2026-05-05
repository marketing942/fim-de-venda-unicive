# Próximos Passos | Unicive Polo Caruaru

Site de pós-venda da Unicive Polo Caruaru. Apresenta a jornada do aluno
recém-matriculado em formato de checklist interativo, substituindo a
mensagem de WhatsApp cheia de links por uma página simples, organizada e
profissional.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para ícones
- Persistência do progresso via `localStorage`

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

Para gerar a build de produção:

```bash
npm run build
npm run start
```

## Como publicar na Vercel

1. Faça push deste repositório para o GitHub/GitLab/Bitbucket.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. A Vercel detecta automaticamente o framework Next.js — basta clicar em
   **Deploy**. Não há variáveis de ambiente obrigatórias.
4. Após o primeiro deploy, qualquer push na branch principal publica
   automaticamente uma nova versão.

## Estrutura

```
app/
  layout.tsx          # layout raiz e metadata
  page.tsx            # página principal
  globals.css         # estilos globais (Tailwind)
components/
  Header.tsx          # cabeçalho institucional
  Hero.tsx            # mensagem de parabéns
  ProgressBar.tsx     # barra de progresso da jornada
  StepCard.tsx        # card de cada passo
  Checklist.tsx       # orquestra estado + localStorage (client)
  Footer.tsx          # rodapé institucional
lib/
  steps.ts            # conteúdo dos passos da jornada
```

## Observações

- O componente `Checklist` é o único client component que controla o
  estado da checklist e a persistência via `localStorage`.
- Os links externos abrem em nova aba com `target="_blank"` e
  `rel="noopener noreferrer"`.
- O botão **Refazer checklist** limpa o progresso salvo no navegador.
