document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("#name");
  const userName = document.querySelector("#username");
  const avatar = document.querySelector("#avatar");
  const repos = document.querySelector("#repositorios");
  const seguidores = document.querySelector("#seguidores");
  const seguindo = document.querySelector("#seguindo");
  const link = document.querySelector("#link-github");

  fetch("https://api.github.com/users/Enge-Olate")
    .then((resposta) => {
      return resposta.json();
    })
    .then((dados) => {
      console.log(dados);
      avatar.src = dados.avatar_url;
      name.innerHTML = dados.name;
      userName.innerHTML = dados.login;
      repos.innerHTML = dados.public_repos;
      seguidores.innerHTML = dados.followers;
      seguindo.innerHTML = dados.following;
      link.href = dados.html_url;
    })
    .catch((erro) => {
      alert('Erro ao buscar dados do usuário no Github.', erro);
    })
});
