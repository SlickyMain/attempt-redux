import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPage from './pages/MainPage';


function App(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<MainPage state={props.state} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
