import React from "react";

import TrafficLight from "./TrafficLight";

//mi componente
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="mt-5"><strong>Semáforo </strong>Nohelia Chavez 🚦</h1>
			<TrafficLight />

			<p style={{ marginTop: "20px", fontFamily: "sans-serif", fontSize: "20px" }}>
				Hecho con 💙 por Nohelia usando el template de 4Geeks Academy
			</p>

		</div>
	);
};

export default Home;