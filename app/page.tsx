'use client';

import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [liveStats] = useState({
    homeTeam: "Torino",
    awayTeam: "Juventus",
    scoreStr: "1 - 2",
    time: "75' Min",
    h_win: 15,
    a_win: 85
  });

  const [tonightRows] = useState([
    { time: "22:00", match: "Liverpool vs Arsenal", pick: "สูง 2.5 👑" },
    { time: "02:00", match: "Real Madrid vs Barca", pick: "ต่อ มาดริด ⚡" },
    { time: "00:30", match: "Chelsea vs City", pick: "ต่ำ 3.0 💎" },
  ]);

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '30px 0', 
      backgroundColor: '#020604',
      backgroundImage: 'radial-gradient(circle at 50% 25%, #0a2912 0%, #06120a 60%, #020604 100%)',
      fontFamily: "sans-serif",
      overflowX: 'hidden'
    }}>
      {/* เพิ่ม CSS พื้นฐานสำหรับ Effect การกดลิงก์ให้นุ่มนวลขึ้น */}
      <style jsx global>{`
        a {
          transition: all 0.2s ease-in-out;
        }
        a:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        a:active {
          transform: translateY(1px);
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: '480px', padding: '24px', paddingBottom: '140px' }}>
        
        {/* --- LOGO & HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ width: 95, height: 'auto', display: 'inline-block', marginBottom: '12px' }}>
            <Image
              src="https://img5.pic.in.th/file/secure-sv1/RMB-logo.png"
              alt="Logo"
              width={95}
              height={95}
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 25px rgba(0, 230, 64, 0.5))' }}
              unoptimized
            />
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', margin: '10px 0 6px 0', letterSpacing: '1px', textShadow: '0 0 30px rgba(0, 230, 64, 0.4)' }}>
            {"NEKO 789"}
          </h1>
          <p style={{ color: '#00e65b', fontSize: '1rem', margin: 0, fontWeight: 700, letterSpacing: '0.5px', textShadow: '0 0 10px rgba(0,230,64,0.3)' }}>
            {"ระบบสแกนสถิติฟุตบอลด้วยระบบ AI Realtime"}
          </p>
        </div>

        {/* --- NAVIGATION BUTTONS --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '35px' }}>
          {/* ปุ่มหลัก: ชี้ไปที่ NEKO 789 Wallet */}
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '1.15rem', fontWeight: 800, height: '54px', borderRadius: '12px', background: 'linear-gradient(135deg, #a3ffb4 0%, #00e65b 50%, #00802b 100%)', color: '#020604', border: '1px solid #a3ffb4', boxShadow: '0 0 20px rgba(0, 230, 64, 0.4)' }}>
            {"⚽ ทางเข้าเว็บหลัก NEKO 789"}
          </a>
          
          {/* ปุ่มไลน์ใหม่ */}
          <a href="https://lin.ee/SjNoHwy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '1.05rem', fontWeight: 700, height: '52px', borderRadius: '12px', background: '#050c07', color: '#ffffff', border: '1px solid rgba(0, 230, 64, 0.4)', boxShadow: '0 0 15px rgba(0, 230, 64, 0.15)' }}>
            {"💬 ติดต่อสอบถาม (Line)"}
          </a>
        </div>

        {/* --- LIVE STATISTICS CARD --- */}
        <div style={{ padding: '26px 22px', marginBottom: '25px', borderRadius: '16px', background: 'rgba(5, 12, 8, 0.85)', border: '1px solid rgba(0, 230, 64, 0.25)', backdropFilter: 'blur(15px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
            <span style={{ background: 'rgba(0, 230, 64, 0.15)', border: '1px solid #00e65b', color: '#a3ffb4', padding: '5px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px' }}>
              {"● LIVE "}{liveStats.time}
            </span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', flex: 1, textAlign: 'center' }}>
              {liveStats.homeTeam}
            </div>
            <div style={{ fontSize: '3.4rem', fontWeight: 900, color: '#00e65b', flex: 1, textAlign: 'center', letterSpacing: '2px', textShadow: '0 0 25px rgba(0,230,64,0.95)' }}>
              {liveStats.scoreStr}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', flex: 1, textAlign: 'center' }}>
              {liveStats.awayTeam}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#a0aec0', fontWeight: 700, marginBottom: '10px', padding: '0 4px' }}>
            <span>{"โอกาสเจ้าบ้าน "}{liveStats.h_win}{"%"}</span>
            <span>{"โอกาสทีมเยือน "}{liveStats.a_win}{"%"}</span>
          </div>

          {/* ปรับให้ใช้ flex แตกสัดส่วนตามตัวเลข เพื่อความแม่นยำในการแสดงผลหลอดสถิติ */}
          <div style={{ height: '10px', backgroundColor: '#030a05', borderRadius: '999px', overflow: 'hidden', display: 'flex', boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.6)' }}>
            <div style={{ background: 'linear-gradient(90deg, #00591e, #00e65b)', height: '100%', flex: liveStats.h_win }}></div>
            <div style={{ background: 'linear-gradient(90deg, #0044ff, #00f0ff)', height: '100%', flex: liveStats.a_win, boxShadow: '0 0 12px #00f0ff' }}></div>
          </div>
        </div>

        {/* --- PREDICTIONS TABLE CARD --- */}
        <div style={{ padding: '24px 20px', marginBottom: '25px', borderRadius: '16px', overflow: 'hidden', background: 'rgba(5, 12, 8, 0.85)', border: '1px solid rgba(0, 230, 64, 0.2)', backdropFilter: 'blur(15px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', color: '#a3ffb4', fontWeight: 800, borderLeft: '4px solid #00e65b', paddingLeft: '12px', letterSpacing: '0.5px' }}>
            {"🏆 ทรรศนะเน้นๆ วันนี้"}
          </h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0, 230, 64, 0.3)' }}>
                  <th style={{ color: '#a3ffb4', fontSize: '0.9rem', padding: '12px 8px', textAlign: 'left', fontWeight: 800 }}>{"เวลา"}</th>
                  <th style={{ color: '#a3ffb4', fontSize: '0.9rem', padding: '12px 8px', textAlign: 'left', fontWeight: 800 }}>{"คู่แข่งขัน"}</th>
                  <th style={{ color: '#a3ffb4', fontSize: '0.9rem', padding: '12px 8px', textAlign: 'right', fontWeight: 800 }}>{"ทรรศนะ"}</th>
                </tr>
              </thead>
              <tbody>
                {tonightRows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: '16px 8px', borderBottom: '1px solid #101f14', fontSize: '0.95rem', color: '#a0aec0', fontWeight: 600 }}>{row.time}</td>
                    <td style={{ padding: '16px 8px', borderBottom: '1px solid #101f14', fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>{row.match}</td>
                    <td style={{ padding: '16px 8px', borderBottom: '1px solid #101f14', fontSize: '1.05rem', color: '#00e65b', fontWeight: 900, textAlign: 'right', textShadow: '0 0 8px rgba(0,230,64,0.3)' }}>{row.pick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- FOOTER NAVIGATION --- */}
        <div style={{
          position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: '480px',
          backgroundColor: '#030704', borderTop: '1px solid rgba(0, 230, 64, 0.25)',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          padding: '14px 0', zIndex: 100,
          boxShadow: '0 -8px 32px rgba(0,0,0,0.9)'
        }}>
          <a href="https://neko789.top/wallet" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.85rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '1.5rem', color: '#00e65b', lineHeight: 1 }}>{"🏠"}</span>{"หน้าแรก / ฝากเงิน"}
          </a>
          <a href="https://lin.ee/SjNoHwy" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', fontSize: '0.85rem', color: '#a0aec0', textDecoration: 'none', fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '1.5rem', color: '#00e65b', lineHeight: 1 }}>{"💬"}</span>{"ติดต่อเรา"}
          </a>
        </div>

      </div>
    </main>
  );
}
