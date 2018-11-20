function montarPainel(pagina, filtro) {
  const request = listarTarefas(pagina, filtro);
  let painel = document.getElementById("painelTarefas");

  request.then(response => {
    if (!response) {
      painel.innerHTML = '<p>Não há itens para exibir.</p>'
    }

    painel.innerHTML = response.map(item => `<div class="card">
    <div class="card-body">
      <div>
        <span class="card-subtitle mb-2 text-muted">${new Date(item.data).toLocaleString()}</span>
      </div>
      <p class="card-text">${item.descricao}</p>
    </div>
  </div>`)
  })
}

function definirConsultaPorFiltro() {
  document.querySelector('main.container > form').addEventListener('submit', e => {

    e.preventDefault();
    let campoBusca = document.getElementById("texto-busca");
    montarPainel(1, campoBusca.value)
  })

}