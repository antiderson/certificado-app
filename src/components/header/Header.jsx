import { useLocation } from 'react-router';
import styles from './index.module.css';
import { SignOutIcon } from "@phosphor-icons/react";
import { useNavigate } from 'react-router';
import { supabase } from '../../services/supabaseClient';

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
        navigate("/login");
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