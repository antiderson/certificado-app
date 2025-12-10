const supabaseUrl = "https://tplkvfmzvdzmgrmdazqa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGt2Zm16dmR6bWdybWRhenFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODk2ODksImV4cCI6MjA4MDI2NTY4OX0.NMIfQp51mXCH7uWThMs5Cn7LVv4ElgUySrrpjmYPQeg";
const supa = supabase.createClient(supabaseUrl, supabaseKey);


const form = document.getElementById("loginForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // status.textContent = "Entrando...";

  const { data, error } = await supa.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    status.textContent = "Erro: " + error.message;
  } else {
    status.textContent = "Login bem-sucedido! Redirecionando...";
    // Redirecionar para o dashboard (React ou HTML, tanto faz)
    window.location.href = "/Pagina.html";
  }
});

function togglePassword() {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}