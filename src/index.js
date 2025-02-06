let tarefas = [];

// Adicionar uma tarefa

const adicionarTarefa = nome => {
  let novaTarefa = {
    nome: nome,
    concluida: false
  }
  tarefas.push(novaTarefa);
  console.log(`Nova tarefa: ${nome} adicionada com sucesso.`);
};

adicionarTarefa('Jogar');

// Listar todas as tarefas

const listarTarefas = () => {
  tarefas.forEach((tarefa => {
    console.log(`Tarefa: ${tarefa.nome}`);
  }));
};



