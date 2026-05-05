export type StepLink = {
  label: string;
  href: string;
};

export type Step = {
  id: string;
  number: number;
  title: string;
  description: string;
  emoji: string;
  buttonLabel: string;
  link?: string;
  links?: StepLink[];
  badge?: string;
  highlight?: {
    label: string;
    value: string;
  };
};

export const steps: Step[] = [
  {
    id: "ficha-matricula",
    number: 1,
    title: "Preencha o formulário de matrícula",
    description:
      "Complete sua ficha de matrícula em até 24 horas para garantir que seus dados sejam enviados corretamente.",
    emoji: "📝",
    buttonLabel: "Preencher formulário",
    link: "https://links.cppem.com.br/unicv-ficha-matricula",
    badge: "Prioridade: até 24h",
  },
  {
    id: "comunidade",
    number: 2,
    title: "Entre na comunidade dos alunos",
    description:
      "Acesse a comunidade oficial para receber orientações, avisos importantes e suporte inicial.",
    emoji: "💬",
    buttonLabel: "Entrar na comunidade",
    link: "https://chat.whatsapp.com/GKZDmtCcBKd5T72w3ND9bD",
  },
  {
    id: "edu-plus",
    number: 3,
    title: "Baixe o aplicativo EDU+",
    description:
      "O EDU+ é o aplicativo onde você irá acompanhar seus estudos, acessar sua área acadêmica e realizar suas atividades.",
    emoji: "📲",
    buttonLabel: "Já baixei o aplicativo",
    highlight: {
      label: "Aplicativo oficial",
      value: "EDU+",
    },
    links: [
      {
        label: "Baixar para Android",
        href: "https://play.google.com/store/apps/details?id=br.com.swa.jacad_mobile",
      },
      {
        label: "Baixar para iOS",
        href: "https://apps.apple.com/br/app/edu/id1505375852",
      },
    ],
  },
  {
    id: "codigo-polo",
    number: 4,
    title: "Use o código do polo no aplicativo",
    description:
      "Dentro do aplicativo, quando solicitado, informe o código do Polo Caruaru.",
    emoji: "🔑",
    buttonLabel: "Já inseri o código",
    highlight: {
      label: "Código do Polo Caruaru",
      value: "100572",
    },
  },
  {
    id: "tutoriais",
    number: 5,
    title: "Assista aos tutoriais de uso do aplicativo",
    description:
      "Veja as vídeo-aulas para aprender como acessar a plataforma, acompanhar suas disciplinas e usar os principais recursos do app.",
    emoji: "🎬",
    buttonLabel: "Assistir tutoriais",
    link: "https://www.youtube.com/playlist?list=PLvYGtbzo8hagzmd159lzUBomb0-6tokOs",
  },
  {
    id: "acesso-academico",
    number: 6,
    title: "Aguarde seu acesso acadêmico",
    description:
      "Seu registro acadêmico e senha chegarão por e-mail em até 2 dias úteis. Verifique também a caixa de spam ou promoções.",
    emoji: "📩",
    buttonLabel: "Entendi",
  },
];

export const supportLink =
  "https://links.cppem.com.br/unicv-suporte-aluno";
