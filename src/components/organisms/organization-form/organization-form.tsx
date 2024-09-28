'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './organization-form.css';
import fetch from '@/utils/fetch';

interface IformOrganization {
	name: string;
	// description: string;
	// email: string;
	// phone: number;
}

export default function OrganizationForm() {
	const { register, formState: { errors }, handleSubmit } = useForm<IformOrganization>();

	const onSubmit: SubmitHandler<IformOrganization> = (data) => {

		if (data.name) {
			console.log('errors', errors)
			console.log(data);
			fetch(data);
		}
	};

	return (
		<div className="organization-form-container">
			<form onSubmit={handleSubmit(onSubmit)} className="organization-form">
				<div className="form-group">
					<label>Nombre de la Orga</label>
					<input {...register("name", { required: true, minLength: 4, maxLength: 20 })}
						aria-invalid={errors.name ? "true" : "false"} />
						{errors.name?.type === "required" && <p role="alert"> El nombre es obligatorio</p>}
				</div>
				<button type="submit" className="submit-button">
					Enviar
				</button>

			</form>
		</div>
	);
}
