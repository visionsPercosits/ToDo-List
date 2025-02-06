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


listarTarefas();




