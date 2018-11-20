const BASE_URL = "http://localhost:3010/api/v1";

function listarTarefas(pagina, filtro){
    let promise = fetch(`${BASE_URL}/tarefas/p/${pagina}/f/${filtro}`)

    return promise.then(r => r.json()).catch(err => {
        alert(err.message);
    });
}

function inserirTarefa(body){
    return fetch(`${BASE_URL}/tarefas`, {
        body:JSON.stringify(body),
        method:'POST'
    })
}

function alterarTarefa(id,body){
    return fetch(`${BASE_URL}/tarefas/${id}`, {
        body:JSON.stringify(body),
        method:'PUT'
    })
}