import { supabase } from "../../services/supabaseClient";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });
    }, []);

    if (user === null) 
        return <p>Carregando...</p>; 
        
    return user ? children : <Navigate to="/" replace />;

    // return(
    //     <button>tetes</button>
    // )
}
