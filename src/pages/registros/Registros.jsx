import BottonNav from "../../components/bottomNav/BottonNav";
import Header from "../../components/header/Header";
import LogsComponent from "../../components/logsComponent/LogsComponent";
import styles from './index.module.css';

export default function Registros() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <LogsComponent/>
            </main>
            <BottonNav />
        </div>
    )
}