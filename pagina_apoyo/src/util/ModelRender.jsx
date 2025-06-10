import NoRotation from "./NoRotation";
import Rotation from "./Rotation";


export default function ModelRender({ modelPath, rotation, rotates }) {
  if (rotates == true) {
    return <Rotation modelPath={modelPath}/>
  } else {
    return <NoRotation modelPath={modelPath} rotation={rotation}/>    
  }
}
