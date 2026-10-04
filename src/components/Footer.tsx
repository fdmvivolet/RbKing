import React from 'react';
import { Translations } from '../translations';

interface FooterProps {
  t: Translations['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030305] py-20 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand info */}
          <div className="md:col-span-2">
            <span className="font-luxury text-2xl font-bold tracking-wider text-white">
              RB<span className="font-light text-zinc-400">KING</span>
            </span>
            <p className="mt-4 text-xs text-zinc-400 max-w-sm leading-relaxed font-light">
              {t.brandDesc}
            </p>
            <div className="mt-5 text-[11px] text-zinc-500 font-mono">
              {t.standardNotice}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-200">
              {t.navProduct}
            </h4>
            <ul className="mt-5 space-y-3 text-xs font-light">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#ai-engine" className="hover:text-white transition-colors">
                  AI World Engine
                </a>
              </li>
              <li>
                <a href="#aws-cloud" className="hover:text-white transition-colors">
                  AWS Infrastructure
                </a>
              </li>
              <li>
                <a href="#monitoring" className="hover:text-white transition-colors">
                  Live Telemetry
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Billing
                </a>
              </li>
            </ul>
          </div>

          {/* Partnerships & Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-200">
              {t.navCompany}
            </h4>
            <ul className="mt-5 space-y-3 text-xs font-light">
              <li>
                <a href="#waitlist" className="text-white hover:underline">
                  Apply for Early Access
                </a>
              </li>
              <li className="text-zinc-400">
                Email: <span className="font-mono text-zinc-300">partners@rbking.io</span>
              </li>
              <li className="text-zinc-400">
                AWS Startups Activate Ecosystem
              </li>
              <li className="text-zinc-400">
                Roblox Open Cloud Ecosystem
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            © {new Date().getFullYear()} RbKing Technologies. {t.rights}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">{t.privacy}</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-zinc-300 cursor-pointer">{t.terms}</span>
            <span aria-hidden="true">·</span>
            <span>AWS Infrastructure SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
