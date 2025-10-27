// Configuration
const CONFIG = {
  artworkImages: [
    'assets/images/IMG_0471.JPG',
    'assets/images/IMG_0472.JPG',
    'assets/images/IMG_0474.JPG',
    'assets/images/IMG_0476.JPG',
    'assets/images/IMG_0477.JPG',
    'assets/images/IMG_0479.JPG',
    'assets/images/IMG_0481.JPG',
    'assets/images/IMG_0482.JPG',
    'assets/images/IMG_0485.JPG',
    'assets/images/IMG_0486.JPG',
    'assets/images/photo_2025-09-19_01-14-34.jpg',
    'assets/images/photo_2025-10-02_19-04-36.jpg',
    'assets/images/photo_2025-10-02_19-04-44.jpg',
    'assets/images/photo_2025-10-02_19-04-51.jpg',
    'assets/images/photo_2025-10-02_19-05-39.jpg',
    'assets/images/photo_2025-10-02_19-06-08.jpg',
    'assets/images/photo_2025-10-02_19-06-39.jpg',
    'assets/images/photo_2025-10-02_19-06-52.jpg',
    'assets/images/photo_2025-10-02_19-07-09.jpg',
    'assets/images/photo_2025-10-02_19-07-39.jpg',
    'assets/images/photo_2025-10-02_19-07-54.jpg',
    'assets/images/photo_2025-10-02_19-08-09.jpg',
    'assets/images/photo_2025-10-02_19-08-16.jpg'
  ],
  artworkAltTexts: [
    'Realistic portrait drawing with pen',
    'Detailed pencil drawing of a face',
    'Pen art with shading techniques',
    'Realistic eye drawing with pencil',
    'Portrait art with pen technique',
    'Detailed face study with pen',
    'Artwork with shading techniques',
    'Realistic drawing with precision',
    'Pencil portrait with details',
    'Pen artwork in profile',
    'Realistic hand drawing with pen',
    'Detailed portrait study',
    'Pen art with depth',
    'Pencil drawing with texture',
    'Realistic facial expressions',
    'Artwork with light and shadow',
    'Pen art in detail',
    'Pencil study with precision',
    'Realistic eye area',
    'Artwork with depth effect',
    'Portrait drawing with pen',
    'Realistic facial features',
    'Detailed pencil art'
  ]
};

