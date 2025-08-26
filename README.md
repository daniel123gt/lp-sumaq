# 🌱 SUMAQ AGRO - Landing Page Corporativa

Una landing page moderna y profesional para SUMAQ AGRO, empresa líder en innovación agrícola sostenible. Desarrollada con **Astro** para máxima velocidad y SEO optimizado.

## ✨ Características Principales

- **Diseño completamente responsive** para todos los dispositivos
- **Páginas separadas** para mejor organización y navegación
- **Paleta de colores corporativa** implementada en todos los componentes
- **SEO optimizado** con meta tags completos y Open Graph
- **Animaciones suaves** y transiciones elegantes
- **Componentes modulares** para fácil mantenimiento
- **Accesibilidad** con estados de focus y ARIA labels
- **Identidad de marca auténtica** basada en el material de marketing oficial

## 🎨 Paleta de Colores

- **Verde Principal**: `#425C25` - Color base de la marca
- **Naranja Secundario**: `#9F5818` - Acentos y llamadas a la acción
- **Dorado**: `#B08919` - Elementos destacados y sabiduría
- **Verde Oscuro**: `#32411C` - Textos y elementos secundarios

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro    # Navegación principal
│   ├── Hero.astro      # Sección principal con eslogan
│   ├── About.astro     # Información de la empresa
│   ├── Services.astro  # Catálogo de servicios
│   ├── Products.astro  # Catálogo de productos
│   ├── Contact.astro   # Formulario de contacto
│   └── Footer.astro    # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── index.astro     # Página principal
│   ├── nosotros.astro  # Sobre nosotros
│   ├── servicios.astro # Servicios
│   ├── productos.astro # Productos
│   └── contacto.astro  # Contacto
└── styles/             # Estilos globales
    └── global.css      # CSS principal
```

## 🌟 Identidad de Marca

### **Significado del Nombre**
- **SUMAQ**: En quechua significa "hermoso, bueno, noble"
- **Esencia**: Innovación agrícola con respeto por la Pachamama (Madre Tierra)
- **Tono de voz**: Profesional, empático, con raíces culturales

### **Eslogan Oficial**
> "Valoramos a la Madre Naturaleza y le damos propósito"
> 
> *- Susan Gómez Plasencia*

### **Frases Clave**
- "Desde la raíz andina hacia un agro consciente"
- "Innovamos con raíces, lideramos con propósito"
- "Soluciones que respetan la tierra, nutren el futuro"
- "Cuidamos la Pachamama, sembramos con sentido"

### **Fundadora**
**Susan Gómez Plasencia** - CEO y Fundadora con años de experiencia profesional en el sector agrícola, decidió crear SUMAQ AGRO: una empresa que une tecnología, respeto ambiental y empatía humana.

## 📱 Páginas de la Landing Page

### **1. Página Principal (`/`)**
- **Hero Section**: Eslogan oficial y frases clave
- **Badge destacado**: "Desde la raíz andina hacia un agro consciente"
- **Título principal**: "Innovamos con raíces, lideramos con propósito"
- **Descripción**: Pitch comercial de la empresa
- **Estadísticas**: 15+ años, 500+ proyectos, 100% sostenibilidad
- **Call-to-action**: Enlaces a servicios y contacto

### **2. Nosotros (`/nosotros`)**
- **Historia**: Fundación en 2009 por Susan Gómez
- **Misión**: Soluciones agrícolas conscientes para el campo peruano
- **Visión**: Liderar la transformación hacia agricultura sostenible
- **Valores**: Sostenibilidad, Raíces Andinas, Empatía Humana, Innovación
- **Tarjeta de fundadora**: Información personal y filosofía

### **3. Servicios (`/servicios`)**
- **Análisis de Suelos**: Evaluación química, física y biológica
- **Sistemas de Riego**: Diseño e implementación inteligente
- **Manejo de Plagas**: Control biológico y químico integrado
- **Consultoría Agrícola**: Asesoramiento especializado
- **Tecnología Agrícola**: Drones, sensores y precisión
- **Capacitación**: Programas de formación para agricultores

### **4. Productos (`/productos`)**
- **Fertilizantes Orgánicos**: 100% orgánicos y certificados
- **Semillas Certificadas**: Alta germinación y resistencia
- **Biopesticidas**: Soluciones naturales y ecológicas
- **Equipos de Precisión**: Tecnología de vanguardia

### **5. Contacto (`/contacto`)**
- **Formulario de contacto** funcional
- **Información de ubicación**: Lima, Perú
- **Datos de contacto**: Teléfono, email
- **Horarios de atención**
- **Mapa de ubicación** (placeholder)

## 🚀 Instalación y Uso

### **Requisitos Previos**
- Node.js 18+ 
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd lp-sumaq

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

### **Scripts Disponibles**
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la build
- `npm run astro` - Comandos de Astro

## 📱 Diseño Responsive

La landing page está completamente optimizada para:
- **Desktop**: 1200px+ (experiencia completa)
- **Tablet**: 768px - 1199px (navegación adaptada)
- **Mobile**: < 768px (navegación móvil optimizada)

## 🔍 Características SEO

- **Meta tags completos** para cada página
- **Open Graph** para redes sociales
- **Twitter Cards** optimizadas
- **URLs amigables** y estructura semántica
- **Títulos y descripciones** únicos por página
- **Palabras clave** estratégicamente implementadas

## 🎯 Personalización

### **Colores**
Los colores se pueden modificar en `src/styles/global.css`:
```css
:root {
  --color-primary: #425C25;
  --color-secondary: #9F5818;
  --color-accent: #B08919;
  --color-dark: #32411C;
}
```

### **Contenido**
- **Textos**: Modificar directamente en los componentes `.astro`
- **Imágenes**: Reemplazar placeholders con imágenes reales
- **Enlaces**: Actualizar URLs en componentes y navegación

### **Estilos**
- **Tipografía**: Cambiar fuentes en `global.css`
- **Espaciado**: Ajustar variables CSS para diferentes tamaños
- **Animaciones**: Modificar keyframes y transiciones

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:
- **Email**: info@sumaqagro.com
- **Teléfono**: +51 1 234 5678
- **Ubicación**: Lima, Perú

## 🌟 Agradecimientos

- **Equipo de Marketing SUMAQ AGRO** por el material de marca
- **Susan Gómez Plasencia** por la visión y filosofía de la empresa
- **Comunidad Astro** por el framework excepcional

---

**SUMAQ AGRO** - *"Valoramos a la Madre Naturaleza y le damos propósito"*
