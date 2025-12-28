import styles from "./index.module.css";
import DBVlogo from '../../assets/Logo.png'
import AVTlogo from '../../assets/FoxkidsLogo.png'
import { useNavigate } from "react-router-dom";



export default function Environment() {
    const navigate = useNavigate();

    function irParaReact() {
        navigate("/certificado");
    }
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h1>Selecione</h1>
                </div>

                <div className={styles.imagens}>
                    <div className={styles.imgCard}>
                        <img src={AVTlogo} alt="Fox Kids" />
                        <p>Fox Kids</p>
                        <h1>Aventureiros</h1>
                    </div>

                    <div
                        className={styles.imgCard}
                        onClick={irParaReact}
                        role="button"
                    >
                        <img src={DBVlogo} alt="Golden Fox" />
                        <p>Golden Fox</p>
                        <h1>Desbravadores</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}