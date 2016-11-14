(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('shoppingList', ShoppingListDirective);


function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      badRemove: '='
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  var promise = MenuSearchService.getMenuCategories();
   

  promise.then(function (response) {
    menu.categories = response.data.menu_items;
    var list = menu.categories;
    
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

 

  menu.searchWord = function()
  {
    var array = [""];
    if (menu.search) 
    {
      var i = 0;
      var count = 0;
      
      var word = menu.search.toLowerCase();
      while (i<menu.categories.length)
      {
        if(menu.categories[i].description.indexOf(word) !== -1)
        {
          array[count]=menu.categories[i];
          i++;
          count++;
        }
        else
        {
          i++;
        }
      }
    }
    menu.list=array;
    menu.noFound();
    console.log(array);
  }

  menu.noFound = function()
  {
    if(menu.list=="")
    {
      return true;
    }
    else
    {
     return false;
    }
  }

  menu.removeItem = function (itemIndex) {
    menu.list.splice(itemIndex, 1);
  };

  menu.logMenuItems = function (shortName) {
    var promise = MenuSearchService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data.menu_items[0].name);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };

}



})();
