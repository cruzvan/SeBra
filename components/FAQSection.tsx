

import React from 'react';
import InteractiveCard from './InteractiveCard';

const FAQSection: React.FC = () => {
  const faqs = [
    { 
      q: "¿Trabajan con Startups?", 
      a: "Sí, nos encanta la energía de las empresas en etapa temprana. Tenemos paquetes especiales diseñados para escalar su identidad visual rápidamente." 
    },
    { 
      q: "¿Cuáles son sus tiempos de entrega?", 
      a: "Varía según el proyecto. Una identidad de marca toma aproximadamente 3-4 semanas, mientras que una experiencia web completa puede tomar de 8 a 12 semanas." 
    },
    { 
      q: "¿Ofrecen soporte post-lanzamiento?", 
      a: "Absolutamente. Ofrecemos paquetes de mantenimiento (retainers) para asegurar que sus productos digitales se mantengan frescos, seguros y actualizados." 
    },
    { 
      q: "¿Trabajan remoto o presencial?", 
      a: "Somos una agencia 'Remote-First' con hubs en ciudades clave. Colaboramos con clientes globalmente utilizando herramientas asíncronas de vanguardia." 
    },
    { 
      q: "¿Cómo es su proceso de pago?", 
      a: "Generalmente trabajamos con un 50% de anticipo para reservar el cronograma y el 50% restante contra entrega final aprobada." 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-4">Preguntas Frecuentes</h2>
        <p className="text-gray-400 font-mono">Lo que necesitas saber antes de empezar</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {faqs.map((faq, idx) => (
           <InteractiveCard key={idx} rounded="rounded-3xl" className="bg-gray-900/70 md:bg-gray-900/40 md:backdrop-blur-md p-8 rounded-3xl border border-white/10 md:hover:bg-gray-800/60 transition-colors cursor-default">
              <h3 className="text-cyan-300 font-display text-lg mb-3 tracking-wide">{faq.q}</h3>
              <p className="text-gray-300 font-light leading-relaxed">{faq.a}</p>
           </InteractiveCard>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;