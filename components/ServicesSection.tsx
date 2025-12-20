
import React, { useState, useMemo } from 'react';
import { Service } from '../types';
import { servicesContent } from '../content';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesSectionProps {
    onServiceSelect: (service: Service) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceSelect }) => {
    const [activeTag, setActiveTag] = useState<string>('Todos');

    const tags = useMemo(() => {
        const requestedTags = ["Video", "3D", "Audio", "Marketing", "Project Management"];
        return ['Todos', ...requestedTags];
    }, []);

    const filteredServices = useMemo(() => {
        if (activeTag === 'Todos') {
            return servicesContent;
        }
        return servicesContent.filter(service => service.tags?.includes(activeTag));
    }, [activeTag]);

    const shadowColors = ['cyan', 'indigo', 'blue', 'rose', 'pink', 'fuchsia', 'sky'];

    return (
        <div className="pt-4 pb-16">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTag === tag
                                ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                                : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-transparent'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <ServiceCard
                                service={service}
                                onSelect={onServiceSelect}
                                shadowColor={shadowColors[index % shadowColors.length]}
                                index={index}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ServicesSection;