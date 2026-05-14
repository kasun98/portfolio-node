"use client";
import { useState, useEffect } from "react";

const sequences = [
  { cmd: "whoami", out: "kasun_dewaka", color: "var(--primary)" },
  { cmd: "cat skills.txt", out: "AI_ML, Data_Engineering, Big_Data...", color: "var(--muted)" },
  { cmd: "echo $STATUS", out: "building_the_future", color: "#22c55e" }
];

export default function TerminalHero() {
  const [text, setText] = useState("");
  const [showOut, setShowOut] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      while (!isCancelled) {
        for (let s = 0; s < sequences.length; s++) {
          if (isCancelled) return;
          setCurrentIndex(s);
          const { cmd } = sequences[s];
          
          setText("");
          setShowOut(false);
          
          await new Promise(r => setTimeout(r, 500)); // pause before typing
          
          for (let i = 0; i <= cmd.length; i++) {
            if (isCancelled) return;
            setText(cmd.slice(0, i));
            await new Promise(r => setTimeout(r, 100)); // typing speed
          }
          
          await new Promise(r => setTimeout(r, 300)); // pause before executing
          if (isCancelled) return;
          
          setShowOut(true);
          
          await new Promise(r => setTimeout(r, 2500)); // wait reading output before clearing
        }
      }
    };
    
    runSequence();
    
    return () => { isCancelled = true; };
  }, []);

  return (
    <div className="font-mono" style={{ minHeight: '140px', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px', color: 'var(--foreground)' }}>
        <span style={{ color: 'var(--primary)' }}>$</span> {text}{!showOut && <span className="terminal-cursor" style={{ height: '36px', width: '16px' }} />}
      </div>
      {showOut && (
        <div style={{ fontSize: '28px', fontWeight: '500', color: sequences[currentIndex].color }}>
          <span style={{ color: 'var(--muted)' }}>{'>'}</span> {sequences[currentIndex].out}
          <span className="terminal-cursor" style={{ height: '28px', width: '14px' }} />
        </div>
      )}
    </div>
  );
}
