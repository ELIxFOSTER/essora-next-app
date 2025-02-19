"use client"
import { motion } from 'framer-motion';

const benefits = [
  { title: "No More Writer’s Block", description: "AI generates high-quality content effortlessly.", icon: "🧠" },
  { title: "Save Time & Focus on Growth", description: "Spend less time writing and more on scaling your business.", icon: "⏳" },
  { title: "Boost Engagement & Sales", description: "Optimized content to increase audience interaction.", icon: "📈" },
  { title: "Customized for Your Niche", description: "Content tailored specifically to your industry.", icon: "🎯" },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Benefits of Our Service
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.span
              className="text-4xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              {benefit.icon}
            </motion.span>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}