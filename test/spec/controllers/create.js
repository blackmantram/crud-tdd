'use strict';

describe('Controller: Create', function () {
  
  var CreateController;
  var scope;
  var next = -1;

  beforeEach(module('crudTddApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateController = $controller('CreateController', {
      $scope: scope
    });
  }));

  beforeEach(function(){
    next = -1
  });

  function createOne(id, name)
  {
    scope.item = {id:id, name:name};
    scope.create();
  }

  function getFirst()
  {
    return scope.items[0];
  }

  function getSecond()
  {
    return scope.items[1];
  }

  function getNext()
  {
    next++;
    return scope.items[next];
  }

  it('should create multiple items', function () {
    createOne();
    createOne();
    expect(scope.items.length).toBe(2);
  });

  it('should receive an id and a name from user', function () {
    function createAndAssert(id, name){
      createOne(id, name);
      var item = getNext();  
      expect(item.id).toEqual(id);
      expect(item.name).toEqual(name);
    }
    
    createAndAssert(1, 'a name');
    createAndAssert(2, 'another name');
  });

  it('should clean model after create', function () {
    createOne(1, 'my name');
    expect(scope.item).toEqual({});
  });
  
});