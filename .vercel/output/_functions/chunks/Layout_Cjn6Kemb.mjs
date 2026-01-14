import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, f as renderScript, o as renderHead, p as renderSlot } from './astro/server_DrRuWExZ.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const routes = {
  home: {
    es: "",
    en: ""
  },
  product: {
    es: "producto",
    en: "product"
  },
  about: {
    es: "sobre-nosotros",
    en: "about"
  },
  blog: {
    es: "blog",
    en: "blog"
  },
  request: {
    es: "solicita-presupuesto",
    en: "request-quote"
  },
  contact: {
    es: "contacto",
    en: "contact"
  }
};

const t$1 = {
  navbar: {
    home: "Inicio",
    product: "Producto",
    about: "Sobre nosotros",
    blog: "Blog",
    request: "Solicita presupuesto",
    contact: "Contacto"
  },
  home: {
    hero_title: "El nuevo ascensor neumático cuadrado diseñado para el hogar moderno",
    hero_description: "Accesibilidad, eficiencia y diseño en un ascensor residencial compacto que se instala sin obras complejas.",
    section_1_title: "Un ascensor doméstico compacto, elegante y pensado para espacios reales",
    section_1_paragraph_1: "El ascensor neumático cuadrado de Cubelifts está diseñado para integrarse con facilidad en viviendas europeas, adaptándose a huecos convencionales gracias a su forma rectangular. Su arquitectura optimizada permite una instalación rápida, sin foso ni sala de máquinas, manteniendo un alto nivel de seguridad y eficiencia energética.",
    section_1_paragraph_2: "A diferencia de los elevadores tradicionales, Cubelifts utiliza tecnología de vacío para desplazarse de forma suave y estable, ofreciendo una alternativa moderna, duradera y de mantenimiento reducido. Su diseño discreto y minimalista lo convierte en un elemento funcional que mejora el confort y la accesibilidad en el hogar.",
    section_2_title: "Cómo queda un Cubelifts en tu hogar",
    section_2_description: "Nuestro ascensor neumático cuadrado se integra en todo tipo de viviendas: desde casas modernas de diseño hasta reformas en espacios más tradicionales. Descubre una selección de imágenes y renders que muestran su estética minimalista y su capacidad de adaptación.",
    section_3_title: "Una solución práctica, segura y preparada para el futuro",
    section_3_description: "Cubelifts representa una nueva generación de ascensores residenciales. Tecnología limpia, instalación rápida y una estructura optimizada que permite ofrecer una solución accesible y fiable para mejorar la movilidad en el hogar. Un producto concebido para integrarse en el día a día sin complicaciones y adaptado a los estándares europeos de calidad y seguridad."
  },
  product: {
    hero_title: "El ascensor neumático compacto para viviendas modernas",
    hero_description: "Un elevador residencial eficiente, elegante y diseñado para integrarse en espacios reales dentro de cualquier tipo de vivienda.",
    section_1_title: "Una nueva generación de ascensores domésticos",
    section_1_paragraph_1: "CubeLift es un ascensor residencial de última generación que combina tecnología neumática con un diseño estructural optimizado y un formato compacto. Su configuración permite una instalación limpia y rápida, sin foso ni sala de máquinas, lo que lo convierte en una solución ideal para viviendas unifamiliares, reformas y proyectos de obra nueva.",
    section_1_paragraph_2: "Con su diseño cuadrado y líneas minimalistas, CubeLift se integra fácilmente en pasillos, esquinas y espacios convencionales. Ofrece comodidad, accesibilidad y eficiencia en un elevador doméstico elegante, silencioso y preparado para el estilo de vida actual.",
    section_2_title: "Instalación rápida, limpiay sin complicaciones",
    section_2_paragraph_1: "CubeLift está pensado para ofrecer la máxima comodidad tanto a la hora de usarlo como durante su instalación. Gracias a su sistema neumático, no requiere grandes obras ni infraestructuras adicionales.",
    section_3_title: "Seguridad garantizada en cada trayecto",
    section_3_paragraph_1: "CubeLift incorpora sistemas de seguridad redundantes, frenado automático y sensores que monitorizan continuamente el movimiento de la cabina. El funcionamiento por vacío elimina el riesgo de caída libre y garantiza un desplazamiento estable y fiable.",
    section_3_paragraph_2: "Además, CubeLift está diseñado conforme a las exigencias aplicables al mercado europeo en materia de seguridad y accesibilidad, ofreciendo total tranquilidad en un entorno doméstico.",
    items: {
      item_1_title: "Visita técnica y evaluación del espacio",
      item_1_paragraph: "Verificación de medidas y definición de la configuración óptima.",
      item_2_title: "Propuesta personalizada",
      item_2_paragraph: "Planos, detalles técnicos y presupuesto adaptado al hogar.",
      item_3_title: "Preparación mínima del espacio",
      item_3_paragraph: "Ajustes ligeros según la ubicación elegida.",
      item_4_title: "Instalación del ascensor",
      item_4_paragraph: "Montaje rápido, normalmente en 1–3 días.",
      item_5_title: "Pruebas de seguridad",
      item_5_paragraph: "Verificación del sistema neumático y todas las funciones.",
      item_6_title: "Entrega y puesta en servicio",
      item_6_paragraph: "Explicación de uso y mantenimiento."
    }
  },
  about: {
    section_1_paragraph: "Pneumatic Vacuum Elevators and Lifts S.L, es la subsidiaria europea del creador, fabricante y líder mundial de ascensores neumáticos de vacío, Pneumatic Vacuum Elevators Llc con sede Miami, Florida.",
    our_mission: "Nuestra misión",
    our_mission_paragraph_1: "Ser la empresa referente que soluciona los problemas de accesibilidad dentro del hogar a través de ascensores fáciles de instalar, ecológicos y con un diseño elegante y funcional",
    company_name: "Pneumatic Vacuum Elevators and Lifts S.L.",
    company_acronym: "PVE Europa",
    our_mission_paragraph_2: "Se establece en Madrid a finales de 2013 para satisfacer la demanda de ascensores neumáticos en el mercado europeo.",
    our_mission_paragraph_3: "PVE Europa cuenta con delegaciones comerciales e instaladores autorizados en todo el territorio nacional así como con más de 200 distribuidores de sus ascensores neumáticos a nivel mundial. Actualmente sus ascensores neumáticos se comercializan en más de 100 países.",
    our_mission_paragraph_4: "Las principales plantas de fabricación de Pneumatic Vacuum Elevators se encuentran en Estados Unidos, Latinoamérica y Dubai. Nuestra misión: crecer rápida y consistentemente en el mercado de ascensores residenciales, teniendo como signos de identidad la innovación constante y la calidad, para brindar a nuestros clientes un producto y servicio excelente",
    buttons: {
      policy_quality: "Política de Calidad",
      certificate: "Certificado",
      quality_certificate: "Certificado del Sistema de Gestión de la Calidad"
    }
  },
  contact: {
    paragraph_1: "Para cualquier tipo de consulta acerca de nuestros ascensores neumáticos, rellena el siguiente formulario indicándonos tus datos de contacto. Nos pondremos en contacto contigo lo antes posible."
  },
  blog: {
    read_more: "Leer más",
    back: "Volver"
  },
  advantages: {
    title: "Ventajas del ascensor neumático cuadrado Cubelifts",
    product_title: "Por qué CubeLift es la mejor solución para tu hogar",
    item_1: {
      title: "Diseño cuadrado para una integración natural",
      description: "La forma rectangular permite instalarlo en esquinas, pasillos y espacios típicos de viviendas europeas, reduciendo la necesidad de modificaciones estructurales."
    },
    item_2: {
      title: "Instalación sin obras complejas",
      description: "No necesita foso, cuarto de máquinas ni grandes trabajos de albañilería. El montaje se completa en muy pocos días."
    },
    item_3: {
      title: "Arquitectura optimizada y mayor eficiencia",
      description: "Su diseño estructural permite un coste final más accesible sin comprometer la calidad del producto ni su durabilidad."
    },
    item_4: {
      title: "Consumo energético reducido",
      description: "La tecnología neumática minimiza el uso de energía, especialmente en el descenso, lo que lo convierte en una opción sostenible."
    },
    item_5: {
      title: "Mantenimiento mínimo",
      description: "El sistema de vacío reduce el desgaste mecánico, garantizando una larga vida útil del ascensor."
    },
    item_6: {
      title: "Estética moderna y adaptable",
      description: "Líneas limpias, cabina luminosa y opciones de personalización para encajar en distintos estilos de interior."
    }
  },
  features: {
    title: "Diseñado para espacios reducidos. Pensado para hogares europeos.",
    item_1: "Cabina cuadrada optimizada para huecos convencionales",
    item_2: "Hasta 3 paradas en viviendas unifamiliares",
    item_3: "Capacidad para 1 o 2 personas",
    item_4: "Requisitos de instalación mínimos",
    item_5: "Consumo eléctrico reducido",
    item_6: "Iluminación LED integrada",
    item_7: "Opciones de personalización en acabados y puertas"
  },
  specifications: {
    title: "Especificaciones de CubeLift",
    description: "CubeLift está diseñado para ofrecer máximo rendimiento en un formato compacto y adaptable. Estas son sus características técnicas orientativas:",
    specification_1: {
      title: "Dimensiones",
      item_1: "Diseño cuadrado compacto",
      item_2: "Opciones de ancho exterior entre 80–100 cm (según configuración)",
      item_3: "Altura interior aproximada: 200 cm",
      item_4: "Cabina para huecos domésticos estándar"
    },
    specification_2: {
      title: "Requisitos de instalación",
      item_1: "No necesita foso",
      item_2: "No requiere sala de máquinas",
      item_3: "Solo precisa una superficie estable y un punto eléctrico cercano"
    },
    specification_3: {
      title: "Personalización",
      item_1: "Acabados interiores",
      item_2: "Iluminación LED",
      item_3: "Puerta transparente o semitransparente",
      item_4: "Configuración de apertura"
    },
    specification_4: {
      title: "Capacidad",
      item_1: "1–2 personas",
      item_2: "Carga útil aproximada: 180–205 kg"
    },
    specification_5: {
      title: "Recorrido",
      item_1: "Hasta 3 paradas",
      item_2: "Ideal para viviendas de varias plantas"
    },
    specification_6: {
      title: "Consumo eléctrico",
      item_1: "Bajo consumo en ascenso",
      item_2: "Consumo prácticamente nulo en descenso"
    }
  },
  faqs: {
    title: "Preguntas frecuentes",
    item_1: {
      question: "¿Necesita obras para instalarse?",
      answer: "No. Basta con una superficie estable y un punto eléctrico."
    },
    item_2: {
      question: "¿Cuánto tiempo dura la instalación?",
      answer: "Normalmente entre 1 y 3 días, según el espacio y la configuración."
    },
    item_3: {
      question: "¿Cuántas personas caben en CubeLift?",
      answer: "Entre 1 y 2 personas, dependiendo de la versión instalada."
    },
    item_4: {
      question: "¿Qué consumo eléctrico tiene?",
      answer: "El consumo es bajo en ascenso y prácticamente nulo en descenso."
    },
    item_5: {
      question: "¿Es seguro?",
      answer: "Sí. El sistema de vacío y los frenos automáticos garantizan máxima seguridad."
    },
    item_6: {
      question: "¿Se puede personalizar?",
      answer: "Sí, dispone de diferentes acabados interiores y opciones de puerta."
    }
  },
  button: {
    request: "Solicita presupuesto",
    download: "Descargar ficha técnica"
  },
  footer: {
    title: "HAZ TU VIVIENDA MÁS CÓMODA Y ACCESIBLE",
    description: "Si deseas mejorar la movilidad en tu hogar con un ascensor compacto, seguro y de instalación rápida, Cubelifts es la solución perfecta. Solicita una propuesta personalizada y descubre cómo integrarlo en tu vivienda."
  },
  form: {
    name: "Nombre",
    surname: "Apellidos",
    email: "Correo Electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    submit: "Enviar",
    search: "Buscar",
    legal_notice: "Aviso legal",
    privacy_policy: "Política de privacidad",
    and: "y",
    the: "la",
    read_accept: "He leído y acepto el",
    country: "País",
    province: "Provincia",
    installation_type: {
      label: "Tipo de instalación",
      item_1: "Vivienda particular (Chalet, unifamiliar, adosado)",
      item_2: "Piso dúplex (ático, penthouse, etc.)",
      item_3: "Comunidad de Propietarios",
      item_4: "Local Comercial",
      item_5: "Otro tipo de vivienda"
    },
    floor_quantity: "Cuántas plantas tiene su vivienda?",
    more_than_5: "Más de 5",
    order: "Ordenar",
    date: "Fecha"
  },
  title: "Ascensores de alta calidad",
  description: "Instalación y mantenimiento de ascensores",
  specification_show: "> Ver especificaciones del modelo",
  specification_show_all: "Ver especificaciones completas >"
};

