'use strict';

describe('Controller: Create', function () {
  
  var CRUDController;
  var scope;
  var next = -1;

  beforeEach(module('crudTddApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CRUDController = $controller('CRUDController', {
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

  it('should delete an item', function () {
    createOne(1, 'a name');
    scope.delete(1);
    expect(scope.items.length).toBe(0);
  });

  it('should update an item', function () {
    createOne(1, 'a name');
    scope.update(1, 'my name');
    expect(getNext().name).toBe('my name');
  });

  it('should set id of editing item when edit starts', function () {
    scope.edit(1);
    expect(scope.editingId).toBe(1);
  });

  it('should be able to finish editing', function () {
    createOne(1, 'a name');
    scope.edit(1);
    scope.update(1, 'another name');
    expect(scope.editingId).toBe(0);
  });
  
});