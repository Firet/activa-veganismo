'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './organization-form.css';
import postOrganizationData from '@/utils/fetch';
interface IformOrganization {
	name: string;
	description: string;
	email: string;
	phone: number;
}

export default function OrganizationForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IformOrganization>();
	const [formSuccess, setFormSuccess] = useState(false);

	const onSubmit: SubmitHandler<IformOrganization> = (data) => {
		if (data.name) {
			postOrganizationData(
				data.name,
				data.phone,
				data.email,
				data.description
			);
			setFormSuccess(true);
		}
	};

	return (
		<div className="organization-form-container">
			{!formSuccess && (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="organization-form"
				>
					<div className="form-group">
						<label>Nombre de la Orga</label>
						<input
							{...register('name', {
								required: 'El nombre es obligatorio',
								minLength: {
									value: 4,
									message: 'Debe tener más de 3 caracteres',
								},
								maxLength: {
									value: 21,
									message:
										'Debe tener menos de 20 caracteres',
								},
							})}
							aria-invalid={errors.name ? 'true' : 'false'}
						/>
						{errors.name && (
							<p className="error-message" role="alert">
								{errors.name.message}
							</p>
						)}
					</div>
					<div className="form-group">
						<label>Descripción</label>
						<input
							{...register('description', {
								minLength: {
									value: 4,
									message: 'Debe tener más de 3 caracteres',
								},
								maxLength: {
									value: 21,
									message:
										'Debe tener menos de 20 caracteres',
								},
							})}
							aria-invalid={errors.description ? 'true' : 'false'}
						/>
						{errors.description && (
							<p className="error-message" role="alert">
								{errors.description.message}
							</p>
						)}
					</div>
					<div className="form-group">
						<label>Email de contacto</label>
						<input
							{...register('email', {
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message:
										'Ingresa un correo electrónico válido',
								},
							})}
						/>
						{errors.email && (
							<p className="error-message" role="alert">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="form-group">
						<label>Teléfono</label>
						<input
							{...register('phone', {
								required: 'El teléfono es obligatorio',
								pattern: {
									value: /^\d{9,10}$/,
									message:
										'Ingresa un número de teléfono válido',
								},
							})}
						/>
						{errors.phone && (
							<p className="error-message" role="alert">
								{errors.phone.message}
							</p>
						)}
					</div>
					<button type="submit" className="submit-button">
						Enviar
					</button>
				</form>
			)}
			{formSuccess && (
				<div>
					<p className="toaster">Formulario Enviado con éxito!</p>
					<p className="success-message">
						Nos estaremos contactando con vos en la brevedad.
					</p>
				</div>
			)}
		</div>
	);
}
