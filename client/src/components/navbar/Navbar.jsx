import React, {useState} from 'react';
import './navbar.css'
import logo from '../../assets/img/Cloud_icon.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFile} from "../../actions/file";
import {showLoader} from "../../reducers/appReducer";
import avatarLogo from '../../assets/img/avata_icon.png'
import {API_URL} from "../../config";

const Navbar = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const currentDir = useSelector(state => state.files.currentDir)
	const currentUser = useSelector(state => state.user.currentUser)
	const dispatch = useDispatch()
	const [searchName, setSearch] = useState('')
	const [searchTimeout, setSearchTimeout] = useState(false)
	console.log(currentUser.avatar)
	const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

	function searchHandler(e) {
		setSearch(e.target.value)
		if (searchTimeout !== false) {
			clearTimeout(searchTimeout)
		}
		dispatch(showLoader())
		if(e.target.value !== '') {
			setSearchTimeout(setTimeout((value) => {
				dispatch(searchFile(value))
			}, 500, e.target.value))
		} else {
			dispatch(getFiles(currentDir))
		}
	}

	return (
		<div className={"navbar"}>
			<div className="container">
				<div className="container__logo">
					<img src={logo} className={"container__logo__logo"} alt={"logo"}/>
					<div className="container__logo__title">Ysachiko CLOUD</div>
					{isAuth && <input
						value={searchName}
						onChange={e => searchHandler(e)}
						className="container__logo__search"
						type="text"
						placeholder="Название файла..."/>}
				</div>
				<div className="container__form">
					{!isAuth && <div className="container__form__login pointer">
						<NavLink to={"/login"}>
							Войти
						</NavLink>
					</div>
					}
					{!isAuth && <div className="container__form__registration pointer">
						<NavLink to={"/registration"}>
							Регистрация
						</NavLink>
					</div>
					}
					{isAuth && <div className="container__form__login pointer" onClick={() => dispatch(logout())}>
						<NavLink to={"/login"}>
							Выйти
						</NavLink>
					</div>}
					{isAuth &&
					<NavLink to={"/profile"}>
						<img className="navbar__avatar" src={avatar} alt=""/>
					</NavLink>
					}
				</div>
			</div>
		</div>
	);
};

export default Navbar;