import DropdownSelect from '../../components/dropdown/DropdownSelect';
import Header from '../../components/header/Header';
import styles from './index.module.css';
import { SignOutIcon } from "@phosphor-icons/react";
import ButtonNav from '../../components/bottomNav/BottonNav';
export default function Certificado() {


    const btnClick = () => {
        alert('Clicou no botão!');
    }
    return (
        <div className={styles.container}>
            <DropdownSelect />
        </div>
    )
}