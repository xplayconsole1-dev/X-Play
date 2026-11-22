import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FounderStory = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.jason',
          start: 'top 90%',
          end: '10% center',
          scrub: 2,
        },
      })
      .to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to(
      '.jason .img-box',
      {
        scrollTrigger: {
          trigger: '.jason',
          start: 'top center',
          end: '80% center',
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: 'power1.inOut',
      },
      '<'
    );
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Puneet Kushwaha | Founder & Lead Architect</h1>
        <h2>Democratizing 60 FPS AAA Gaming On Any PC.</h2>
        <p>
          Founded by Puneet Kushwaha—engineer, systems architect, and Smart India
          Hackathon winner—XPlay was born out of a single mission: break the ₹1.5 Lakh
          hardware barrier for gamers. By engineering a bare-metal DirectStorage NVMe
          console architecture, XPlay transforms any everyday laptop or desktop into an
          uncompromised 60 FPS gaming powerhouse with zero latency and instant boot.
        </p>

        <div className="jason-2">
          <img 
            src="/brand/01_product_drive.jpg" 
            alt="XPlay Console Drive"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img 
            src="/images/puneet-founder.jpg" 
            alt="Puneet Kushwaha - Founder"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>
        <div className="jason-3">
          <img 
            src="/brand/02_retail_box.jpg" 
            alt="XPlay Retail Edition"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
