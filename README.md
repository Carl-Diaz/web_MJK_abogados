# MJK Abogados - Landing Page

Sitio web profesional para la firma de abogados MJK Abogados Colombia.

## 📁 Estructura del Proyecto

```
web_mjkabogados/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales (Azul Oscuro + Dorado)
├── js/
│   └── app.js          # Funcionalidades interactivas
├── img/
│   └── logo.png        # Logo de la firma (IMPORTANTE: Reemplazar)
└── README.md           # Este archivo
```

## 🎨 Características

✅ **Diseño Responsivo** - Funciona perfectamente en desktop, tablet y móvil
✅ **SEO Optimizado** - Meta tags, encabezados H1/H2/H3
✅ **Accesible** - Contraste adecuado, textos legibles, navegación clara
✅ **Rápido** - Sin dependencias pesadas, código limpio
✅ **Interactivo** - FAQ acordeón, formulario de contacto, animaciones suaves

## 🚀 Cómo Usar

### 1. **Guardar el Logo**
   - Descarga tu logo de MJK Abogados
   - Guárdalo como `img/logo.png` (reemplazar el actual)
   - Asegúrate que sea PNG o JPG, preferiblemente 500x500px

### 2. **Personalizar Contenido**
   En `index.html`, busca y reemplaza:
   - `[EQUIPO]` → Nombres, fotos y descripciones de abogados
   - `[FOTOS PLACEHOLDER]` → Links de fotos reales
   - `[TESTIMONIOS]` → Opiniones de clientes

### 3. **Colores y Estilos**
   En `css/styles.css`, variables principales:
   - `--primary-dark: #0F172A` (Azul oscuro)
   - `--gold: #D4AF37` (Dorado)
   - `--white: #FFFFFF` (Blanco)
   - `--light-gray: #F5F5F5` (Gris claro)

### 4. **Actualizar Contacto**
   Datos actuales en `index.html`:
   - WhatsApp: +57 323 340 0447
   - Email: abogadosmjk@gmail.com
   - Instagram: @MJK_abogados
   - TikTok: @MJK_abogados

## 📱 Secciones de la Página

1. **Navbar** - Navegación sticky con menú mobile
2. **Hero** - Portada con CTA de agendar consulta y WhatsApp
3. **Sobre Nosotros** - Misión, visión, valores y estadísticas
4. **Servicios** - 8 áreas de práctica con descripción
5. **Equipo** - Tarjetas de abogados con foto y especialidad
6. **FAQ** - Preguntas frecuentes con acordeón interactivo
7. **Contacto** - Formulario y datos de contacto
8. **Testimonios** - Opiniones de clientes (opcional)
9. **Footer** - Links, redes sociales y legal

## 🔧 Funcionalidades JavaScript

- **Menú mobile responsive** - Se abre/cierra en dispositivos pequeños
- **FAQ Acordeón** - Click para expandir/contraer respuestas
- **Formulario de contacto** - Se envía directo por WhatsApp
- **Smooth scroll** - Navegación suave entre secciones
- **Animaciones on scroll** - Elementos aparecen al hacer scroll
- **Navbar dinámico** - Cambia sombra según scroll

## 📋 TODO - Próximos Pasos

- [ ] Reemplazar `img/logo.png` con tu logo
- [ ] Actualizar fotos de abogados (reemplazar placeholders)
- [ ] Agregar testimonios reales de clientes
- [ ] Crear página de Política de Privacidad (link en footer)
- [ ] Crear página de Términos y Condiciones (link en footer)
- [ ] Agregar dirección física cuando esté disponible
- [ ] Optimizar imágenes (comprimir fotos)
- [ ] Testear en múltiples navegadores
- [ ] Subir a hosting (Netlify, Vercel, GoDaddy, etc.)

## 🌐 Hosting Recomendado

Para una firma de abogados, recomendamos:

1. **Netlify** (Gratis + Pro)
   - Fácil deployment con Git
   - HTTPS automático
   - Formularios sin backend

2. **Vercel** (Gratis + Pro)
   - Muy rápido
   - Buen soporte
   - Integración Git

3. **GoDaddy / Hostinger**
   - Dominio + Hosting todo junto
   - Más tradicional pero confiable

## 💡 Tips Importantes

✅ **SEO**: Los encabezados H1, H2, H3 ya están optimizados
✅ **Mobile**: Prueba en celular para asegurarte que se ve bien
✅ **Imágenes**: Comprime las fotos para que cargue más rápido
✅ **WhatsApp**: El formulario ya envía automáticamente por WhatsApp
✅ **Validación**: El formulario valida campos antes de enviar

## 📞 Datos de Contacto Actuales

- **WhatsApp**: +57 323 340 0447
- **Email**: abogadosmjk@gmail.com
- **Instagram**: @MJK_abogados
- **TikTok**: @MJK_abogados
- **Ubicación**: Colombia (Cobertura Nacional)

## 🎯 Métricas a Monitorear

Una vez en línea, instala Google Analytics y monitorea:
- Tráfico por fuente (Google, Instagram, TikTok)
- Páginas más visitadas
- Tiempo en página
- Tasa de rebote
- Conversiones (contactos por WhatsApp)

## ❓ Preguntas Frecuentes

**¿Puedo cambiar los colores?**
Sí, edita las variables en `css/styles.css`

**¿Cómo agregó más servicios?**
Copia y pega un `.service-card` en `index.html` sección Servicios

**¿Cómo agrego más testimonios?**
Copia y pega un `.testimonial-card` en `index.html` sección Testimonios

**¿Es necesario un backend?**
No, todo funciona con HTML/CSS/JS vanilla. El formulario se envía por WhatsApp.

---

**Creado**: Mayo 2026
**Última actualización**: Mayo 31, 2026
**Versión**: 1.0