import '../styles/App.css'
import ModelRenderer from './ModelRenderer.jsx'

function App() {
  return (
    <div className="App">
      <h1>Modelo 3D</h1>
      <ModelRenderer src="/models/montacargas/montacarga.glb" />
    </div>
  )
}

export default App
