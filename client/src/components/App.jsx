import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './app.css'
import Registration from "./registration/Registration";
import Login from "./authorisation/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		 dispatch(auth())
	}, [])

  return (
  	<BrowserRouter>
		<div className="app">
			<Navbar />
			<div className="wrap">
				{!isAuth ?
					<Routes>
						<Route path={"/registration"} element={<Registration/>}/>
						<Route path={"/login"} element={<Login/>}/>
						<Route path={"/"} element={<Navigate to={"/login"}/>}/>
					</Routes>
					:
					<Routes>
						<Route path={"/login"} element={<Navigate to={"/"}/>}/>
						<Route exact path={"/profile"} element={<Profile/>}/>
						<Route exact path={"/"} element={<Disk/>}/>
					</Routes>
				}
			</div>
		</div>
	</BrowserRouter>
  );
}

export default App;
