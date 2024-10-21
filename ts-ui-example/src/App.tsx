import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing-page";

function App() {
	return (
		<>
			<div id="container" data-testid="render-ui">
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
