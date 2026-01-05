import { useState, useRef } from "react";
import { supabase } from "../../services/supabaseClient";
import { Toast } from 'primereact/toast';

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const toast = useRef(null);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.current?.show({ severity: 'error', summary: 'Atenção', detail: 'Por favor, preencha todos os campos', life: 5000 });
            return;
        }

        try {
            setLoading(true);
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name: name
                    }
                }
            });

            if (error) {
                toast.current?.show({ severity: 'error', summary: 'Atenção', detail: error.message, life: 5000 });
                setLoading(false);
                return;
            }
            toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Conta criada com sucesso!', life: 3000 });
            setTimeout(() => {
                window.location.href = "/";
            }, 3000);
        }
        catch (err) {
            toast.current?.show({ severity: 'error', summary: 'Erro inesperado', detail: "Tente Novamente mais tarde", life: 5000 });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSignup} style={styles.form}>
            <Toast ref={toast} position='bottom-center' />
            <h2>Criar Conta</h2>

            <input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
            />

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
            />

            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
            />

            <button type="submit" disabled={loading} style={styles.button}>
                {loading ? "Criando..." : "Criar conta"}
            </button>

            {message && <p style={styles.message}>{message}</p>}
        </form>
    );
}

const styles = {
    form: {
        width: "100%",
        maxWidth: "350px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem"
    },
    button: {
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        background: "#4f46e5",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    },
    message: {
        marginTop: "10px",
        fontSize: "0.9rem"
    }
};
