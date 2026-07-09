'use client';

import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  // จำลองข้อมูลสไลเดอร์แบนเนอร์ด้านบน
  const [currentBanner] = useState("https://img5.pic.in.th/file/secure-sv1/RMB-logo.png");

  // ข้อมูลเมนูกลาง 9 ช่องตามรูปภาพของคุณ
  const gridMenus = [
    { id: 1, title: "กงล้อ", icon: "🎡", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 2, title: "เครดิตฟรี", icon: "🎰", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 3, title: "กรอกโค้ด", icon: "🎫", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 4, title: "รับแต้มฟรี", icon: "💎", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 5, title: "กล่องสุ่ม", icon: "🎁", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 6, title: "เช็คอิน", icon: "📅", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 7, title: "Ranking", icon: "🏆", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 8, title: "ชวนเพื่อน", icon: "👥", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
    { id: 9, title: "ร้านค้า", icon: "🛍️", color: "linear-gradient(135deg, #112614 0%, #071409 100%)" },
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
      <style jsx global>{`
        button, a { transition: all 0.15s ease-in-out; }
        button:active, a:active { transform: scale(0.96); }
        .grid-item:hover { border-color: #00e65b !important; box-shadow: 0 0 15px rgba(0, 230, 64, 0.2); }
      `}</style>

      <div style={{ width: '100%', maxWidth: '480px', paddingBottom: '120px', position: 'relative' }}>
        
        {/* --- HEADER NAVIGATION (แถบบนสุด) --- */}
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

        {/* --- MARQUEE ANNOUNCEMENT (ข้อความวิ่ง) --- */}
        <div style={{ background: '#000', padding: '6px 12px', fontSize: '0.8rem', color: '#a3ffb4', borderY: '1px solid rgba(0,230,64,0.2)', display: 'flex', gap: '10px', overflow: 'hidden' }}>
          <span style={{ color: '#ffcc00', fontWeight: 'bold', shrink: 0 }}>ประกาศ :</span>
          <marquee scrollamount="4">ยินดีต้อนรับสู่ NEKO789 ระบบฝาก-ถอน อัตโนมัติ รวดเร็ว ทันใจ บริการท่านตลอด 24 ชั่วโมง 👋</marquee>
        </div>

        {/* --- BANNER SLIDER (พื้นที่แบนเนอร์ดีลเด็ด) --- */}
        <div style={{ padding: '12px' }}>
          <div style={{ width: '100%', height: '180px', borderRadius: '12px', background: 'linear-gradient(135deg, #07200f 0%, #030d06 100%)', border: '1px solid rgba(0, 230, 64, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
            <span style={{ position: 'absolute', top: 10, left: 12, background: 'rgba(255,0,0,0.85)', color: '#fff', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>PROMOTION</span>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffcc00', textAlign: 'center', margin: '0 0 4px 0' }}>ดีลเด็ด คืนค่าคอมมิชชั่น</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: '8px', border: '1px solid #00e65b', textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', display: 'block', color: '#aaa' }}>สล็อตคืนสูงสุด</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00e65b' }}>2.0%</span>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: '8px', border: '1px solid #00e65b', textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', display: 'block', color: '#aaa' }}>บาคาร่าคืนสูงสุด</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00e65b' }}>1.0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- GRID MENUS 9 CHANNELS (ปุ่มเมนู 9 ช่อง) --- */}
        <div style={{ padding: '0 12px 20px 12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {gridMenus.map((menu) => (
              <a 
                href="https://neko789.top/wallet" 
                target="_blank" 
                rel="noopener noreferrer"
                key={menu.id}
                className="grid-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '110px',
                  borderRadius: '14px',
                  background: menu.color,
                  border: '1px solid rgba(0, 230, 64, 0.15)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05)'
                }}
              >
                <span style={{ fontSize: '2.2rem', marginBottom: '8px', display: 'block', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
                  {menu.icon}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600 }}>
                  {menu.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* --- FLOATING FLOATING ACTION BUTTONS (ปุ่ม Line & Telegram ขวาล่างตามรูป) --- */}
        <div style={{ position: 'fixed', bottom: '90px', right: 'calc(50% - 225px)', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 99, paddingRight: '16px' }}>
          <a href="https://lin.ee/SjNoHwy" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#06c755', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>L</a>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#229ED9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>T</a>
        </div>

        {/* --- FOOTER NAVIGATION (เมนูด้านล่างสุด 4 ปุ่มหลักแบบในรูป) --- */}
        <div style={{
          position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: '480px',
          backgroundColor: '#040d06', borderTop: '2px solid rgba(0, 230, 64, 0.3)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '12px 0 16px 0', zIndex: 100,
          boxShadow: '0 -10px 30px rgba(0,0,0,0.8)'
        }}>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>🏠</span>หน้าหลัก
          </a>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>💵</span>ฝากเงิน
          </a>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>💰</span>ถอนเงิน
          </a>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.75rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>🔄</span>รับเงินคืน
          </a>
        </div>

      </div>
    </main>
  );
}
