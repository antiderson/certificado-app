import { useState, useEffect } from 'react';
import styles from './index.module.css';
import { supabase } from '../../services/supabaseClient';

export default function LogsComponent() {
    const [registros, setRegistros] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchLogs() {
            const { data } = await supabase
                .from("logs")
//                 .select(`
//     id,
//     created_at,
//     nome,
//     especialidade,
//     profiles (
//       name,
//       email
//     )
//   `);
.select('*');

            if (error) {
                console.error("Supabase error:", error);
                setError(error.message);
                setLoading(false);
                return;
            }

            setRegistros(data);
            setLoading(false);
        }

        fetchLogs();
    }, []);
    

    if (loading) return <p>Carregando registros...</p>
    if (error) return <p>{error}</p>

    return (
        <div className={styles.container}>
            {registros.length === 0 ? (
                <p className={styles.empty}>Nenhum registro encontrado.</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Desbravador</th>
                            <th>Especialidades</th>
                            <th>Data de Criação</th>
                        </tr>
                    </thead>

                    <tbody>
                        {registros.map((registro) => (
                            <tr key={registro.id}>
                                <td>{registro.user_id}</td>
                                {/* <td>{registro.profiles?.nome}</td> */}
                                <td>{registro.nome}</td>
                                <td>{registro.especialidade}</td>
                                <td>
                                    {new Date(registro.created_at).toLocaleDateString("pt-BR")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}