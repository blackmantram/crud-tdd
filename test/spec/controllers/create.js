'use strict';

describe('Controller: Create', function () {
  
  var CreateController;
  var next = -1;

  beforeEach(function(){
    CreateController = {
      items: Array(),
      create: function(id, name) {
        if (id == undefined)
          id = 0;
        if (name == undefined)
          name = '';
        this.items.push({id:id, name:name});
      }
    };
  });

  beforeEach(function(){
    next = -1
  });

  function createOne(id, name)
  {
    CreateController.create(id, name);
  }

  function getFirst()
  {
    return CreateController.items[0];
  }

  function getSecond()
  {
    return CreateController.items[1];
  }

  function getNext()
  {
    next++;
    return CreateController.items[next];
  }

  it('should create multiple items', function () {
    createOne();
    createOne();
    expect(CreateController.items.length).toBe(2);
  });

  it('should create items with id', function () {
    createOne();
    expect(getNext().id).toBeDefined();
  });

  it('should create items with name', function () {
    createOne();
    expect(getNext().name).toBeDefined();
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
  
});