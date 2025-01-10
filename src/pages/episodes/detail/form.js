import React, { useState } from 'react';
import InputText from "../../../components/form/input";

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const resetForm = () => {
		setName('');
		setEmail('');
		setComment('');
		setMessage('');
	}

	const send = (e) => {
		e.preventDefault();
		setLoading(true)
		fetch('https://rickandmortyapi.com/api/episode', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				comment
			})
		})
			.then(res => res.json())
			.then(json => {
				// Success or error actions
			})
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
					setMessage('Created successfully');
				}, 1000)
				setTimeout(() => {
					resetForm();
				}, 3000)
			});
	}

	return (
		<div className={'episode-detail appear'}>
			<h2>Comments</h2>
			<form className={'episode-form'} onSubmit={send}>
				<InputText label={'Name'} required
				           type={'text'} value={name}
				           onChange={e => setName(e.target.value)}
									 placeholder={'Ex: Rick Sanchez'}/>
				<InputText label={'E-mail'} required
				           type={'email'} value={email}
				           placeholder={'Ex: rick@sanchez.com'}
				           onChange={e => setEmail(e.target.value)}/>
				<InputText isTextarea label={'Note'} required
				           type={'text'} value={comment} maxLength={500}
				           onChange={e => setComment(e.target.value)}/>
				<button type="submit" disabled={loading} className={'submit-button'}>
					{loading ? 'Sending...' : 'Send'}
				</button>
				<small className={'message-form'}>{message}</small>
			</form>
		</div>
	)
}

export default Form;
