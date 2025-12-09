import styles from './index.module.css';
import CardCertificado from '../../components/cardCertificado/CardCertificado';


export default function Certificado() {
    return (
        <div className={styles.container}>
            <CardCertificado />
        </div>
    )
}