import { NodeIO } from '@gltf-transform/core';
import { draco } from '@gltf-transform/functions';

// Crea una instancia del IO
const io = new NodeIO();

// Carga el modelo original
const inputPath = '../pagina_apoyo/public/models/Logo.glb';
const outputPath = '../pagina_apoyo/public/models/Logo-draco.glb';

const doc = await io.read(inputPath);

// Aplica compresión Draco
await doc.transform(
  draco()
);

// Guarda el modelo optimizado
await io.write(outputPath, doc);

console.log('✅ Modelo comprimido con éxito:', outputPath);
