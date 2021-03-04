import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./home";
import CompletePay from "./completePay";
import Header from "./header";

function App() {
	return (
		<Router>
			<Header />
			<hr />
			<main>
				<Route exact path='/' component={Home} />
				<Route path='/pay' component={CompletePay} />
			</main>
		</Router>
	);
}

export default App;
