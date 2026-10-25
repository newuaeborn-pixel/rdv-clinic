/* ==========================================================================
   RENDEZ-VOUS LUXURY CLINIC - INTERACTIVE ENGINE & MULTI-LANGUAGE
   ========================================================================== */

const translations = {
  en: {
    logo_sub: "AESTHETICS & DERMATOLOGY • DUBAI",
    nav_home: "Home", nav_about: "About Us", nav_services: "Services",
    nav_doctors: "Doctors", nav_gallery: "Gallery", nav_contact: "Contact",
    btn_book: "Book Now", hero_badge: "Premier Aesthetic Clinic in Dubai",
    hero_title: "Redefine Your Beauty With Clinical Precision",
    hero_subtitle: "Experience non-surgical facelifts, advanced laser rejuvenation, dermal fillers, and personalized dermatological care from Dubai's leading specialists.",
    hero_btn_book: "Book Consultation", hero_btn_explore: "Explore Services",
    feat_1_title: "Expert Doctors", feat_1_desc: "DHA Certified Specialists",
    feat_2_title: "FDA Tech", feat_2_desc: "Medical Grade Lasers",
    feat_3_title: "Tailored Care", feat_3_desc: "Personalized Skincare Plan",
    feat_4_title: "Luxury Clinic", feat_4_desc: "Downtown Dubai Atmosphere",
    about_tag: "WHO WE ARE", about_title: "Where Medical Science Meets Timeless Beauty",
    about_desc: "At Rendez-Vous Aesthetics & Dermatology, located in Dubai, we combine advanced skincare technologies with specialized medical expertise to restore and accentuate your natural features in a calming, ultra-luxurious setting.",
    stat_1: "Happy Patients", stat_2: "Years Experience", stat_3: "Safety Standard",
    serv_tag: "OUR SERVICES", serv_title: "Bespoke Aesthetics & Treatments",
    serv_desc: "Discover our comprehensive range of specialized medical treatments and non-surgical procedures.",
    filter_all: "All Treatments", filter_injectables: "Injectables & Fillers", filter_facials: "Facials & Skin", filter_laser: "Laser & Hair", filter_body: "Body Contouring",
    card_btn: "Book Treatment",
    s1_title: "Dermal & Lip Fillers", s1_desc: "Natural volume restoration, lip sculpting, and non-surgical cheek bone contouring.",
    s2_title: "Aesthetic Botox & Nefertiti", s2_desc: "Smooth expression lines, jawline slimming, neck lift, and hyperhidrosis anti-sweat treatment.",
    s3_title: "Clinical HydraFacial", s3_desc: "Painless deep cleansing, exfoliation, blackhead extraction, and vitamin antioxidant infusion.",
    s4_title: "Painless Laser Hair Removal", s4_desc: "Cooling diode laser tech for smooth hairless skin on all skin tones and sensitive areas.",
    s5_title: "Hair Loss & Scalp PRP", s5_desc: "Follicle revitalizing injections, PRP therapy, and hair density regrowth stimulation.",
    s6_title: "Body Sculpting & Fat Dissolve", s6_desc: "Targeted lipolysis, body fillers, cellulite reduction, and skin tightening.",
    doc_tag: "MEDICAL TEAM", doc_title: "Meet Our Lead Specialists",
    doc_spec: "General Practitioner & Aesthetic Physician", doc_bio: "Specialized in facial rejuvenation, non-surgical thread lifts, dermal sculpting, and advanced dermatology treatments.",
    gal_tag: "CLINIC & RESULTS", gal_title: "Interactive Clinic Showcase",
    foot_contact: "Contact Us", foot_hours: "Working Hours",
    footer_desc: "Dubai's leading luxury aesthetic and dermatology sanctuary. Enhancing natural beauty with gold-standard medical precision and FDA-cleared technologies.",
    foot_links: "Quick Links",
    foot_address: "Jumeirah Beach Road, Dubai, UAE",
    foot_time_1: "Mon - Sat: 10:00 AM - 8:00 PM",
    foot_time_2: "Sunday: By Appointment Only",
    foot_privacy: "Privacy Policy",
    foot_terms: "Terms of Service",
    foot_dha: "Licensed by Dubai Health Authority (DHA)",
    modal_title: "Book Consultation", modal_sub: "Fill in your details below to schedule your visit with our doctors.",
    lbl_name: "Full Name *", lbl_phone: "Phone / WhatsApp Number *", lbl_service: "Select Service", btn_submit: "Confirm Booking"
  },
  ar: {
    logo_sub: "التجميل والأمراض الجلدية • دبي",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا",
    nav_doctors: "أطباؤنا", nav_gallery: "معرض الصور", nav_contact: "اتصل بنا",
    btn_book: "احجز الآن", hero_badge: "عيادة التجميل الرائدة في دبي",
    hero_title: "أعيدي تعريف جمالك بدقة طبية عالية",
    hero_subtitle: "احصلي على شد الوجه غير الجراحي، نضارة الليزر المتقدمة، الفيلر والتجميل الطبي المخصص من نخبة أطباء دبي.",
    hero_btn_book: "احجزي استشارة", hero_btn_explore: "استكشفي الخدمات",
    feat_1_title: "أطباء خبراء", feat_1_desc: "معتمدون من هيئة الصحة بدبي",
    feat_2_title: "تقنيات معتمدة", feat_2_desc: "أجهزة ليزر طبية حديثة",
    feat_3_title: "رعاية مخصصة", feat_3_desc: "خطة عناية بالبشرة تناسبك",
    feat_4_title: "عيادة فاخرة", feat_4_desc: "أجواء راقية في وسط مدينة دبي",
    about_tag: "من نحن", about_title: "حيث يلتقي العلم الطبي بالجمال الخالد",
    about_desc: "في عيادة رانديفو للتجميل والأمراض الجلدية بدبي، نجمع بين أحدث تقنيات البشرة والخبرة الطبية المتخصصة لاستعادة وإبراز ملامحك الطبيعية في أجواء فاخرة.",
    stat_1: "مريض سعيد", stat_2: "سنوات خبرة", stat_3: "معايير السلامة",
    serv_tag: "خدماتنا", serv_title: "علاجات تجميلية طبية مخصصة",
    serv_desc: "اكتشفي مجموعتنا الشاملة من العلاجات الإجراءات الطبية المتقدمة.",
    filter_all: "جميع العلاجات", filter_injectables: "حقن وفيلر", filter_facials: "جلسات البشرة", filter_laser: "الليزر والشعر", filter_body: "نحت الجسم",
    card_btn: "احجز الجلسة",
    s1_title: "فيلر الشفايف والوجه", s1_desc: "استعادة الحجم الطبيعي، تحديد الشفاه ونحت الخدود بدقة.",
    s2_title: "بوتوكس التجميل ونفرتيتي", s2_desc: "تنعيم التجاعيد، تحديد الفك وعلاج فرط التعرق.",
    s3_title: "هايدرافيشل طبي", s3_desc: "تنظيف عميق، تقشير بدون ألم وإمداد البشرة بالفيتامينات.",
    s4_title: "إزالة الشعر بالليزر", s4_desc: "تقنية ليزر مزودة بالتبريد لبشرة ناعمة لجميع أنواع البشرة.",
    s5_title: "علاج تساقط الشعر BRP", s5_desc: "حقن تحفيز البصيلات وتحفيز نمو الشعر الطبيعي.",
    s6_title: "تذويب الدهون ونحت الجسم", s6_desc: "علاج السيلوليت، تذويب الدهون الموضعي وشد الجلد.",
    doc_tag: "الفريق الطبي", doc_title: "تعرفي على طبيبتنا المختصة",
    doc_spec: "طبيبة عامة وأخصائية تجميل", doc_bio: "متخصصة في تجديد شباب الوجه، الشد غير الجراحي، نحت الوجه وعلاجات الأمراض الجلدية المتقدمة.",
    gal_tag: "العيادة والنتائج", gal_title: "معرض الصور التفاعلي",
    foot_contact: "تواصل معنا", foot_hours: "ساعات العمل",
    footer_desc: "وجهتك الأولى للتجميل والعناية بالبشرة في دبي. تعزيز الجمال الطبيعي بدقة طبية معيارية والتقنيات المعتمدة.",
    foot_links: "روابط سريعة",
    foot_address: "شارع شاطئ جميرا، دبي، الإمارات",
    foot_time_1: "الإثنين - السبت: 10:00 صباحاً - 8:00 مساءً",
    foot_time_2: "الأحد: بالمواعيد المسبقة فقط",
    foot_privacy: "سياسة الخصوصية",
    foot_terms: "شروط الخدمة",
    foot_dha: "مرخص من هيئة الصحة بدبي (DHA)",
    modal_title: "حجز موعد", modal_sub: "أدخلي بياناتك أدناه لتحديد موعد زيارتك مع أطبائنا.",
    lbl_name: "الاسم الكامل *", lbl_phone: "رقم الهاتف / الواتساب *", lbl_service: "اختر الخدمة", btn_submit: "تأكيد الحجز"
  },
  fr: {
    logo_sub: "ESTHÉTIQUE & DERMATOLOGIE • DUBAÏ",
    nav_home: "Accueil", nav_about: "À Propos", nav_services: "Services",
    nav_doctors: "Médecins", nav_gallery: "Galerie", nav_contact: "Contact",
    btn_book: "Réserver", hero_badge: "Clinique Esthétique de Premier Plan à Dubaï",
    hero_title: "Redéfinissez Votre Beauté Avec Précision Médicale",
    hero_subtitle: "Lifting non chirurgical, rajeunissement laser, injections d'acide hyaluronique et soins dermatologiques personnalisés.",
    hero_btn_book: "Réserver Consultation", hero_btn_explore: "Explorer Services",
    feat_1_title: "Médecins Experts", feat_1_desc: "Spécialistes Certifiés DHA",
    feat_2_title: "Technologies FDA", feat_2_desc: "Lasers de Niveau Médical",
    feat_3_title: "Soins Sur-Mesure", feat_3_desc: "Plan de Soin Personnalisé",
    feat_4_title: "Clinique de Luxe", feat_4_desc: "Atmosphère Centre-Ville Dubaï",
    about_tag: "QUI SOMMES-NOUS", about_title: "Quand la Science Médicale Rencontre la Beauté",
    about_desc: "À la clinique Rendez-Vous à Dubaï, nous combinons des technologies de pointe avec une expertise médicale spécialisée pour sublimer votre beauté naturelle.",
    stat_1: "Patients Satisfaits", stat_2: "Années d'Expérience", stat_3: "Standard de Sécurité",
    serv_tag: "NOS SERVICES", serv_title: "Traitements Esthétiques Sur Mesure",
    serv_desc: "Découvrez notre gamme complète de soins médicaux spécialisés.",
    filter_all: "Tous les Soins", filter_injectables: "Injectables & Fillers", filter_facials: "Soins du Visage", filter_laser: "Laser & Cheveux", filter_body: "Contour du Corps",
    card_btn: "Réserver Soin",
    s1_title: "Injections & Fillers Lèvres", s1_desc: "Restauration du volume naturel, sculpture des lèvres et des pommettes.",
    s2_title: "Botox Esthétique & Néfertiti", s2_desc: "Lissage des rides d'expression, affinement du visage et anti-transpiration.",
    s3_title: "HydraFacial Médical", s3_desc: "Nettoyage en profondeur, exfoliation douce et infusion d'antioxydants.",
    s4_title: "Épilation Laser Indolore", s4_desc: "Technologie laser à refroidissement pour une peau douce sur tous types de peau.",
    s5_title: "Traitement Anti-Chute PRP", s5_desc: "Injections revitalisantes pour stimuler la repousse des cheveux.",
    s6_title: "Remodelage Corporel & Lipolyse", s6_desc: "Ciblage de la cellulite, dissolution des graisses et fermeté de la peau.",
    doc_tag: "ÉQUIPE MÉDICALE", doc_title: "Rencontrez Notre Spécialiste",
    doc_spec: "Médecin Généraliste & Esthétique", doc_bio: "Spécialisée en rajeunissement du visage, lifting non chirurgical, sculpture dermique et dermatologie avancée.",
    gal_tag: "CLINIQUE & RÉSULTATS", gal_title: "Galerie Interactive",
    foot_contact: "Contactez-Nous", foot_hours: "Heures d'Ouverture",
    footer_desc: "Le sanctuaire de beauté et d'esthétique médicale à Dubaï. Sublimer la beauté naturelle avec précision et technologies homologuées FDA.",
    foot_links: "Liens Rapides",
    foot_address: "Jumeirah Beach Road, Dubaï, EAU",
    foot_time_1: "Lun - Sam : 10h00 - 20h00",
    foot_time_2: "Dimanche : Sur Rendez-vous",
    foot_privacy: "Politique de Confidentialité",
    foot_terms: "Conditions d'Utilisation",
    foot_dha: "Certifié par l'Autorité de Santé de Dubaï (DHA)",
    modal_title: "Prendre Rendez-Vous", modal_sub: "Remplissez vos informations ci-dessous pour planifier votre visite.",
    lbl_name: "Nom Complet *", lbl_phone: "Téléphone / WhatsApp *", lbl_service: "Sélectionner Service", btn_submit: "Confirmer Rendez-Vous"
  }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangDropdown();
});