const t = {
  navbar: {
    home: "Home",
    product: "Product",
    about: "About us",
    blog: "Blog",
    request: "Request a quote",
    contact: "Contact"
  },
  home: {
    hero_title: "The new square pneumatic lift designed for the modern home",
    hero_description: "Accessibility, efficiency and design in a compact residential lift that installs without complex works.",
    section_1_title: "A compact domestic lift, elegant and designed for real spaces",
    section_1_paragraph_1: "The square pneumatic lift of Cubelifts is designed to easily integrate into European homes, adapting to conventional holes thanks to its rectangular shape. Its optimized architecture allows for quick installation, without the need for a workshop or machine room, maintaining a high level of security and energy efficiency.",
    section_1_paragraph_2: "Unlike traditional elevators, Cubelifts uses air compression technology to move smoothly and stably, offering a modern, durable, and maintenance-reduced alternative. Its discreet and minimalist design makes it a functional element that improves comfort and accessibility in the home.",
    section_2_title: "How does a Cubelifts lift look in your home?",
    section_2_description: "Our square pneumatic lift seamlessly integrates into various home types, from modern designs to traditional spaces. Explore a selection of images and renders that showcase its minimalist aesthetic and adaptability.",
    section_3_title: "A practical, secure and prepared solution for the future",
    section_3_description: "Cubelifts represents a new generation of residential lifts. Clean technology, quick installation and an optimized structure that allows for a practical and secure solution. A product conceived to integrate into daily life without complications and adapted to European quality and security standards."
  },
  product: {
    hero_title: "The compact pneumatic lift for modern homes",
    hero_description: "An efficient, elegant residential lift designed to blend into real spaces within any type of home.",
    section_1_title: "A new generation of domestic lifts",
    section_1_paragraph_1: "CubeLift is a state-of-the-art residential lift that combines pneumatic technology with an optimised structural design and a compact format. Its configuration allows for quick and clean installation, without a pit or machine room, making it an ideal solution for single-family homes, renovations and new construction projects.",
    section_1_paragraph_2: "With its square design and minimalist lines, CubeLift fits easily into corridors, corners and conventional spaces. It offers comfort, accessibility and efficiency in an elegant, quiet home lift that is ready for today's lifestyle.",
    section_2_title: "Quick, clean and hassle-free installation",
    section_2_paragraph_1: "CubeLift is designed to offer maximum convenience both during use and installation. Thanks to its pneumatic system, it does not require major construction work or additional infrastructure.",
    section_3_title: "Security guaranteed in every journey",
    section_3_paragraph_1: "CubeLift incorporates redundant security systems, automatic braking and sensors that continuously monitor the movement of the cabin. The empty-function eliminates the risk of falls and ensures stable and reliable displacement.",
    section_3_paragraph_2: "In addition, CubeLift is designed according to applicable European security and accessibility standards, offering total tranquility in a domestic environment.",
    items: {
      item_1_title: "Technical visit and space assessment",
      item_1_paragraph: "Verification of measurements and definition of the optimal configuration.",
      item_2_title: "Personalised proposal",
      item_2_paragraph: "Plans, technical details and budget tailored to the home.",
      item_3_title: "Minimal preparation of the space",
      item_3_paragraph: "Minor adjustments according to the chosen location.",
      item_4_title: "Lift installation",
      item_4_paragraph: "Quick assembly, usually in 1–3 days.",
      item_5_title: "Safety tests",
      item_5_paragraph: "Verification of the pneumatic system and all functions.",
      item_6_title: "Delivery and commissioning",
      item_6_paragraph: "Explanation of use and maintenance."
    }
  },
  about: {
    section_1_paragraph: "Pneumatic Vacuum Elevators and Lifts S.L, is the European subsidiary of the creator, manufacturer and world leader in pneumatic vacuum elevators, Pneumatic Vacuum Elevators Llc with headquarter in Miami, Florida.",
    our_mission: "Our mission",
    our_mission_paragraph_1: "To be the reference company that solves accessibility problems within the home through easy-to-install, ecological, and elegant lifts.",
    company_name: "Pneumatic Vacuum Elevators and Lifts S.L.",
    company_acronym: "PVE Europa",
    our_mission_paragraph_2: "Established in Madrid in the end of 2013, to meet the demand for pneumatic elevators in the European market.",
    our_mission_paragraph_3: "PVE Europa has a network of more than 200 distributors in more than 100 countries, with more than 1000 employees. Its sales team is composed of trained professionals who are committed to providing the best possible service to its customers.",
    our_mission_paragraph_4: "The main manufacturing plants for Pneumatic Vacuum Elevators are located in the United States, Latin America and Dubai. Our mission: to grow rapidly and consistently in the residential lift market, with constant innovation and quality as our hallmarks, in order to provide our customers with an excellent product and service.",
    buttons: {
      policy_quality: "Quality Policy",
      certificate: "Certificate",
      quality_certificate: "Quality Management System Certificate"
    }
  },
  contact: {
    paragraph_1: "For any queries regarding our pneumatic lifts, please fill in the following form with your contact details. We will get back to you as soon as possible."
  },
  blog: {
    read_more: "Read more",
    back: "Back"
  },
  advantages: {
    title: "Advantages of using a Cubelifts lift",
    product_title: "Why CubeLift is the best solution for your home",
    item_1: {
      title: "Compact and modern design",
      description: "The lift is designed to fit into small spaces, with a minimalist and modern aesthetic that enhances the home's functionality."
    },
    item_2: {
      title: "Quick installation",
      description: "The lift is installed without the need for a workshop or machine room, saving time and effort."
    },
    item_3: {
      title: "Optimized architecture",
      description: "The lift's optimized architecture allows for quick and efficient movement, with a high level of security and energy efficiency."
    },
    item_4: {
      title: "Air compression technology",
      description: "The lift uses air compression technology to move smoothly and stably, offering a modern, durable, and maintenance-reduced alternative."
    },
    item_5: {
      title: "Discreet and minimalist design",
      description: "The lift's discreet and minimalist design makes it a functional element that improves comfort and accessibility in the home."
    },
    item_6: {
      title: "Esthetic modern and adaptable",
      description: "Lines clean, cabin luminous and customization options to fit in different interior styles."
    }
  },
  specifications: {
    title: "CubeLift Specifications",
    description: "CubeLift is designed to offer maximum performance in a compact and adaptable format. These are its indicative technical characteristics:",
    specification_1: {
      title: "Dimensions",
      item_1: "Compact square design",
      item_2: "External width options between 80–100 cm (depending on configuration)",
      item_3: "Approximate interior height: 200 cm",
      item_4: "Cabin for standard residential shafts"
    },
    specification_2: {
      title: "Installation requirements",
      item_1: "No pit required",
      item_2: "No machine room needed",
      item_3: "Only requires a stable surface and a nearby power supply"
    },
    specification_3: {
      title: "Customization",
      item_1: "Interior finishes",
      item_2: "LED lighting",
      item_3: "Transparent or semi-transparent door",
      item_4: "Opening configuration"
    },
    specification_4: {
      title: "Capacity",
      item_1: "1–2 people",
      item_2: "Approximate payload: 180–205 kg"
    },
    specification_5: {
      title: "Travel",
      item_1: "Up to 3 stops",
      item_2: "Ideal for multi-storey homes"
    },
    specification_6: {
      title: "Power consumption",
      item_1: "Low consumption during ascent",
      item_2: "Virtually zero consumption during descent"
    }
  },
  features: {
    title: "Designed for reduced spaces. Thought for European homes.",
    item_1: "Square cabin optimized for conventional holes",
    item_2: "Up to 3 stops in single-family homes",
    item_3: "Capacity for 1 or 2 people",
    item_4: "Minimum installation requirements",
    item_5: "Reduced energy consumption",
    item_6: "Integrated LED illumination",
    item_7: "Customization options in finishes and doors"
  },
  faqs: {
    title: "Frequently asked questions",
    item_1: {
      question: "Does it require any building work to install?",
      answer: "No. All you need is a stable surface and an electrical outlet."
    },
    item_2: {
      question: "How long does installation take?",
      answer: "Normally between 1 and 3 days, depending on the space and configuration."
    },
    item_3: {
      question: "How many people can fit in CubeLift?",
      answer: "Between 1 and 2 people, depending on the version installed."
    },
    item_4: {
      question: "How much electricity does it consume?",
      answer: "Consumption is low when going up and practically zero when going down."
    },
    item_5: {
      question: "Is it safe?",
      answer: "Yes. The vacuum system and automatic brakes guarantee maximum safety."
    },
    item_6: {
      question: "Can it be customised?",
      answer: "Yes, it is available with different interior finishes and door options."
    }
  },
  button: {
    request: "Request a quote",
    download: "Download technical sheet"
  },
  footer: {
    title: "MAKE YOUR HOME CONFORTABLE AND ACCESSIBLE",
    description: "If you want to improve the mobility in your home with a compact, safe and fast installation lift, Cubelifts is the perfect solution. Request a custom proposal and discover how to integrate it into your home."
  },
  form: {
    name: "Name",
    surname: "Surname",
    email: "Email",
    phone: "Telephone",
    message: "Message",
    submit: "Send",
    legal_notice: "Legal notice",
    privacy_policy: "Privacy policy",
    and: "and",
    the: "the",
    read_accept: "I have read and accept the",
    country: "Country",
    province: "Province",
    search: "Search",
    installation_type: {
      label: "Installation type",
      item_1: "Residential (Chalet, unifamiliar, adosado)",
      item_2: "Duplex floor ( attic, penthouse, etc.)",
      item_3: "Community of Owners",
      item_4: "Commercial Local",
      item_5: "Other type of home"
    },
    floor_quantity: "How many floors does your home have?",
    more_than_5: "More than 5",
    order: "Order",
    date: "Date"
  },
  title: "High quality lifts",
  description: "Lift installation and maintenance",
  specification_show: "> Show model specifications",
  specification_show_all: "Show all specifications >"
};

