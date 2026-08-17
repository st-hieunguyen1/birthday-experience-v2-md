import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ChapterShell({ chapter, onNext, onBack, canBack }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '.chapter-shell',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.chapter-shell__line',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
    }, containerRef);

    return () => {
      context.revert();
    };
  }, [chapter.key]);

  return (
    <section className="chapter-shell" ref={containerRef}>
      <p className="chapter-shell__kicker">{chapter.kicker}</p>
      <h1 className="chapter-shell__title">{chapter.title}</h1>

      <div className="chapter-shell__copy">
        {chapter.lines.map((line) => (
          <p key={line} className="chapter-shell__line">
            {line}
          </p>
        ))}
      </div>

      <div className="chapter-shell__actions">
        {canBack ? (
          <button type="button" onClick={onBack} className="button button--ghost">
            Quay lại
          </button>
        ) : null}
        <button type="button" onClick={onNext} className="button button--primary">
          Tiếp tục
        </button>
      </div>
    </section>
  );
}
