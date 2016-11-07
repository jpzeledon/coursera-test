(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', []) .controller('ToBuyController',
ToBuyController) .controller('AlreadyBoughtController',
AlreadyBoughtController) .service('ShoppingListCheckOffService',
ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdder = this;

  
  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";
  itemAdder.items = ShoppingListCheckOffService.getboughtItems();
 


  itemAdder.addItem = function () {
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);

  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  
 
  };
}


  


function ShoppingListCheckOffService() {
  var service = this;
  var tobuyerror = false;
  var alreadyboughterror = false;

  // List of shopping items
  var itemsbought = [];
  var items = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Potatos Chips",
    quantity: "10"
  }
];
  
    service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsbought.push(item);
  };

    service.removeItem = function (itemIdex) {
    var newitem = items[itemIdex];
    items.splice(itemIdex, 1);
    alreadyboughterror = true;
    service.addItem(newitem.name,newitem.quantity);
   

  };


  service.getboughtItems = function(){
    return itemsbought;
  };

  service.getItems = function () {
    return items;
  };
}

})();
