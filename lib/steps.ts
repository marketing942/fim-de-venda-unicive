import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Users,
  KeyRound,
  Smartphone,
  PlayCircle,
  Mail,
  LifeBuoy,
} from "lucide-react";

export type Step = {
  id: string;
  number: number;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLabelDone?: string;
  link?: string;
  icon: LucideIcon;
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
    buttonLabel: "Preencher formulário",
    link: "https://links.cppem.com.br/unicv-ficha-matricula",
    icon: ClipboardList,
    badge: "Prioridade: até 24h",
  },
  {
    id: "comunidade",
    number: 2,
    title: "Entre na comunidade dos alunos",
    description:
      "Acesse a comunidade oficial para receber orientações, avisos importantes e suporte inicial.",
    buttonLabel: "Entrar na comunidade",
    link: "https://chat.whatsapp.com/GKZDmtCcBKd5T72w3ND9bD",
    icon: Users,
  },
  {
    id: "codigo-polo",
    number: 3,
    title: "Use o código do polo no aplicativo",
    description:
      "Dentro do aplicativo, quando solicitado, informe o código do Polo Caruaru.",
    buttonLabel: "Já inseri o código",
    icon: KeyRound,
    highlight: {
      label: "Código do Polo Caruaru",
      value: "100572",
    },
  },
  {
    id: "edu-plus",
    number: 4,
    title: "Baixe o aplicativo EDU+",
    description:
      "O EDU+ é o aplicativo onde você irá acompanhar seus estudos, acessar sua área acadêmica e realizar suas atividades.",
    buttonLabel: "Já baixei o aplicativo",
    icon: Smartphone,
    highlight: {
      label: "Aplicativo oficial",
      value: "EDU+",
    },
  },
  {
    id: "tutoriais",
    number: 5,
    title: "Assista aos tutoriais de uso do aplicativo",
    description:
      "Veja as vídeo-aulas para aprender como acessar a plataforma, acompanhar suas disciplinas e usar os principais recursos do app.",
    buttonLabel: "Assistir tutoriais",
    link: "https://www.youtube.com/playlist?list=PLvYGtbzo8hagzmd159lzUBomb0-6tokOs",
    icon: PlayCircle,
  },
  {
    id: "acesso-academico",
    number: 6,
    title: "Aguarde seu acesso acadêmico",
    description:
      "Seu registro acadêmico e senha chegarão por e-mail em até 2 dias úteis. Verifique também a caixa de spam ou promoções.",
    buttonLabel: "Entendi",
    icon: Mail,
  },
  {
    id: "suporte",
    number: 7,
    title: "Fale com o suporte se precisar",
    description:
      "Após os passos anteriores, nosso suporte entrará em contato com você. Caso precise de ajuda antes disso, acesse o canal de atendimento.",
    buttonLabel: "Falar com suporte",
    link: "https://links.cppem.com.br/unicv-suporte-aluno",
    icon: LifeBuoy,
  },
];
