'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Zap, Sparkles, ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 z-50 shadow-lg shadow-black/[0.03]"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight"
          >
            Marsfront
          </motion.div>
          <div className="hidden md:flex space-x-10">
            {['Services', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Floating Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = 150 + (i % 4) * 80;
          const left = (i * 17.3 + 5) % 95;
          const top = (i * 23.7 + 10) % 90;
          const delay = i * 0.8;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: i % 4 === 0
                  ? 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 70%, transparent 100%)'
                  : i % 4 === 1
                  ? 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.02) 70%, transparent 100%)'
                  : i % 4 === 2
                  ? 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.015) 70%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, rgba(236,72,153,0.01) 70%, transparent 100%)',
                filter: 'blur(1px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15 + (i % 3) * 5,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.div style={{ y, opacity }} className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/40 rounded-full px-5 py-3 mb-10 shadow-lg shadow-blue-500/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} className="text-blue-600" />
              </motion.div>
              <span className="text-sm font-semibold text-blue-700 tracking-wide">Pioneering AI Innovation</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-900 block"
              >
                AI-First
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent block"
              >
                Technology
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent block"
              >
                Solutions
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We architect intelligent systems that fundamentally transform how enterprises operate,
            <br className="hidden md:block" />
            seamlessly integrating cutting-edge AI with battle-tested engineering excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-500 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Explore Solutions
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <ArrowRight size={22} />
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50/50 text-gray-700 hover:text-blue-700 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={28} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive AI and technology solutions meticulously designed to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                description: 'Custom neural networks, advanced NLP models, computer vision systems, and predictive analytics engineered to automate and optimize your most complex business processes.',
                color: 'blue',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'System Architecture',
                description: 'Enterprise-grade cloud infrastructure, microservices ecosystems, API orchestration, and performance optimization for mission-critical applications at scale.',
                color: 'purple',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: Sparkles,
                title: 'AI Integration',
                description: 'Seamless integration of AI capabilities into existing workflows with comprehensive team training, change management, and ongoing technical support.',
                color: 'cyan',
                gradient: 'from-cyan-500 to-cyan-600'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 hover:border-white/60"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <service.icon size={32} className="text-white" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
                Crafting the Future
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> with AI</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                We are a collective of AI researchers, software architects, and digital innovators united by a singular vision:
                creating intelligent solutions that redefine the boundaries of technological possibility. Our methodology harmoniously
                blends cutting-edge research with pragmatic business acumen.
              </p>
              <div className="flex gap-12">
                {[
                  { number: '5+', label: 'Years of Innovation', color: 'text-blue-600' },
                  { number: '50+', label: 'AI Projects Delivered', color: 'text-purple-600' },
                  { number: '25+', label: 'Global Partnerships', color: 'text-cyan-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className={`text-4xl font-bold ${stat.color} mb-3`}>{stat.number}</div>
                    <div className="text-gray-600 font-light">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-cyan-50/80 p-12 backdrop-blur-sm shadow-2xl">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
                  />
                  <div className="text-8xl">🚀</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Let's Build Something Extraordinary</h2>
            <p className="text-xl text-gray-600 font-light">
              Ready to revolutionize your business with AI? Connect with our innovation team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-xl text-gray-600 font-light mb-8">
                  Let's discuss how AI can transform your business.
                </p>
                <motion.a
                  href="mailto:hello@marsfront.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} strokeWidth={1.5} />
                  hello@marsfront.com
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {[
                { type: 'text', placeholder: 'Your Name', value: formData.name, key: 'name' },
                { type: 'email', placeholder: 'Your Email', value: formData.email, key: 'email' }
              ].map((field) => (
                <div key={field.key}>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full px-6 py-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-xl font-light"
                    required
                  />
                </div>
              ))}
              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Tell us about your vision and how we can bring it to life"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-xl resize-none font-light"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white py-5 rounded-2xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/30"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200/50 py-16 px-6 bg-gradient-to-t from-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 tracking-tight">
              Marsfront
            </div>
            <p className="text-gray-600 mb-8 font-light">AI-First Technology Solutions</p>
            <p className="text-gray-500 text-sm font-light">
              © 2024 Marsfront Inc. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}