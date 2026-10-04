import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, User, Mail, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Translations } from '../translations';

interface ContactFormProps {
  t: Translations['contact'];
  initialPlan?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ t, initialPlan }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studioOrLink, setStudioOrLink] = useState('');
  const [message, setMessage] = useState(initialPlan ? `Inquiry regarding plan: ${initialPlan}` : '');
  const [inquiryType, setInquiryType] = useState<'earlyAccess' | 'awsPilot' | 'enterprise'>('earlyAccess');

  const [errors, setErrors] = useState<{ fullName?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const validate = () => {
    const errs: { fullName?: string; email?: string; message?: string } = {};
    if (!fullName.trim()) {
      errs.fullName = t.errors.nameRequired;
    }
    if (!email.trim()) {
      errs.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t.errors.emailInvalid;
    }
    if (!message.trim()) {
      errs.message = t.errors.messageRequired;
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `RBK-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedLeadId(generatedId);
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="waitlist" className="py-28 border-b border-white/[0.08] bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-white font-bold">[ 11.0 // ACCESS ]</span>
            <span className="text-zinc-600">/</span>
            <span>{t.badge}</span>
          </div>
          <h2 className="mt-3 font-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-14 max-w-xl mx-auto">
          {submittedLeadId ? (
            <div className="border border-white/20 bg-[#070709] p-8 sm:p-12 text-center shadow-2xl relative">
              {/* Precision Corner Crosshair Accent */}
              <div className="absolute -top-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -top-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>

              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-white/20 bg-white/5 text-white mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-luxury text-2xl font-bold text-white tracking-wide">
                {t.successTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 font-mono">
                {t.successRef} <span className="text-white font-bold">{submittedLeadId}</span>
              </p>
              <p className="mt-4 text-xs text-zinc-400 leading-relaxed max-w-md mx-auto font-light">
                {t.successBody}
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setSubmittedLeadId(null);
                    setFullName('');
                    setEmail('');
                    setStudioOrLink('');
                    setMessage('');
                  }}
                  className="border border-white/20 bg-transparent px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
                >
                  {t.submitAnother}
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-white/15 bg-[#050507] p-8 sm:p-12 shadow-2xl space-y-6 relative"
            >
              {/* Precision Corner Crosshair Accent */}
              <div className="absolute -top-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -top-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -left-[5px] text-white/30 font-mono text-[10px] select-none">+</div>
              <div className="absolute -bottom-[5px] -right-[5px] text-white/30 font-mono text-[10px] select-none">+</div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {t.fullNameLabel}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-600 pointer-events-none" />
                  <input
                    type="text"
                    placeholder={t.fullNamePlaceholder}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full bg-[#08080c] border pl-10 pr-4 py-3 text-xs text-white font-mono placeholder-zinc-600 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-zinc-500'
                        : 'border-white/15 focus:border-white'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <span className="text-[11px] font-mono text-zinc-400 mt-1 block">{errors.fullName}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {t.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-600 pointer-events-none" />
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#08080c] border pl-10 pr-4 py-3 text-xs text-white font-mono placeholder-zinc-600 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-zinc-500'
                        : 'border-white/15 focus:border-white'
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className="text-[11px] font-mono text-zinc-400 mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Studio or Link */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {t.studioLabel}
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-600 pointer-events-none" />
                  <input
                    type="text"
                    placeholder={t.studioPlaceholder}
                    value={studioOrLink}
                    onChange={(e) => setStudioOrLink(e.target.value)}
                    className="w-full bg-[#08080c] border border-white/15 pl-10 pr-4 py-3 text-xs text-white font-mono placeholder-zinc-600 focus:outline-none focus:border-white transition-all"
                  />
                </div>
              </div>

              {/* Inquiry Segment */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {t.inquiryLabel}
                </label>
                <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/15">
                  {[
                    { id: 'earlyAccess', label: t.inquiryOptions.earlyAccess },
                    { id: 'awsPilot', label: t.inquiryOptions.awsPilot },
                    { id: 'enterprise', label: t.inquiryOptions.enterprise },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInquiryType(item.id as any)}
                      className={`px-3 py-2.5 text-[11px] font-mono uppercase tracking-wider transition-all text-center whitespace-nowrap truncate ${
                        inquiryType === item.id
                          ? 'bg-white text-black font-bold'
                          : 'bg-[#050507] text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {t.messageLabel}
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder={t.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full bg-[#08080c] border p-4 text-xs text-white font-mono placeholder-zinc-600 focus:outline-none transition-all ${
                      errors.message
                        ? 'border-zinc-500'
                        : 'border-white/15 focus:border-white'
                    }`}
                  />
                </div>
                {errors.message && (
                  <span className="text-[11px] font-mono text-zinc-400 mt-1 block">{errors.message}</span>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 active:scale-[0.99] disabled:opacity-50 shadow-xl"
              >
                {isSubmitting ? (
                  <span>{t.submitting}</span>
                ) : (
                  <>
                    <span>{t.submitButton}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 pt-2 uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
                <span>{t.privacyNotice}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
