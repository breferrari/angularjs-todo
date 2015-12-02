app.controller('RootController', ['$scope', function($scope) { // Root
  $scope.savedToDos = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.savedToDos) : [{
    'text': 'Aprender AngularJS',
    'cat': 'Bloco Fixo',
    'done': false
  }, {
    'text': 'Fazer um app com Angular',
    'cat': 'Bloco Fixo',
    'done': false
  }];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.savedCategs = localStorage.getItem('categs');
  $scope.categs = (localStorage.getItem('categs') !== null) ? JSON.parse($scope.savedCategs) : [{
    'cat': 'Bloco Fixo'
  }, {
    'cat': 'Bloco Padrão'
  }, {
    'cat': 'Bloco Padrão II'
  }];
  localStorage.setItem('categs', JSON.stringify($scope.categs));
}]);

app.controller('TarefasController', ['$scope', function($scope) { // Tarefas
  $scope.addTodo = function() {
    var addToArrayToDo = true;
    var addToArrayCat = true;

    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].text === $scope.newTodo) {
        addToArrayToDo = false;
      }
    }
    for (var x = 0; x < $scope.todos.length; x++) {
      if ($scope.todos[x].cat === $scope.inCateg.cat) {
        addToArrayCat = false;
      }
    }
    if ((addToArrayToDo === false) && (addToArrayCat === false)) {
      swal({
        title: "Tarefa já existe!",
        type: "error",
        timer: 1000,
        showConfirmButton: false
      });
    }
    if ((addToArrayToDo === true) && (addToArrayCat === true)) {
      $scope.todos.push({
        'text': $scope.newTodo,
        'cat': $scope.inCateg.cat,
        'done': false
      });
      $scope.newTodo = '';
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
    if ((addToArrayToDo === false) && (addToArrayCat === true)) {
      $scope.todos.push({
        'text': $scope.newTodo,
        'cat': $scope.inCateg.cat,
        'done': false
      });
      $scope.newTodo = '';
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
  };

  $scope.todoCheck = function(todo) {
    todo.done = !todo.done;
  };

  $scope.clearCompleted = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
}]);

app.controller('CategoriasController', ['$scope', function($scope) { // Categorias
  $scope.addCateg = function() {
    $scope.categs.push({
      'cat': $scope.newCateg
    });
    $scope.newCateg = '';
    localStorage.setItem('categs', JSON.stringify($scope.categs));
  };
  $scope.removeCateg = function() {
    var oldCategs = $scope.categs;
    $scope.categs = [];
    angular.forEach(oldCategs, function(categ) {
      if (categ.cat !== $scope.rmCateg.cat)
        $scope.categs.push(categ);
    });
    localStorage.setItem('categs', JSON.stringify($scope.categs));
  };
}]);