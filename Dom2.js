const form = document.getElementById("formulario")
const lista = document.getElementById("listaUsuarios")
const limparBtn = document.getElementById("limparLista")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const usuario = document.getElementById("usuario").value.trim()
  const senha = document.getElementById("senha").value.trim()
  const telefone = document.getElementById("telefone").value.trim()
  const dataNascimento = document.getElementById("dataNascimento").value.trim()
  const email = document.getElementById("email").value.trim()

  if (!usuario || !senha || !telefone || !dataNascimento || !email) {
    console.error("Todos os campos devem ser preenchidos.")
    return
  }

  const div = document.createElement("div")
  div.textContent = `Usuário: ${usuario}, Telefone: ${telefone}, Data de Nascimento: ${dataNascimento}, E-mail: ${email}`
  lista.appendChild(div)

  form.reset()
})

limparBtn.addEventListener("click", function() {
  lista.innerHTML = ""
})
