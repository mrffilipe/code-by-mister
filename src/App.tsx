import About from "./components/About";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Projects />
			<Certificates />
			<Experience />
			<Footer />
		</>
	);
};

export default App;