// Mobile Hamburger & Mobile Drawer Controls
function initNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      if (mobileDrawer) {
        mobileDrawer.classList.toggle('open');
      } else if (navMenu) {
        navMenu.classList.toggle('active');
      }
    });
  }

  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link');
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn?.classList.remove('open');
      mobileDrawer?.classList.remove('open');
      navMenu?.classList.remove('active');
    });
  });
}

// Multi-Language Dropdown Engine
function initLangDropdown() {
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;

  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    const langNames = { en: 'English', ar: 'العربية', fr: 'Français' };
    currentLangSpan.textContent = langNames[lang];
  }

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.remove('active');
  });
  const activeOpt = document.querySelector(`.lang-option[onclick*="'${lang}'"]`);
  if (activeOpt) activeOpt.classList.add('active');

  const langMenu = document.getElementById('langMenu');
  langMenu?.classList.remove('show');
}

// Services Filter System
function filterServices(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Doctors Carousel Sliding Logic
function slideDoctors(direction) {
  const slider = document.getElementById('doctorsSlider');
  if (!slider) return;
  
  const cardWidth = slider.querySelector('.doctor-card').offsetWidth + 32;
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

// Toggle Side Floating Widgets
const sideWidgets = document.getElementById('sideWidgets');
const mainTriggerBtn = document.getElementById('mainTriggerBtn');

if (mainTriggerBtn && sideWidgets) {
  mainTriggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sideWidgets.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    sideWidgets.classList.remove('active');
  });
}

// Booking Modal Logic
function openBookingModal(serviceName = '') {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('modalServiceSelect');
  if (serviceName && select) {
    select.value = serviceName;
  }
  modal?.classList.add('active');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal?.classList.remove('active');
}

function handleBookingSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  showToast(
    currentLanguage === 'ar' 
      ? 'تم استلام طلبك بنجاح! سيتواصل معك فريقنا قريباً.' 
      : currentLanguage === 'fr' 
      ? 'Demande reçue avec succès! Notre équipe vous contactera sous peu.' 
      : 'Booking request received! Our team will contact you shortly.'
  );
  e.target.reset();
}

// Lightbox Showcase
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  if (lightbox && img) {
    img.src = imgSrc;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  lightbox?.classList.remove('active');
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-gold);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}