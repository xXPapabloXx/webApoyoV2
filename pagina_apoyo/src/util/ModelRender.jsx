import NoRotation from "./NoRotation";
import Rotation from "./Rotation";


export default function ModelRender({ modelPath, rotation, rotates }) {
  if (rotates == false) {
    return <NoRotation modelPath={modelPath} rotation={rotation}/>    
  } else {
    return <Rotation modelPath={modelPath}/>
  }
}
