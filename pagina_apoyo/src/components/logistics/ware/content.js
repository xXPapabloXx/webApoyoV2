export const simples = [
  {
    titulo: "Clasificación de producto por diseño",
    descripcion:
      "Organización de productos según diseño, color u otras características visuales.",
    icon: "Tag",
  },
  {
    titulo: "Inventario inicial de la mercancía",
    descripcion:
      "Registro del estado de las existencias antes de iniciar operaciones.",
    icon: "ClipboardCheck",
  },
  {
    titulo: "Inventario final por caja",
    descripcion: "Conteo final de productos agrupados por caja.",
    icon: "Box",
  },
  {
    titulo: "Separación de segundas",
    descripcion: "Identificación de productos defectuosos para su separación.",
    icon: "Package",
  },
];

export const desplegables = [
  {
    titulo: "Procesos internos",
    key: "internos",
    subtareas: [
      {
        titulo: "Pre-inspección (en caso necesario)",
        descripcion: "Evaluación previa de la mercancía.",
        icon: "SearchCheck",
      },
      {
        titulo: "Des-marquillar, Re-marquillar",
        descripcion: "Cambio o reubicación de etiquetas/marquillas.",
        icon: "Replace",
      },
      {
        titulo: "Doblar",
        descripcion: "Plegado de productos para almacenamiento o envío.",
        icon: "Layers",
      },
      {
        titulo: "Empacar",
        descripcion: "Proceso de embalaje y protección del producto.",
        icon: "PackageCheck",
      },
    ],
  },
  {
    titulo: "Etiquetado y marquillas",
    key: "etiquetas",
    subtareas: [
      {
        titulo: "Líneas de producción de etiquetas",
        descripcion: "Fabricación e impresión de etiquetas personalizadas.",
        icon: "Printer",
      },
      {
        titulo: "Ropa infantil, adultos",
        descripcion: "Etiquetado específico por categoría de edad.",
        icon: "Shirt",
      },
      {
        titulo: "Accesorios",
        descripcion: "Identificación de complementos como bolsos o gafas.",
        icon: "Gem",
      },
      {
        titulo: "Ropa interior",
        descripcion: "Etiquetas diseñadas para ropa íntima.",
        icon: "Shirt",
      },
      {
        titulo: "Calzado",
        descripcion: "Etiquetado para diferentes tipos de calzado.",
        icon: "Footprints",
      },
      {
        titulo: "Juguetería",
        descripcion: "Información legal y de seguridad para juguetes.",
        icon: "Puzzle",
      },
      {
        titulo: "Bisutería",
        descripcion: "Marquillas para artículos decorativos pequeños.",
        icon: "Sparkles",
      },
      {
        titulo: "Grado alimenticio",
        descripcion: "Identificación para productos en contacto con alimentos.",
        icon: "Utensils",
      },
    ],
  },
];
