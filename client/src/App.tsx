import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Page/MainPage';
import { PageLayout } from './Page/Layout';
import { LoginPage } from './Page/LoginPage';
import { PostContent } from './Page/PostContentPage';

interface ContextProps{
	AccessToken: string | null,
	setAccessToken:React.Dispatch<React.SetStateAction<string>>|null,
	name: string | null,
	setName:React.Dispatch<React.SetStateAction<string>>|null,
}

export const ThemeContext = createContext<ContextProps>({
	AccessToken: null,
	setAccessToken: null,
	name: null,
	setName: null
})

function App() {


  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route element={<PageLayout/>}>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/login' element={<LoginPage/>}/>
					<Route path='/postContent/:id' element={<PostContent/>}/>
				</Route>
			</Routes>
		</BrowserRouter>

    </div>
  );
}

export default App;
