const exploratoryBuilds = [
  {
    title: "Bibe Diary",
    description:
      "初めて Cursor を使って開発した最小限の日記アプリ。シンプルな UI と AI 補助の文章提案機能で、日々の気づきを素早く記録。",
    stack: "Next.js / cursor / OpenAI API",
  },
  {
    title: "Auto Othello",
    description:
      "AI と対戦しながら戦略を学べるオセロアプリ。ミニマックス探索と推論 API を組み合わせ、難易度を動的に調整。",
    stack: "React / Zustand / Python Flask",
  },
  {
    title: "Math Insight Notes",
    description:
      "NotebookLM と VS Code を連携させた大学数学のオンライン教材。定理の直感的な解説とコードセルを並置し、自習の反復性を向上。",
    stack: "NotebookLM / VS Code / MDX",
  },
  {
    title: "Meeting Summary AI Workflow",
    description:
      "n8n と LLM を組み合わせ、膨大な会議ログから要点とアクションを抽出する自動化フロー。営業チームのアイデア出しや次回商談準備の時間を 40% 削減。",
    stack: "n8n / GPT-4o / Slack API",
  },
  {
    title: "Mandarin Vocab Builder",
    description:
      "中国語学習サイトをスクレイピングし、頻出語や例文を自動で整理する単語帳ジェネレーター。Anki 形式へのエクスポートにも対応し、学習効率を最適化。",
    stack: "Python / Playwright / Supabase",
  },
  {
    title: "Prioritize Daily",
    description:
      "AI との対話を通じて毎日のタスクを優先度別に整理する Web アプリ。習慣トラッキングと通知連携で、忙しいチームの個人 OKR 達成を支援。",
    stack: "Next.js / codex / manus",
  },
];

export default function WorksPage() {
  return (
    <div className="space-y-16 text-slate-200">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60 p-10 shadow-[0_25px_90px_-50px_rgba(8,47,73,0.9)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(2,6,23,0))]" />
        <div className="relative space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
            Works
          </span>
          <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            プロダクトグロースと自動化を軸にした制作物たち。
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">
            ビジネス現場で即効性のあるソリューションから、興味と好奇心を原動力にした
            パーソナルプロジェクトまで。いずれもアイデアメイキングから設計、実装、検証まで一気通貫で進めています。
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Personal Explorations
          </h2>
          <p className="text-lg font-medium text-slate-100">
            バイブコーディングや新しいツールチェーンを試した個人制作。
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {exploratoryBuilds.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition hover:border-cyan-400/35 hover:shadow-[0_30px_85px_-55px_rgba(8,47,73,0.9)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/12 via-transparent to-slate-900/45" />
              </div>
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                  {project.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
