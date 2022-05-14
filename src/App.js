import './App.css';
import { Routes, Route } from "react-router-dom"
import MainPage from './pages/MainPage';
import { useState } from 'react';


function App(props) {

	const [manager, setManager] = useState("Redux")

	return (
		<Routes>
			<Route path='/' element={<MainPage state={props.state} manager={manager} setManager={setManager} />} />
			<Route path='/MobX' element={<MainPage manager={manager} setManager={setManager} />} />
		</Routes>
	);
}

export default App;
