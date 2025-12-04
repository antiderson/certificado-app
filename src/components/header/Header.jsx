import { useLocation } from 'react-router';
import styles from './index.module.css';
import { SignOutIcon } from "@phosphor-icons/react";

const titles = {
    '/certificado': 'Gerar Certificado',
    '/registros': 'Gerenciar Registros',
    '/exportar-csv': 'Exportar CSV'
};


export default function Header() {
    const location = useLocation();
    const title = titles[location.pathname] || 'Gerar Certificado';
    const btnClick = () => {
        alert('Clicou no botão!');
    }
    return (
        <div className={styles.container}>
            <div className={styles.titlediv}>
                <h1 className={styles.text}>{title}</h1>
                <button className={styles.btn} onClick={btnClick}>
                    <SignOutIcon size={32} color="#f27405" weight="duotone" />
                </button>
            </div>
        </div>
    )
}