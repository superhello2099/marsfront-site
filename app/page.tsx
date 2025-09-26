'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Zap, Sparkles, ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 z-50 shadow-lg shadow-black/[0.03] dark:shadow-white/[0.03]"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight"
          >
            MARSFRONT
          </motion.div>
          <div className="hidden md:flex space-x-10">
            {['Work', 'Team', 'Contact'].map((item, index) => (
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
              <span className="text-sm font-semibold text-blue-700 tracking-wide">Boutique AI Studio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-900 block"
              >
                AI Intelligence
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent block"
              >
                Crafted to Perfection
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We architect the impossible. Engineer the extraordinary.
            <br />
            Every line of code meticulously crafted by masters of their domain.
            <br className="hidden md:block" />
            Where visionary ideas meet uncompromising execution.
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
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-500 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Explore Our Mastery
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
              Commission Excellence
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
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={28} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="work" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Masterworks in Code</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Each system is a symphony of intelligence, precision-engineered by virtuosos who've dedicated their lives to the art of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Brain,
                title: 'Neural Architectures',
                description: 'We sculpt minds from silicon and mathematics. Each neural network is a masterpiece of cognitive engineering, designed to transcend the boundaries of machine intelligence.',
                color: 'blue',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'Language Mastery',
                description: 'Our models don\'t just process language—they understand nuance, context, and the subtle art of human communication. Poetry meets precision in every token.',
                color: 'purple',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: Sparkles,
                title: 'Infinite Scale',
                description: 'Infrastructure that bends to your will, not your wallet. We architect systems that gracefully handle explosive growth while maintaining surgical precision.',
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
      <section id="team" className="relative py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
                The Architects of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Consciousness</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                We are the alchemists of the digital age, transmuting raw computation into conscious intelligence.
                Our collective brings decades of mastery, forged in the crucibles of the world's most demanding challenges.
                Where others see complexity, we see symphony.
              </p>
              <div className="flex gap-12">
                {[
                  { number: 'Visionary', label: 'Leadership', color: 'text-blue-600' },
                  { number: 'Surgical', label: 'Precision', color: 'text-purple-600' },
                  { number: 'Obsessive', label: 'Excellence', color: 'text-cyan-600' }
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
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-cyan-50/80 p-8 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-[2rem] relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent z-10"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&crop=entropy&auto=format&q=80"
                    alt="AI Technology Innovation"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-[1.5rem]"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/10 rounded-[1.5rem]" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Summon the Extraordinary</h2>
            <p className="text-xl text-gray-600 font-light">
              Your vision deserves nothing less than perfection. Let us forge your digital destiny.
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
                <h3 className="text-3xl font-bold mb-6">Ready to transcend?</h3>
                <p className="text-xl text-gray-600 font-light mb-8">
                  The future belongs to those who dare to dream in code.
                </p>
                <div className="space-y-6">
                  <div className="text-lg text-gray-600 font-light">
                    <p className="mb-2">📍 New York, NY</p>
                    <p className="mb-6">Where digital dreams become intelligent reality.</p>
                  </div>
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80" style={{ perspective: '1000px' }}>
                {/* 3D Container */}
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 15, 0, -15, 0],
                  }}
                  transition={{
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative w-full h-full preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Main 3D Cube */}
                  <div className="relative w-64 h-64 mx-auto preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Front Face */}
                    <motion.div
                      whileHover={{ z: 20 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'translateZ(32px)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                          transition={{
                            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="text-4xl mb-4"
                        >
                          🧠
                        </motion.div>
                        <div className="text-lg font-bold">Neural</div>
                        <div className="text-sm opacity-80">Architecture</div>
                      </div>
                    </motion.div>

                    {/* Back Face */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 to-blue-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'translateZ(-32px) rotateY(180deg)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                          transition={{
                            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="text-4xl mb-4"
                        >
                          ⚡
                        </motion.div>
                        <div className="text-lg font-bold">Lightning</div>
                        <div className="text-sm opacity-80">Speed</div>
                      </div>
                    </motion.div>

                    {/* Right Face */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'rotateY(90deg) translateZ(32px)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
                          transition={{
                            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="text-4xl mb-4"
                        >
                          ✨
                        </motion.div>
                        <div className="text-lg font-bold">Magic</div>
                        <div className="text-sm opacity-80">Happens</div>
                      </div>
                    </motion.div>

                    {/* Left Face */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-teal-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'rotateY(-90deg) translateZ(32px)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 180, 270, 360] }}
                          transition={{
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                          }}
                          className="text-4xl mb-4"
                        >
                          🚀
                        </motion.div>
                        <div className="text-lg font-bold">Launch</div>
                        <div className="text-sm opacity-80">Ready</div>
                      </div>
                    </motion.div>

                    {/* Top Face */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'rotateX(90deg) translateZ(32px)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                          transition={{
                            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="text-4xl mb-4"
                        >
                          🎯
                        </motion.div>
                        <div className="text-lg font-bold">Precision</div>
                        <div className="text-sm opacity-80">Targeting</div>
                      </div>
                    </motion.div>

                    {/* Bottom Face */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-violet-700/90 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                      style={{ transform: 'rotateX(-90deg) translateZ(32px)' }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: -360, scale: [1.2, 0.9, 1.2] }}
                          transition={{
                            rotate: { duration: 9, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="text-4xl mb-4"
                        >
                          🔮
                        </motion.div>
                        <div className="text-lg font-bold">Future</div>
                        <div className="text-sm opacity-80">Vision</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Particles around cube */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      style={{
                        left: `${10 + (i * 45) % 90}%`,
                        top: `${15 + (i * 37) % 70}%`,
                      }}
                      animate={{
                        x: [0, 20, -10, 0],
                        y: [0, -15, 10, 0],
                        scale: [0.5, 1.2, 0.8, 0.5],
                        opacity: [0.3, 1, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Base Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
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
              MARSFRONT
            </div>
            <p className="text-gray-600 mb-8 font-light">Masters of Digital Intelligence</p>
            <p className="text-gray-500 text-sm font-light">
              © 2025 MARSFRONT INC. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}