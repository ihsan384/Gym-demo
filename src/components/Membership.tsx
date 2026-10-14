import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/mockData';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" className="relative py-24 sm:py-32 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                MEMBERSHIP TIERS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              MEMBERSHIP<br />
              <span className="text-secondary-text">PLANS.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              Transparent local pricing with flexible terms. Choose a plan to enquire or speak with our team to arrange a walkthrough.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = !!plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm transition-colors ${
                  isPopular
                    ? 'bg-[#181818] border-2 border-accent lg:-translate-y-1'
                    : 'bg-card-bg border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Popular / Best Value Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 right-6 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm ${
                      isPopular
                        ? 'bg-accent text-black font-semibold'
                        : 'bg-white/15 text-white border border-white/20'
                    }`}
                  >
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="font-display font-bold text-2xl uppercase text-white tracking-wide mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-secondary-text mb-6">
                    {plan.duration}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-secondary-text text-sm font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-2">
                      INCLUDED IN PLAN:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <div
                          className={`p-1 rounded-sm shrink-0 mt-0.5 ${
                            isPopular ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Choose Plan CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 font-display font-bold uppercase tracking-wider text-xs rounded-sm transition-colors flex items-center justify-center gap-2 group ${
                      isPopular
                        ? 'bg-accent hover:bg-accent-hover text-black'
                        : 'bg-[#242424] hover:bg-white hover:text-black text-white border border-white/10'
                    }`}
                  >
                    <span>SELECT PLAN</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Illustrative Pricing Notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-secondary-text/80 leading-relaxed">
            * Note: Membership rates shown above are illustrative sample tiers. Actual package fees, admission terms, and promotional discounts may vary. Please contact our desk for current offers and enrollment details.
          </p>
        </div>
      </div>
    </section>
  );
};
