import { useEffect, useRef, useState } from 'react';

function AnimationHeader() {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = paused ? 'paused' : 'running';
    }
  }, [paused]);

  const text = 'School looks from 599 rubles';

  return (
    <div
      className={`w-full overflow-hidden py-2 cursor-pointer transition-colors duration-300 text-white ${
        paused ? 'bg-[#5c5c5c] ' : 'bg-black'
      }`}

      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="marquee" ref={marqueeRef}>
        {[...Array(20)].map((_, index) => (
          <span key={index} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AnimationHeader;
