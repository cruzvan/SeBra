import React from 'react';
import { motion } from 'framer-motion';
import { plansContent } from '../content';
import InteractiveCard from './InteractiveCard';

const PricingSection: React.FC = () => {
    // Helper function to get color classes based on the plan color
    const getColorClasses = (color: string) => {
        switch (color) {
            case 'emerald':
                return {
                    border: 'border-emerald-500/50',
                    text: 'text-emerald-400',
                    highlight: 'text-emerald-300',
                    buttonHover: 'hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300',
                    buttonGlow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
                    buttonBorder: 'group-hover:border-emerald-500/50'
                };
            case 'purple':
                return {
                    border: 'border-purple-500/50',
                    text: 'text-purple-400',
                    highlight: 'text-purple-300',
                    buttonHover: 'hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-300',
                    buttonGlow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
                    buttonBorder: 'group-hover:border-purple-500/50'
                };
            case 'orange':
                return {
                    border: 'border-orange-500/50',
                    text: 'text-orange-400',
                    highlight: 'text-orange-300',
                    buttonHover: 'hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-300',
                    buttonGlow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
                    buttonBorder: 'group-hover:border-orange-500/50'
                };
            default:
                return {
                    border: 'border-gray-500/50',
                    text: 'text-gray-400',
                    highlight: 'text-white',
                    buttonHover: 'hover:border-gray-400',
                    buttonGlow: '',
                    buttonBorder: ''
                };
        }
    };

    return (
        <div className="py-20 px-4">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-3xl md:text-5xl font-display uppercase tracking-tight md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-4">
                    Suscripciones
                </h2>
                <p className="text-xl text-gray-400 font-light">
                    Para artistas musicales que buscan profesionalizar su carrera
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[2000px] mx-auto">
                {plansContent.map((plan, index) => {
                    const colors = getColorClasses(plan.color);
                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <InteractiveCard
                                rounded="rounded-[2.5rem]"
                                className={`bg-gray-900/60 backdrop-blur-md border border-white/5 ${colors.border} p-8 flex flex-col h-full shadow-2xl transition-colors duration-500 rounded-[2.5rem]`}
                            >
                                {/* Title & Price Header */}
                                <div className="text-center mb-8 pb-8 border-b border-white/10">
                                    <h3 className={`text-3xl font-display uppercase tracking-widest mb-4 ${colors.text}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="relative inline-block">
                                        <span className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                                            ${plan.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-4 flex-grow font-light text-gray-300 mb-8">
                                    {plan.features.map((feature, i) => {
                                        const isHighlighted = feature.isHighlighted;
                                        return (
                                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isHighlighted ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-gray-600'}`}></span>
                                                <span className={`${isHighlighted ? 'text-amber-400 font-medium' : 'text-gray-300'}`}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Button */}
                                <div className="mt-auto">
                                    <a
                                        href="mailto:contact@sebra.com"
                                        className={`
                                            block w-full py-4 text-center rounded-xl border border-white/10 bg-white/5
                                            uppercase tracking-widest text-xs font-bold text-gray-300
                                            transition-all duration-300
                                            ${colors.buttonHover}
                                            ${colors.buttonGlow}
                                            ${colors.buttonBorder}
                                            active:scale-95 active:bg-white/10
                                        `}
                                    >
                                        Solicitar Plan
                                    </a>
                                </div>
                            </InteractiveCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default PricingSection;
