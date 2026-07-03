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
// ABOUT VALUES ACCORDION (MOBILE)
// ============================================

const aboutAccordionItems = document.querySelectorAll('.about-accordion-item');
const aboutAccordionToggles = document.querySelectorAll('.about-accordion-toggle');
const aboutMobileQuery = window.matchMedia('(max-width: 768px)');

function resetAboutAccordion() {
    aboutAccordionItems.forEach(item => {
        item.classList.remove('active');
    });
}

function handleAboutAccordionClick(event) {
    if (!aboutMobileQuery.matches) return;

    const currentItem = event.currentTarget.closest('.about-accordion-item');
    const isActive = currentItem.classList.contains('active');

    resetAboutAccordion();

    if (!isActive) {
        currentItem.classList.add('active');
    }
}

aboutAccordionToggles.forEach(toggle => {
    toggle.addEventListener('click', handleAboutAccordionClick);
});

if (!aboutMobileQuery.matches) {
    resetAboutAccordion();
}

aboutMobileQuery.addEventListener('change', (event) => {
    if (!event.matches) {
        resetAboutAccordion();
    }
});

// ============================================
// PROPUESTAS ACCORDION (MOBILE)
// ============================================

const propuestasSection = document.querySelector('.propuestas');
const propuestasToggle = document.querySelector('.propuestas-toggle');
const propuestaMobileQuery = window.matchMedia('(max-width: 768px)');

function closePropuestasAccordion() {
    if (!propuestasSection || !propuestasToggle) return;

    propuestasSection.classList.remove('active');
    propuestasToggle.setAttribute('aria-expanded', 'false');
}

function togglePropuestasAccordion() {
    if (!propuestasSection || !propuestasToggle || !propuestaMobileQuery.matches) return;

    const isActive = propuestasSection.classList.contains('active');
    propuestasSection.classList.toggle('active', !isActive);
    propuestasToggle.setAttribute('aria-expanded', String(!isActive));
}

if (propuestasToggle) {
    propuestasToggle.addEventListener('click', togglePropuestasAccordion);

    propuestasToggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            togglePropuestasAccordion();
        }
    });
}

if (!propuestaMobileQuery.matches) {
    closePropuestasAccordion();
}

