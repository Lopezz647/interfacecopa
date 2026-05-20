import React from "react";
import { BookOpen, CheckCircle, AlertTriangle, Trophy, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const rules = [
  {
    icon: Target,
    title: "Como funciona",
    description: "Cada participante faz palpites sobre o placar dos jogos da Copa do Mundo 2026. Os palpites devem ser feitos até 5 minutos antes do início de cada jogo.",
  },
  {
    icon: Trophy,
    title: "Pontuação",
    items: [
      "Placar exato: 10 pontos",
      "Acertar o vencedor + diferença de gols: 7 pontos",
      "Acertar o vencedor: 5 pontos",
      "Acertar empate (sem placar exato): 5 pontos",
      "Errou tudo: 0 pontos",
    ],
  },
  {
    icon: Zap,
    title: "Multiplicadores",
    description: "Algumas rodadas possuem multiplicadores especiais (2x, 3x). Nessas rodadas, a pontuação é multiplicada automaticamente. Fique atento ao badge de multiplicador!",
  },
  {
    icon: AlertTriangle,
    title: "Regras Importantes",
    items: [
      "Palpites não podem ser alterados após o início do jogo",
      "Cada jogador pode fazer apenas um palpite por jogo",
      "Em caso de empate no ranking, o critério de desempate é número de placares exatos",
      "Jogos adiados serão reagendados automaticamente",
    ],
  },
];

export default function Regras() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Regras do Bolão</h1>
      </div>

      <div className="space-y-4">
        {rules.map((rule, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <rule.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-foreground">{rule.title}</h2>
            </div>
            {rule.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
            )}
            {rule.items && (
              <ul className="space-y-2 mt-2">
                {rule.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
