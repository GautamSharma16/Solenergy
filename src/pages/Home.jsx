import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  Phone, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowUp,
  Zap,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Ticker from '../components/Ticker';
import ServiceCard from '../components/ServiceCard';
import ProjectGallery from '../components/ProjectGallery';
import { companyInfo } from '../data/company';
import { endToEndSolutions } from '../data/services';
import whatsappIcon from '../assets/whatsapp.png';
import solenergiStoryImage from '../assets/solenergi-story.svg';
import orangeSunburstRing from '../assets/Orange Radial Sunburst Ring (1).png';
import './Home.css';

export default function Home() {
  const introImgAreaRef = useRef(null);
  const backCardRef = useRef(null);
  const frontCardRef = useRef(null);
  const scrollerWrapRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const rotatingLogoRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(0);
  const [consultForm, setConsultForm] = useState({
    fullName: '',
    pinCode: '',
    whatsapp: '',
    monthlyBill: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultForm(prev => ({ ...prev, [name]: value }));
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setConsultForm({ fullName: '', pinCode: '', whatsapp: '', monthlyBill: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  // Curved Pill features matching Screenshot 3 with SolEnergi credentials
  const uspFeatures = [
    {
      title: "PAN India portfolio in 20+ states across India",
      icon: "/images/atal_assets/lower-lcoe.svg"
    },
    {
      title: "World’s largest Solar Tree manufacturer (11 KWp MOIL)",
      icon: "/images/atal_assets/bis-certified.svg"
    },
    {
      title: "25,000 LTR solar water heating system at Northern Railway",
      icon: "/images/atal_assets/ai-aoi.svg"
    },
    {
      title: "40% accelerated tax depreciation under IT Section 32",
      icon: "/images/atal_assets/automated.svg"
    },
    {
      title: "Hedging institutional electricity tariffs at ₹3.50–5.00/unit",
      icon: "/images/atal_assets/topcon.svg"
    },
    {
      title: "Turnkey CEIG approvals, net-metering & 25-yr linear warranty",
      icon: "/images/atal_assets/g12r.svg"
    },
    {
      title: "Specialised engineering teams for complex gas & industrial plants",
      icon: "/images/atal_assets/illumination.svg"
    }
  ];

  const faqs = [
    {
      q: "1. Who is SolEnergi Research Private Limited?",
      a: "SolEnergi Research Pvt. Ltd. is a premier clean energy enterprise officially recognised by the Department for Promotion of Industry and Internal Trade (DIPP), Ministry of Commerce & Industry, Government of India. We engineer turnkey solar EPC solutions, commercial rooftops, utility-scale power parks, and specialized solar architectures nationwide."
    },
    {
      q: "2. Is SolEnergi a verified solar EPC and manufacturing company in India?",
      a: "Yes. SolEnergi delivers end-to-end solar engineering, procurement, and construction (EPC) across 20+ Indian states, including landmark executions for Northern Railway, GAIL (India) Limited, Bharat Petroleum (BPCL), and MOIL Limited."
    },
    {
      q: "3. What tax depreciation benefits apply for commercial rooftop solar?",
      a: "Commercial and Industrial solar power installations in India qualify for Accelerated Depreciation under Income Tax Act Section 32, allowing businesses to claim up to 40% depreciation on project value within the very first financial year."
    },
    {
      q: "4. What is the landmark 11 KWp Solar Tree manufactured by SolEnergi?",
      a: "SolEnergi is the manufacturer of the world's largest Solar Tree with an 11 KWp capacity installed for MOIL Limited in Nagpur. It utilizes vertical biomimetic architecture to save 90% ground footprint while generating high-yield solar energy."
    },
    {
      q: "5. How do I get a quote from SolEnergi?",
      a: "SolEnergi shares custom project feasibilities, structural drawings, and ROI models via call at 011-45402520, WhatsApp at +91 9310170907, or by email at sales@solenergi.in."
    }
  ];

  const latestResources = [
    {
      category: "Blog",
      title: "How Rooftop Solar Cuts Factory Power Bills Without Disrupting Operations",
      date: "10 Oct, 2026",
      isoDate: "2026-10-10",
      image: "/images/atal_assets/atal-solar-n-type-topcon-panels-rooftop-installation.webp"
    },
    {
      category: "Technology",
      title: "TOPCon Solar Panels: Why Better Low-Light Yield Matters in Indian Cities",
      date: "28 Sep, 2026",
      isoDate: "2026-09-28",
      image: "/images/atal_assets/product_photo.webp"
    },
    {
      category: "Case Study",
      title: "Designing High-Reliability Solar Systems for Railways and PSU Sites",
      date: "14 Sep, 2026",
      isoDate: "2026-09-14",
      image: "/images/atal_assets/sustainable.webp"
    },
    {
      category: "Policy",
      title: "Accelerated Depreciation for Commercial Solar: What Businesses Should Know",
      date: "30 Aug, 2026",
      isoDate: "2026-08-30",
      image: "/images/atal_assets/energy.webp"
    }
  ];

  useEffect(() => {
    // -------------------------------------------------------------------------
    // 1. Tilted Image 3D Mouse Parallax
    // -------------------------------------------------------------------------
    const area = introImgAreaRef.current;
    const backCard = backCardRef.current;
    const frontCard = frontCardRef.current;

    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };
    let vel = { x: 0, y: 0 };
    const friction = 0.12;
    const intensity = 22;

    const handleMouseMove = (e) => {
      if (!area) return;
      const rect = area.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      mouse.y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    };

    const handleMouseLeave = () => {
      mouse = { x: 0, y: 0 };
      if (frontCard) {
        gsap.to(frontCard, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
      }
      if (backCard) {
        gsap.to(backCard, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
      }
    };

    if (area) {
      area.addEventListener('mousemove', handleMouseMove);
      area.addEventListener('mouseleave', handleMouseLeave);
    }

    const mouseTicker = () => {
      vel.x += (mouse.x - vel.x) * friction;
      vel.y += (mouse.y - vel.y) * friction;
      pos.x = vel.x * intensity;
      pos.y = vel.y * intensity;

      if (frontCard) {
        gsap.set(frontCard, {
          rotateY: pos.x * 0.8,
          rotateX: -pos.y * 0.8,
          x: pos.x * 0.5,
          y: pos.y * 0.5,
        });
      }
      if (backCard) {
        gsap.set(backCard, {
          rotateY: -pos.x * 0.5,
          rotateX: pos.y * 0.5,
          x: -pos.x * 0.4,
          y: -pos.y * 0.4,
        });
      }
    };
    gsap.ticker.add(mouseTicker);

    // -------------------------------------------------------------------------
    // 2. Parabolic Curved Pill Offset (Ticker updates X position dynamically)
    // -------------------------------------------------------------------------
    const wrap = scrollerWrapRef.current;
    const curveTicker = () => {
      if (!wrap || window.innerWidth < 992) return;
      const wrapRect = wrap.getBoundingClientRect();
      const wrapCenterY = wrapRect.top + wrapRect.height / 2;
      const pillItems = wrap.querySelectorAll('.usp-pill-item');
      
      pillItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distY = itemCenterY - wrapCenterY;
        const normalizedDist = Math.max(-1, Math.min(1, distY / 280));
        // Curve inward to the left in the center, straight at top/bottom (never positive, so never cut on right)
        const x = -45 * (1 - normalizedDist * normalizedDist);
        item.style.transform = `translateX(${x}px)`;
      });
    };
    gsap.ticker.add(curveTicker);

    // -------------------------------------------------------------------------
    // 3. Pinned 3D Stacked Cards on Scroll
    // -------------------------------------------------------------------------
    let cardsCtx = null;
    if (cardsSectionRef.current && pinWrapRef.current) {
      cardsCtx = gsap.context(() => {
        const cards = gsap.utils.toArray('.atal_card');

        // Set initial card deck position
        cards.forEach((card, i) => {
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            top: '50%',
            left: '50%',
            y: i * 14,
            z: -i * 80,
            rotateZ: (i % 2 === 0 ? -1 : 1) * 3,
            rotateX: 0,
            rotateY: 0,
            zIndex: cards.length - i,
          });
        });

        // Rotating sun petal in background
        if (rotatingLogoRef.current) {
          gsap.to(rotatingLogoRef.current, {
            rotation: 110,
            ease: 'none',
            scrollTrigger: {
              trigger: cardsSectionRef.current,
              start: 'top top',
              end: () => `+=${cards.length * 360}`,
              scrub: 1.8,
            }
          });
        }

        // Timeline for peeling cards upward
        const cardTl = gsap.timeline();
        cards.forEach((card, i) => {
          cardTl.to(card, {
            y: -window.innerHeight * 1.25,
            z: 100,
            rotateZ: (i % 2 === 0 ? 1 : -1) * 16,
            rotateX: -12,
            rotateY: (i % 2 === 0 ? -14 : 14),
            scale: 1.05,
            autoAlpha: 0,
            ease: 'power2.out',
            duration: 2,
          }, i * 1.35);
        });

        ScrollTrigger.create({
          animation: cardTl,
          trigger: cardsSectionRef.current,
          start: 'top top',
          end: () => `+=${cards.length * 360}`,
          scrub: 0.6,
          pin: pinWrapRef.current,
          pinSpacing: true,
          anticipatePin: 1,
        });
      }, cardsSectionRef);
    }

    // -------------------------------------------------------------------------
    // 4. Story Text Scroll Reveal
    // -------------------------------------------------------------------------
    gsap.from(".atal_story_content p", {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".atal_story_image_area",
        start: "top 75%",
      }
    });

    ScrollTrigger.refresh();

    return () => {
      if (area) {
        area.removeEventListener('mousemove', handleMouseMove);
        area.removeEventListener('mouseleave', handleMouseLeave);
      }
      gsap.ticker.remove(mouseTicker);
      gsap.ticker.remove(curveTicker);
      if (cardsCtx) cardsCtx.revert();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page-atal-style">
      {/* =========================================================================
          HERO SECTION: CINEMATIC VIDEO BACKGROUND + CONSULTATION FORM (Screenshot 1)
          ========================================================================= */}
      <section className="hero-video-section">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video-element"
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/hero.png"
          >
            <source src="/images/herosection_loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-video-container">
          <div className="hero-video-grid">
            {/* Left Content Column */}
            <div className="hero-content-left">
              <h1 className="hero-headline">
                India's No.1 Choice <br />
                for Rooftop & Industrial <br />
                <span className="hero-highlight-text">Solar Panels</span>
              </h1>

              <p className="hero-subheadline">
                Install high-efficiency solar architectures and claim up to <strong>₹1,08,000 PM Surya Ghar subsidy</strong> or <strong>40% accelerated tax depreciation</strong> — with easy EMIs and a free site visit.
              </p>

              {/* Trust Badges Row matching Screenshot 1 */}
              <div className="hero-trust-badges">
                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  </div>
                  <div className="hero-badge-text">
                    <strong>PM Surya Ghar</strong>
                    <span>Vendor</span>
                  </div>
                </div>

                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <Award size={22} />
                  </div>
                  <div className="hero-badge-text">
                    <strong>MNRE</strong>
                    <span>Approved</span>
                  </div>
                </div>

                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="hero-badge-text">
                    <strong>UPNEDA</strong>
                    <span>Approved</span>
                  </div>
                </div>

                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <CheckCircle2 size={22} />
                  </div>
                  <div className="hero-badge-text">
                    <strong>DIPP</strong>
                    <span>Recognised</span>
                  </div>
                </div>
              </div>

              {/* Pill Highlight */}
              <div className="hero-pill-highlight">
                <Zap size={16} className="pill-lightning" />
                <span>"Fastest Subsidy & Net-Metering Approval in UP & NCR"</span>
              </div>
            </div>

            {/* Right Consultation Form Card matching Screenshot 1 */}
            <div className="hero-form-wrapper">
              <div className="hero-consultation-card">
                <h3 className="consultation-card-title">Book a FREE Consultation</h3>
                <p className="consultation-card-sub">
                  Claim your <span className="subsidy-orange">₹1,08,000 subsidy</span> today.
                </p>

                <form onSubmit={handleConsultationSubmit} className="consultation-form">
                  <div className="form-group-field">
                    <input 
                      type="text" 
                      name="fullName"
                      placeholder="Full Name*" 
                      value={consultForm.fullName}
                      onChange={handleInputChange}
                      required 
                      className="form-input-text"
                    />
                  </div>

                  <div className="form-group-field">
                    <input 
                      type="text" 
                      name="pinCode"
                      placeholder="PIN Code (6 digits)*" 
                      maxLength={6}
                      value={consultForm.pinCode}
                      onChange={handleInputChange}
                      required 
                      className="form-input-text"
                    />
                  </div>

                  <div className="form-group-field phone-input-group">
                    <span className="phone-prefix">+91</span>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      placeholder="WhatsApp Number*" 
                      maxLength={10}
                      value={consultForm.whatsapp}
                      onChange={handleInputChange}
                      required 
                      className="form-input-text phone-input"
                    />
                  </div>

                  <div className="form-group-field">
                    <select 
                      name="monthlyBill"
                      value={consultForm.monthlyBill}
                      onChange={handleInputChange}
                      required 
                      className="form-select-field"
                    >
                      <option value="" disabled>Monthly Electricity Bill*</option>
                      <option value="1500-3000">₹1,500 – ₹3,000 / month (1–2 kW)</option>
                      <option value="3000-5000">₹3,000 – ₹5,000 / month (3–5 kW)</option>
                      <option value="5000-10000">₹5,000 – ₹10,000 / month (5–10 kW)</option>
                      <option value="10000-25000">₹10,000 – ₹25,000 / month (Commercial)</option>
                      <option value="above25000">Above ₹25,000 / month (Industrial / HT)</option>
                    </select>
                  </div>

                  {formSubmitted ? (
                    <div className="consultation-success-msg">
                      <CheckCircle2 size={18} />
                      <span>Thank you! Our solar engineer will contact you shortly.</span>
                    </div>
                  ) : (
                    <div className="consultation-btn-row">
                      <button type="submit" className="btn-consultation-submit">
                        Book FREE Consultation
                      </button>
                      <a 
                        href={`tel:${companyInfo.contact.phoneMain}`} 
                        className="btn-consultation-call" 
                        aria-label="Call SolEnergi directly"
                        title="Call Us Directly"
                      >
                        <Phone size={18} />
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: INTRO TILTED CARDS & ENGINEERING STATEMENT
          ========================================================================= */}
      <section className="intro_cards_section">
        <div className="container">
          <div className="intro_two_col">
            {/* Left Column: Tilted 3D Stacked Photos */}
            <div className="home_atal_intro_two_image_area" ref={introImgAreaRef}>
              <div className="intro_animate_image_1 img-box img-back" ref={backCardRef}>
                <img 
                  src="/images/atal_assets/atal-solar-panel-manufacturing-intro-1.webp"
                  alt="SolEnergi Utility Solar Farm"
                  loading="eager"
                />
              </div>

              <div className="intro_animate_image_2 img-box img-front" ref={frontCardRef}>
                <img 
                  src="/images/atal_assets/atal-solar-panel-manufacturing-intro-2.webp"
                  alt="Sustainable Solar Technology Leaf"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="home_atal_intro_content_area">
              <h2>
                Engineering the{' '}
                <span className="atal_info_h2_span">Best Solar Solutions</span>{' '}
                in India for the World
              </h2>

              <p>
                As a DIPP-recognised clean energy enterprise, SolEnergi Research engineers next-gen commercial 
                rooftop solar systems, utility solar parks, and the world's largest solar tree technology for maximum power density 
                and dependable field reliability across 20+ Indian states.
              </p>

              <Link to="/about-us" className="atal-btn" title="Learn more about SolEnergi">
                <span className="atal-text">Learn more</span>
                <span className="atal-icon">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT SOLENERGI STORY WITH solenergi-story.svg
          ========================================================================= */}
      <section className="atal_story_image_area">
        <img 
          src={solenergiStoryImage} 
          alt="SolEnergi Clean Energy Architecture Skyline" 
          className="atal_story_skyline_bg"
          loading="lazy"
        />

        <div className="container story_container">
          <div className="atal_story_content">
            <h2 className="story-main-heading">
              As a DIPP-recognised solar enterprise, SolEnergi Research delivers high-efficiency solar
              systems for homes, businesses, institutions, and industrial plants. We combine modern
              engineering with reliable clean energy technology to build long-term energy independence
              across India.
            </h2>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ENGINEERING A PREMIUM FUTURE + INFINITE SCROLLING PILLS
          ========================================================================= */}
      <section className="tpt-80">
        <div className="container">
          <div className="usp_two_col">
            {/* Left Content */}
            <div className="atal_usp_content_details">
              <h2>Engineering a Premium, Next Gen Solar Future</h2>
              <p>
                As a DIPP-recognised solar enterprise, SolEnergi Research builds high-efficiency solar architectures 
                designed to endure harsh environmental conditions and maximize lifetime ROI.
              </p>
            </div>

            {/* Right: Curved Parabolic Capsule Scroller with Guaranteed Infinite Loop */}
            <div className="atal_solar_usp_feature_area">
              <div className="usp_scroller_wrap" ref={scrollerWrapRef}>
                <div className="atal_solar_usp_feature_showcase continuous-scroll-track">
                  {/* Set 1 */}
                  {uspFeatures.map((item, idx) => (
                    <div key={`s1-${idx}`} className="atal_solar_usp_single_feature usp-pill-item">
                      <div className="atal_solar_usp_icon_area">
                        <img src={item.icon} alt="" width="26" height="26" />
                      </div>
                      <div className="atal_solar_usp_content_area">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PINNED 3D STACKED CARDS ON SCROLL (SolEnergi Brand Colors)
          ========================================================================= */}
      <section className="atal_cards_section" ref={cardsSectionRef}>
        <div className="atal_pin_wrap" ref={pinWrapRef}>
          {/* Rotating Orange Sunburst Background */}
          <div className="atal_logo_at_center_pin_image" ref={rotatingLogoRef} aria-hidden="true">
            <img src={orangeSunburstRing} alt="" />
          </div>

          {/* Card 1: Next Gen Production (Dark Navy Card) */}
          <div className="atal_card atal_first_card">
            <div className="atal_card_inside_image">
              <img src="/images/atal_assets/sustainable.webp" alt="Next Gen Production" />
            </div>
            <h2>Next Gen <br />Production</h2>
            <p>
              As a leading Solar EPC and manufacturing partner, we leverage advanced engineering to deliver turnkey 
              solar systems with unmatched structural integrity and automated quality inspection.
            </p>
          </div>

          {/* Card 2: TOPCon Advantage (Warm Solar Amber Card - SolEnergi Brand) */}
          <div className="atal_card atal_second_card">
            <div className="atal_card_inside_image">
              <img src="/images/atal_assets/energy.webp" alt="TOPCon Advantage" />
            </div>
            <h2>TOPCon<br /> Advantage</h2>
            <p>
              Engineered with next-generation N-Type TOPCon cells and bifacial glass, our high-efficiency solar modules 
              deliver rapid energy payback periods and superior low-light power yield.
            </p>
          </div>

          {/* Card 3: Best Lifetime Value (Sun Yellow Card - SolEnergi Brand) */}
          <div className="atal_card atal_third_card">
            <div className="atal_card_inside_image">
              <img src="/images/atal_assets/lifecycle.webp" alt="Best Lifetime Value" />
            </div>
            <h2>Best <br />Lifetime Value</h2>
            <p>
              SolEnergi guarantees 25-year linear power performance and 40% accelerated tax depreciation under IT Section 32 
              for maximum commercial lifetime ROI.
            </p>
          </div>

          {/* Card 4: Zero Carbon (Solar Blue Card - SolEnergi Brand) */}
          <div className="atal_card atal_fourth_card">
            <div className="atal_card_inside_image">
              <img src="/images/atal_assets/carbon.webp" alt="Zero Carbon" />
            </div>
            <h2>Zero <br />Carbon</h2>
            <p>
              Our commercial and industrial solar solutions support strict corporate ESG targets through ultra-efficient 
              design metrics and highly stable clean energy output.
            </p>
          </div>
        </div>
      </section>

      {/* Ticker Band */}
      <Ticker theme="light" />

      {/* =========================================================================
          SECTION 5: END-TO-END SOLUTIONS & FEATURES
          ========================================================================= */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="OUR WORKFLOW & PROTOCOL"
            title="Our End-To-End Solar Solutions"
            subtitle="From initial topographical assessment to high-voltage grid synchronization and IoT monitoring, SolEnergi manages every engineering phase in-house."
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '3rem' }}>
            {endToEndSolutions.map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                item={service} 
                index={idx}
                linkTo="/rooftops"
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VERIFIED LANDMARK PROJECTS (Northern Railway, GAIL, BPCL, MOIL)
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="PROVEN EPC TRACK RECORD"
            title="Landmark Projects Delivered Across India"
            subtitle="Explore our verified engineering accomplishments for national railways, Maharatna PSUs, and industrial leaders."
            center={true}
          />

          <div style={{ marginTop: '2.5rem' }}>
            <ProjectGallery limit={6} showFilters={true} />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/large-projects" className="btn btn-primary">
              <span>View All Projects & Case Studies</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="faq-reference-section">
        <div className="container">
          <div className="faq-reference-header">
            <h2>Frequently Asked Questions</h2>
            <p>Your questions answered, your confidence assured.</p>
          </div>

          <div className="faq-reference-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
                    <button 
                      type="button" 
                      className="faq-question-btn"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen ? 'true' : 'false'}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: LATEST BLOG RESOURCES
          ========================================================================= */}
      <section className="latest-resources-section">
        <div className="container">
          <div className="latest-resources-header">
            <h2>Latest From SolEnergi</h2>
            <Link to="/news" className="latest-resources-view-all">
              <span className="resource-btn-icon">
                <ArrowRight size={18} />
              </span>
              <span>View All Resources</span>
            </Link>
          </div>

          <div className="latest-resources-grid">
            {latestResources.map((item) => (
              <article className="latest-resource-card" key={item.title}>
                <Link to="/news" className="latest-resource-image-link" aria-label={item.title}>
                  <img src={item.image} alt={item.title} className="latest-resource-image" />
                </Link>

                <div className="latest-resource-body">
                  <span className="latest-resource-category">{item.category}</span>
                  <h3>
                    <Link to="/news">{item.title}</Link>
                  </h3>
                  <time dateTime={item.isoDate}>{item.date}</time>

                  <Link to="/news" className="latest-resource-read-more">
                    <span className="resource-btn-icon">
                      <ArrowRight size={17} />
                    </span>
                    <span>Read More</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FLOATING WIDGETS: WHATSAPP & BACK TO TOP (Screenshot bottom right)
          ========================================================================= */}
      <div className="floating-widgets-group">
        <button 
          type="button" 
          className="back-to-top-circle-btn" 
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>

        <a 
          href="https://wa.me/919310170907?text=Hello%20SolEnergi,%20I%20am%20interested%20in%20solar%20solutions."
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-float-btn"
          aria-label="Chat on WhatsApp"
        >
          <img src={whatsappIcon} alt="" className="whatsapp-float-icon" />
        </a>
      </div>
    </div>
  );
}
