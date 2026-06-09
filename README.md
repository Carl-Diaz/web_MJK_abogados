# MJK Abogados - Landing Page

## Descripción

Landing page para el despacho legal **MJK Abogados**. El sitio presenta la firma con navegación clara, secciones de información, portafolio de servicios interactivo, clientes destacados, equipo profesional con modales de perfil, preguntas frecuentes y un formulario de contacto que envía el mensaje directamente por WhatsApp.

El diseño transmite profesionalismo, confianza y accesibilidad, con una paleta elegante en tonos oscuros (`#0F172A`) y dorados (`#D4AF37`).

---

## Secciones principales

1. **Inicio**
   - Hero banner con imagen de fondo a pantalla completa (`background-size: cover` en todos los breakpoints).
   - Botones de acción: agendar consulta y acceso directo a WhatsApp.

2. **Sobre Nosotros**
   - Misión y visión del despacho.
   - Valores profesionales y jurídicos detallados.

3. **Portafolio de Servicios**
   - Slider interactivo con 13 categorías: Persona Natural, Laboral, Civil, Penal, Administrativo, Servicios Públicos, Comerciantes, Empresas, Inmobiliarias, Propiedades Horizontales, Alcaldes, Concejales y Constructoras.
   - Cada categoría abre un modal con los servicios específicos.
   - Soporte para navegación con flechas, teclado (← →) y arrastre táctil.

4. **Clientes Destacados**
   - Tarjetas con foto y descripción de clientes representativos.

5. **Equipo**
   - Cards con foto real, degradado suave sobre la imagen y botón "Ver Perfil".
   - Modal por miembro con tres secciones: **Perfil Profesional**, **Formación Académica** y **Experiencia Laboral**.
   - Miembros actuales:
     - **Erik Janer Cohen Medina** — Consultor Servicios Públicos Domiciliarios
     - **Lylly Marcela Mendoza Márquez** — Ingeniera Ambiental y Sanitaria
     - **Karen López** — Abogada Civil

6. **Preguntas Frecuentes**
   - Acordeón interactivo con 7 preguntas comunes.

7. **Contacto**
   - Formulario con nombre, correo, teléfono y mensaje.
   - Envío abre WhatsApp con mensaje prellenado. No requiere backend.
   - Información adicional: WhatsApp, correo, Instagram, TikTok y cobertura nacional.

8. **Testimonios**
   - Tres tarjetas con reseñas de clientes y estrellas de calificación.

---

## Características principales

- Navegación sticky responsive con menú hamburguesa en móvil.
- Hero con imagen a pantalla completa en todos los tamaños de pantalla.
- Slider de servicios con drag táctil y navegación por teclado.
- Cards de equipo con efecto degradado foto → tarjeta.
- Modales de perfil profesional para cada miembro del equipo.
- Modal de servicios con lista detallada por categoría.
- Animaciones de aparición al hacer scroll (IntersectionObserver).
- Scroll suave entre secciones.
- Formulario de contacto sin backend (envío vía WhatsApp).
- Efecto ripple en botones de navegación.

---

## Estructura de archivos
mjk-abogados/
├── index.html          # Estructura completa del sitio
├── css/
│   └── styles.css      # Estilos, layout, responsive y modales
├── js/
│   └── app.js          # Interactividad: menú, slider, modales, FAQ, formulario
├── img/
│   ├── logo.jpeg
│   ├── imagen-principal.jpeg
│   ├── erik_cohen.jpeg
│   └── lilly_marcela.jpeg
└── README.md

---

## Tecnologías usadas

- HTML5
- CSS3 (variables CSS, Grid, Flexbox, animaciones)
- JavaScript ES6+ (Vanilla)
- [Font Awesome 6.4](https://fontawesome.com/) — iconos
- [Google Fonts](https://fonts.google.com/) — `Playfair Display` y `Inter`

---

## Instrucciones de uso

1. Clonar o descargar el repositorio.
2. Abrir `index.html` directamente en el navegador (no requiere servidor).
3. Navegar por las secciones usando el menú superior.
4. Completar el formulario de contacto → redirige a WhatsApp con mensaje prellenado.

---

## Personalización

| Qué cambiar | Dónde |
|---|---|
| Textos, secciones y estructura | `index.html` |
| Colores, tipografía y espaciado | `css/styles.css` (variables en `:root`) |
| Servicios del slider | Array `servicesData` en `js/app.js` |
| Perfiles del equipo | Objeto `teamMembersData` en `js/app.js` |
| Número de WhatsApp | Buscar `573233400447` en `index.html` y `app.js` |

---

## Notas importantes

- El número de WhatsApp configurado es `+57 323 340 0447`.
- Las imágenes de Erik y Lylly son fotos reales del equipo; Karen usa imagen de placeholder pendiente de reemplazar.
- El hero usa `background-size: cover` en todos los breakpoints para evitar espacios en blanco en móvil.
- Los modales de equipo y servicios se cierran con el botón ✕, clic fuera del modal o tecla `Escape`.

---

## Próximas mejoras posibles

- Reemplazar imagen placeholder de Karen López con foto real.
- Añadir sección de blog o artículos jurídicos.
- Integrar Google Analytics o Meta Pixel.
- Agregar mapa de ubicación de oficinas.
- Implementar formulario con backend (EmailJS o similar) como alternativa al envío por WhatsApp.