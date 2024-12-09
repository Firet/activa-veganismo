import React from 'react';
import './form-section.css';
import OrganizationForm from '@/components/organisms/organization-form/organization-form';

export default function FormSection() {
	return (
		<section className="form-section">
			<span className="form-span"></span>
			<h2 className="form-title">
				¿Querés sumar tu organización? Dejanos tus datos para recibir
				más info
			</h2>
			<OrganizationForm />
		</section>
	);
}
