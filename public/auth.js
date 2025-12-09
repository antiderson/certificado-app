const supa = supabase.createClient(
    "https://tplkvfmzvdzmgrmdazqa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGt2Zm16dmR6bWdybWRhenFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODk2ODksImV4cCI6MjA4MDI2NTY4OX0.NMIfQp51mXCH7uWThMs5Cn7LVv4ElgUySrrpjmYPQeg"
);

async function protegerRota() {
    const {
        data: { user },
        error
    } = await supa.auth.getUser();

    // ❌ Não logado
    if (!user) {
        window.location.href = "Login.html";
    }
}
protegerRota();
