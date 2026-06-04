// ============================================
// NAVBAR MOBILE TOGGLE
// ============================================

const navbarToggle = document.getElementById('navbarToggle');
const navMenu = document.getElementById('navMenu');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú cuando se hace clic en un link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Cerrar otros items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abrir o cerrar el item actual
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // ✅ FIX: Protección contra doble clic
        if (submitBtn.disabled) return;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const mensaje = contactForm.querySelector('textarea').value;

        // Validar campos
        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor completa todos los campos');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
            return;
        }

        // Crear mensaje para WhatsApp
        const whatsappMessage = `
Hola MJK Abogados,

Tengo una consulta legal:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}

Por favor, contáctame a la brevedad.

Gracias
        `.trim();

        // Enviar por WhatsApp
        const whatsappUrl = `https://wa.me/573233400447?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        // Mostrar mensaje de confirmación
        alert('Tu mensaje será enviado por WhatsApp. ¡Gracias por contactarnos!');

        // Limpiar formulario
        contactForm.reset();

        // ✅ FIX: Rehabilitar botón después de enviar
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
        }, 3000);
    });
}

// ============================================
// SCROLL ANIMATIONS (Fade In on Scroll)
// ============================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar los elementos que deben aparecer al hacer scroll
const revealElements = document.querySelectorAll(
    '.about-card, .service-card, .team-card, .stat-item, .testimonial-card, .faq-item, .contact-form, .contact-info'
);

revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL PARA LINKS DE NAVEGACION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================

// ✅ FIX: Excluir botones submit del efecto ripple
const buttons = document.querySelectorAll('.btn:not([type="submit"])');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// UTILITY: Validar email
// ============================================

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// LOG: Verificar que el script se cargó
// ============================================

console.log('✓ Script cargado correctamente - MJK Abogados');