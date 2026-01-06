import { supabase } from "./supabaseClient.js";

export async function registrarLog(nomeDesbravador, especialidade) {

    const { 
        data: {user},
        error: userError 
    } =  await supabase.auth.getUser();

    if(userError || !user){
        console.error("Erro ao obter usuário:", userError);
        return;
    }

    const { error } = await supabase.from("logs").insert({
        user_id: user.id,
        nome: nomeDesbravador,
        especialidade: especialidade
    });

    if (error) {
        console.error("Erro ao registrar log:", error);
    } else {
        console.log("Log registrado com sucesso!");
    }
}