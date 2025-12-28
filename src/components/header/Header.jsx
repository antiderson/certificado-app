import { SignOutIcon } from "@phosphor-icons/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import styles from './index.module.css';

const titles = {
    '/certificado': 'Gerar Certificado',
    '/registros': 'Gerenciar Registros',
    '/exportar-csv': 'Exportar CSV'
};


export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const title = titles[location.pathname] || 'Gerar Certificado';
    const btnClick = async () => {
        await supabase.auth.signOut();
        navigate("/");
        window.location.reload();
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