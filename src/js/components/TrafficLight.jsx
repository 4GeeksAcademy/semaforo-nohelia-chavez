import React, { useState } from "react";
import Light from "./Light";

//componente de mi semaforo
export default function TrafficLight() {


  const [color, setColor] = useState("red"); // inicia en rojo

  //¿existe la luz púrpura?
  const [purpleExist, setPurpleExist] = useState(false); // al inicio NO existe

  // Defino el array base y el array “efectivo” según exista púrpura o no
  const baseColors = ["red", "yellow", "green"];         // siempre estara 
  const colors = purpleExist ? [...baseColors, "purple"] : baseColors; //  si hay púrpura, se suma  al final

  // cambios usando array,index y el modulo % asi evito el DRY (antes lo hice con ternarias largas)
  const newColor = () => {
    const currentIndex = colors.indexOf(color);             // dónde estoy
    const nextIndex = (currentIndex + 1) % colors.length;   // a dónde voy (cíclico)
    setColor(colors[nextIndex]);                            // enciendo la siguiente
  };

  //"Añadir púrpura"Si aún no existe, la activo y se enciende.

  const addPurple = () => {
    if (!purpleExist) setPurpleExist(true);
    setColor("purple");
  };
// si esta el purpura lo quito si no no 🫨 
  const quitPurple = () => {
    if (purpleExist) setPurpleExist(false);
    setColor("purple");
  };

  return (
    // Contenedor general, mi cajita negra.
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Caja negra del semáforo */}
      <div
        style={{
          backgroundColor: "black",
          padding: "20px 10px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* una sola lógica para cualquier número de colores. Antes lo tenia con div duplicados y condicional para purpura, anti DRY*/}
        {colors.map((colorActual) => (
          <Light
            key={colorActual}                         // clave única de React
            color={colorActual}                       // "red",  "yellow",  "green",  "purple"
            encendida={color === colorActual}         // ¿está encendida esta luz?
            onClick={() => setColor(colorActual)}     // encender esta luz al hacer clic
          />
        ))}
      </div>

      {/* Palito del semáforo */}
      <div
        style={{
          width: "25px",
          height: "150px",
          backgroundColor: "black",
          marginTop: "5px",
          borderRadius: "10px",
        }}
      />

      {/* Botones de control */}
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button onClick={newColor} className="btn btn-primary">Siguiente</button>
        <button onClick={addPurple} className="btn btn-success">Añadir púrpura</button>
        <button onClick={quitPurple} className="btn btn-warning">Quitar púrpura</button> 
      </div>
    </div>
  );
}
