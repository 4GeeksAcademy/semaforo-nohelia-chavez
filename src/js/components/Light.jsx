import React from "react";

//componente Light  y destructuro los props
export default function Light({ color, colorLigth, onClick }) { // colores string CSS, booleano que indica si la luz esta encendida y onclick
  const estilo = {
    height: "85px",
    width: "85px",
    borderRadius: "50px",
    margin: "10px",
    cursor: "pointer",


    // si está encendida se ve completamente (opacidad 1) si no se ve transparente (0.3) apagada. Booleano
    opacity: colorLigth ? 1 : 0.3,
    // color de fondo dinámico

    backgroundColor: color,// el color que pase el padre


    boxShadow: colorLigth ? `0 0 50px 20px ${color}` : "none", // halo dinámico (si está encendida usamos el mismo {$color} de la luz)
    transition: "all 0.5s ease", // la opacidad y el halo es mas suave a la vista
  };

  // un div circular que “hace de luz”
  return <div onClick={onClick} style={estilo} />;
}