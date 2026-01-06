    import styles from './index.module.css';
    import logo from '../../assets/Logo.png';
    import { useState, useRef } from 'react';
    import { supabase } from '../../services/supabaseClient';
    import { useNavigate } from 'react-router-dom';
    import { Toast } from 'primereact/toast';

    export default function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const navigate = useNavigate();
        const toast = useRef(null);


        const handleLogin = async (e) => {
            e.preventDefault();

            if (!password || !email) {
                toast.current?.show({ severity: 'error', summary: 'Atenção', detail: 'Por favor, verifique o e-mail e senha inseridos', life: 5000 });
                return;
            }

            try {
                setLoading(true);
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                const user  = data.user;

                await supabase.from('profiles').upsert({
                    id: user.id,
                    name: user.user_metadata?.name || user.email,
                    email: user.email,
                })

                if (error) {
                    toast.current?.show({ severity: 'error', summary: 'Atenção', detail: error.message, life: 5000 });
                    return;
                }
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado com sucesso!', life: 3000 });
                setTimeout(() => {
                    navigate('/environment');
                }, 3000);
            }
            catch (err) {
                toast.current?.show({ severity: 'error', summary: 'Erro inesperado', detail: "Tente Novamente mais tarde", life: 5000 });
            } finally {
                setLoading(false);
            }
        }
        return (
            <div className={styles.container}>
                <Toast ref={toast} position='top-center' />
                <div className={styles.banner} />
                <div className={styles.box}>
                    <form action="" className={styles.form} onSubmit={handleLogin}>
                        <img src={logo} alt="logo do clube" style={{ height: '35%' }} />
                        <div style={{ height: '20%', width: '80%', display: 'flex', justifyContent: "space-between", flexDirection: 'column' }}>
                            <input type="email"
                                placeholder="E-mail"
                                className={styles.input}
                                onChange={e => setEmail(e.target.value)} />
                            <input type="password"
                                placeholder="Senha"
                                className={styles.input}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" disabled={loading} className={styles.btnLog}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        )
    }