propuestaMobileQuery.addEventListener('change', (event) => {
    if (!event.matches) {
        closePropuestasAccordion();
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (submitBtn.disabled) return;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const mensaje = contactForm.querySelector('textarea').value;

        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor completa todos los campos');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
            return;
        }

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

        const whatsappUrl = `https://wa.me/573233400447?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        alert('Tu mensaje será enviado por WhatsApp. ¡Gracias por contactarnos!');

        contactForm.reset();

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

const revealElements = document.querySelectorAll(
    '.about-card, .service-card, .team-card, .testimonial-card, .faq-item, .contact-form, .contact-info'
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
// SERVICIOS SLIDER
// ============================================

const servicesData = [
    {
        name: 'Servicios Públicos',
        icon: 'fas fa-water',
        description: 'Reclamaciones y anulaciones en servicios públicos domiciliarios y consumos indebidos.',
        items: [
            'Anular deudas dejadas por terceros',
            'Anular cobro de recuperación de consumo "Sanción"',
            'Anular consumos estimados',
            'Anular cobro de medidores',
            'Anular cobro de seguros',
            'Anular cobro de reconexión',
            'Disminuir cobro de contribuciones',
            'Disminuir cobro de aseo (propiedades horizontales e inmuebles desocupados)'
        ]
    },
    {
        name: 'Persona Natural',
        icon: 'fas fa-user',
        description: 'Asesoría integral en conciliaciones, insolvencias y reclamos ante entidades financieras.',
        items: [
            'Conciliaciones',
            'Proceso de insolvencia',
            'Demandas ante la Superintendencia Financiera',
            'Demandas ante la Superintendencia de Industria y Comercio'
        ]
    },
    {
        name: 'Laboral',
        icon: 'fas fa-briefcase',
        description: 'Representación y orientación en conflictos laborales, contratos y pensiones.',
        items: [
            'Reclamación administrativa',
            'Demanda laboral',
            'Creación de sindicatos',
            'Conciliaciones',
            'Elaboración de contratos',
            'Retiro de cesantías',
            'Cobro de pensión',
            'Asistencia en audiencias'
        ]
    },
    {
        name: 'Civil',
        icon: 'fas fa-gavel',
        description: 'Soluciones en derecho civil para inmuebles, divorcios, herencias y obligaciones.',
        items: [
            'Compra y venta de inmuebles',
            'Creación de escrituras',
            'Contratos',
            'Asistencia en audiencias',
            'Conciliaciones',
            'Fijación de cuota alimentaria',
            'Aumento y disminución de cuota alimentaria',
            'Demandas ejecutivas',
            'Embargos',
            'Pertenencia',
            'Usucapión',
            'Divorcios',
            'Sucesión'
        ]
    },
    {
        name: 'Penal',
        icon: 'fas fa-balance-scale',
        description: 'Defensa penal experta para procesos judiciales y audiencias de alto impacto.',
        items: [
            'Asesoría penal integral',
            'Defensa en procesos judiciales',
            'Audiencias penales',
            'Representación técnica'
        ]
    },
    {
        name: 'Administrativo',
        icon: 'fas fa-file-contract',
        description: 'Gestión de recursos y acciones contra actos administrativos y cobros indebidos.',
        items: [
            'Derecho de petición',
            'Anular comparendos',
            'Anular cobro del ADRES',
            'Acción de tutela',
            'Acción de cumplimiento',
            'Acción popular',
            'Revocatoria directa',
            'Acción de nulidad',
            'Asistencia en audiencias'
        ]
    },
    
    {
        name: 'Comerciantes',
        icon: 'fas fa-store',
        description: 'Asesoría para comercios con reclamos de contribuciones y pagos indebidos.',
        items: [
            'Panadería',
            'Aserradero',
            'Textilería',
            'Litografías',
            'Carpintería',
            'Ebanistería',
            'Fábrica de calzado',
            'Confección de prendas de vestir',
            'Procesamiento y conservación de carne, pescado, crustáceos y moluscos'
        ]
    },
    {
        name: 'Empresas',
        icon: 'fas fa-industry',
        description: 'Servicios empresariales legales, recuperación de cartera y apoyo en paneles solares.',
        items: [
            'Recuperación de cartera',
            'Charlas jurídicas a los abogados del PQR',
            'Asistencia legal en venta de paneles solares',
            'Disminución en impuestos empresariales',
            'Resolución de reclamaciones de usuarios'
        ]
    },
    
];

let currentServiceIndex = 0;

function initServiceSlider() {
    const sliderTrack = document.getElementById('sliderTrack');
    const prevButton = document.getElementById('sliderPrev');
    const nextButton = document.getElementById('sliderNext');
    const modal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');

    if (!sliderTrack || !prevButton || !nextButton || !modal || !modalClose) return;

    function getVisibleCount() {
        const width = window.innerWidth;
        if (width >= 900) return 3;
        if (width >= 640) return 2;
        return 1;
    }

    function getTrackSizes(visibleCount) {
        const style = window.getComputedStyle(sliderTrack);
        const gap = parseFloat(style.gap) || 0;
        const trackWidth = sliderTrack.clientWidth;
        const slideWidth = Math.max(0, (trackWidth - gap * (visibleCount - 1)) / visibleCount);
        return { slideWidth, gap };
    }

    function renderSlides() {
        sliderTrack.innerHTML = servicesData.map((service, index) => `
            <div class="service-slide">
                <i class="${service.icon}"></i>
                <h3>${service.name}</h3>
                <p class="short-description">${service.description}</p>
                <button class="read-more-btn" data-index="${index}">Leer Más</button>
            </div>
        `).join('');

        const visibleCount = getVisibleCount();
        const { slideWidth } = getTrackSizes(visibleCount);

        sliderTrack.querySelectorAll('.service-slide').forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}px`;
            slide.style.maxWidth = `${slideWidth}px`;
        });

        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                openModal(parseInt(button.dataset.index, 10));
            });
        });
    }

    function getTrackOffset(index, visibleCount) {
        const { slideWidth, gap } = getTrackSizes(visibleCount);
        return index * (slideWidth + gap);
    }

    function setSliderPosition(position) {
        sliderTrack.style.transform = `translateX(-${position}px)`;
    }

    function updateSlider() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, servicesData.length - visibleCount);
        if (currentServiceIndex > maxIndex) {
            currentServiceIndex = maxIndex;
        }

        const offset = getTrackOffset(currentServiceIndex, visibleCount);
        setSliderPosition(offset);
    }

    function prevSlide() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, servicesData.length - visibleCount);
        currentServiceIndex = (currentServiceIndex - 1 + maxIndex + 1) % (maxIndex + 1);
        updateSlider();
    }

    function nextSlide() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, servicesData.length - visibleCount);
        currentServiceIndex = (currentServiceIndex + 1) % (maxIndex + 1);
        updateSlider();
    }

    let isDragging = false;
    let dragStartX = 0;
    let dragCurrentOffset = 0;

    function startDrag(event) {
        isDragging = true;
        dragStartX = event.clientX;
        dragCurrentOffset = getTrackOffset(currentServiceIndex, getVisibleCount());
        sliderTrack.classList.add('dragging');
        event.preventDefault();
    }

    function moveDrag(event) {
        if (!isDragging) return;
        const currentX = event.clientX;
        const delta = currentX - dragStartX;
        sliderTrack.style.transform = `translateX(-${Math.max(0, dragCurrentOffset - delta)}px)`;
    }

    function endDrag(event) {
        if (!isDragging) return;
        isDragging = false;
        sliderTrack.classList.remove('dragging');
        const delta = event.clientX - dragStartX;
        const threshold = 70;

        if (delta < -threshold) {
            nextSlide();
        } else if (delta > threshold) {
            prevSlide();
        } else {
            updateSlider();
        }
    }

    sliderTrack.addEventListener('pointerdown', startDrag);
    sliderTrack.addEventListener('pointermove', moveDrag);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    sliderTrack.addEventListener('dragstart', (event) => event.preventDefault());

    window.addEventListener('resize', () => {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, servicesData.length - visibleCount);
        if (currentServiceIndex > maxIndex) {
            currentServiceIndex = maxIndex;
        }

        const { slideWidth } = getTrackSizes(visibleCount);
        sliderTrack.querySelectorAll('.service-slide').forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}px`;
            slide.style.maxWidth = `${slideWidth}px`;
        });
        updateSlider();
    });

    function openModal(index) {
        const service = servicesData[index];
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = service.name;
        modalBody.innerHTML = `
            <p>${service.description}</p>
            <h4>Servicios incluidos</h4>
            <ul>
                ${service.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') prevSlide();
        if (event.key === 'ArrowRight') nextSlide();
        if (event.key === 'Escape') closeModal();
    });

    renderSlides();
    updateSlider();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceSlider);
} else {
    initServiceSlider();
}

