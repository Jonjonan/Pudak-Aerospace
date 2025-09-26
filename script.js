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
    copyright: "&copy; PT PUDAK SCIENTIFIC © 2025 All Rights Reserved",
    // Modal translations
    modal_close: "X Close",
    modal_manufacture_title: "Manufacture 4.0",
    modal_manufacture_subtitle: "Driving the Future of Smart Manufacturing",
    modal_manufacture_p1: "With more than 20 years of expertise in aerospace parts manufacturing, Pudak Aerospace is embracing the future through Manufacture 4.0. Starting in mid-2024, we began integrating digitalization and automation across every division, step by step, to transform our operations. This shift toward smart manufacturing enables us to improve efficiency, precision, and innovation at every stage of production. Our goal is to fully modernize our processes, ensuring we stay ahead in the aerospace industry while delivering superior quality and performance for our customers.",
    modal_manufacture_p2: "Our journey toward digital transformation is powered by two key innovations:",
    modal_manufacture_h4_1: "Odoo ERP Integration",
    modal_manufacture_p3: "We have implemented Odoo as our central digital platform to streamline operations, improve efficiency, and ensure real-time data visibility across all departments.",
    modal_manufacture_h4_2: "Sentry: Our Digital Transformation Platform",
    modal_manufacture_p4: "To further support modern manufacturing, we developed Sentry, a proprietary platform designed to enhance connectivity, improve workflow automation, and drive continuous improvement across our processes.",
    modal_manufacture_p5: "By combining Odoo ERP and Sentry, we are shaping a smarter, more efficient, and environmentally responsible future for our manufacturing operations.",
    modal_precision_title: "Precision Our Passion",
    modal_precision_subtitle: "Passion",
    modal_precision_p1: "At Pudak Aerospace, precision is more than just a goal—it's our passion. Every step of our manufacturing process, from concept and design to production and final inspection, is driven by an uncompromising commitment to accuracy and reliability, ensuring every aerospace part we produce exceeds industry standards.",
    modal_precision_p2: "Embracing the era of Industry 4.0, we integrate cutting-edge digital technologies such as advanced CAD/CAM systems, real-time data monitoring, and automated quality control to enhance every aspect of production. These innovations allow us to achieve unmatched consistency, reduce lead times, and maintain full traceability across the manufacturing cycle.",
    modal_precision_p3: "By combining our engineering expertise with digitalization, we not only improve efficiency but also ensure that each component meets the rigorous demands of modern aerospace engineering. This forward-thinking approach enables us to deliver solutions that not only meet today's requirements but also anticipate the needs of tomorrow's aerospace industry.",
    modal_precision_p4: "Above all, our mission goes beyond manufacturing. We are dedicated to building long-term partnerships with our clients, understanding their unique challenges, and delivering precision-driven solutions that empower them to reach new heights."
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
    copyright: "&copy; PT PUDAK SCIENTIFIC © 2025 Hak Cipta Dilindungi Undang-Undang",
    // Modal translations
    modal_close: "X Tutup",
    modal_manufacture_title: "Manufaktur 4.0",
    modal_manufacture_subtitle: "Mendorong Masa Depan Manufaktur Cerdas",
    modal_manufacture_p1: "Dengan pengalaman lebih dari 20 tahun di bidang manufaktur suku cadang dirgantara, Pudak Aerospace menyongsong masa depan melalui Manufaktur 4.0. Mulai pertengahan 2024, kami mulai mengintegrasikan digitalisasi dan otomatisasi di setiap divisi, selangkah demi selangkah, untuk mengubah operasi kami. Pergeseran menuju manufaktur cerdas ini memungkinkan kami untuk meningkatkan efisiensi, presisi, dan inovasi di setiap tahap produksi. Tujuan kami adalah untuk memodernisasi sepenuhnya proses kami, memastikan kami tetap terdepan dalam industri dirgantara sambil memberikan kualitas dan kinerja yang unggul bagi pelanggan kami.",
    modal_manufacture_p2: "Perjalanan kami menuju transformasi digital didukung oleh dua inovasi utama:",
    modal_manufacture_h4_1: "Integrasi Odoo ERP",
    modal_manufacture_p3: "Kami telah mengimplementasikan Odoo sebagai platform digital pusat kami untuk merampingkan operasi, meningkatkan efisiensi, dan memastikan visibilitas data waktu nyata di semua departemen.",
    modal_manufacture_h4_2: "Sentry: Platform Transformasi Digital Kami",
    modal_manufacture_p4: "Untuk lebih mendukung manufaktur modern, kami mengembangkan Sentry, sebuah platform berpemilik yang dirancang untuk meningkatkan konektivitas, meningkatkan otomatisasi alur kerja, dan mendorong perbaikan berkelanjutan di seluruh proses kami.",
    modal_manufacture_p5: "Dengan menggabungkan Odoo ERP dan Sentry, kami membentuk masa depan operasi manufaktur yang lebih cerdas, lebih efisien, dan bertanggung jawab terhadap lingkungan.",
    modal_precision_title: "Presisi Gairah Kami",
    modal_precision_subtitle: "Gairah",
    modal_precision_p1: "Di Pudak Aerospace, presisi lebih dari sekadar tujuan—itu adalah gairah kami. Setiap langkah proses manufaktur kami, mulai dari konsep dan desain hingga produksi dan inspeksi akhir, didorong oleh komitmen tanpa kompromi terhadap akurasi dan keandalan, memastikan setiap bagian dirgantara yang kami produksi melebihi standar industri.",
    modal_precision_p2: "Merangkul era Industri 4.0, kami mengintegrasikan teknologi digital mutakhir seperti sistem CAD/CAM canggih, pemantauan data waktu nyata, dan kontrol kualitas otomatis untuk menyempurnakan setiap aspek produksi. Inovasi-inovasi ini memungkinkan kami untuk mencapai konsistensi yang tak tertandingi, mengurangi waktu tunggu, dan menjaga ketertelusuran penuh di seluruh siklus manufaktur.",
    modal_precision_p3: "Dengan menggabungkan keahlian teknik kami dengan digitalisasi, kami tidak hanya meningkatkan efisiensi tetapi juga memastikan bahwa setiap komponen memenuhi tuntutan ketat dari rekayasa dirgantara modern. Pendekatan berwawasan ke depan ini memungkinkan kami untuk memberikan solusi yang tidak hanya memenuhi persyaratan hari ini tetapi juga mengantisipasi kebutuhan industri dirgantara masa depan.",
    modal_precision_p4: "Di atas segalanya, misi kami lebih dari sekadar manufaktur. Kami berdedikasi untuk membangun kemitraan jangka panjang dengan klien kami, memahami tantangan unik mereka, dan memberikan solusi berbasis presisi yang memberdayakan mereka untuk mencapai ketinggian baru."
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

    // --- MODAL LOGIC ---
    const readMoreManufacturingBtn = document.getElementById('read-more-manufacturing');
    const readMorePrecisionBtn = document.getElementById('read-more-precision');
    const readMoreCncBtn = document.getElementById('read-more-cnc');
    const readMoreEdmBtn = document.getElementById('read-more-edm');
    const readMoreMpiBtn = document.getElementById('read-more-mpi');

    const modalManufacturing = document.getElementById('modal-manufacturing');
    const modalPrecision = document.getElementById('modal-precision');
    const modalCnc = document.getElementById('modal-cnc');
    const modalEdm = document.getElementById('modal-edm');
    const modalMpi = document.getElementById('modal-mpi');

    const closeModalManufacturing = document.getElementById('close-manufacturing');
    const closeModalPrecision = document.getElementById('close-precision');
    const closeModalCnc = document.getElementById('close-cnc');
    const closeModalEdm = document.getElementById('close-edm');
    const closeModalMpi = document.getElementById('close-mpi');


    const openModal = (modal) => {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    readMoreManufacturingBtn.addEventListener('click', () => {
        openModal(modalManufacturing);
    });

    readMorePrecisionBtn.addEventListener('click', () => {
        openModal(modalPrecision);
    });

    readMoreCncBtn.addEventListener('click', () => {
        openModal(modalCnc);
    });

    readMoreEdmBtn.addEventListener('click', () => {
        openModal(modalEdm);
    });

    readMoreMpiBtn.addEventListener('click', () => {
        openModal(modalMpi);
    });


    closeModalManufacturing.addEventListener('click', () => {
        closeModal(modalManufacturing);
    });

    closeModalPrecision.addEventListener('click', () => {
        closeModal(modalPrecision);
    });

    closeModalCnc.addEventListener('click', () => {
        closeModal(modalCnc);
    });

    closeModalEdm.addEventListener('click', () => {
        closeModal(modalEdm);
    });

    closeModalMpi.addEventListener('click', () => {
        closeModal(modalMpi);
    });
    
    // Close modal if overlay is clicked
    window.addEventListener('click', (event) => {
        if (event.target === modalManufacturing) {
            closeModal(modalManufacturing);
        }
        if (event.target === modalPrecision) {
            closeModal(modalPrecision);
        }
        if (event.target === modalCnc) {
            closeModal(modalCnc);
        }
        if (event.target === modalEdm) {
            closeModal(modalEdm);
        }
        if (event.target === modalMpi) {
            closeModal(modalMpi);
        }
    });

    // --- SMOOTH SCROLL FOR EXPLORE BUTTON ---
    const exploreBtn = document.getElementById('explore-btn');
    exploreBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
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