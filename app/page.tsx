'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Sparkles, ArrowRight, Mail, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Marsfront
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Floating Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = 200 + (i % 3) * 100;
          const left = (i * 17.3 + 10) % 100;
          const top = (i * 23.7 + 15) % 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: i % 3 === 0
                  ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)'
                  : i % 3 === 1
                  ? 'linear-gradient(45deg, #06B6D4, #3B82F6)'
                  : 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + (i % 3) * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/30 rounded-full px-4 py-2 mb-8">
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Pioneering AI Innovation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">AI-First</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build intelligent systems that transform how businesses operate,
            combining cutting-edge AI with robust engineering to deliver scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Solutions <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-50"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown size={24} className="text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and technology solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                description: 'Custom AI models, natural language processing, computer vision, and predictive analytics to automate complex business processes.',
                color: 'blue'
              },
              {
                icon: Zap,
                title: 'System Architecture',
                description: 'Scalable cloud infrastructure, microservices, API design, and performance optimization for mission-critical applications.',
                color: 'purple'
              },
              {
                icon: Sparkles,
                title: 'AI Integration',
                description: 'Seamless integration of AI capabilities into existing workflows, with comprehensive training and ongoing support.',
                color: 'cyan'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${
                  service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  service.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-cyan-500 to-cyan-600'
                }`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Building the Future with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a team of AI researchers, engineers, and innovators dedicated to creating
                intelligent solutions that push the boundaries of what's possible. Our approach
                combines deep technical expertise with practical business understanding.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">AI Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">25+</div>
                  <div className="text-gray-600">Global Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business with AI? Get in touch with our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">hello@marsfront.com</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                    >
                      <Icon size={20} className="text-gray-600" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Marsfront
          </div>
          <p className="text-gray-600 mb-6">AI-First Technology Solutions</p>
          <p className="text-gray-500 text-sm">
            © 2024 Marsfront Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}