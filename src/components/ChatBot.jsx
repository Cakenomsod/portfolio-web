import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

// รับ lang มาเป็น props เหมือน Navbar
const ChatBot = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  // ฟังก์ชันสร้างข้อความทักทาย
  const getInitialMessage = (currentLang) => ({
    role: 'bot',
    text: currentLang === 'th' 
      ? 'สวัสดีครับ! ผมเป็นผู้ช่วย AI ของคุณเพชญเกล้า มีอะไรให้ผมช่วยไหมครับ?' 
      : "Hi! I'm Phetklao's AI Assistant. How can I help you today?"
  });

  const [messages, setMessages] = useState([getInitialMessage(lang)]);
  const scrollRef = useRef(null);
  const chatWindowRef = useRef(null);

  // เปลี่ยนคำทักทายเมื่อ lang (จาก props) เปลี่ยน
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([getInitialMessage(lang)]);
    }
  }, [lang]);

  // ระบบ Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

    const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
        // ยิงไปที่ URL ของ Railway ของคุณ
        const response = await fetch('https://line-bot-phetklao-production.up.railway.app/webchat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            message: input,
            session_id: 'guest-' + Date.now() // สร้าง ID ชั่วคราวให้ผู้ใช้เว็บ
        }),
        });

        const data = await response.json();
        
        // เอาคำตอบจาก AI มาแสดง
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
        setMessages(prev => [...prev, { 
        role: 'bot', 
        text: lang === 'th' ? 'ขออภัยครับ เชื่อมต่อไม่ได้' : 'Connection Error' 
        }]);
    }
    };

  return (
    <div className="chatbot-container" ref={chatWindowRef} style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary" 
        style={{ width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer' }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div style={{ position: 'absolute', bottom: '70px', right: 0, width: '350px', height: '500px', backgroundColor: 'var(--bg)', borderRadius: 'var(--radius-lg)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '0.5px solid var(--border2)' }}>
          {/* Header */}
          <div style={{ padding: '16px', background: 'var(--bg2)', borderBottom: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'var(--blue-bg)', padding: '6px', borderRadius: '50%' }}>
              <Bot size={20} color="var(--blue)" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>
                {lang === 'th' ? 'เพชญเกล้า AI Assistant' : 'Phetklao AI Assistant'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--green)' }}>• Online</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg)' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', padding: '10px 14px', borderRadius: '12px', fontSize: '13.5px', lineHeight: '1.5', backgroundColor: msg.role === 'user' ? 'var(--blue)' : 'var(--bg3)', color: msg.role === 'user' ? '#fff' : 'var(--text)', borderBottomRightRadius: msg.role === 'user' ? '2px' : '12px', borderBottomLeftRadius: msg.role === 'bot' ? '2px' : '12px' }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '16px', borderTop: '0.5px solid var(--border)', display: 'flex', gap: '8px', background: 'var(--bg2)' }}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'th' ? 'พิมพ์ข้อความ...' : 'Type a message...'}
              style={{ flex: 1, padding: '8px 12px', borderRadius: 'var(--radius)', border: '0.5px solid var(--border2)', outline: 'none', fontSize: '13px', background: 'var(--bg)' }}
            />
            <button onClick={handleSend} className="btn-primary" style={{ padding: '8px', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center' }}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;