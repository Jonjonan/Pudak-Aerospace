gsap.registerPlugin(ScrollTrigger);

// --- TRANSLATION LOGIC ---
const translations = {
  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_news: "News",
    nav_certificate: "Certificate",
    partner_btn: "Become Partner",
    welcome_to: "WELCOME TO",
    company_name: "PUDAK AEROSPACE",
    as9100: "an AS9100 Certified Company.",
    explore_btn: "Explore Our Service →",
    certificate_btn: "Our Certificate",
    'rest-title-text': "OUR EXPERTISE. YOUR ADVANTAGE.",
    content_h1: "Next Content",
    content_p: "Cinematic effect is done, navigation stays.",
    what_we_do_title: "What We Do",
    what_we_do_subtitle: "Your partner in delivering high-performance aerospace components",
    precision_machining_title: "Precision Machining",
    precision_machining_subtitle: "(3, 4, 5-axis, Swiss Type & EDM)",
    assembly_title: "Assembly",
    assembly_subtitle: "Basic Component of Aerospace",
    surface_treatment_title: "Surface Treatment",
    heat_treatment_title: "Heat Treatment",
    quality_inspection_title: "Quality Inspection",
    driving_future_title: "Driving the Future of Manufacturing",
    driving_future_subtitle: "Embracing industry 4.0 with precision as our passion",
    manufacture_4_0_title: "Manufacture 4.0",
    manufacture_4_0_p: "With more than 20 years of expertise in aerospace parts manufacturing, Pudak Aerospace is embracing the future through Manufacture 4.0. Starting in mid-2024, we began integrating digitalization and automation across every division.",
    read_more: "Read more",
    precision_passion_title: "Precision Our Passion",
    precision_passion_p: "At Pudak Aerospace, precision is more than just a goal—it's our passion. Every step of our manufacturing process, from concept and design to production and final inspection, is driven by an uncompromising commitment to accuracy and reliability.",
    excellence_achieved_title: "Excellence is Achieved",
    excellence_achieved_subtitle: "When quality and punctuality coexist",
    precision_title: "Precision",
    precision_p: "Micron-level accuracy in every component we manufacture",
    quality_title: "Quality",
    quality_p: "International standards compliance and rigorous testing",
    reliability_title: "Reliability",
    reliability_p: "99% on-time delivery rate with consistent quality",
    global_reach_title: "Global Reach",
    global_reach_p: "Serving aerospace companies across 13+ countries",
    active_part_numbers: "Active<br>Part Numbers",
    on_time_delivery: "On Time<br>Delivery",
    part_per_minutes: "Part<br>per Minutes",
    countries_served: "Countries<br>Served",
    pudak_aerospace_about_title: "Pudak Aerospace",
    pudak_aerospace_about_p1: "PT. Pudak Scientific is ready to provide service for the best precision part machining as according to the international standards.",
    pudak_aerospace_about_p2: "With the support of modern 5-axis CNC machines, EDM (Electrical Discharge Machining), sophisticated measuring equipment, up to date knowledge and experience we ready to produce highly complicated parts with micron precision for you.",
    pudak_aerospace_about_p3: "The Quality and On-time Delivery is our main concern. We realize that it is important for every personnel to have quality conscious and cost-responsible thinking and of its implementation in every activity.",
    valued_partners_title: "Our Valued Partners",
    valued_partners_p: "Strong relationships built on trust, quality, and proven performance.",
    ready_to_work_title: "Ready to Work Together?",
    ready_to_work_p: "Contact us today to discuss your aerospace needs and discover how we can help bring your project to life.",
    contact_address: "Jl. Mekar Raya Kav. 12, Bandung 40614 - Indonesia",
    get_in_touch: "Get in Touch",
    form_name: "Name",
    form_company: "Company",
    form_email: "Email Address",
    form_message: "Your Message",
    send_message: "Send Message",
    footer_about_p: "PT Pudak Scientific is an established and rapidly expanding company specializing in the manufacturing of high-precision aerospace components.",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    service_footer_title: "Service",
    cnc_machining: "CNC Machining",
    edm_services: "EDM Services",
    quality_inspection_footer: "Quality Inspection",
    custom_manufacturing: "Custom Manufacturing",
    industries_title: "Industries",
    commercial_aviation: "Commercial Aviation",
    defense_military: "Defense & Military",
    space_technology: "Space Technology",
    general_aviation: "General Aviation",
    company_footer_title: "Company",
    about_us_footer: "About Us",
    services_footer: "Services",
    news_footer: "News",
    certificate_footer: "Certificate",
    certifications_for_title: "Certifications for<br><span>Pudak Aerospace</span>",
    back_to_top: "↑ Back to top",
    copyright: "&copy; PT PUDAK SCIENTIFIC © 2025 All Rights Reserved"
  },
  id: {
    nav_about: "Tentang",
    nav_services: "Layanan",
    nav_news: "Berita",
    nav_certificate: "Sertifikat",
    partner_btn: "Jadi Mitra",
    welcome_to: "SELAMAT DATANG DI",
    company_name: "PUDAK AEROSPACE",
    as9100: "Perusahaan Bersertifikat AS9100.",
    explore_btn: "Jelajahi Layanan Kami →",
    certificate_btn: "Sertifikat Kami",
    'rest-title-text': "KEAHLIAN KAMI. KEUNTUNGAN ANDA.",
    content_h1: "Konten Berikutnya",
    content_p: "Efek sinematik selesai, navigasi tetap mengikuti.",
    what_we_do_title: "Apa yang kita lakukan",
    what_we_do_subtitle: "Mitra Anda dalam menghadirkan komponen dirgantara berkinerja tinggi",
    precision_machining_title: "Pemesinan Presisi",
    precision_machining_subtitle: "(3, 4, 5-sumbu, Tipe Swiss & EDM)",
    assembly_title: "Perakitan",
    assembly_subtitle: "Komponen Dasar Dirgantara",
    surface_treatment_title: "Perlakuan Permukaan",
    heat_treatment_title: "Perlakuan Panas",
    quality_inspection_title: "Inspeksi Kualitas",
    driving_future_title: "Mendorong Masa Depan Manufaktur",
    driving_future_subtitle: "Merangkul industri 4.0 dengan presisi sebagai hasrat kami",
    manufacture_4_0_title: "Manufaktur 4.0",
    manufacture_4_0_p: "Dengan lebih dari 20 tahun keahlian di bidang manufaktur suku cadang dirgantara, Pudak Aerospace menyongsong masa depan melalui Manufaktur 4.0. Mulai pertengahan tahun 2024, kami mulai mengintegrasikan digitalisasi dan otomatisasi di setiap divisi.",
    read_more: "Baca lebih lajut",
    precision_passion_title: "Presisi Gairah Kami",
    precision_passion_p: "Di Pudak Aerospace, presisi lebih dari sekadar tujuan—itu adalah hasrat kami. Setiap langkah proses manufaktur kami, mulai dari konsep dan desain hingga produksi dan pemeriksaan akhir, didorong oleh komitmen tanpa kompromi terhadap akurasi dan keandalan.",
    excellence_achieved_title: "Keunggulan Tercapai",
    excellence_achieved_subtitle: "Ketika kualitas dan ketepatan waktu hidup berdampingan",
    precision_title: "Presisi",
    precision_p: "Akurasi tingkat mikron di setiap komponen yang kami produksi",
    quality_title: "Kualitas",
    quality_p: "Kepatuhan terhadap standar internasional dan pengujian yang ketat",
    reliability_title: "Keandalan",
    reliability_p: "Tingkat pengiriman tepat waktu 99% dengan kualitas yang konsisten",
    global_reach_title: "Jangkauan Global",
    global_reach_p: "Melayani perusahaan dirgantara di lebih dari 13 negara",
    active_part_numbers: "Nomor Bagian<br>Aktif",
    on_time_delivery: "Pengiriman<br>Tepat Waktu",
    part_per_minutes: "Bagian<br>per Menit",
    countries_served: "Negara<br>yang Dilayani",
    pudak_aerospace_about_title: "Pudak Aerospace",
    pudak_aerospace_about_p1: "PT. Pudak Scientific siap memberikan layanan pemesinan suku cadang presisi terbaik sesuai standar internasional.",
    pudak_aerospace_about_p2: "Dengan dukungan mesin CNC 5-sumbu modern, EDM (Electrical Discharge Machining), peralatan pengukuran canggih, pengetahuan dan pengalaman terkini kami siap memproduksi suku cadang yang sangat rumit dengan presisi mikron untuk Anda.",
    pudak_aerospace_about_p3: "Kualitas dan Pengiriman Tepat Waktu adalah perhatian utama kami. Kami menyadari bahwa penting bagi setiap personel untuk memiliki kesadaran akan kualitas dan pemikiran yang bertanggung jawab atas biaya serta implementasinya dalam setiap kegiatan.",
    valued_partners_title: "Mitra Berharga Kami",
    valued_partners_p: "Hubungan yang kuat dibangun atas dasar kepercayaan, kualitas, dan kinerja yang telah terbukti.",
    ready_to_work_title: "Siap Bekerja Sama?",
    ready_to_work_p: "Hubungi kami hari ini untuk mendiskusikan kebutuhan kedirgantaraan Anda dan temukan bagaimana kami dapat membantu mewujudkan proyek Anda.",
    contact_address: "Jl. Mekar Raya Kav. 12, Bandung 40614 - Indonesia",
    get_in_touch: "Berhubungan",
    form_name: "Nama",
    form_company: "Perusahaan",
    form_email: "Alamat Email",
    form_message: "Pesan Anda",
    send_message: "Kirim Pesan",
    footer_about_p: "PT Pudak Scientific adalah perusahaan mapan dan berkembang pesat yang berspesialisasi dalam pembuatan komponen dirgantara presisi tinggi.",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    service_footer_title: "Layanan",
    cnc_machining: "Pemesinan CNC",
    edm_services: "Layanan EDM",
    quality_inspection_footer: "Inspeksi Kualitas",
    custom_manufacturing: "Manufaktur Kustom",
    industries_title: "Industri",
    commercial_aviation: "Penerbangan Komersial",
    defense_military: "Pertahanan & Militer",
    space_technology: "Teknologi Luar Angkasa",
    general_aviation: "Penerbangan Umum",
    company_footer_title: "Perusahaan",
    about_us_footer: "Tentang Kami",
    services_footer: "Layanan",
    news_footer: "Berita",
    certificate_footer: "Sertifikat",
    certifications_for_title: "Sertifikasi untuk<br><span>Pudak Aerospace</span>",
    back_to_top: "↑ Kembali ke atas",
    copyright: "&copy; PT PUDAK SCIENTIFIC © 2025 Hak Cipta Dilindungi Undang-Undang"
  }
};

