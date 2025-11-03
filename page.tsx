export default function Home() {
  return (
    <div className="space-y-16 text-slate-200">
      <section
        id="about"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60 p-10 shadow-[0_25px_90px_-50px_rgba(8,47,73,0.9)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_rgba(2,6,23,0))]" />
        <div className="relative flex flex-col gap-6">
          <a
            href="https://haruto-portfolio.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/80 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            Portfolio
          </a>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
            山尾陽飛です。<br />
            京都大学総合人間学部に属しており、カスタマーエンジニアとして、AIを用いて爆速開発と、最高の結果を追求しています。
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">
            AI駆動開発をメインでおこなっており、特にオートメーションや興味を持った分野のITを用いた効率的な学習を常に模索しています。
          </p>
         
        </div>
      </section>

      <section id="work" className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Selected Work
          </h2>
          <p className="text-lg font-medium text-slate-100">
            プロダクト改善やブランド表現にフォーカスした最近のプロジェクト。
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Meeting Summary AI Workflow",
              description:
                "n8n と LLM を組み合わせ、膨大な会議ログから要点とアクションを抽出する自動化フロー。営業チームのアイデア出しや次回商談準備の時間を 40% 削減。",
              role: "Workflow Architect",
            },
            {
              title: "Mandarin Vocab Builder",
              description:
                "中国語学習サイトをスクレイピングし、頻出語や例文を自動で整理する単語帳ジェネレーター。Anki 形式へのエクスポートにも対応し、学習効率を最適化。",
              role: "Data Engineer",
            },
            {
              title: "Prioritize Daily",
              description:
                "AI との対話を通じて毎日のタスクを優先度別に整理する Web アプリ。習慣トラッキングと通知連携で、忙しいチームの個人 OKR 達成を支援。",
              role: "Product Engineer",
            },
          ].map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/40 hover:shadow-[0_35px_95px_-60px_rgba(8,47,73,0.95)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-slate-900/40" />
              </div>
              <div className="relative space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {project.role}
                </div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/60 p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_rgba(2,6,23,0))]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/85">
              Contact
            </h2>
            <p className="text-2xl font-semibold text-slate-50">
              新しいプロジェクトのご相談やコラボレーションのご提案をお待ちしています。
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              プロダクト開発やブランド体験のブラッシュアップなど、気軽にメッセージをお送りください。48 時間以内の返信を心がけています。
            </p>
            <dl className="space-y-2 text-sm text-slate-300">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="font-semibold text-slate-200">Email</dt>
                <dd>
                  <a
                    href="mailto:yama9haru@gmail.com"
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-cyan-400"
                  >
                    yama9haru@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="font-semibold text-slate-200">Location</dt>
                <dd>Kyoto / Remote Friendly</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <dt className="font-semibold text-slate-200">Website</dt>
                <dd>
                  <a
                    href="https://haruto-portfolio.my.canva.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 transition hover:decoration-cyan-400"
                  >
                    haruto-portfolio.my.canva.site
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <a
            href="mailto:yama9haru@gmail.com"
            className="group relative mt-4 inline-flex items-center justify-center self-start overflow-hidden rounded-full border border-cyan-400/40 px-8 py-3 text-sm font-semibold tracking-wider text-cyan-100 transition sm:mt-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-transparent opacity-70 transition group-hover:opacity-100" />
            <span className="relative">メールで連絡する</span>
          </a>
        </div>
      </section>
    </div>
  );
}
