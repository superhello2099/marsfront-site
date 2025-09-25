'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Rocket, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Stars */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent mb-6">
              Marsfront
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            探索科技前沿，构建数字未来
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-red-300 mb-12"
          >
            您的AI与IT技术合作伙伴
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            开始探索 <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">我们的服务</h2>
            <p className="text-xl text-gray-400">前沿技术，无限可能</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI 智能解决方案',
                description: '机器学习、深度学习、自然语言处理，为您的业务注入智能化动力',
                color: 'from-blue-600 to-blue-400'
              },
              {
                icon: Code,
                title: 'IT 系统开发',
                description: '全栈开发、云计算、微服务架构，构建稳定可靠的技术基础设施',
                color: 'from-green-600 to-green-400'
              },
              {
                icon: Rocket,
                title: '技术咨询服务',
                description: '数字化转型、技术架构设计、性能优化，助力企业技术升级',
                color: 'from-red-600 to-red-400'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">关于 Marsfront</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              我们致力于将最前沿的AI技术与传统IT服务完美融合，为企业提供智能化、高效率的技术解决方案。
              从概念到实现，从架构到优化，我们是您数字化转型路上最可靠的技术伙伴。
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '50+', label: '成功项目' },
                { number: '25+', label: '合作客户' },
                { number: '5+', label: '年行业经验' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h2>
            <p className="text-xl text-gray-400">开启您的智能化之旅</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">邮箱</h3>
                  <p className="text-gray-400">contact@marsfront.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">电话</h3>
                  <p className="text-gray-400">+86 138 0013 8000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">地址</h3>
                  <p className="text-gray-400">北京市朝阳区科技园区</p>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                {[Github, Linkedin, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-400 transition-all duration-300"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="您的姓名"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="您的邮箱"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="您的消息"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-red-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                发送消息
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent mb-4">
            Marsfront
          </div>
          <p className="text-gray-400 mb-6">探索科技前沿，构建数字未来</p>
          <p className="text-gray-500 text-sm">
            © 2024 Marsfront Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}