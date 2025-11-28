// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. BAHASA & TERJEMAHAN
    // =========================================
    const langToggle = document.getElementById("langToggle");
    
    const translations = {
        en: {
            nav_about: "About",
            nav_services: "Services",
            nav_news: "News",
            nav_certificate: "Certificate",
            partner_btn: "Become Partner",
            welcome_to: "WELCOME TO",
            company_name: "PUDAK AEROSPACE",
            explore_btn: "Explore Our Service",
            certificate_btn: "Our Certificate",
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
            reliability_p: "On-time delivery rate with consistent quality",
            global_reach_title: "Global Reach",
            global_reach_p: "Serving aerospace companies across 13+ countries",
            active_part_numbers: "Active<br>Part Numbers",
            on_time_delivery: "On Time<br>Delivery",
            part_per_minutes: "Part<br>per Minutes",
            countries_served: "Countries<br>Served",
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
            back_to_top: "Back to top ⤴",
            copyright: "PT PUDAK SCIENTIFIC © 2025 All Rights Reserved",
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
            modal_precision_p4: "Above all, our mission goes beyond manufacturing. We are dedicated to building long-term partnerships with our clients, understanding their unique challenges, and delivering precision-driven solutions that empower them to reach new heights.",
            // Modal Tech
            modal_cnc_title: "CNC: 5 Axis Machining",
            modal_cnc_subtitle: "High Precision",
            modal_cnc_p1: "At Pudak Aerospace, we utilize advanced 5-axis machining technology to deliver precision parts faster and more efficiently. Key advantages include:",
            modal_edm_title: "EDM (Electrical Discharge Machining)",
            modal_edm_subtitle: "Complex Geometry",
            modal_edm_p1: "At Pudak Aerospace, we use advanced Electrical Discharge Machining (EDM) technology to produce high-precision components with complex shapes that traditional machining cannot achieve.",
            modal_mpi_title: "MPI (Magnetic Particle Inspection)",
            modal_mpi_subtitle: "Quality Control",
            modal_mpi_p1: "At Pudak Aerospace, ensuring the integrity and reliability of every component is paramount. Magnetic Particle Inspection (MPI) is a critical nondestructive testing (NDT) method."
        },
        id: {
            nav_about: "Tentang",
            nav_services: "Layanan",
            nav_news: "Berita",
            nav_certificate: "Sertifikat",
            partner_btn: "Jadi Mitra",
            welcome_to: "SELAMAT DATANG DI",
            company_name: "PUDAK AEROSPACE",
            explore_btn: "Jelajahi Layanan",
            certificate_btn: "Sertifikat Kami",
            what_we_do_title: "Apa yang kami lakukan",
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
            read_more: "Baca lebih lanjut",
            precision_passion_title: "Presisi Gairah Kami",
            precision_passion_p: "Di Pudak Aerospace, presisi lebih dari sekadar tujuan—itu adalah hasrat kami. Setiap langkah proses manufaktur kami, mulai dari konsep dan desain hingga produksi dan pemeriksaan akhir, didorong oleh komitmen tanpa kompromi terhadap akurasi dan keandalan.",
            excellence_achieved_title: "Keunggulan Tercapai",
            excellence_achieved_subtitle: "Ketika kualitas dan ketepatan waktu hidup berdampingan",
            precision_title: "Presisi",
            precision_p: "Akurasi tingkat mikron di setiap komponen yang kami produksi",
            quality_title: "Kualitas",
            quality_p: "Kepatuhan terhadap standar internasional dan pengujian yang ketat",
            reliability_title: "Keandalan",
            reliability_p: "Tingkat pengiriman tepat waktu dengan kualitas yang konsisten",
            global_reach_title: "Jangkauan Global",
            global_reach_p: "Melayani perusahaan dirgantara di lebih dari 13 negara",
            active_part_numbers: "Nomor Bagian<br>Aktif",
            on_time_delivery: "Pengiriman<br>Tepat Waktu",
            part_per_minutes: "Bagian<br>per Menit",
            countries_served: "Negara<br>yang Dilayani",
            valued_partners_title: "Mitra Berharga Kami",
            valued_partners_p: "Hubungan yang kuat dibangun atas dasar kepercayaan, kualitas, dan kinerja yang telah terbukti.",
            ready_to_work_title: "Siap Bekerja Sama?",
            ready_to_work_p: "Hubungi kami hari ini untuk mendiskusikan kebutuhan kedirgantaraan Anda dan temukan bagaimana kami dapat membantu mewujudkan proyek Anda.",
            contact_address: "Jl. Mekar Raya Kav. 12, Bandung 40614 - Indonesia",
            get_in_touch: "Hubungi Kami",
            form_name: "Nama",
            form_company: "Perusahaan",
            form_email: "Alamat Email",
            form_message: "Pesan Anda",
            send_message: "Kirim Pesan",
            footer_about_p: "PT Pudak Scientific adalah perusahaan mapan dan berkembang pesat yang berspesialisasi dalam pembuatan komponen dirgantara presisi tinggi.",
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
            back_to_top: "Kembali ke atas ⤴",
            copyright: "PT PUDAK SCIENTIFIC © 2025 Hak Cipta Dilindungi Undang-Undang",
            // Modal translations
            modal_close: "X Tutup",
            modal_manufacture_title: "Manufaktur 4.0",
            modal_manufacture_subtitle: "Mendorong Masa Depan Manufaktur Cerdas",
            modal_manufacture_p1: "Dengan pengalaman lebih dari 20 tahun di bidang manufaktur suku cadang dirgantara, Pudak Aerospace menyongsong masa depan melalui Manufaktur 4.0. Mulai pertengahan 2024, kami mulai mengintegrasikan digitalisasi dan otomatisasi di setiap divisi, selangkah demi selangkah, untuk mengubah operasi kami.",
            modal_manufacture_p2: "Perjalanan kami menuju transformasi digital didukung oleh dua inovasi utama:",
            modal_manufacture_h4_1: "Integrasi Odoo ERP",
            modal_manufacture_p3: "Kami telah mengimplementasikan Odoo sebagai platform digital pusat kami untuk merampingkan operasi, meningkatkan efisiensi, dan memastikan visibilitas data waktu nyata di semua departemen.",
            modal_manufacture_h4_2: "Sentry: Platform Transformasi Digital Kami",
            modal_manufacture_p4: "Untuk lebih mendukung manufaktur modern, kami mengembangkan Sentry, sebuah platform berpemilik yang dirancang untuk meningkatkan konektivitas, meningkatkan otomatisasi alur kerja, dan mendorong perbaikan berkelanjutan di seluruh proses kami.",
            modal_manufacture_p5: "Dengan menggabungkan Odoo ERP dan Sentry, kami membentuk masa depan operasi manufaktur yang lebih cerdas, lebih efisien, dan bertanggung jawab terhadap lingkungan.",
            modal_precision_title: "Presisi Gairah Kami",
            modal_precision_subtitle: "Gairah",
            modal_precision_p1: "Di Pudak Aerospace, presisi lebih dari sekadar tujuan—itu adalah gairah kami. Setiap langkah proses manufaktur kami, mulai dari konsep dan desain hingga produksi dan inspeksi akhir, didorong oleh komitmen tanpa kompromi terhadap akurasi dan keandalan.",
            modal_precision_p2: "Merangkul era Industri 4.0, kami mengintegrasikan teknologi digital mutakhir seperti sistem CAD/CAM canggih, pemantauan data waktu nyata, dan kontrol kualitas otomatis untuk menyempurnakan setiap aspek produksi.",
            modal_precision_p3: "Dengan menggabungkan keahlian teknik kami dengan digitalisasi, kami tidak hanya meningkatkan efisiensi tetapi juga memastikan bahwa setiap komponen memenuhi tuntutan ketat dari rekayasa dirgantara modern.",
            modal_precision_p4: "Di atas segalanya, misi kami lebih dari sekadar manufaktur. Kami berdedikasi untuk membangun kemitraan jangka panjang dengan klien kami, memahami tantangan unik mereka, dan memberikan solusi berbasis presisi yang memberdayakan mereka untuk mencapai ketinggian baru.",
            // Modal Tech
            modal_cnc_title: "CNC: Pemesinan 5 Sumbu",
            modal_cnc_subtitle: "Presisi Tinggi",
            modal_cnc_p1: "Di Pudak Aerospace, kami memanfaatkan teknologi pemesinan 5 sumbu canggih untuk menghasilkan suku cadang presisi lebih cepat dan lebih efisien.",
            modal_edm_title: "EDM (Pemesinan Pelepasan Listrik)",
            modal_edm_subtitle: "Geometri Kompleks",
            modal_edm_p1: "Di Pudak Aerospace, kami menggunakan teknologi Electrical Discharge Machining (EDM) canggih untuk memproduksi komponen presisi tinggi dengan bentuk kompleks.",
            modal_mpi_title: "MPI (Inspeksi Partikel Magnetik)",
            modal_mpi_subtitle: "Kontrol Kualitas",
            modal_mpi_p1: "Di Pudak Aerospace, memastikan integritas dan keandalan setiap komponen adalah hal yang terpenting."
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        const langText = document.querySelector("#langToggle .lang-text");
        if(langText) langText.textContent = lang.toUpperCase();

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

    // Init Language
    let currentLang = localStorage.getItem('lang');
    if (!currentLang) {
        const deviceLang = navigator.language || navigator.userLanguage; 
        currentLang = deviceLang.startsWith('id') ? 'id' : 'en';
    }
    setLanguage(currentLang);

    if(langToggle) {
        langToggle.addEventListener("click", () => {
            const currentLang = localStorage.getItem('lang') || 'id';
            const newLang = currentLang === "en" ? "id" : "en";
            setLanguage(newLang);
        });
    }


    // =========================================
    // 2. NAVBAR & SCROLL LOGIC (COMBINED)
    // =========================================
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('navMenu'); 
    const heroSection = document.querySelector('.hero');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // --- A. NAVBAR HIDE/SHOW ---
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        const isMobile = window.innerWidth <= 968;
        
        // Jika menu sedang terbuka, jangan sembunyikan navbar
        if (!mobileMenu.classList.contains('active')) {
            // Logic Trigger: Desktop = Hero Height, Mobile = 50px
            const triggerPoint = isMobile ? 50 : (heroHeight - 100); 

            if (scrollTop > 50) {
                if (scrollTop > lastScrollTop && scrollTop > triggerPoint) {
                    navbar.classList.remove('scrolled-up');
                    navbar.classList.add('scrolled-down');
                } else if (scrollTop < lastScrollTop) {
                    navbar.classList.remove('scrolled-down');
                    navbar.classList.add('scrolled-up');
                }
            } else {
                navbar.classList.remove('scrolled-up', 'scrolled-down');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        // --- B. SCROLL INDICATOR (FADE OUT) ---
        if (scrollIndicator && heroSection) {
            // Hilang setelah 25% scroll hero
            let threshold = heroSection.offsetHeight * 0.25;
            if (scrollTop > threshold) {
                scrollIndicator.classList.add('hidden');
            }
        }
    });


    // =========================================
    // 3. HAMBURGER MENU
    // =========================================
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu"); 

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }


    // =========================================
    // 4. HERO SLIDER & TEXT ROTATOR
    // =========================================
    // Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        if(slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    if(slides.length > 0) setInterval(nextSlide, 5000);

    // Text Rotator
    const list = document.getElementById('philosophyList');
    if (list) {
        const items = list.getElementsByTagName('li');
        let currentIndex = 0;
        const totalItems = items.length; 

        function rotateText() {
            // Hitung ulang setiap kali jalan agar responsif
            const isMobile = window.innerWidth < 968;
            const itemHeight = isMobile ? 3 : 5; // CSS: 3rem (Mobile), 5rem (Desktop)

            currentIndex++;
            list.style.transition = 'top 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
            list.style.top = `-${currentIndex * itemHeight}rem`;

            if (currentIndex === totalItems - 1) {
                setTimeout(() => {
                    list.style.transition = 'none';
                    currentIndex = 0;
                    list.style.top = '0rem';
                }, 500); 
            }
        }
        setInterval(rotateText, 3000);
    }


    // =========================================
    // 5. ANIMASI GSAP (SCROLL TRIGGER)
    // =========================================
    const whatWeDo_tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".what-we-do",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    });

    whatWeDo_tl.from(".what-we-do .section-header", { opacity: 0, y: 50, duration: 0.6 })
               .from(".airplane-img", { opacity: 0, x: -100, duration: 1 }, "-=0.3")
               .from(".service-item", { opacity: 0, y: 30, duration: 0.5, stagger: 0.2 }, "-=0.5");


    // =========================================
    // 6. MODAL LOGIC (FINAL & FIX)
    // =========================================
    const openModal = (modal) => { 
      if (modal) { 
          // FIX: Tutup Menu Hamburger jika sedang terbuka
          const navMenu = document.getElementById("navMenu");
          const hamburger = document.getElementById("hamburger");
          if (navMenu.classList.contains('active')) {
              navMenu.classList.remove('active');
              hamburger.classList.remove('active');
          }

          // Buka Modal
          modal.style.display = 'flex'; 
          document.body.classList.add('modal-open'); 
      } 
  }
    
    const closeModal = (modal) => { 
        if (modal) { 
            modal.style.display = 'none'; 
            document.body.classList.remove('modal-open'); 
        } 
    }

    const modals = {
        'read-more-manufacturing': 'modal-manufacturing',
        'read-more-precision': 'modal-precision',
        'read-more-cnc': 'modal-cnc',
        'read-more-edm': 'modal-edm',
        'read-more-mpi': 'modal-mpi',
        'certDesktop': 'certificateModal', 
        'certMobile': 'certificateModal',  
        'openPartner': 'partnerModal',
        'openPartnerMobile': 'partnerModal'
    };

    const closeBtns = {
        'close-manufacturing': 'modal-manufacturing',
        'close-precision': 'modal-precision',
        'close-cnc': 'modal-cnc',
        'close-edm': 'modal-edm',
        'close-mpi': 'modal-mpi',
        'closeCertificate': 'certificateModal',
        'closePartnerModal': 'partnerModal'
    };

    // Attach Open Events
    for (const [btnId, modalId] of Object.entries(modals)) {
      const btn = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      
      if(btn && modal) {
          btn.addEventListener('click', (e) => { 
              e.preventDefault(); 
              // Panggil fungsi openModal yang sudah kita update di atas
              openModal(modal); 
          });
      }
  }

    // Attach Close Events
    for (const [btnId, modalId] of Object.entries(closeBtns)) {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);
        if(btn && modal) btn.addEventListener('click', () => closeModal(modal));
    }

    // Close on overlay click
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-overlay-b')) {
            closeModal(e.target);
        }
    });

}); // End DOMContentLoaded


// =========================================
// 7. FAVICON PULSE (Optional)
// =========================================
(function() {
    const favicon = document.querySelector("link[rel='icon']");
    if(!favicon) return;
    const originalHref = favicon.getAttribute("href");
    const canvas = document.createElement("canvas");
    const size = 64; 
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = originalHref;
  
    let scale = 1, growing = true, animationFrame;
  
    img.onload = () => {
        function draw() {
          ctx.clearRect(0, 0, size, size);
          ctx.save();
          ctx.translate(size / 2, size / 2);
          ctx.scale(scale, scale);
          ctx.drawImage(img, -size / 2, -size / 2, size, size);
          ctx.restore();
          favicon.href = canvas.toDataURL("image/png");
  
          if (growing) { scale += 0.005; if (scale >= 1.08) growing = false; } 
          else { scale -= 0.005; if (scale <= 0.94) growing = true; }
          animationFrame = requestAnimationFrame(draw);
        }
        function startPulse() { if (!animationFrame) draw(); }
        function stopPulse() { cancelAnimationFrame(animationFrame); animationFrame = null; favicon.href = originalHref; }
        
        document.addEventListener("visibilitychange", () => { if (document.hidden) stopPulse(); else startPulse(); });
        startPulse();
    }
  })();
