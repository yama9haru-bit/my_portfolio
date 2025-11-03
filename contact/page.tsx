const contactChannels = [
  {
    label: "Email",
    value: "yama9haru@gmail.com",
    href: "mailto:yama9haru@gmail.com",
    description: "最も確実な連絡手段。48 時間以内の返信を心がけています。",
  },
  {
    label: "Portfolio",
    value: "haruto-portfolio.my.canva.site",
    href: "https://haruto-portfolio.my.canva.site/",
    description: "制作背景やプロジェクトの詳細はこちらでも公開しています。",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/haruto-yamao",
    href: "https://www.linkedin.com",
    description: "キャリアのアップデートや活動記録を発信中です。",
  },
];

const collaborationIdeas = [
  {
    title: "プロダクト改善・新機能検証",
    detail:
      "既存プロダクトの AI 活用強化や、新しい導線の仮説検証をスプリント形式でサポートします。",
  },
  {
    title: "AI オートメーション導入",
    detail:
      "営業やサポート業務で繰り返し行われるタスクを n8n や LLM で自動化し、チームの工数を削減します。",
  },
  {
    title: "学習体験のコンテンツ設計",
    detail:
      "専門知識を誰でも学べる形に落とし込むオンライン教材やワークショップの設計・制作を行います。",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-16 text-slate-200">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/60 p-10 shadow-[0_25px_90px_-50px_rgba(8,47,73,0.9)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),_rgba(2,6,23,0))]" />
        <div className="relative space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
            Contact
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
            プロジェクトのご相談やコラボレーションのアイデア、お気軽にご連絡ください。
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">
            プロダクト開発、AI 連携、学習体験の設計など、初回のオンラインミーティングで課題やゴールを擦り合わせながら進めます。
            まだ構想段階でも気軽にメッセージをいただけると嬉しいです。
          </p>
          <a
            href="mailto:yama9haru@gmail.com"
            className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 px-8 py-3 text-sm font-semibold tracking-wider text-cyan-100 transition"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-transparent opacity-70 transition group-hover:opacity-100" />
            <span className="relative">メールで連絡する</span>
          </a>
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Channels
          </h2>
          <p className="text-lg font-medium text-slate-100">
            話したいテーマに合わせてお好きな方法でどうぞ。
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <article
              key={channel.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/40 hover:shadow-[0_30px_85px_-55px_rgba(8,47,73,0.9)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-slate-900/40" />
              </div>
              <div className="relative space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  {channel.label}
                </h3>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-lg font-semibold text-slate-50 transition hover:text-cyan-100"
                >
                  {channel.value}
                </a>
                <p className="text-sm leading-relaxed text-slate-300">
                  {channel.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            Collaboration Ideas
          </h2>
          <p className="text-lg font-medium text-slate-100">
            こういったテーマで声をかけていただけるとお役に立てます。
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {collaborationIdeas.map((idea) => (
            <article
              key={idea.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/12 via-transparent to-slate-900/45 opacity-0 transition hover:opacity-100" />
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {idea.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {idea.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
