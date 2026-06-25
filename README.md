# MJK Abogados - Landing Page

## Descripción

Landing page para el despacho legal **MJK Abogados**. El sitio presenta la firma con navegación clara, secciones de información, propuestas descargables en PDF, portafolio de servicios interactivo, equipo profesional con modales de perfil, preguntas frecuentes y un formulario de contacto que envía el mensaje directamente por WhatsApp.

El diseño transmite profesionalismo, confianza y accesibilidad, con una paleta elegante en tonos oscuros (`#0F172A`) y dorados (`#D4AF37`).

---

## Secciones principales

1. **Inicio**
   - Hero banner con imagen de fondo a pantalla completa (`background-size: cover` en todos los breakpoints).
   - Botones de acción: agendar consulta y acceso directo a WhatsApp.

2. **Sobre Nosotros**
   - Misión y visión del despacho.
   - Valores profesionales y jurídicos detallados.

3. **Propuestas**
   - Lista de propuestas comerciales descargables en PDF, organizadas por tipo de cliente.
   - Propuestas actuales:
     - Empresarios y Comerciantes
     - Conjuntos Cerrados, Edificios Residenciales
     - Empresas de Paneles Solares
     - Empresas Constructoras
     - Inmobiliarias
     - Centros Comerciales

4. **Portafolio de Servicios**
   - Slider interactivo con 8 categorías: Persona Natural, Laboral, Civil, Penal, Administrativo, Servicios Públicos, Comerciantes y Empresas.
   - Cada categoría abre un modal con los servicios específicos.
   - Soporte para navegación con flechas, teclado (← →) y arrastre táctil.

5. **CEO**
   - Sección dedicada a **Melkis Junior Kammerer Diaz**, abogado especialista en servicios públicos y vocal de control de Valledupar.
   - Layout de dos columnas: texto a la izquierda, foto con marco dorado a la derecha.

6. **Equipo**
   - Cards con foto real, degradado suave sobre la imagen y botón "Ver Perfil".
   - Modal por miembro con tres secciones: **Perfil Profesional**, **Formación Académica** y **Experiencia Laboral**.
   - Miembros actuales:
     - **Lylly Marcela Mendoza Márquez** — Ingeniera Ambiental y Sanitaria
     - **Erik Janer Cohen Medina** — Consultor Servicios Públicos Domiciliarios
     - **Julián Santiago Díaz Briceño** — Consultor Externo
     - **Ana María Torres Kammerer** — Abogada
     - **Jonathan Fernando Perez Vega** — Abogado Penalista
     - **Hernando Alberto Atencio Cuello** — Abogado especialista en derecho administrativo
   - Los modales de perfil completo están disponibles para: Lylly Marcela, Erik Cohen, Ana María Torres y Julián Díaz. Jonathan y Hernando muestran la card sin botón de perfil por ahora.

7. **Preguntas Frecuentes**
   - Acordeón interactivo con 7 preguntas comunes.

8. **Contacto**
   - Formulario con nombre, correo, teléfono y mensaje.
   - Envío abre WhatsApp con mensaje prellenado. No requiere backend.
   - Información adicional: WhatsApp, correo, Instagram, TikTok, Facebook, dirección (Calle 13A # 11A - 41, Valledupar - Cesar) y cobertura nacional.

---

## Características principales

- Navegación sticky responsive con menú hamburguesa en móvil.
- Hero con imagen a pantalla completa en todos los tamaños de pantalla.
- Slider de servicios con drag táctil y navegación por teclado.
- Cards de equipo con efecto degradado foto → tarjeta.
- Modales de perfil profesional para miembros seleccionados del equipo.
- Modal de servicios con lista detallada por categoría.
- Animaciones de aparición al hacer scroll (IntersectionObserver).
- Scroll suave entre secciones.
- Formulario de contacto sin backend (envío vía WhatsApp).
- Efecto ripple en botones de navegación.

---

## Estructura de archivos

```
mjk-abogados/
├── index.html          # Estructura completa del sitio
├── css/
│   └── styles.css      # Estilos, layout, responsive y modales
├── js/
│   └── app.js          # Interactividad: menú, slider, modales, FAQ, formulario
├── img/
│   ├── logo.jpeg
│   ├── imagen-principal.jpeg
│   ├── melkis kammerer.jpeg
│   ├── erik_cohen.jpeg
│   ├── lilly_marcela.jpeg
│   ├── ANA MARÍA TORRES KAMMERER.jpeg
│   ├── Julián Santiago Díaz Briceño.png
│   ├── JONATHAN FERNANDO PEREZ VEGA.jpeg
│   └── Hernando alberto atencio cuello.jpeg
└── README.md
```

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
| Propuestas descargables | Sección `#propuestas` en `index.html` |
| Servicios del slider | Array `servicesData` en `js/app.js` |
| Perfiles del equipo | Objeto `teamMembersData` en `js/app.js` |
| Número de WhatsApp | Buscar `573233400447` en `index.html` y `app.js` |

---

## Notas importantes

- El número de WhatsApp configurado es `+57 323 340 0447`.
- Los modales de equipo y servicios se cierran con el botón ✕, clic fuera del modal o tecla `Escape`.
- El hero usa `background-size: cover` en todos los breakpoints para evitar espacios en blanco en móvil.
- Las propuestas comerciales en PDF están alojadas en Google Drive y se abren en una nueva pestaña al hacer clic en "Descargar".