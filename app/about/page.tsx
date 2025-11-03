const focusAreas = [
  {
    title: "AI Automation",
    description:
      "n8n や Zapier、LLM を活用して、営業チームや学習体験に即効性のあるワークフローを構築。",
  },
  {
    title: "Product Prototyping",
    description:
      "Cursor や Code Interpreter を駆使し、コンセプトを 48 時間以内に検証できる速さで UI/UX を形にします。",
  },
  {
    title: "Learning Experience",
    description:
      "NotebookLM や Web 技術を組み合わせ、学習者が直感的に理解できるコンテンツ作りを探求。",
  },
];

const milestones = [
  {
    year: "2025",
    title: "京都大学 総合人間学部に入学",
    detail:
      "人間の認知や学習に興味を持ち、テクノロジーと教育の交差点にフォーカスを当て始める。",
  },
  {
    year: "2025",
    title: "AI 駆動開発に没頭",
    detail:
      "日々のタスクや学習を自動化するため、AI API とノーコードツールを組み合わせた開発を開始。",
  },
  {
    year: "2025",
    title: "バイブコーディングの実践",
    detail:
      "Cursor を取り入れて、日記アプリなど小さなプロダクトを連続的にリリース。高速な検証サイクルを確立。",
  },
  {
    year: "2025",
    title: "ワークフローと学習プロダクトを展開",
    detail:
      "営業支援の自動化フローや、大学数学の学習サイトなど、実務で使われるプロダクトを複数構築。",
  },
];

const toolstack = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "n8n",
  "OpenAI API",
  "NotebookLM",
  "Supabase",
  "Vercel",
];

export default function AboutPage() {
  return (
    <div className="space-y-16 text-slate-200">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60 p-10 shadow-[0_25px_90px_-50px_rgba(8,47,73,0.9)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_rgba(2,6,23,0))]" />
        <div className="relative space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
            About
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
            山尾陽飛は、AI と人の創造性を結びつけるカスタマーエンジニアです。
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">
            京都大学 総合人間学部で学びながら、AI を活用したオートメーション、学習体験の設計、そして高速なプロトタイピングを中心に活動しています。
            自分自身の興味と感性を軸に、アイデアをすぐに形にすることを大切にしています。
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Focus
          </h2>
          <p className="text-lg font-medium text-slate-100">
            日々取り組んでいるテーマと解決したい課題。
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((focus) => (
            <article
              key={focus.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/35 hover:shadow-[0_30px_85px_-55px_rgba(8,47,73,0.9)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-slate-900/40" />
              </div>
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {focus.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {focus.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Journey
          </h2>
          <p className="text-lg font-medium text-slate-100">
            学びと制作を通じて積み重ねてきたマイルストーン。
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/12 via-transparent to-slate-900/45 opacity-0 transition hover:opacity-100" />
              <div className="relative space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-semibold text-slate-50">
                  {milestone.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {milestone.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Toolkit
          </h2>
          <p className="text-lg font-medium text-slate-100">
            アイデアを素早く形にするための愛用スタック。
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toolstack.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-white/10 bg-white/[0.015] px-4 py-5 text-center text-sm font-medium text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-100"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