// Translations
const translations = {
  en: {
    logoText: "Shima Gallery",
    navHome: "Home",
    navGallery: "Gallery",
    navAbout: "About Me",
    heroTitle: "Shima Gallery",
    heroSubtitle: "Realistic Artwork with Pen & Pencil ✏️",
    galleryTitle: "My Artworks",
    purchaseStrong: "Interested in purchasing an artwork?",
    purchaseDescription: "Use the + button to select artworks, then proceed to purchase to send your inquiry.",
    purchaseTitle: "Purchase Artworks",
    formTitle: "Order Inquiry Form",
    firstNameLabel: "First Name *",
    lastNameLabel: "Last Name *",
    emailLabel: "Email Address *",
    phoneLabel: "Phone Number",
    messageLabel: "Message",
    selectedArtworksTitle: "Selected Artworks:",
    submitButton: "Send Inquiry",
    sending: "Sending...",
    aboutTitle: "About Me",
    aboutText: "Hi, I'm Shima! I create realistic artwork using pen and pencil. Each piece is carefully crafted to capture detail and emotion. Thank you for visiting my gallery!",
    contactTitle: "Contact",
    contactText: "I'd love to hear from you! Whether you have questions about my artwork or want to discuss a custom piece, feel free to reach out.",
    emailBtn: "📧 Send Email",
    successTitle: "✓ Email Sent Successfully!",
    successText: "Your inquiry has been delivered. I will contact you soon via email.",
    emptyCart: "Your cart is empty. Please select artworks from the gallery.",
    backToGallery: "Back to Gallery",
    removeBtn: "Remove"
  },
  de: {
    logoText: "Shima Galerie",
    navHome: "Startseite",
    navGallery: "Galerie",
    navAbout: "Über Mich",
    heroTitle: "Shima Galerie",
    heroSubtitle: "Realistische Kunstwerke mit Stift & Bleistift ✏️",
    galleryTitle: "Meine Kunstwerke",
    purchaseStrong: "Interessiert an einem Kunstwerk?",
    purchaseDescription: "Verwenden Sie die + Schaltfläche, um Kunstwerke auszuwählen, und fahren Sie dann mit dem Kauf fort, um Ihre Anfrage zu senden.",
    purchaseTitle: "Kunstwerke Kaufen",
    formTitle: "Anfrage-Formular",
    firstNameLabel: "Vorname *",
    lastNameLabel: "Nachname *",
    emailLabel: "E-Mail-Adresse *",
    phoneLabel: "Telefonnummer",
    messageLabel: "Nachricht",
    selectedArtworksTitle: "Ausgewählte Kunstwerke:",
    submitButton: "Anfrage Senden",
    sending: "Wird gesendet...",
    aboutTitle: "Über Mich",
    aboutText: "Hallo, ich bin Shima! Ich erstelle realistische Kunstwerke mit Stift und Bleistift. Jedes Stück wird sorgfältig gefertigt, um Details und Emotionen einzufangen. Vielen Dank für Ihren Besuch in meiner Galerie!",
    contactTitle: "Kontakt",
    contactText: "Ich würde gerne von Ihnen hören! Ob Sie Fragen zu meinen Kunstwerken haben oder ein individuelles Stück besprechen möchten, zögern Sie nicht, mich zu kontaktieren.",
    emailBtn: "📧 E-Mail Senden",
    successTitle: "✓ E-Mail erfolgreich gesendet!",
    successText: "Ihre Anfrage wurde zugestellt. Ich werde Sie bald per E-Mail kontaktieren.",
    emptyCart: "Ihr Warenkorb ist leer. Bitte wählen Sie Kunstwerke aus der Galerie aus.",
    backToGallery: "Zurück zur Galerie",
    removeBtn: "Entfernen"
  },
  fa: {
    logoText: "گالری شیما",
    navHome: "خانه",
    navGallery: "گالری",
    navAbout: "درباره من",
    heroTitle: "گالری شیما",
    heroSubtitle: "آثار هنری واقع‌گرایانه با قلم و مداد ✏️",
    galleryTitle: "آثار هنری من",
    purchaseStrong: "علاقه‌مند به خرید یک اثر هنری هستید؟",
    purchaseDescription: "از دکمه + برای انتخاب آثار هنری استفاده کنید، سپس برای ارسال درخواست خود به بخش خرید بروید.",
    purchaseTitle: "خرید آثار هنری",
    formTitle: "فرم درخواست سفارش",
    firstNameLabel: "نام *",
    lastNameLabel: "نام خانوادگی *",
    emailLabel: "آدرس ایمیل *",
    phoneLabel: "شماره تلفن",
    messageLabel: "پیام",
    selectedArtworksTitle: "آثار هنری انتخاب شده:",
    submitButton: "ارسال درخواست",
    sending: "در حال ارسال...",
    aboutTitle: "درباره من",
    aboutText: "سلام، من شیما هستم! من آثار هنری واقع‌گرایانه با استفاده از قلم و مداد می‌سازم. هر اثر با دقت ساخته شده تا جزئیات و احساسات را به تصویر بکشد. از بازدید شما از گالری من متشکرم!",
    contactTitle: "تماس",
    contactText: "دوست دارم از شما بشنوم! خواه سوالاتی درباره آثار هنری من داشته باشید یا بخواهید درباره یک قطعه سفارشی صحبت کنید، با من در تماس باشید.",
    emailBtn: "📧 ارسال ایمیل",
    successTitle: "✓ ایمیل با موفقیت ارسال شد!",
    successText: "درخواست شما تحویل داده شد. به زودی از طریق ایمیل با شما تماس خواهم گرفت.",
    emptyCart: "سبد خرید شما خالی است. لطفاً آثار هنری را از گالری انتخاب کنید.",
    backToGallery: "بازگشت به گالری",
    removeBtn: "حذف"
  }
};

