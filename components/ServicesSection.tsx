
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
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`
                            px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300
                            ${activeTag === tag
                                ? 'bg-cyan-950/50 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                                : 'bg-black/20 border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300 hover:bg-white/5'
                            }
                        `}
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