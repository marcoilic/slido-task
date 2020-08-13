import React from "react";
import "./App.css";
import { Button } from "./components/base-items/button";
import { Input } from "./components/base-items/input";
import { TextArea } from "./components/base-items/textarea";
// import { EventsStateProvider } from "./components/contexts/events-context/EventsProvider";

function App() {
	return (
		// <EventsStateProvider>
		<div className="App">
			<header className="App-header">
				<Button onClick={() => console.log("hi")} disabled={false}>
					Hello
				</Button>
				<Input />
				<TextArea name="test" />
			</header>
		</div>
		// </EventsStateProvider>
	);
}

export default App;
