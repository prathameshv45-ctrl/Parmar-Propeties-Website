import { useState, useEffect } from 'react';

export function AnimatedHeading({ text, className, style }: {
  text: string; className?: string; style?: React.CSSProperties
}) {
  const [visible, setVisible] = useState(false);
  const charDelay = 30;
  const initDelay = 200;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), initDelay);
    return () => clearTimeout(t);
  }, []);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split('').map((char, ci) => {
            const delay = initDelay + (li * line.length * charDelay) + (ci * charDelay);
            return (
              <span
                key={ci}
                style={{
                  display: 'inline-block',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity 500ms ${delay}ms, transform 500ms ${delay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
