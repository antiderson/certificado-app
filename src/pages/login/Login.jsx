import styles from './index.module.css';
import logo from '../../assets/Logo.png';
import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // console.log("SUPABASE URL:", import.meta.env.VITE_SUPABASE_URL);
    // console.log("SUPABASE KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);


    async function handleLogin(e){
        e.preventDefault();
        setLoading(true);
        setError(null);

       


        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if(error){
            setError(error.message);
            return;
        }

        //se o login funfar
        // window.location.href = '/dashboard';
        navigate('/environment');
    }

    return (
        <div className={styles.container}>
            <div className={styles.banner} />
            <div className={styles.box}>
                <form action="" className={styles.form} onSubmit={handleLogin}>
                    <img src={logo} alt="logo do clube"  style={{height:'35%'}}/>
                    <div style={{height: '20%', width:'80%', display:'flex', justifyContent:"space-between", flexDirection:'column'}}>
                        <input type="email"
                         placeholder="E-mail"
                         className={styles.input}
                         onChange={e => setEmail(e.target.value)} />
                        <input type="password" 
                        placeholder="Senha" 
                        className={styles.input} 
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" 
                    className={styles.btnLog}
                    disabled={loading}>
                        {loading? "Entrando...": "Entrar"}</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        </div>
    )
}