const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  langToggle.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      const translation = translations[lang][key];
      if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
        elem.placeholder = translation;
      } else {
        elem.innerHTML = translation;
      }
    }
  });
}

langToggle.addEventListener("click", () => {
  const currentLang = localStorage.getItem('lang') || 'id';
  const newLang = currentLang === "en" ? "id" : "en";
  setLanguage(newLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = localStorage.getItem('lang') || 'id';
    setLanguage(initialLang);

    document.querySelectorAll(".achievement-value").forEach(valueElement => {
        const originalText = valueElement.textContent.trim();
        valueElement.dataset.originalText = originalText; // Store original text
        
        const prefix = originalText.match(/^[<]*/)?.[0] || '';
        const suffix = originalText.match(/[+>]*$/)?.[0] || '';
        valueElement.innerHTML = prefix + '0' + suffix;
    });
});

// --- CINEMATIC SCROLL LOGIC ---
const nav = document.getElementById("mainNav");
const heroFrame = document.querySelector(".hero-frame");
const navMount = document.getElementById("navMount");

function makeSticky() {
  if (!nav.classList.contains("sticky-nav")) {
    nav.classList.add("sticky-nav");
    navMount.appendChild(nav);
  }
}

function resetNav() {
  if (nav.classList.contains("sticky-nav")) {
    nav.classList.remove("sticky-nav");
    heroFrame.insertBefore(nav, heroFrame.firstChild);
  }
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=800",
    scrub: 1.2,
    pin: true,
    onUpdate: (self) => {
      if (self.progress === 1) {
        makeSticky();
      } else {
        resetNav();
      }
    },
  },
});