const translations = {
  es: t$1,
  en: t
};
function getTranslations(lang) {
  return translations[lang] || translations.es;
}
function getPath(route, lang) {
  const slug = routes[route][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

const $$Astro$7 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const { lang, class: className } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const supportedLanguages = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" }
    // Add more languages here in the future
  ];
  const normalizePath = (path) => path.replace(/\/$/, "") || "/";
  let currentRouteKey = "home";
  for (const [key, _] of Object.entries(routes)) {
    const pathForKey = getPath(key, lang);
    if (normalizePath(pathForKey) === normalizePath(currentPath)) {
      currentRouteKey = key;
      break;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative inline-block text-left group ${className}`, "class")}> <button type="button" class="font-medium text-white hover:text-primary transition-colors uppercase flex items-center gap-1 cursor-pointer"> ${lang} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-180 transition-transform duration-200"> <path d="m6 9 6 6 6-6"></path> </svg> </button> <div class="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50"> <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"> ${supportedLanguages.map((l) => renderTemplate`<a${addAttribute(getPath(currentRouteKey, l.code), "href")}${addAttribute(`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${lang === l.code ? "font-bold bg-gray-50" : ""}`, "class")} role="menuitem"> ${l.label} </a>`)} </div> </div> </div>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/LanguageSelector.astro", void 0);

const $$Astro$6 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  const currentPath = Astro2.url.pathname;
  const normalizePath = (path) => path.replace(/\/$/, "") || "/";
  const isCurrent = (href) => normalizePath(currentPath) === normalizePath(href);
  const links = Object.keys(routes).map((key) => ({
    href: getPath(key, lang),
    label: t.navbar[key]
  }));
  return renderTemplate`${maybeRenderHead()}<nav class="bg-black flex justify-between items-center px-6 md:px-24 py-4 relative z-50"> <a${addAttribute(getPath("home", lang), "href")}> <img src="/brand/logo.png" alt="Logo" class="h-10 w-auto"> </a> <!-- Desktop Menu --> <div class="hidden md:flex gap-8 items-center"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-lg transition-colors duration-200 ${isCurrent(link.href) ? "font-bold text-primary" : "text-white hover:text-primary"}`, "class")}> ${link.label} </a>`)} ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "lang": lang })} </div> <!-- Mobile Hamburger Button --> <button id="menu-toggle" class="md:hidden text-white focus:outline-none z-50 relative w-8 h-8 flex flex-col justify-center gap-1.5" aria-label="Toggle Menu"> <span class="block w-full h-0.5 bg-white transition-all duration-300 origin-center" id="hamburger-top"></span> <span class="block w-full h-0.5 bg-white transition-all duration-300 origin-center" id="hamburger-middle"></span> <span class="block w-full h-0.5 bg-white transition-all duration-300 origin-center" id="hamburger-bottom"></span> </button> <!-- Mobile Sheet --> <div id="mobile-menu" class="fixed inset-0 bg-black/95 backdrop-blur-sm transform translate-x-full transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 z-40"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-2xl transition-colors duration-200 ${isCurrent(link.href) ? "font-bold text-primary" : "text-white"}`, "class")}> ${link.label} </a>`)} ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "lang": lang })} </div> </nav> ${renderScript($$result, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Navbar.astro", void 0);

const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-3c-.5 0-1 .5-1 1v1.9h4l-.6 3h-3.4v7A10 10 0 0 0 22 12z"></path> </svg>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Facebook.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path> </svg>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Instagram.astro", void 0);

const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path d="M23 7.5s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.2 4 12 4 12 4h0s-5.2 0-8.1.1c-.4.1-1.3.1-2.1 1C1.2 5.8 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.8.2 7.8.2s5.2 0 8.1-.1c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"></path> </svg>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Youtube.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.props;
  const t = getTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="px-18 py-4 bg-black"> <div class="border-t border-primary flex flex-col gap-4 py-4"> <div class="w-full"> <img src="/brand/logo.png" alt="Logo" class="h-10 w-auto"> </div> <div class="w-full flex flex-col gap-8 md:flex-row md:gap-12 md:items-center"> <div class="flex flex-col flex-2"> <a class="footer-nav"${addAttribute(getPath("product", lang), "href")}>${t.navbar.product}</a> <a class="footer-nav"${addAttribute(getPath("about", lang), "href")}>${t.navbar.about}</a> <a class="footer-nav"${addAttribute(getPath("blog", lang), "href")}>${t.navbar.blog}</a> <a class="footer-nav"${addAttribute(getPath("request", lang), "href")}>${t.navbar.request}</a> <div class="flex flex-row gap-3 mt-8"> <a href="#" aria-label="YouTube" class="text-white hover:text-primary transition-colors"> ${renderComponent($$result, "Youtube", $$Youtube, {})} </a> <a href="#" aria-label="Instagram" class="text-white hover:text-primary transition-colors"> ${renderComponent($$result, "Instagram", $$Instagram, {})} </a> <a href="#" aria-label="Facebook" class="text-white hover:text-primary transition-colors"> ${renderComponent($$result, "Facebook", $$Facebook, {})} </a> </div> </div> <div class="flex flex-col gap-8 text-white flex-3"> <p class="text-lg font-bold">${t.navbar.contact}</p> <div class="flex flex-col gap-4 md:flex-row md:justify-between"> <div class="flex flex-col"> <p>C/ Primavera 19</p> <p>28850 Torrejón de Ardoz,</p> <p>Madrid, España.</p> </div> <div class="flex flex-col"> <p>+34 91 886 75 39</p> <p>638 01 62 67</p> <p>info@vacuumelevators.eu</p> </div> </div> </div> <form id="form" class="flex flex-col text-white flex-4"> <input type="text"${addAttribute(t.form.name, "placeholder")} class="input-dark"> <input type="text"${addAttribute(t.form.email, "placeholder")} class="input-dark"> <input type="text"${addAttribute(t.form.phone, "placeholder")} class="input-dark"> <input type="text"${addAttribute(t.form.message, "placeholder")} class="input-dark"> <div class="flex flex-col md:flex-row gap-4 mt-4 md:items-center"> <button type="submit" class="btn-submit">${t.form.submit}</button> <input type="checkbox" id="checkbox" class="checkbox-input-dark"> <label for="checkbox">${t.form.read_accept} <a href="" class="underline">${t.form.legal_notice}</a> ${t.form.and} <a href="" class="underline">${t.form.privacy_policy}</a></label> </div> </form> </div> </div> <div class="flex flex-col text-white gap-4"> <p class="text-balance text-xs font-light">Copyright © 2025 Pneumatic Vacuum Elevators, LLC</p> <p class="text-xs font-light text-balance">Cube Lifts are designed as residential elevators and are not ADA compliant. Actual product may vary from images and renderings shown or descriptions provided. Variations in color, finish, features, or specifications may occur due to ongoing improvements, customization options, or display differences. Final delivered product may differ slightly from what is advertised.</p> </div> </section>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro();
const $$SeoSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SeoSchema;
  const { lang = "es", url } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "@id": `${url}#organization`,\n  name: "Vacuum Lift International",\n  url,\n  logo: `${url}/logo.svg`,\n  sameAs: [\n    "https://www.linkedin.com/company/xxx",\n    "https://www.youtube.com/@xxx"\n  ],\n  description:\n    lang === "es"\n      ? "Empresa internacional especializada en la instalaci\xF3n de ascensores por vac\xEDo de forma cuadrada."\n      : "International company specialized in the installation of square vacuum elevators.",\n})\n}\n<\/script>'], ['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "@id": \\`\\${url}#organization\\`,\n  name: "Vacuum Lift International",\n  url,\n  logo: \\`\\${url}/logo.svg\\`,\n  sameAs: [\n    "https://www.linkedin.com/company/xxx",\n    "https://www.youtube.com/@xxx"\n  ],\n  description:\n    lang === "es"\n      ? "Empresa internacional especializada en la instalaci\xF3n de ascensores por vac\xEDo de forma cuadrada."\n      : "International company specialized in the installation of square vacuum elevators.",\n})\n}\n<\/script>'])));
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/SeoSchema.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$ProductSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductSchema;
  const { lang = "es", url } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "@id": `${url}#vacuum-lift`,\n  name:\n    lang === "es"\n      ? "Ascensor por vac\xEDo cuadrado"\n      : "Square Vacuum Elevator",\n  description:\n    lang === "es"\n      ? "Ascensor cuadrado impulsado por tecnolog\xEDa de vac\xEDo, eficiente y sin contrapesos."\n      : "Square-shaped elevator powered by vacuum technology, efficient and counterweight-free.",\n  brand: {\n    "@type": "Brand",\n    name: "Vacuum Lift International",\n  },\n  manufacturer: {\n    "@type": "Organization",\n    name: "Vacuum Lift International",\n  },\n  category: "Elevator",\n})\n}\n<\/script>'], ['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Product",\n  "@id": \\`\\${url}#vacuum-lift\\`,\n  name:\n    lang === "es"\n      ? "Ascensor por vac\xEDo cuadrado"\n      : "Square Vacuum Elevator",\n  description:\n    lang === "es"\n      ? "Ascensor cuadrado impulsado por tecnolog\xEDa de vac\xEDo, eficiente y sin contrapesos."\n      : "Square-shaped elevator powered by vacuum technology, efficient and counterweight-free.",\n  brand: {\n    "@type": "Brand",\n    name: "Vacuum Lift International",\n  },\n  manufacturer: {\n    "@type": "Organization",\n    name: "Vacuum Lift International",\n  },\n  category: "Elevator",\n})\n}\n<\/script>'])));
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/ProductSchema.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ServiceSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceSchema;
  const { lang = "es", url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Service",\n  "@id": `${url}#installation-service`,\n  serviceType:\n    lang === "es"\n      ? "Instalaci\xF3n de ascensores por vac\xEDo"\n      : "Vacuum elevator installation",\n  provider: {\n    "@type": "Organization",\n    name: "Vacuum Lift International",\n  },\n  areaServed: {\n    "@type": "Place",\n    name: "Worldwide",\n  },\n})\n}\n<\/script>'], ['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "Service",\n  "@id": \\`\\${url}#installation-service\\`,\n  serviceType:\n    lang === "es"\n      ? "Instalaci\xF3n de ascensores por vac\xEDo"\n      : "Vacuum elevator installation",\n  provider: {\n    "@type": "Organization",\n    name: "Vacuum Lift International",\n  },\n  areaServed: {\n    "@type": "Place",\n    name: "Worldwide",\n  },\n})\n}\n<\/script>'])));
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/components/ServiceSchema.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    lang = "es",
    title,
    description,
    canonical,
    noindex = false,
    hreflangs = []
  } = Astro2.props;
  const url = canonical ?? Astro2.url.href;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><!-- Basic --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"><!-- SEO --><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<link rel="canonical"${addAttribute(url, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- hreflang -->${hreflangs.map(({ lang: hrefLang, href }) => renderTemplate`<link rel="alternate"${addAttribute(hrefLang, "hreflang")}${addAttribute(href, "href")}>`)}<!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}>${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`}<meta property="og:url"${addAttribute(url, "content")}>${renderComponent($$result, "SeoSchema", $$SeoSchema, { "lang": lang, "url": url })}${renderComponent($$result, "ProductSchema", $$ProductSchema, { "lang": lang, "url": url })}${renderComponent($$result, "ServiceSchema", $$ServiceSchema, { "lang": lang, "url": url })}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, { "lang": lang })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "lang": lang })} </body></html>`;
}, "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Youtube as a, $$Instagram as b, $$Facebook as c, getPath as d, getTranslations as g };
