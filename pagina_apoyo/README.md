# Apoyo Logistico - Sitio Informativo

Este proyecto utiliza **React** y **Vite** para construir un sitio orientado al diseño. La estructura de carpetas se ha organizado siguiendo un patrón limpio, separando los componentes, páginas, estilos y recursos estáticos.

```
pagina_apoyo/
├── public/
│   └── models/      # modelos 3D para las vistas
├── src/
│   ├── assets/      # imágenes y archivos estáticos que se empaquetan
│   ├── components/  # componentes reutilizables
│   ├── pages/       # páginas principales del sitio
│   ├── styles/      # archivos CSS
│   └── main.jsx     # punto de entrada de la aplicación
```

## Scripts básicos

- `npm run dev` inicia el entorno de desarrollo.
- `npm run build` genera la versión optimizada.
- `npm run preview` sirve la build para revisión.

Los modelos 3D se ubican ahora en `public/models`, lo que permite referenciarlos fácilmente desde las vistas.
