import Image from "next/image";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-unicive-900/10 bg-unicive-900 text-unicive-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo-polo-caruaru.png"
              alt="Unicive — Polo Caruaru PE"
              width={1080}
              height={1350}
              className="h-20 w-auto rounded-xl ring-1 ring-white/10"
            />
            <p className="mt-5 max-w-md text-sm text-unicive-200">
              Educação a distância de qualidade, com diploma reconhecido pelo
              MEC. Aqui no Polo Caruaru você conta com suporte humano em cada
              etapa da sua jornada acadêmica.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Jornada do Aluno
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://links.cppem.com.br/unicv-ficha-matricula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unicive-200 transition-colors hover:text-white"
                >
                  Formulário de matrícula
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/GKZDmtCcBKd5T72w3ND9bD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unicive-200 transition-colors hover:text-white"
                >
                  Comunidade dos alunos
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLvYGtbzo8hagzmd159lzUBomb0-6tokOs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unicive-200 transition-colors hover:text-white"
                >
                  Tutoriais do EDU+
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-unicive-200">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-300"
                  aria-hidden
                />
                Polo EAD Caruaru — PE
              </li>
              <li>
                <a
                  href="https://links.cppem.com.br/unicv-suporte-aluno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-unicive-200 transition-colors hover:text-white"
                >
                  <MessageCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-300"
                    aria-hidden
                  />
                  Suporte ao aluno
                </a>
              </li>
              <li className="flex items-start gap-2 text-unicive-200">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-300"
                  aria-hidden
                />
                Comunicados oficiais por e-mail
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-unicive-200 sm:flex-row sm:items-center">
          <p>© 2026 Unicive — Polo EAD Caruaru | Grupo CPPEM</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