tl.to(".hero-frame", { width: "100%", height: "100%", borderRadius: 0, ease: "power2.out" }, 0)
  .to(".hero-footer", { opacity: 0, y: 50, ease: "power1.out" }, 0.2);

// --- HERO BACKGROUND ANIMATION ---
const heroBg = document.querySelector(".hero-bg");
const heroBg2 = document.querySelector(".hero-bg-2");

const bgTl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

bgTl.fromTo(heroBg, 
    { backgroundPosition: "50% 80%", scale: 1 }, 
    { backgroundPosition: "50% 50%", scale: 1.2, duration: 7.5 })
  .to(heroBg, { opacity: 0, duration: 1.5 }, "-=1.5")
  .to(heroFrame, { backgroundColor: "#FFFFFF", duration: 1.5 }, "-=1.5")
  .fromTo(heroBg2, 
    { backgroundPosition: "50% 20%", scale: 1.5, opacity: 0 }, 
    { backgroundPosition: "50% 80%", scale: 1, opacity: 1, duration: 7.5 }, 
    "-=.75")
  .to(heroBg2, { opacity: 0, duration: 1.5 }, "+=3")
  .to(heroFrame, { backgroundColor: "#FFFFFF", duration: 1.5 }, "+=3");
  
// --- WHAT WE DO SECTION ANIMATION ---
const whatWeDo_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".what-we-do",
    start: "top 80%", 
    toggleActions: "play none none none"
  }
});

