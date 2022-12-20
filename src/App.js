import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([]);

  useEffect(() => {
    localStorage.setItem("tareas", "Hola");
  }, [tareas]);

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);
  console.log(tareas);
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
