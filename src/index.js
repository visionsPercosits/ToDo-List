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

const removerTarefa = nome => {
  const index = tarefas.findIndex(tarefa => tarefa.nome === nome); // Procurar pelo valor específico da propriedade ao em vez do index
  if (index > -1) {
    tarefas.splice(index, 1);
    console.log('Tarefa removida com sucesso.');
  }
};


// Concluir uma tarefa

const concluirTarefa = nome => {
  const index = tarefas.findIndex(tarefa => tarefa.nome === nome);
  tarefas[index].concluida = true;

  console.log('Tarefa concluída com sucesso.');
  tarefas.splice(index, 1);
  console.log('Tarefa removida após ser concluída!');
}

