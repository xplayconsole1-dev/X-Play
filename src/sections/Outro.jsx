import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });

    tl.to('.final-content', { opacity: 0, duration: 1, ease: 'power1.inOut' });
    tl.to('.final-message', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  });

  return (
    <section className="final-message select-none">
      <div className="h-full col-center gap-8 md:gap-10">
        {/* Clean delicate X logo without box or glow */}
        <img 
          src="/brand/04_icon.svg" 
          alt="XPlay Logo" 
          className="md:w-36 w-24 object-contain" 
        />

        <div>
          <h3 className="gradient-title">
            XPLAY
          </h3>
        </div>

        <div className="flex-center gap-8 md:gap-14">
          <img 
            src="/images/steam-logo.svg" 
            alt="Steam" 
            className="md:h-7 h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
          />
          <img 
            src="/images/epic-logo.svg" 
            alt="Epic Games" 
            className="md:h-7 h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>
    </section>
  );
};

export default Outro;
