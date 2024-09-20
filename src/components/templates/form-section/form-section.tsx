import React from 'react';
import './form-section.css';
import CustomForm from '@/components/organisms/custom-form/custom-form';

export default function FormSection() {
    return (
        <section className="form-section">
            <h1 className="form-title">
                ¿Querés sumar tu organización? Dejanos tus datos para recibir más info
            </h1>
            <CustomForm />
        </section>
    );
}
