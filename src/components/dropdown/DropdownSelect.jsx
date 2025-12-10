import React, { useState } from 'react';
import styles from './index.module.css';
import ClasseCertificate from './classeCertificate/ClasseCertificate';
import EspecialidadeCertificate from './EspecialidadeCertificate/EspecialidadeCertificate';

export default function DropdownSelect() {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <select
                    value={selected}
                    onChange={handleChange}
                    className={styles.dropdown}
                >
                    <option value="" > Selecione um certificado </option>
                    <option value="especialidade"> Certificado de Especialidade </option>
                    <option value="classe"> Certificado de Classe </option>
                </select>
            </div>
            <div className={styles.preview}>
                {selected === "classe" && <ClasseCertificate />}
                {selected === "especialidade" && <EspecialidadeCertificate />}
            </div>
        </div>
    )
}