// ============================================
// EQUIPO SLIDER
// ============================================

let currentTeamIndex = 0;

function initTeamSlider() {
    const sliderTrack = document.getElementById('teamSliderTrack');
    const prevButton = document.getElementById('teamSliderPrev');
    const nextButton = document.getElementById('teamSliderNext');

    if (!sliderTrack || !prevButton || !nextButton) return;

    const teamSlides = Array.from(sliderTrack.querySelectorAll('.team-card'));
    if (!teamSlides.length) return;

    function getVisibleCount() {
        const width = window.innerWidth;
        if (width >= 1000) return 3;
        if (width >= 680) return 2;
        return 1;
    }

    function getTrackSizes(visibleCount) {
        const style = window.getComputedStyle(sliderTrack);
        const gap = parseFloat(style.gap) || 0;
        const trackWidth = sliderTrack.clientWidth;
        const slideWidth = Math.max(0, (trackWidth - gap * (visibleCount - 1)) / visibleCount);
        return { slideWidth, gap };
    }

    function applySlideSizes() {
        const visibleCount = getVisibleCount();
        const { slideWidth } = getTrackSizes(visibleCount);

        teamSlides.forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}px`;
            slide.style.maxWidth = `${slideWidth}px`;
        });
    }

    function getTrackOffset(index, visibleCount) {
        const { slideWidth, gap } = getTrackSizes(visibleCount);
        return index * (slideWidth + gap);
    }

    function updateSlider() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, teamSlides.length - visibleCount);
        if (currentTeamIndex > maxIndex) {
            currentTeamIndex = maxIndex;
        }

        const offset = getTrackOffset(currentTeamIndex, visibleCount);
        sliderTrack.style.transform = `translateX(-${offset}px)`;
    }

    function prevSlide() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, teamSlides.length - visibleCount);
        currentTeamIndex = (currentTeamIndex - 1 + maxIndex + 1) % (maxIndex + 1);
        updateSlider();
    }

    function nextSlide() {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, teamSlides.length - visibleCount);
        currentTeamIndex = (currentTeamIndex + 1) % (maxIndex + 1);
        updateSlider();
    }

    let isDragging = false;
    let dragStartX = 0;
    let dragCurrentOffset = 0;

    function startDrag(event) {
        isDragging = true;
        dragStartX = event.clientX;
        dragCurrentOffset = getTrackOffset(currentTeamIndex, getVisibleCount());
        sliderTrack.classList.add('dragging');
        event.preventDefault();
    }

    function moveDrag(event) {
        if (!isDragging) return;
        const currentX = event.clientX;
        const delta = currentX - dragStartX;
        sliderTrack.style.transform = `translateX(-${Math.max(0, dragCurrentOffset - delta)}px)`;
    }

    function endDrag(event) {
        if (!isDragging) return;
        isDragging = false;
        sliderTrack.classList.remove('dragging');
        const delta = event.clientX - dragStartX;
        const threshold = 70;

        if (delta < -threshold) {
            nextSlide();
        } else if (delta > threshold) {
            prevSlide();
        } else {
            updateSlider();
        }
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    sliderTrack.addEventListener('pointerdown', startDrag);
    sliderTrack.addEventListener('pointermove', moveDrag);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    sliderTrack.addEventListener('dragstart', (event) => event.preventDefault());

    window.addEventListener('resize', () => {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, teamSlides.length - visibleCount);
        if (currentTeamIndex > maxIndex) {
            currentTeamIndex = maxIndex;
        }

        applySlideSizes();
        updateSlider();
    });

    applySlideSizes();
    updateSlider();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamSlider);
} else {
    initTeamSlider();
}

// ============================================
// MODAL EQUIPO
// ============================================

const teamMembersData = {
    erik: {
        name: 'Erik Janer Cohen Medina',
        specialty: 'Consultor Servicios Públicos Domiciliarios',
        img: 'img/erik_cohen.jpeg',
        perfil: 'Ingeniero de Sistemas con Maestría en Servicios Públicos de la Universidad Externado de Colombia. Más de 20 años de experiencia en el sector público y privado, con profundo conocimiento del marco jurídico, regulatorio y tecnológico de los servicios públicos domiciliarios en Colombia.',
        formacion: [
            'Ingeniero de Sistemas — Universidad Autónoma del Caribe',
            'Master© en Servicios Públicos — Universidad Externado de Colombia',
            'Certificación CISCO CCNA',
            'Certificación CISCO IT Essentials',
            'Ciudadano Digital Internacional (e-Citizen)'
        ],
        experiencia: [
            'Asesor Comercial y Administrativo — AAA de Ovejas S.A. E.S.P. (2023–2025)',
            'Asesor Operativo y Comercial — ACUAAA E.S.P. (2020–presente)',
            'Gerente — AAA de Ovejas S.A. (2017–2018)',
            'Secretario de Planeación Municipal — Alcaldía de Ovejas, Sucre (2016–2017)',
            'Docente Tiempo Completo — Universidad Nacional Abierta y a Distancia UNAD (2007–2014)',
            'Instructor Tutor — SENA (2005–2012)'
        ]
    },
    lilly: {
        name: 'Lylly Marcela Mendoza Márquez',
        specialty: 'Ingeniera Ambiental y Sanitaria',
        img: 'img/lilly_marcela.jpeg',
        perfil: 'Profesional comprometida con la sostenibilidad y la gestión eficiente de los recursos naturales. Especialista en Gestión Ambiental y Energética con experiencia en diagnósticos ambientales, auditorías, diseño de indicadores de desempeño y programas de capacitación para empresas e instituciones.',
        formacion: [
            'Ingeniería Ambiental y Sanitaria',
            'Especialista en Gestión Ambiental y Energética'
        ],
        experiencia: [
            'Consultoría en diagnósticos ambientales para PYMEs',
            'Diseño e implementación de indicadores de desempeño ambiental',
            'Auditorías ambientales y verificación de cumplimiento legal',
            'Gestión ambiental empresarial para comercios, colegios y empresas de servicios',
            'Capacitaciones en gestión de residuos, uso eficiente del agua y ahorro energético',
            'Diagnósticos de ahorro de agua y energía para reducción de costos operativos'
        ]
    },
    ANA: {
        name: 'Ana María Torres Arroyo',
        specialty: 'Abogada',
        img: 'img/ANA MARÍA TORRES ARROYO.jpeg',
        perfil: 'Abogada con experiencia en asesoría jurídica a empresas en materia de servicios públicos, exenciones tributarias e impuesto predial. Ofrece acompañamiento integral en trámites administrativos y representación de clientes con ética y compromiso profesional.',
        formacion: [
            'Título de Abogada — Universidad'
        ],
        experiencia: [
            'Asesora jurídica — Servicios públicos domiciliarios',
            'Especialista en derecho tributario territorial',
            'Asesora en adjudicación de apoyos y beneficios',
        ]
    },
    Hernan: {
        name: 'Hernando Alberto Atencio Cuello',
        specialty: 'Abogado especialista en derecho administrativo',
        img: 'img/Hernando alberto atencio cuello.jpeg',
        perfil: 'Profesional del Derecho con experiencia en los sectores público y privado. Se caracteriza por su compromiso ético, capacidad de análisis jurídico y experiencia en procesos penales, derecho administrativo y enseñanza universitaria.',
        formacion: [
            'Abogado.',
            'Especialista en Derecho Administrativo.'
        ],
        experiencia: [
            'Más de 10 años como abogado penalista, participando en todas las etapas del proceso penal acusatorio.',
            '4 años como docente universitario en asignaturas del área jurídica.',
            'Experiencia en la Contraloría General de la República, desempeñando funciones relacionadas con el derecho administrativo y el control fiscal.',
            
        ]
    },
    Julian: {
        name: 'Julián Santiago Díaz Briceño',
        specialty: 'Consultor Externo',
        img: 'img/Julián Santiago Díaz Briceño.jpeg',
        perfil: 'Abogado especialista en Derecho Administrativo con trayectoria en entidades públicas y sector privado. Cursando Maestría en Servicios Públicos en la Universidad Externado de Colombia. Con experiencia en la Superintendencia de Servicios Públicos, el Consejo de Estado y la Escuela Judicial "Rodrigo Lara Bonilla", brinda asesoría jurídica en derecho administrativo, servicios públicos domiciliarios, procesos sancionatorios y litigio contencioso administrativo y constitucional.',
        formacion: [
            'Abogado especialista en Derecho Administrativo',
            'Maestría en Servicios Públicos — Universidad Externado de Colombia (en curso)'
        ],
        experiencia: [
            'Superintendencia de Servicios Públicos Domiciliarios',
            'Consejo de Estado',
            'Escuela Judicial "Rodrigo Lara Bonilla"',
            'Consultor externo en asesoría jurídica a clientes en energía y servicios públicos domiciliarios'
        ]
    },
    Yelenis: {
        name: 'Yelenis Enid Navarro Gamez',
        specialty: 'Abogada',
        img: 'img/Yelenis Enid Navarro Gamez.jpeg',
        perfil: 'Persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Se destaca por su disposición para el aprendizaje continuo y la realización eficiente de sus labores, buscando siempre asumir nuevos retos profesionales.',
        formacion: [
            'Abogada – Universidad Popular del Cesar (2023).',
            'Diplomado en Docencia Universitaria – Politécnico de Colombia.'
        ],
        experiencia: [
            'Judicante Ad Honorem – Juzgado Primero Penal del Circuito Especializado de Valledupar (septiembre de 2021 – julio de 2022).',
            'Dependiente Judicial – Despacho de la Abogada Laura Elena Luque Cadavid (febrero de 2020 – agosto de 2021).',
            'Organización de expedientes físicos y digitales',
            'Registro de actuaciones procesales.'
        ]
    }
};

function initTeamModal() {
    const modal = document.getElementById('teamModal');
    const modalClose = document.getElementById('teamModalClose');

    if (!modal || !modalClose) return;

    document.querySelectorAll('.team-profile-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.member;
            const member = teamMembersData[key];
            if (!member) return;

            document.getElementById('teamModalImg').src = member.img;
            document.getElementById('teamModalImg').alt = member.name;
            document.getElementById('teamModalName').textContent = member.name;
            document.getElementById('teamModalSpecialty').textContent = member.specialty;

            document.getElementById('teamModalBody').innerHTML = `
                <div class="modal-section">
                    <h4>Perfil Profesional</h4>
                    <p>${member.perfil}</p>
                </div>
                <div class="modal-section">
                    <h4>Formación Académica</h4>
                    <ul>
                        ${member.formacion.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-section">
                    <h4>Experiencia Laboral</h4>
                    <ul>
                        ${member.experiencia.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            `;

            modal.classList.add('active');
        });
    });

    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('active'); });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamModal);
} else {
    initTeamModal();
}

console.log('✓ Script cargado correctamente - MJK Abogados');