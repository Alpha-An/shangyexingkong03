import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Calendar, Star, Wind, Coffee, ArrowRight, ChevronDown, Tent } from 'lucide-react';

const CampfireSVG = () => (
  <div className="relative w-24 h-24">
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7b00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff7b00" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Glow */}
      <circle cx="50" cy="70" r="40" fill="url(#glow)" className="flame-main" />
      
      {/* Logs */}
      <path d="M30,85 L70,75 L72,80 L32,90 Z" fill="#3e2723" rx="2" />
      <path d="M70,85 L30,75 L28,80 L68,90 Z" fill="#4e342e" rx="2" />
      
      {/* Flames */}
      <path 
        className="flame-main"
        d="M50,30 Q65,60 50,80 Q35,60 50,30 Z" 
        fill="#ff5722" 
      />
      <path 
        className="flame-inner"
        d="M50,45 Q58,65 50,80 Q42,65 50,45 Z" 
        fill="#ffc107" 
      />
      <path 
        className="flame-inner"
        style={{ animationDuration: '1.2s' }}
        d="M50,60 Q54,72 50,80 Q46,72 50,60 Z" 
        fill="#fff" 
      />
    </svg>
    {/* Sparks */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className={`spark absolute bottom-8 w-1 h-1 bg-yellow-300 rounded-full`}
          style={{ 
            left: `${40 + Math.random() * 20}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1.5 + Math.random()}s`
          }}
        />
      ))}
    </div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f4f1eb] selection:bg-[#ff7b00] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tent className="w-6 h-6 text-[#ff7b00]" />
            <span className="font-serif text-xl tracking-wider">山野星空</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase opacity-80">
            <a href="#experience" className="hover:text-[#ff7b00] transition-colors">体验</a>
            <a href="#amenities" className="hover:text-[#ff7b00] transition-colors">设施</a>
            <a href="#booking" className="hover:text-[#ff7b00] transition-colors">预定</a>
          </div>
          <button className="bg-[#ff7b00] hover:bg-[#e66e00] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all hover:shadow-[0_0_20px_rgba(255,123,0,0.4)]">
            立即预定
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0c10]/50 to-[#0a0c10] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2000&auto=format&fit=crop" 
            alt="Starry night sky over forest" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-[#ff7b00] tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-medium">
              逃离城市喧嚣 · 隐入山野星辰
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              在星空下<br />
              <span className="italic font-light text-white/90">重拾内心的宁静</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              距离城市仅两小时车程，为您提供极致奢华的野奢露营体验。在原始森林中醒来，在篝火旁仰望银河。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-white text-[#0a0c10] rounded-full font-medium tracking-wide overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  开启周末逃离计划
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>浙江省 · 莫干山深处</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <CampfireSVG />
          <div className="animate-bounce text-white/30">
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                野奢之境，<br />
                <span className="text-white/50 italic">不妥协的自然体验</span>
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  我们相信，亲近自然并不意味着放弃舒适。山野星空高端露营地将五星级酒店的奢华设施完美融入原始森林之中。
                </p>
                <p>
                  每一顶定制的野奢帐篷都配备了独立卫浴、地暖系统与全景天窗。躺在柔软的定制床垫上，抬头便是璀璨银河。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-serif text-[#ff7b00] mb-2">15</div>
                  <div className="text-sm text-white/50 tracking-wider">顶独立野奢帐篷</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-[#ff7b00] mb-2">360°</div>
                  <div className="text-sm text-white/50 tracking-wider">全景森林环绕</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Glamping Tent" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#1a2e25] p-8 rounded-2xl border border-white/10 shadow-2xl max-w-xs hidden md:block">
                <Star className="w-8 h-8 text-[#ff7b00] mb-4" />
                <p className="font-serif text-lg italic">"这是我体验过最完美的周末逃离，星空美得让人窒息。"</p>
                <p className="text-sm text-white/50 mt-4">— Vogue Travel</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="amenities" className="py-32 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">专属体验</h2>
            <p className="text-white/50 tracking-widest uppercase text-sm">Curated Experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: "星空观测",
                desc: "配备专业级天文望远镜，在无光污染的暗夜公园级环境中探索宇宙奥秘。"
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: "荒野私宴",
                desc: "米其林星级主厨主理，采用当地当季新鲜食材，在篝火旁享用精致晚餐。"
              },
              {
                icon: <Wind className="w-6 h-6" />,
                title: "森林颂钵",
                desc: "清晨在百年古树下进行颂钵音疗与瑜伽，让身心在自然中彻底重置。"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff7b00]/20 flex items-center justify-center text-[#ff7b00] mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Image Break */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1525811902638-1537c503ffe3?q=80&w=2000&auto=format&fit=crop" 
          alt="Campfire at night" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-4">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">夜幕降临，故事开始</h2>
          <p className="text-xl text-white/80 font-light italic">围绕篝火，分享微醺的晚风与星光</p>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10] to-[#1a2e25]/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <CampfireSVG />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">准备好逃离了吗？</h2>
          <p className="text-white/60 text-lg mb-12 font-light">
            本周末仅余 <span className="text-[#ff7b00] font-medium text-xl">2</span> 顶星空帐篷。立即预定，开启您的专属野奢之旅。
          </p>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-full flex flex-col sm:flex-row items-center max-w-2xl mx-auto">
            <div className="flex-1 flex items-center px-6 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-white/10 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-white/40 mr-3" />
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider">入住日期</div>
                <div className="text-sm">2026-03-20</div>
              </div>
            </div>
            <div className="flex-1 flex items-center px-6 py-4 sm:py-0 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-white/40 mr-3" />
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider">退房日期</div>
                <div className="text-sm">2026-03-22</div>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-[#ff7b00] hover:bg-[#e66e00] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors m-1">
              查看空房
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0c10] text-white/40 text-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Tent className="w-5 h-5" />
          <span className="font-serif text-lg text-white/80">山野星空</span>
        </div>
        <p>© 2026 山野星空高端露营地. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          <a href="#" className="hover:text-white transition-colors">服务条款</a>
          <a href="#" className="hover:text-white transition-colors">联系我们</a>
        </div>
      </footer>
    </div>
  );
}
