import { useState } from "react";
import Light from "./Light";

//componente de mi semaforo
export default function TrafficLight() {

  const [color, setColor] = useState("red"); // inicia en rojo
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  //¿existe la luz púrpura?
  // cambios usando array,index y el modulo % asi evito el DRY (antes lo hice con ternarias largas)
  const nextColor = () => {
    const currentIndex = colors.indexOf(color);             // dónde estoy
    const nextIndex = (currentIndex + 1) % colors.length;   // a dónde voy (cíclico)
    setColor(colors[nextIndex]);                            // enciendo la siguiente
  };

  //"Añadir púrpura"Si aún no existe, la activo y se enciende.

  const addColorPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]); // añade a los colores el purple
    }
  };

  // si esta el purpura lo quito si no no 🫨 
  const deleteColorPurple = () => {
    setColors(colors.filter(color => color !== "purple")); // elimina de los colores el purple
  };

  return (
    // Contenedor general, mi cajita negra.
    <div className= "black-box">
      {/* Caja negra del semáforo */}
      <div className="black-content" >
        {/* una sola lógica para cualquier número de colores. Antes lo tenia con div duplicados y condicional para purpura, anti DRY*/}
        {colors.map((currentColor) => (
          <Light
            key={currentColor}                         // clave única de React
            color={currentColor}                       // "red",  "yellow",  "green",  "purple"
            colorLigth={color === currentColor}         // ¿está encendida esta luz?
            onClick={() => setColor(currentColor)}     // encender esta luz al hacer clic
          />
        ))}
      </div>

      {/* Palito del semáforo */}
      <div className="trafficlight-feet"></div>

      {/* Botones de control */}
      <div className= "button-position">
        <button onClick={nextColor} className=" rojo btn btn-primary">Siguiente</button>
        <button onClick={addColorPurple} className="btn btn-success">Añadir púrpura</button>
        <button onClick={deleteColorPurple} className="btn btn-warning">Quitar púrpura</button>
      </div>
    </div>
  );
}
