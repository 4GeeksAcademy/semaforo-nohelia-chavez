import React, { useState } from "react";


//componente de mi semaforo
export default function TrafficLight() {

    // guardo el color que esta encendido
    const [color, setColor] = useState("red"); // empezara en rojo la luz encendida
    const [purpleExist, setPurpleExist] = useState(false);  //¿existe el color purpura?
    const newColor = () =>
        !purpleExist
            ? setColor(color === "red" ? "yellow" : color === "yellow" ? "green" : "red") //ternaria sin purpura
            : setColor(color === "red" ? "yellow" : color === "yellow" ? "green" : color === "green" ? "purple" : "red" //ternaria con purpura
            );
    // -------------------------------
    // BOTÓN 2: anadirPurpura
    // -------------------------------
    const addPurple = () =>
        // Si púrpura no existe, la activamos y encendemos
        // Si ya existe, simplemente la encendemos
        !purpleExist ? (setPurpleExist(true), setColor("purple")) : setColor("purple");

    const lightStyle = {
        height: "85px",
        width: "85px",
        borderRadius: "50px",
        margin: "10px",
        opacity: 0.3, // estara apagada por defecto
        cursor: "pointer",

    };
    return ( //contenedor del semaforo
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            {/* Caja del semáforo */}
            <div style={{
                backgroundColor: "black",
                padding: "20px 10px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            >


                {/*luz roja*/}
                <div
                    onClick={() => setColor("red")} style={{   //al hacer clic, cambia el estado y React re-renderiza.
                        ...lightStyle, backgroundColor: "red",
                        opacity: color === "red" ? 1 : 0.3,  // ternaria si el estado coincide la luz brilla (1)sino se apaga (0.3)
                        boxShadow: color === "red" ? "0 0 50px 20px red" : "none" //  halo rojo
                    }} />

                {/*luz amarilla*/}

                <div
                    onClick={() => setColor("yellow")} style={{
                        ...lightStyle, backgroundColor: "yellow",
                        opacity: color === "yellow" ? 1 : 0.3,
                        boxShadow: color === "yellow" ? "0 0 50px 20px yellow" : "none" //  halo amarillo
                    }} />
                {/*luz verde*/}

                <div
                    onClick={() => setColor("green")} style={{
                        ...lightStyle, backgroundColor: "green",
                        opacity: color === "green" ? 1 : 0.3,
                        boxShadow: color === "green" ? "0 0 50px 20px green" : "none" //  halo verde

                    }}
                />
                {/* Luz PÚRPURA si existe de dibuja si no no 🫨 */}
                {purpleExist && (
                    <div
                        onClick={() => setColor("purple")}
                        style={{
                            ...lightStyle,
                            backgroundColor: "purple",
                            opacity: color === "purple" ? 1 : 0.3,
                            boxShadow: color === "purple" ? "0 0 50px 20px purple" : "none"
                        }}
                    />
                )}
            </div>
            {/* Palito del semáforo */}
            <div
                style={{
                    width: "25px",
                    height: "150px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    borderRadius: "10px"
                }}
            ></div>


            {/* botones extras*/}
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <button onClick ={newColor} className="btn btn-primary">Siguiente</button>
                <button onClick={addPurple} className="btn btn-success">Añadir púrpura</button>
            </div>

        </div>
    );
}
