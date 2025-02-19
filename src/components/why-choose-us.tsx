"use client"
import { motion } from 'framer-motion';

const features = [
  { title: "AI + Human Review", description: "High-quality content with AI efficiency and human creativity.", icon: "🤖" },
  { title: "Save 20+ Hours Monthly", description: "Automate your content creation and focus on growing your business.", icon: "⏳" },
  { title: "Optimized for Engagement", description: "Content tailored to maximize audience interaction and conversion.", icon: "📈" },
  { title: "Personalized for Your Niche", description: "Custom content that fits your industry and brand voice.", icon: "🎯" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Us?
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
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
              {feature.icon}
            </motion.span>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
