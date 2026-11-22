import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ComingSoon from './ComingSoon';
import { useMaskSettings } from '../../constants';

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      WebkitMaskPosition: initialMaskPos,
      maskSize: initialMaskSize,
      WebkitMaskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', {
      marginTop: '-100vh',
      opacity: 0,
    });
    gsap.set('.entrance-message', {
      marginTop: '0vh',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      },
    });
    tl.to('.fade-out', {
      opacity: 0,
      ease: 'power1.inOut',
    })
      .to('.scale-out', {
        scale: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.mask-wrapper',
        {
          maskPosition: maskPos,
          WebkitMaskPosition: maskPos,
          maskSize,
          WebkitMaskSize: maskSize,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to('.mask-wrapper', {
        opacity: 0,
      })
      .to(
        '.overlay-logo',
        {
          opacity: 1,
          onComplete: () => {
            gsap.to('.overlay-logo', { opacity: 0 });
          },
        },
        '<'
      )
      .to(
        '.entrance-message',
        {
          duration: 1,
          ease: 'power1.inOut',
          maskImage:
            'radial-gradient(circle at 50% 0vh,black,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 0vh,black,transparent 100%)',
        },
        '<'
      );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <div className="fade-out" />
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img
          src="/images/big-hero-text.svg"
          alt="wrapper-logo"
          className="overlay-logo"
        />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