// State management
const state = {
  currentLanguage: 'en',
  selectedArtworks: [],
  currentLightboxIndex: 0,
  isMenuOpen: false
};

// DOM Elements cache
const elements = {
  menuToggle: document.getElementById('menuToggle'),
  navLinks: document.getElementById('navLinks'),
  languageSelect: document.getElementById('languageSelect'),
  cartCount: document.getElementById('cartCount'),
  cartItems: document.getElementById('cartItems'),
  orderForm: document.getElementById('orderForm'),
  selectedArtworksDisplay: document.getElementById('selectedArtworksDisplay'),
  artworkNumbers: document.getElementById('artworkNumbers'),
  contactForm: document.getElementById('contactForm'),
  successMessage: document.getElementById('successMessage'),
  purchaseContent: document.getElementById('purchaseContent'),
  lightbox: document.getElementById('lightbox'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxCounter: document.getElementById('lightboxCounter'),
  selectedArtworksInput: document.getElementById('selectedArtworks')
};

// Initialize the application
function init() {
  setupEventListeners();
  changeLanguage(); // Initialize translations
}

// Setup event listeners
function setupEventListeners() {
  // Menu toggle
  elements.menuToggle.addEventListener('click', toggleMenu);
  elements.menuToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Logo navigation
  document.getElementById('logoText').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showPage('home');
    }
  });

  // Form submission
  elements.contactForm.addEventListener('submit', handleSubmit);

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (elements.lightbox.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (state.isMenuOpen && 
        !elements.navLinks.contains(e.target) && 
        !elements.menuToggle.contains(e.target)) {
      closeMenu();
    }
  });
}

// Menu functions
function toggleMenu() {
  if (state.isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  elements.menuToggle.classList.add('active');
  elements.navLinks.classList.add('active');
  elements.menuToggle.setAttribute('aria-expanded', 'true');
  state.isMenuOpen = true;
}

function closeMenu() {
  elements.menuToggle.classList.remove('active');
  elements.navLinks.classList.remove('active');
  elements.menuToggle.setAttribute('aria-expanded', 'false');
  state.isMenuOpen = false;
}

// Language functions
function changeLanguage() {
  state.currentLanguage = elements.languageSelect.value;
  const t = translations[state.currentLanguage];

  // Update all translatable elements
  Object.keys(t).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });

  updateCartDisplay();
}

// Page navigation
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page-container').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const pageId = `${pageName}-page`;
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close menu
  closeMenu();

  // Update cart display if on purchase page
  if (pageName === 'purchase') {
    updateCartDisplay();
  }
}

// Artwork selection
function toggleArtworkSelection(artworkId, button) {
  const index = state.selectedArtworks.indexOf(artworkId);
  const galleryItem = button.closest('.gallery-item');
  
  if (index > -1) {
    state.selectedArtworks.splice(index, 1);
    button.classList.remove('selected');
    button.textContent = '+';
    galleryItem.classList.remove('selected');
  } else {
    state.selectedArtworks.push(artworkId);
    button.classList.add('selected');
    button.textContent = '✓';
    galleryItem.classList.add('selected');
  }
  
  updateCartCount();
  updateSelectedArtworksDisplay();
}

function updateCartCount() {
  elements.cartCount.textContent = state.selectedArtworks.length;
}

function updateSelectedArtworksDisplay() {
  if (state.selectedArtworks.length > 0) {
    elements.selectedArtworksDisplay.style.display = 'block';
    elements.artworkNumbers.innerHTML = state.selectedArtworks
      .sort((a, b) => a - b)
      .map(id => `<span class="artwork-number">#${id}</span>`)
      .join('');
  } else {
    elements.selectedArtworksDisplay.style.display = 'none';
  }
}

