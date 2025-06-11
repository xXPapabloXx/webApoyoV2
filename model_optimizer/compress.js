import { NodeIO } from '@gltf-transform/core';
import { draco } from '@gltf-transform/functions';


const io = new NodeIO();


const inputPath = '../pagina_apoyo/public/models/serv_log.glb';
const outputPath = '../pagina_apoyo/public/models/serv_log-draco.glb';

const doc = await io.read(inputPath);


await doc.transform(
  draco()
);

// Guarda el modelo optimizado
await io.write(outputPath, doc);

console.log('✅ Modelo comprimido con éxito:', outputPath);
