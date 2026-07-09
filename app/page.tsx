'use client';

import { useState } from "react";

export default function Home() {
  const gridMenus = [
    { id: 1, title: "กงล้อ", icon: "🎡" },
    { id: 2, title: "เครดิตฟรี", icon: "🎰" },
    { id: 3, title: "กรอกโค้ด", icon: "🎫" },
    { id: 4, title: "รับแต้มฟรี", icon: "💎" },
    { id: 5, title: "กล่องสุ่ม", icon: "🎁" },
    { id: 6, title: "เช็คอิน", icon: "📅" },
    { id: 7, title: "Ranking", icon: "🏆" },
    { id: 8, title: "ชวนเพื่อน", icon: "👥" },
    { id: 9, title: "ร้านค้า", icon: "🛍️" },
  ];

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      backgroundColor: '#030a05',
      backgroundImage: 'radial-gradient(circle at 50% 0%, #0e3a1a 0%, #05180b 50%, #020603 100%)',
      fontFamily: "sans-serif",
      overflowX: 'hidden',
      color: '#ffffff'
    }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: '480px', paddingBottom: '140px', position: 'relative' }}>
        
        {/* HEADER NAVIGATION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(2, 6, 3, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 900, color: '#00e65b', fontSize: '1.2rem', letterSpacing: '0.5px' }}>NEKO789</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #cc9933 0%, #996600 100%)', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '8px 16px', borderRadius: '20px', border: '1px solid #ffcc66' }}>
              เข้าสู่ระบบ
            </a>
            <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #00e65b 0%, #00802b 100%)', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '8px 16px', borderRadius: '20px', border: '1px solid #a3ffb4' }}>
              สมัครสมาชิก
            </a>
          </div>
        </div>

        {/* MARQUEE ANNOUNCEMENT */}
        <div style={{ background: '#000', padding: '6px 12px', fontSize: '0.8rem', color: '#a3ffb4', display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden', position: 'relative' }}>
          <span style={{ color: '#ffcc00', fontWeight: 'bold', flexShrink: 0, background: '#000', zIndex: 2, paddingRight: '5px' }}>ประกาศ :</span>
          <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
            <div className="marquee-text">
              ยินดีต้อนรับสู่ NEKO789 ระบบฝาก-ถอน อัตโนมัติ รวดเร็ว ทันใจ บริการท่านตลอด 24 ชั่วโมง 👋
            </div>
          </div>
        </div>

        {/* BANNER SLIDER */}
        <div style={{ padding: '12
