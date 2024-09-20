'use client';
import React, { useState } from 'react';
import './custom-form.css';

export default function CustomForm() {
	const [name, setName] = useState('');
	const [descripction, setDescripction] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			name,
			descripction,
			email,
			phone,
		};
		console.log(data);
		alert('Datos enviados: ' + JSON.stringify(data, null, 2));
	};

	return (
		<>
			<div className="custom-form-container">
				<form onSubmit={handleSubmit} className="custom-form">
					<div className="form-group">
						<label>Nombre de la ONG</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Descripción</label>
						<textarea
							value={descripction}
							onChange={(e) => setDescripction(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email de contacto</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Teléfono de contacto</label>
						<input
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<button type="submit" className="submit-button">
						Enviar
					</button>
				</form>
			</div>
		</>
	);
}
