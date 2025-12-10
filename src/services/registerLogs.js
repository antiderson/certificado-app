import { supabase } from "./supabaseClient.js";

export async function registrarLog(nome, especialidade) {

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const userId = userData?.user?.id;

    if (!userId) {
        console.error("Usuário não autenticado, não foi possível registrar o log.");
        return;
    }

    const { error } = await supabase.from("logs").insert({
        user_id: userId,
        nome: nome,
        especialidade: especialidade
    });

    if (error) {
        console.error("Erro ao registrar log:", error);
    } else {
        console.log("Log registrado com sucesso!");
    }
}