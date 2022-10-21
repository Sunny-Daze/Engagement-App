import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Community from "./pages/Community"
import Projects from "./pages/Projects"
import Training from "./pages/Training"
import Recreation from "./pages/Recreation"
import Management from "./pages/Management"
import Store from "./pages/Store"
import Sidebar from "./components/Sidebar";

function App() {
return (
	<>
	<Router>
		<Sidebar>
		<Routes>
			<Route path="/" element={<Community />} />
			<Route path="/projects" element={<Projects />} /> 
			<Route path="/training" element={<Training />} />
			<Route path="/recreation" element={<Recreation />} />
			<Route path="/management" element={<Management />} />
			<Route path="/store" element={<Store />} />
		</Routes>
		</Sidebar>
	</Router>
	</>
);
}

export default App;