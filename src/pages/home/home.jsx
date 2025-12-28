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
                <Certificado />
            </main>
            <BottonNav />
        </div>
    )
}