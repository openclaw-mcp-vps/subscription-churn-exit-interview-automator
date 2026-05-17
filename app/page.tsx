export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For SaaS Founders &amp; Customer Success
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Why Customers{" "}
          <span className="text-[#58a6ff]">Cancel</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ChurnIQ automatically sends personalized exit interview surveys the moment a subscriber cancels — then surfaces AI-powered insights so you can fix what's actually driving churn.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="text-white font-semibold mb-1">Webhook Integration</h3>
            <p className="text-sm text-[#8b949e]">Connects to Stripe &amp; Paddle. Detects cancellations instantly — no manual work.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✉️</div>
            <h3 className="text-white font-semibold mb-1">Personalized Surveys</h3>
            <p className="text-sm text-[#8b949e]">Sends tailored exit interview emails automatically within minutes of churn.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-white font-semibold mb-1">AI Insights</h3>
            <p className="text-sm text-[#8b949e]">Aggregates responses and highlights the top reasons customers are leaving.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited churn events</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Stripe &amp; Paddle webhooks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated email surveys</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI response analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Insights dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 7-day free trial</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which subscription platforms are supported?</h3>
            <p className="text-sm text-[#8b949e]">ChurnIQ currently integrates with Stripe and Paddle via webhooks. More platforms are on the roadmap.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the AI analysis work?</h3>
            <p className="text-sm text-[#8b949e]">Survey responses are processed by an LLM that categorizes churn reasons, detects sentiment, and surfaces the most common themes in your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I customize the survey questions?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You can edit the default question templates or create your own from the dashboard to match your product's voice.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} ChurnIQ. All rights reserved.
      </footer>
    </main>
  );
}
