function togglePassword() {
  const passwordField = document.getElementById("senha");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function login() {
  const nome = document.getElementById("nome").value.trim();
  const senha = document.getElementById("senha").value.trim();


  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (nome === usuarioCorreto && senha === senhaCorreta) {
    alert("Login realizado com sucesso! Bem-vindo, " + nome + " 🦊");

    // 🔸 Redireciona para a página desejada:
    window.location.href = "Pagina.html"; 
    
  } else {
    alert("Nome ou senha incorretos. Tente novamente.");
  }
}