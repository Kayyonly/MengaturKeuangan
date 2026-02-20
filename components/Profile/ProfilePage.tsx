'use client';
import { useState } from 'react';
import { Camera, Mail, Phone, Globe, MapPin, ChevronRight, User, Users, ExternalLink } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'channel'>('personal');

  return (
    <div className="flex flex-col h-full bg-background animate-in fade-in duration-300">
      
      {/* 1. Header Navigation */}
      <div className="px-6 pt-8 pb-4 flex justify-between items-center shrink-0">
        <button className="p-2 -ml-2 text-white hover:bg-white/10 rounded-full transition-colors">
          <ChevronRight className="rotate-180" size={24} />
        </button>
        <h1 className="text-lg font-semibold text-white">My Profile</h1>
        <button className="text-primary text-sm font-bold hover:text-[#cbe63d] transition-colors">
          Edit
        </button>
      </div>

      {/* 2. Avatar & Info Utama */}
      <div className="flex flex-col items-center mt-2 mb-8 shrink-0">
        <div className="relative">
          <div className="w-28 h-28 rounded-full border-2 border-zinc-800 overflow-hidden relative">
             <img 
               src="/profile.jpg" 
               alt="Profile"
               className="w-full h-full object-cover"
             />
          </div>
          <button className="absolute bottom-0 right-0 bg-card p-2 rounded-full border border-zinc-800 text-white hover:text-primary transition-colors shadow-lg">
             <Camera size={16} />
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-white mt-4">Kayy Official</h2>
        <p className="text-zinc-500 text-sm font-medium mb-1">Beginner Developer</p>
        <button className="text-primary text-xs font-bold hover:underline">
          Online
        </button>
      </div>

      {/* 3. Tab Switcher */}
      <div className="px-6 mb-6 shrink-0">
        <div className="bg-zinc-900/50 p-1 rounded-xl flex border border-zinc-800">
          <button
            onClick={() => setActiveTab('personal')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'personal' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('channel')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'channel' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            See Portfolio
          </button>
        </div>
      </div>

      {/* 4. Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32">
        
        {activeTab === 'personal' && (
          <div className="bg-card rounded-[24px] border border-zinc-800/50 overflow-hidden">
             <div className="p-5 border-b border-zinc-800/50 flex gap-4 items-center group hover:bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                   <Mail size={18} />
                </div>
                <div className="flex-1 overflow-hidden">
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                   <p className="text-sm text-white font-medium truncate">kenzprimebf@gmail.com</p>
                </div>
             </div>

             <div className="p-5 border-b border-zinc-800/50 flex gap-4 items-center group hover:bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                   <Phone size={18} />
                </div>
                <div>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                   <p className="text-sm text-white font-medium">+62 895 3915 39843</p>
                </div>
             </div>

             <div className="p-5 border-b border-zinc-800/50 flex gap-4 items-center group hover:bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                   <Globe size={18} />
                </div>
                <div>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Github</p>
                   <p className="text-sm text-white font-medium">github.com/kayyonly</p>
                </div>
             </div>

             <div className="p-5 flex gap-4 items-center group hover:bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                   <MapPin size={18} />
                </div>
                <div>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                   <p className="text-sm text-white font-medium">batam, Indonesia</p>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'channel' && (
          <div className="space-y-4">
             <div className="bg-card p-6 rounded-[24px] border border-zinc-800 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                 
                 <div className="w-16 h-16 bg-zinc-900 rounded-2xl mx-auto flex items-center justify-center mb-4 text-primary border border-zinc-800 shadow-lg relative z-10">
                    <Users size={32} />
                 </div>
                 
                 <h3 className="text-white font-bold text-lg mb-2 relative z-10">Kayy Official Portfolio</h3>
                 <p className="text-zinc-500 text-xs mb-6 px-4 leading-relaxed relative z-10">
                    Melihat project, pengalaman, dan karya-karya saya sebagai developer, serta kesempatan untuk berkolaborasi dan belajar bersama.
                 </p>
                 
                 {/* TOMBOL FIX */}
                 <button 
                    onClick={() => {
                      window.open('https://kayydev.netlify.app/', '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group-hover:border-primary/50 group-hover:text-primary cursor-pointer relative z-10"
                 >
                    <ExternalLink size={16} /> Lihat Sekarang
                 </button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
