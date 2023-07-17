// 1) Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./components/Random"
import Input from "./components/Input";

// 2) Obtenemos la referencia del elemento padre root
const el = document.getElementById('root');

// 3) Asignamos a react que coja el control del elemento
const root = ReactDOM.createRoot(el);

// 4) Creamos el componente
function App() {
    return <Random />
}

// 5) Mostramos el componente
root.render(<App />)