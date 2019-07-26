import React from "react";
import Card from "./Card/Card";
import Header from "./Header/Header";

import "../styles/App.css";
let data = require("../data/masterpiece_data.json");

function App() {
	return (
		<main className="App">
			<Header />
			{data.franchise.programs.map(show => (
				<Card
					key={show.title}
					title={show.title}
					description={show.description}
					episode={show.episode}
				/>
			))}
		</main>
	);
}

export default App;
