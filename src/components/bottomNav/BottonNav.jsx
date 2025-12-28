import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { CertificateIcon, NotepadIcon, DownloadSimpleIcon } from "@phosphor-icons/react";

export default function BottomNav() {
    const baseStyle = styles.base
    const activeStyle = styles.active;
    const inactiveStyle = styles.inactive;

    return (
        <div className={styles.container}>
            <NavLink
                to="/registros"
                className={({ isActive }) =>
                    `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
            >
                {({ isActive }) => (
                    <NotepadIcon
                        size={isActive ? 40 : 32}
                        color="#f27405" weight="duotone" />
                )}
            </NavLink>
            <NavLink
                to="/certificado"
                className={({ isActive }) =>
                    `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
            >
                {({ isActive }) => (
                    <CertificateIcon
                        size={isActive ? 40 : 32}
                        color="#f27405" weight="duotone" />
                )}
            </NavLink>
            <NavLink
                to="/export"
                className={({ isActive }) =>
                    `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
            >
                {({ isActive }) => (
                    <DownloadSimpleIcon
                        size={isActive ? 40 : 32}
                        color="#f27405" weight="duotone" />
                )}
            </NavLink>
        </div>
    );
}
