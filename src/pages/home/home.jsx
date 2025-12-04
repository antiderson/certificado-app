import { Route, Routes } from 'react-router';
import BottonNav from '../../components/bottomNav/BottonNav';
import Certificado from '../certificado/Certificado';
import ExportCsv from '../exportCsv/ExportCsv';
import Registros from '../registros/Registros';
import styles from './index.module.css';

import Header from '../../components/header/Header';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <Routes>
                    <Route path="/certificado" element={<Certificado />} />
                    <Route path="/registros" element={<Registros />} />
                    <Route path="/exportar-csv" element={<ExportCsv />} />
                    <Route path="*" element={<Certificado />} /> {/* fallback */}
                </Routes>
            </main>
            <BottonNav />
        </div>
    )
}