const navidad = import.meta.glob('../../assets/images/catalog/xmas/*.{jpg,jfif}', { eager: true });
const halloween = import.meta.glob('../../assets/images/catalog/halloween/*.{jpg,jfif}', { eager: true });
const salud = import.meta.glob('../../assets/images/catalog/health/*.jpg', { eager: true });
const trabajo = import.meta.glob('../../assets/images/catalog/work/*.jpg', { eager: true });

function transformar(archivos, etiqueta) {
  return Object.entries(archivos)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([_, mod], idx) => ({
      src: mod.default,
      alt: `${etiqueta} ${idx + 1}`,
    }));
}

export const imagenes = {
  navidad: transformar(navidad, 'Navidad'),
  halloween: transformar(halloween, 'Halloween'),
  salud: transformar(salud, 'Salud'),
  trabajo: transformar(trabajo, 'Trabajo'),
};
