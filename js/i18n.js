// i18n.js — simple EN/ES
(() => {
  const DICT = {
    en: {
      // Meta/UI
      "meta.title": "Pablo Rubio Prado | Software Developer",
      "ui.langButton": "ES",
      "ui.menuToggle": "Toggle navigation",
      "ui.siteLogoAlt": "Website logo",
      "ui.downloadIcon": "Download icon",

      // Nav
      "nav.about": "About Me",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",

      // Hero
      "hero.photoAlt": "Photo of Pablo Rubio Prado",
      "hero.h1": "Hi, I'm Pablo Rubio",
      "hero.h2": "Software Developer",
      "hero.githubAlt": "GitHub logo",
      "hero.linkedinAlt": "LinkedIn logo",
      "hero.downloadCv": "Download CV",

      // About
      "about.title": "About me",
      "about.p1":
        "I'm a passionate software developer with a solid background in computer science and a strong focus on building clean, efficient, and user-centered applications. My studies in Multiplatform Application Development (DAM) and previous training in Microcomputer Systems and Networks have given me both software and hardware knowledge, allowing me to understand technology from the ground up. I'm always eager to learn new tools, improve my code, and take on challenges that help me grow as a developer.",

      // Experience
      "exp.title": "Experience",

      "exp.ent.title": "Software Developer Intern — EntreRedes",
      "exp.ent.p1":
        "Internship focused on web and software development tasks. Collaborated on the creation and maintenance of client websites using WordPress, applying HTML and CSS for layout and styling adjustments. Contributed to optimizing performance and ensuring responsive design across different devices.",

      "exp.pet.title": "Customer Service & Team Assistant — Bar Petete",
      "exp.pet.p1":
        "Part-time position since Nov 2022, combining work and studies. Managed customer service, inventory, and staff coordination while maintaining strong communication and leadership skills in a fast-paced environment.",
      "exp.pet.rl": "Download Recommendation Letter",

      "exp.kio.title": "Customer Service Assistant — Bar Kiosco El Parque",
      "exp.kio.p1":
        "Seasonal position (Jun–Oct 2022). Responsible for bar and terrace service, customer attention, stock management, and daily opening/closing operations.",

      // Badges
      "exp.badge.dev": "Software Development",
      "exp.badge.team": "Teamwork",
      "exp.badge.lead": "Leadership",
      "exp.badge.time": "Time Management",
      "exp.badge.cs": "Customer Service",
      "exp.badge.inv": "Inventory",
      "exp.badge.adapt": "Adaptability",
      "exp.badge.comm": "Communication",

      // Skills
      "skills.title": "Skills",
      "skills.languages": "Programming Languages",
      "skills.tools": "Tools & Platforms",

      // Projects
      "proj.title": "Projects",
      "proj.subtitle": "This are some of the projects that I do",
      "proj.portfolio.alt": "Portfolio image",
      "proj.githubIconAlt": "GitHub icon",
      "proj.portfolio.title": "Personal Portfolio",
      "proj.portfolio.desc":
        "A responsive personal portfolio built with HTML, CSS, and Bootstrap to showcase my work, skills, and projects as a software developer.",
      "proj.tech": "Technologies",

      // Education
      "edu.title": "Education",
      "edu.nav.higher": "Higher Vocational Training (DAM)",
      "edu.nav.middle": "Intermediate Vocational Training",
      "edu.nav.basic": "Basic Vocational Training",

      "edu.higher.title":
        "Higher Vocational Training in Multiplatform Application Development (DAM)",
      "edu.higher.dates": "(2023 – Present)",
      "edu.higher.p":
        "An advanced vocational program specializing in software engineering and the development of applications across multiple platforms. Core subjects and technologies: Java, Kotlin, Python, C#, SQL, HTML, CSS, XML; development environments such as Eclipse, IntelliJ IDEA, Android Studio, Visual Studio, and GitHub. Focused on software design, debugging, testing, and Agile methodologies (Scrum, Kanban), building a strong foundation in OOP and real-world development.",

      "edu.middle.title":
        "Intermediate Vocational Training in Microcomputer Systems and Networks",
      "edu.middle.dates": "(2021 – 2023)",
      "edu.middle.p":
        "Technical training focused on installation, configuration, and maintenance of computer systems and networks. Areas: OS administration (Windows/Linux), LAN design and security, hardware maintenance, cybersecurity, and network services (DNS, DHCP, web/mail servers, shared file systems).",

      "edu.basic.title":
        "Basic Vocational Training in Computer Systems and Networks",
      "edu.basic.dates": "(2019 – 2021)",
      "edu.basic.p":
        "Introductory program covering computer hardware, operating systems, and basic network installation. Built fundamentals in system administration, troubleshooting, teamwork, and problem-solving.",

      // Certificates
      "certs.title": "Certificates",
      "certs.oxford.alt": "Oxford B1 certificate",
      "certs.google.alt": "Google certificate",
      "certs.oxford.title": "Oxford Test of English – B1 (CEFR)",
      "certs.oxford.issued": "Issued by Oxford — Aug 2025",
      "certs.google.title": "Mobile App Development Course",
      "certs.google.issued": "Issued by Google — Oct 2025",
      "certs.download": "Download Certificate",
      "certs.view": "View\nCertificate",

      // Contact
      "contact.title": "Contact",
      "contact.nameLabel": "Full Name",
      "contact.namePh": "Enter your name",
      "contact.emailLabel": "Email Address",
      "contact.emailPh": "Enter your email",
      "contact.msgLabel": "Message",
      "contact.msgPh": "Write your message...",
      "contact.send": "Send Message",
      "contact.getInTouch": "Get in Touch",
      "contact.emailAlt": "Email icon",
      "contact.locAlt": "Location icon",
      "contact.location": "Bolaños de Calatrava, Castilla-La Mancha, Spain",

      // Footer
      "footer.copy": "© 2025 Pablo Rubio Prado. All rights reserved."
    },

    es: {
      // Meta/UI
      "meta.title": "Pablo Rubio Prado | Desarrollador de Software",
      "ui.langButton": "EN",
      "ui.menuToggle": "Abrir/cerrar navegación",
      "ui.siteLogoAlt": "Logotipo del sitio",
      "ui.downloadIcon": "Icono de descarga",

      // Nav
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.education": "Educación",
      "nav.certificates": "Certificados",
      "nav.contact": "Contacto",

      // Hero
      "hero.photoAlt": "Foto de Pablo Rubio Prado",
      "hero.h1": "Hola, soy Pablo Rubio",
      "hero.h2": "Desarrollador de Software",
      "hero.githubAlt": "Logotipo de GitHub",
      "hero.linkedinAlt": "Logotipo de LinkedIn",
      "hero.downloadCv": "Descargar CV",

      // About
      "about.title": "Sobre mí",
      "about.p1":
        "Soy un desarrollador de software apasionado, con una base sólida en informática y un enfoque en crear aplicaciones limpias, eficientes y centradas en el usuario. Mis estudios en Desarrollo de Aplicaciones Multiplataforma (DAM) y la formación previa en Sistemas Microinformáticos y Redes me han dado conocimientos tanto de software como de hardware, lo que me permite entender la tecnología desde la base. Siempre tengo ganas de aprender herramientas nuevas, mejorar mi código y asumir retos que me ayuden a crecer como desarrollador.",

      // Experience
      "exp.title": "Experiencia",

      "exp.ent.title": "Prácticas como Desarrollador de Software — EntreRedes",
      "exp.ent.p1":
        "Prácticas centradas en tareas de desarrollo web y software. Colaboré en la creación y mantenimiento de sitios web de clientes con WordPress, aplicando HTML y CSS para maquetación y estilos. Contribuí a optimizar el rendimiento y asegurar el diseño responsive en diferentes dispositivos.",

      "exp.pet.title": "Atención al Cliente y Asistente de Equipo — Bar Petete",
      "exp.pet.p1":
        "Puesto a tiempo parcial desde nov. 2022, compaginando trabajo y estudios. Gestión de atención al cliente, inventario y coordinación del personal, manteniendo comunicación y liderazgo en un entorno dinámico.",
      "exp.pet.rl": "Descargar carta de recomendación",

      "exp.kio.title": "Asistente de Atención al Cliente — Bar Kiosco El Parque",
      "exp.kio.p1":
        "Puesto estacional (jun.–oct. 2022). Servicio de barra y terraza, atención al cliente, gestión de stock y apertura/cierre diario.",

      // Badges
      "exp.badge.dev": "Desarrollo de Software",
      "exp.badge.team": "Trabajo en equipo",
      "exp.badge.lead": "Liderazgo",
      "exp.badge.time": "Gestión del tiempo",
      "exp.badge.cs": "Atención al cliente",
      "exp.badge.inv": "Inventario",
      "exp.badge.adapt": "Adaptabilidad",
      "exp.badge.comm": "Comunicación",

      // Skills
      "skills.title": "Habilidades",
      "skills.languages": "Lenguajes de Programación",
      "skills.tools": "Herramientas y Plataformas",

      // Projects
      "proj.title": "Proyectos",
      "proj.subtitle": "Estos son algunos de los proyectos que hago",
      "proj.portfolio.alt": "Imagen del portfolio",
      "proj.githubIconAlt": "Icono de GitHub",
      "proj.portfolio.title": "Portfolio Personal",
      "proj.portfolio.desc":
        "Portfolio personal responsive con HTML, CSS y Bootstrap para mostrar mi trabajo, habilidades y proyectos como desarrollador de software.",
      "proj.tech": "Tecnologías",

      // Education
      "edu.title": "Educación",
      "edu.nav.higher": "FP de Grado Superior (DAM)",
      "edu.nav.middle": "FP de Grado Medio",
      "edu.nav.basic": "FP Básica",

      "edu.higher.title":
        "FP de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      "edu.higher.dates": "(2023 – Actualidad)",
      "edu.higher.p":
        "Grado Superior en desarrollo de aplicaciones multiplataforma. Tecnologías: Java, Kotlin, Python, C#, SQL, HTML, CSS, XML; entornos como Eclipse, IntelliJ IDEA, Android Studio, Visual Studio y GitHub. Enfoque en diseño de software, depuración, pruebas y metodologías ágiles (Scrum, Kanban), construyendo una base sólida en POO y desarrollo real.",

      "edu.middle.title":
        "FP de Grado Medio en Sistemas Microinformáticos y Redes",
      "edu.middle.dates": "(2021 – 2023)",
      "edu.middle.p":
        "Formación técnica en instalación, configuración y mantenimiento de sistemas y redes. Áreas: administración de SO (Windows/Linux), diseño y seguridad de redes LAN, mantenimiento de hardware, ciberseguridad y servicios de red (DNS, DHCP, servidores web/correo, compartición de archivos).",

      "edu.basic.title":
        "FP Básica en Sistemas Informáticos y Redes",
      "edu.basic.dates": "(2019 – 2021)",
      "edu.basic.p":
        "Formación profesional básica de montaje y mantenimiento de equipos informáticos, sistemas operativos e instalación básica de redes. Base en administración de sistemas, resolución de problemas, trabajo en equipo y pensamiento crítico.",

      // Certificates
      "certs.title": "Certificados",
      "certs.oxford.alt": "Certificado Oxford B1",
      "certs.google.alt": "Certificado de Google",
      "certs.oxford.title": "Oxford Test of English – B1 (MCER)",
      "certs.oxford.issued": "Emitido por Oxford — ago. 2025",
      "certs.google.title": "Curso de Desarrollo de Apps Móviles",
      "certs.google.issued": "Emitido por Google — oct. 2025",
      "certs.download": "Descargar certificado",
      "certs.view": "Ver\ncertificado",

      // Contact
      "contact.title": "Contacto",
      "contact.nameLabel": "Nombre completo",
      "contact.namePh": "Escribe tu nombre",
      "contact.emailLabel": "Correo electrónico",
      "contact.emailPh": "Escribe tu correo",
      "contact.msgLabel": "Mensaje",
      "contact.msgPh": "Escribe tu mensaje...",
      "contact.send": "Enviar mensaje",
      "contact.getInTouch": "Ponte en contacto",
      "contact.emailAlt": "Icono de correo",
      "contact.locAlt": "Icono de ubicación",
      "contact.location": "Bolaños de Calatrava, Castilla-La Mancha, España",

      // Footer
      "footer.copy": "© 2025 Pablo Rubio Prado. Todos los derechos reservados."
    }
  };

  const ATTR_PREFIX = "data-i18n-attr-";

  const getLang = () => localStorage.getItem("lang") || document.documentElement.lang || "en";
  const setLang = (lang) => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  };

  function translatePage(lang) {
    const dict = DICT[lang] || {};

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Attribute values
    document.querySelectorAll("*").forEach(el => {
      for (const attr of el.getAttributeNames()) {
        if (attr.startsWith(ATTR_PREFIX)) {
          const htmlAttr = attr.slice(ATTR_PREFIX.length);
          const key = el.getAttribute(attr);
          const val = dict[key];
          if (val != null) el.setAttribute(htmlAttr, val);
        }
      }
    });

    // Button label
    const btn = document.getElementById("lang-switcher");
    if (btn) {
      btn.textContent = (lang === "en")
        ? (DICT.en["ui.langButton"] || "ES")
        : (DICT.es["ui.langButton"] || "EN");
    }

    // <title>
    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  function init() {
    let lang = getLang();
    if (!["en","es"].includes(lang)) lang = "en";
    setLang(lang);
    translatePage(lang);

    // Toggle
    const btn = document.getElementById("lang-switcher");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = getLang();
        const next = current === "en" ? "es" : "en";
        setLang(next);
        translatePage(next);
      });
    }
  }

  // DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
