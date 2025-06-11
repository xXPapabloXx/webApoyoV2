import NoRotation from "./NoRotation";
import Rotation from "./Rotation";


export default function ModelRender({ modelPath, rotation, scale, rotates }) {
  if (rotates == true) {
    return <Rotation modelPath={modelPath} scale={scale} />
  } else {
    return <NoRotation modelPath={modelPath} rotation={rotation} scale={scale} />    
  }
}
