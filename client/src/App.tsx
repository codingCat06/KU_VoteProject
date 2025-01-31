import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<div className='bg-red-500'>adsf</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div/>}></Route>

				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
