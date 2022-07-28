import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";

const Registration = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className={"registration"}>
			<div className="registration__header">Регистрация</div>
			<Input value={email} setValue={setEmail} type={"email"} placeholder={"Введите email"}/>
			<Input value={password} setValue={setPassword} type={"password"} placeholder={"Введите пароль"}/>
			<button className={"registration__btn"} onClick={() => registration(email, password)}>Создать</button>
		</div>
	);
};

export default Registration;