import { useEffect, useState } from 'react';

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // pointer move
  useEffect(() => {
    console.log('effect', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // cleanup
    return () => {
      console.log('cleanup');
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  // change body class name
  useEffect(() => {
    if (enabled) {
      document.body.classList.toggle('no-cursor', enabled);
    }

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: '-20px',
          top: '-20px',
          width: '40px',
          height: '40px',
          transition: 'transform .1s ease',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        Turn {enabled ? 'off' : 'on'} follow cursor
      </button>
    </>
  );
};

export function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}
