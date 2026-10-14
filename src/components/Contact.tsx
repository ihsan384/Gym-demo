import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { BRAND, MEMBERSHIP_PLANS, PROGRAMS } from '../data/mockData';
import type { EnquiryFormData, FormErrors } from '../types';

interface ContactProps {
  initialPlan?: string;
  initialProgram?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialPlan = '', initialProgram = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    plan: initialPlan,
    program: initialProgram,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);



  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    // Phone validation (Indian 10-digit / standard international format)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!/^(?:\+?91)?[6-9]\d{9}$/.test(phoneClean) && phoneClean.length < 8) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 98765 43210).';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate authentic UI processing without saving anywhere
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 750);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      plan: '',
      program: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090909] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                ENQUIRY & LOCATION
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              YOUR NEXT CHAPTER<br />
              <span className="text-secondary-text">STARTS HERE.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              Have questions about training, facilities, or membership options? Send us an enquiry or visit our Punalur training facility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Facility Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-card-bg border border-white/10 rounded-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-6 font-mono">
                FACILITY CONTACT & LOCATION
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#222222] border border-white/10 rounded-sm text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      Location
                    </div>
                    <div className="text-white text-base font-medium mt-0.5 leading-snug">
                      {BRAND.locationFull}
                    </div>
                    <div className="mt-2.5">
                      <a
                        href={BRAND.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                      >
                        <span>GET DIRECTIONS (MAPS)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                  <div className="p-3 bg-[#222222] border border-white/10 rounded-sm text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      Phone Number
                    </div>
                    <div className="text-white text-base font-medium mt-0.5">
                      {BRAND.phoneDisplay}
                    </div>
                    <div className="mt-2.5">
                      <a
                        href={`tel:${BRAND.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/40 rounded-sm text-xs font-bold uppercase tracking-wider text-accent hover:bg-accent hover:text-black transition-all"
                      >
                        <span>CALL NOW</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                  <div className="p-3 bg-[#222222] border border-white/10 rounded-sm text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      Enquiry Email
                    </div>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-white text-base font-medium hover:text-accent transition-colors block mt-0.5"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                  <div className="p-3 bg-[#222222] border border-white/10 rounded-sm text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      Facility Hours
                    </div>
                    <div className="text-white text-sm font-medium mt-0.5">
                      {BRAND.hoursWeekday}
                    </div>
                    <div className="text-secondary-text text-sm font-normal">
                      {BRAND.hoursSunday}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fictional Details Notice */}
              <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-secondary-text/80">
                <span className="text-gray-300 font-semibold">* Note:</span> Contact phone and facility address are fictional placeholders for website preview purposes.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Frontend Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-card-bg border border-white/10 rounded-sm relative">
              <div className="mb-8 pb-4 border-b border-white/10">
                <h3 className="font-display font-bold text-2xl uppercase text-white tracking-wide">
                  MEMBERSHIP & TRAINING ENQUIRY
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  Fill out the form below to initiate your fitness inquiry.
                </p>
              </div>

              {/* Success Confirmation Banner */}
              {isSuccess ? (
                <div className="py-8 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="font-display font-bold text-2xl uppercase text-white tracking-wide">
                      ENQUIRY RECEIVED
                    </h4>
                    <p className="text-accent font-semibold text-sm">
                      Thank you for contacting Forge Fitness Club.
                    </p>
                    <p className="text-secondary-text text-xs leading-relaxed">
                      Your enquiry has been received. Our team will review your fitness goals and get in touch during club hours.
                    </p>
                  </div>

                  {/* Summary of submitted mock inputs */}
                  <div className="p-4 bg-[#141414] border border-white/10 rounded-sm text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-secondary-text">
                      Submitted Details:
                    </div>
                    <div className="text-white"><strong className="text-secondary-text">Name:</strong> {formData.fullName}</div>
                    <div className="text-white"><strong className="text-secondary-text">Contact:</strong> {formData.phone} / {formData.email}</div>
                    {formData.plan && <div className="text-white"><strong className="text-secondary-text">Plan:</strong> {formData.plan}</div>}
                    {formData.program && <div className="text-white"><strong className="text-secondary-text">Program:</strong> {formData.program}</div>}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-3 bg-[#242424] hover:bg-accent hover:text-black text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-white/10 transition-colors"
                    >
                      SEND ANOTHER ENQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Menon"
                      className={`w-full px-4 py-3.5 bg-[#141414] border ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-accent'
                      } rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className={`w-full px-4 py-3.5 bg-[#141414] border ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-accent'
                        } rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3.5 bg-[#141414] border ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-accent'
                        } rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Plan & Program Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Membership Plan */}
                    <div>
                      <label htmlFor="plan" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                        Interested Membership
                      </label>
                      <select
                        id="plan"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/15 focus:border-accent rounded-sm text-white text-sm focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a Plan (Optional)</option>
                        {MEMBERSHIP_PLANS.map((plan) => (
                          <option key={plan.id} value={plan.name} className="bg-card-bg text-white">
                            {plan.name} ({plan.price} {plan.period})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Program */}
                    <div>
                      <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                        Preferred Training Program
                      </label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#141414] border border-white/15 focus:border-accent rounded-sm text-white text-sm focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a Program (Optional)</option>
                        {PROGRAMS.map((prog) => (
                          <option key={prog.id} value={prog.name} className="bg-card-bg text-white">
                            {prog.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-primary-text mb-2">
                      Message / Goals
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness background, preferred workout timings, or questions..."
                      className="w-full px-4 py-3.5 bg-[#141414] border border-white/15 focus:border-accent rounded-sm text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-accent hover:bg-accent-hover text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>PROCESSING ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT ENQUIRY</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy note */}
                  <div className="text-[11px] text-secondary-text/80 text-center">
                    * Privacy notice: Your information is treated confidentially and used solely to respond to your fitness enquiry.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
