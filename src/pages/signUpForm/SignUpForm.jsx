import { useState } from "react";
import { supabase } from "../../services/supabaseClient"; // ajuste o caminho

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSignup(e) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name
                }
            }
        });

        // console.log("DATA:", data);
        // console.log("ERROR:", error);

        if (error) {
            setMessage(error.message);
            setLoading(false);
            return;
        }

        setMessage("Conta criada com sucesso!");
        setLoading(false);

        setTimeout(() => {
            window.location.href = "/"; // redireciona para a página de login
        }, 3000);
        // console.log(data.user.user_metadata.name);
    }

    return (
        <form onSubmit={handleSignup} style={styles.form}>
            <h2>Criar Conta</h2>

            <input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
            />

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
            />

            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
