import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import sizeFormat from "../../utils/sizeFormat";
import './profile.css'
import backLogo from '../../assets/img/back.png'
import {NavLink} from "react-router-dom";

const Profile = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user.currentUser)

	console.log(currentUser)

	function changeHandler(e) {
		const file = e.target.files[0]
		dispatch(uploadAvatar(file))
	}

	return (
		<div className={"profile-container"}>
			<NavLink to={"/"}>
				<button className="profile-container__back"></button>
			</NavLink>
			<div className="profile-container__used">Использованно места: {sizeFormat(currentUser.usedSpace)}</div>
			<div className="profile-container__used">Осталось места: {sizeFormat(currentUser.diskSpace - currentUser.usedSpace)}</div>
			<div className="profile-container__avatar">
				<button onClick={() => dispatch(deleteAvatar())} className="profile-container__delete">Удалить аватар</button>
				<label htmlFor="profile-container__input" className="profile-container__label">Загрузить аватар</label>
				<input accept="image/*" onChange={e => changeHandler(e)}
					   type="file"
					   id="profile-container__input"
					   className="profile-container__input"/>
			</div>
		</div>
	);
};

export default Profile;