import React, { useState } from 'react';
import styles from './index.module.css';

export default function ClasseCertificate() {
    const [form, setForm] = useState({
        Nome: '',
        Data: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.certificateContainer}>
            <form className={styles.form}>
                <input
                    name="Nome"
                    placeholder="Nome"
                    value={form.Nome}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    name="Data"
                    placeholder="Data"
                    value={form.Data}
                    onChange={handleChange}
                    className={styles.input}
                />
            </form>

            <div className={styles.previewBox}>
                <img src={imagem2} alt="Certificado Classe" width="600" />
                <div style={{ position: 'absolute', top: 120, left: 200, fontSize: 20 }}>
                    {form.Nome}
                </div>
                <div style={{ position: 'absolute', top: 160, left: 200, fontSize: 18 }}>
                    {form.Classe}
                </div>
                <div style={{ position: 'absolute', top: 200, left: 200, fontSize: 16 }}>
                    {form.Data}
                </div>
            </div>
        </div>
    );
}
