import { NodeIO } from '@gltf-transform/core';
import { draco } from '@gltf-transform/functions';


const io = new NodeIO();


const inputPath = '../models/confect/Entero.glb';
const outputPath = '../pagina_apoyo/public/models/clothes/Entero-draco.glb';

const doc = await io.read(inputPath);


await doc.transform(
  draco()
);

// Guarda el modelo optimizado
await io.write(outputPath, doc);

console.log('✅ Modelo comprimido con éxito:', outputPath);