// Cart management
function updateCartDisplay() {
  const t = translations[state.currentLanguage];
  
  if (state.selectedArtworks.length === 0) {
    elements.cartItems.innerHTML = `
      <div class="empty-cart">
        <p>${t.emptyCart}</p>
        <button class="page-button" onclick="showPage('gallery')">${t.backToGallery}</button>
      </div>
    `;
    elements.orderForm.style.display = 'none';
  } else {
    elements.cartItems.innerHTML = state.selectedArtworks.sort((a, b) => a - b).map(id => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${CONFIG.artworkImages[id-1]}" alt="Artwork ${id}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-number">Artwork #${id}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${id})">${t.removeBtn}</button>
      </div>
    `).join('');
    elements.orderForm.style.display = 'block';
    updateSelectedArtworksDisplay();
  }
}

function removeFromCart(artworkId) {
  const index = state.selectedArtworks.indexOf(artworkId);
  if (index > -1) {
    state.selectedArtworks.splice(index, 1);
    
    const button = document.querySelector(`[data-artwork="${artworkId}"] .select-btn`);
    if (button) {
      button.classList.remove('selected');
      button.textContent = '+';
      button.closest('.gallery-item').classList.remove('selected');
    }
    
    updateCartCount();
    updateCartDisplay();
  }
}

// Form handling with Vercel + Resend
async function handleSubmit(event) {
  event.preventDefault();
  
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.textContent = translations[state.currentLanguage].sending || 'Sending...';
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const artworksList = state.selectedArtworks.sort((a, b) => a - b).join(', ');
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
        selectedArtworks: artworksList
      })
    });

    const result = await response.json();

    if (result.success) {
      // Show success message
      elements.purchaseContent.style.display = 'none';
      elements.successMessage.style.display = 'block';
      elements.successMessage.classList.add('show');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error sending your inquiry. Please try again or contact us directly via email.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = translations[state.currentLanguage].submitButton;
  }
}

function resetForm() {
  elements.contactForm.reset();
  state.selectedArtworks = [];
  
  document.querySelectorAll('.select-btn').forEach(btn => {
    btn.classList.remove('selected');
    btn.textContent = '+';
  });
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  updateCartCount();
  elements.successMessage.classList.remove('show');
  elements.successMessage.style.display = 'none';
  elements.purchaseContent.style.display = 'block';
  
  showPage('gallery');
}

// Lightbox functions
function openLightbox(index) {
  state.currentLightboxIndex = index - 1;
  elements.lightboxImg.src = CONFIG.artworkImages[state.currentLightboxIndex];
  elements.lightboxImg.alt = CONFIG.artworkAltTexts[state.currentLightboxIndex];
  elements.lightbox.classList.add('open');
  document.body.classList.add('lb-lock');
  updateLightboxCounter();
}

function closeLightbox() {
  elements.lightbox.classList.remove('open');
  document.body.classList.remove('lb-lock');
}

function nextImage() {
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % CONFIG.artworkImages.length;
  elements.lightboxImg.src = CONFIG.artworkImages[state.currentLightboxIndex];
  elements.lightboxImg.alt = CONFIG.artworkAltTexts[state.currentLightboxIndex];
  updateLightboxCounter();
}

function prevImage() {
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + CONFIG.artworkImages.length) % CONFIG.artworkImages.length;
  elements.lightboxImg.src = CONFIG.artworkImages[state.currentLightboxIndex];
  elements.lightboxImg.alt = CONFIG.artworkAltTexts[state.currentLightboxIndex];
  updateLightboxCounter();
}

function updateLightboxCounter() {
  elements.lightboxCounter.textContent = 
    `${state.currentLightboxIndex + 1} / ${CONFIG.artworkImages.length}`;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