whatWeDo_tl.from(".what-we-do .section-header", {
  opacity: 0,
  y: 50,
  duration: 0.6,
  ease: "power2.out"
});

whatWeDo_tl.from(".airplane-img", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out"
}, "-=0.3");

whatWeDo_tl.from(".service-item", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.2
}, "-=0.5");

// --- NAVBAR HIDE/SHOW ON SCROLL ---

ScrollTrigger.create({
  trigger: ".what-we-do",
  start: "top top",
  end: "bottom top",
  onEnter: () => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    window.onscroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          if (nav.classList.contains("sticky-nav")) {
            nav.classList.add("nav-hidden");
          }
        } else {
          // Scrolling up
          if (nav.classList.contains("sticky-nav")) {
            nav.classList.remove("nav-hidden");
          }
        }
        lastScrollY = window.scrollY;
      }, 50); // Adjust timeout as needed
    };
  },
  onLeaveBack: () => {
    window.onscroll = null; // Disable the scroll listener when leaving the section
    if (nav.classList.contains("sticky-nav")) {
      nav.classList.remove("nav-hidden"); // Ensure nav is visible when returning to the hero section
    }
  }
});

// --- ACHIEVEMENTS SECTION ANIMATION ---

function animateValue(element, start, end, duration, originalText, isInt = true) {
  let startTimestamp = null;

  const prefix = originalText.match(/^[<]*/)?.[0] || '';
  const suffix = originalText.match(/[+>]*$/)?.[0] || '';

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    const randomValue = Math.random() * (end - start) + start;
    let currentValue = progress * end + (1 - progress) * randomValue;

    if (isInt) {
      element.innerHTML = prefix + Math.floor(currentValue) + suffix;
    } else {
      element.innerHTML = prefix + currentValue.toFixed(1) + suffix;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerHTML = originalText;
    }
  };
  window.requestAnimationFrame(step);
}

ScrollTrigger.create({
  trigger: ".achievements-section",
  start: "top 80%",
  onEnter: () => {
    document.querySelectorAll(".achievement-value").forEach(valueElement => {
      const originalText = valueElement.dataset.originalText;
      if (!originalText) return;

      const numberMatch = originalText.match(/(\d+(\.\d+)?)/);
      if (!numberMatch) return;

      const end = parseFloat(numberMatch[0]);
      const isInt = !originalText.includes('.');

      animateValue(valueElement, 0, end, 1000, originalText, isInt);
    });
  },
  once: true
});
