const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nomeUsuario').value;
    let email = document.getElementById('emailUsuario').value;
    let data = {
        nome,
        email,
    }

    console.log("Usuário cadastrado: " + nome + " " + email)
    let convertData = JSON.stringify(data);

    localStorage.setItem('user', convertData)

    let content = document.getElementById('content');
    let cadastrado = `
    <style type="text/css">
    .obrigado {
      color:red;
      text-align: center;
      font-family: 'Roboto', mono;
      font-weight: 500;
      font-size: 25px;

    }
    </style>
    <p class="obrigado"> Obrigado por se cadastrar! E prepare-se!</p>
    `

    content.innerHTML = cadastrado;

})