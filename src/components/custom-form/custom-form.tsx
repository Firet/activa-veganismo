'use client';
import React, { useState } from 'react';
import './custom-form.css';

export default function CustomForm() {
	const [nombre, setNombre] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [email, setEmail] = useState('');
	const [telefono, setTelefono] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			nombre,
			descripcion,
			email,
			telefono,
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
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Descripción</label>
						<textarea
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
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
							value={telefono}
							onChange={(e) => setTelefono(e.target.value)}
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
