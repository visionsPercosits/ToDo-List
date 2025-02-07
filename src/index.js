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
  tarefas.forEach((tarefa) => {
      const status = tarefa.concluida ? 'Concluída!' : 'Pendente.';
      console.log(`Tarefa: ${tarefa.nome} => ${status}`);
  });
};

// Remover uma tarefa

const removerTarefa = index => {
  const tarefa = tarefas.indexOf(index);
  if (tarefa > -1) { // Se o item for encontrado, ele irá retornar um valor a cima de -1 (indexOf)
    tarefas.splice(index, 1);
    console.log('Tarefa removida com sucesso.');
  }
}




