import { Zap, TrendingUp, Cog, MessageSquare, Rocket, Check, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <div className="mb-32">
          <div className="inline-block mb-8 px-4 py-2 bg-red-600 text-white font-bold text-sm uppercase tracking-wider">
            Don't wait. Act now.
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-none mb-8 tracking-tight">
            Your company<br/>
            is <span className="text-red-600">standing still</span>.<br/>
            AI <span className="italic">is racing</span>.
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
            While your competitors move, you're watching.
            Enough uncertainty. Enough wasted time.
            <span className="text-white font-bold"> I guide you through the AI revolution</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#pricing"
              className="inline-block px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl uppercase tracking-wide transition-all duration-200 text-center"
            >
              Start Now
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-12 py-5 border-2 border-white hover:bg-white hover:text-black text-white font-bold text-xl uppercase tracking-wide transition-all duration-200 text-center"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-32 border-t-4 border-red-600 pt-20">
          <h2 className="text-5xl font-black mb-12 uppercase">The problem is clear</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-red-600 font-black text-6xl mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Decision paralysis</h3>
              <p className="text-gray-400 text-lg">You don't know where to start with AI. Too many tools, too much complexity, zero clarity.</p>
            </div>
            <div>
              <div className="text-red-600 font-black text-6xl mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Disconnected systems</h3>
              <p className="text-gray-400 text-lg">Data scattered everywhere. Apps that don't talk to each other. No automation. Total chaos.</p>
            </div>
            <div>
              <div className="text-red-600 font-black text-6xl mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Falling behind</h3>
              <p className="text-gray-400 text-lg">Your competitors are innovating. You're still using Excel spreadsheets from 2015.</p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div id="how-it-works" className="mb-32 bg-white text-black p-12 md:p-20">
          <h2 className="text-5xl font-black mb-12 uppercase">The solution: Retool as central hub</h2>
          <p className="text-2xl mb-12 leading-relaxed">
            A <span className="font-black">unified digital hub</span> that connects everything: data, external services, automations, AI agents, tools.
            All in one place. Scalable. Evolutionary. Adaptable.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-black p-8">
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Speed</h3>
              <p className="text-lg text-gray-700">
                Rapid implementation. Weekly iterations. Immediate results. Zero wasted time.
              </p>
            </div>

            <div className="border-4 border-black p-8">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Growth</h3>
              <p className="text-lg text-gray-700">
                The system grows with you. New features every week. Continuous innovation.
              </p>
            </div>

            <div className="border-4 border-black p-8">
              <Cog className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Total integration</h3>
              <p className="text-lg text-gray-700">
                Connect CRM, ERP, databases, APIs, AI agents. Everything communicates. Zero silos.
              </p>
            </div>

            <div className="border-4 border-black p-8">
              <Rocket className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Fixed pricing</h3>
              <p className="text-lg text-gray-700">
                Transparent monthly fee. No surprises. Controlled budget. Measurable ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mb-32 border-t-4 border-red-600 pt-20">
          <h2 className="text-5xl font-black mb-12 uppercase">Don't put the cart before the horse</h2>
          <div className="max-w-4xl">
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
              When companies start implementing new tools, AI agents, or automation, the first question is always about data: <span className="text-white font-bold">where it's stored, privacy, and compliance</span>. Fair questions, of course. But often, this focus comes too early.
            </p>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Before worrying about GDPR checklists or private environments, it's worth testing whether the solution actually brings value. <span className="text-white font-bold">Start small, experiment, and prove the benefit</span>. Then, once you've found something worth keeping, move to privacy and compliance.
            </p>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Use tools and platforms that allow for a quick start in the cloud, and eventually, only if necessary, permit on-premises deployment.
            </p>
            <div className="bg-red-600 p-8 border-l-8 border-white">
              <p className="text-2xl font-bold mb-2">Experiment first, secure later</p>
              <p className="text-lg">Otherwise, you're putting the cart before the horse.</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-32 border-t-4 border-red-600 pt-20">
          <h2 className="text-5xl font-black mb-12 uppercase">About me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                Hands-on technologist with <span className="text-white font-bold">20+ years of experience</span> blending deep technical skills with strategic insight.
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                I advise startups and growth-stage teams, helping them move faster and smarter.
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                I run <a href="https://eloquentops.com" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">EloquentOps.com</a> (official Retool Agency Partner), a boutique consultancy specialized in Retool.
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                I also built a boring tool to automate PDF generation: <a href="https://deckserve.com" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">DeckServe.com</a>
              </p>
              <p className="text-lg text-gray-500 italic">
                Previous: Co-Founder & CTO @ TODO.TO.IT
              </p>
            </div>
            <div className="bg-red-600 p-12 text-center">
              <div className="text-8xl font-black mb-6">20+</div>
              <p className="text-2xl font-bold uppercase">Years of experience</p>
              <p className="text-xl mt-8">Technology. Strategy. Results.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mb-32 border-t-4 border-red-600 pt-20">
          <h2 className="text-5xl font-black mb-12 uppercase text-center">Choose your tier</h2>
          <p className="text-2xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Three engagement models designed for different stages and needs. Both include direct access to me.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Advisory Tier */}
            <div className="border-4 border-white p-12 hover:border-red-600 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <MessageSquare className="w-12 h-12 text-red-600" />
                <h3 className="text-4xl font-black uppercase">Advisory</h3>
              </div>

              <div className="text-6xl font-black mb-2">€1,000<span className="text-2xl">/mo</span></div>
              <p className="text-xl text-gray-400 mb-8">Strategic guidance for startups</p>

              <div className="mb-8 pb-8 border-b border-gray-700">
                <p className="text-lg text-gray-300 mb-4">Perfect for:</p>
                <p className="text-xl font-bold mb-2">Startups & early-stage teams</p>
                <p className="text-gray-400">Who need strategic and technical direction but can execute internally.</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Weekly strategic call with stakeholders/team</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Technical & strategic guidance</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Architecture & technology decisions</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Best practices & recommendations</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">No hands-on implementation</p>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="block w-full px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-bold text-xl uppercase tracking-wide transition-all duration-200 text-center"
                >
                  Subscribe now
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">You'll be redirected to Stripe checkout</p>
              </div>
            </div>

            {/* Partnership Tier */}
            <div className="border-4 border-red-600 p-12 relative">
              <div className="absolute -top-4 right-8 bg-red-600 px-6 py-2 text-sm font-black uppercase">
                Most popular
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-12 h-12 text-red-600" />
                <h3 className="text-4xl font-black uppercase">Partnership</h3>
              </div>

              <div className="text-6xl font-black mb-2">€3,000<span className="text-2xl">/mo</span></div>
              <p className="text-xl text-gray-400 mb-8">Strategic + operational execution</p>

              <div className="mb-8 pb-8 border-b border-gray-700">
                <p className="text-lg text-gray-300 mb-4">Perfect for:</p>
                <p className="text-xl font-bold mb-2">SMBs pushing on digitalization & AI</p>
                <p className="text-gray-400">Who need both strategy and hands-on implementation to move fast.</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Weekly planning & review call</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Hands-on implementation between calls</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Build, integrate, automate</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Continuous iteration & optimization</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">AI integration & automation</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">Everything from Advisory tier</p>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="block w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl uppercase tracking-wide transition-all duration-200 text-center"
                >
                  Subscribe now
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">You'll be redirected to Stripe checkout</p>
              </div>
            </div>
          </div>

          {/* Training Tier - Different styling */}
          <div className="w-full">
            <div className="border-4 border-red-600 bg-red-600/10 p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <GraduationCap className="w-12 h-12 text-red-600" />
                    <h3 className="text-4xl font-black uppercase">Training</h3>
                  </div>

                  <p className="text-2xl text-gray-300 mb-6">Hands-on learning package</p>
                  
                  <div className="mb-6">
                    <div className="text-6xl font-black mb-2">€2,000</div>
                    <p className="text-xl font-black text-gray-300">One-off payment</p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-8 pb-8 border-b border-red-600/30">
                    <p className="text-lg text-gray-300 mb-4">Perfect for:</p>
                    <p className="text-gray-400 text-lg">Teams who want to learn by doing with personalized guidance</p>
                  </div>

                  <p className="text-lg font-bold mb-6 uppercase tracking-wide">What's included</p>

                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-lg">Personalized training plan tailored to your needs</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-lg">Full day session leading hands-on training activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full px-8 py-4 border-2 border-red-600 hover:bg-red-600 text-white font-bold text-xl uppercase tracking-wide transition-all duration-200 text-center"
                >
                  Book now
                </a>
                <p className="text-xs text-gray-500 text-center mt-2">One-off payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 p-12 md:p-20 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase">Stop waiting</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Every day you wait is a day lost. Your competitors are already investing in AI. What are you waiting for?
          </p>
          <a
            href="mailto:info@tuodominio.com?subject=Consultation%20Request"
            className="inline-block px-16 py-6 bg-black hover:bg-gray-900 text-white font-bold text-2xl uppercase tracking-wide transition-all duration-200"
          >
            Book a call
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-600 text-sm">
          <p>Transform your company. Start today.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
