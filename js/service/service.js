(function(angular){
  // 服务层，服务的作用，提取公共的业务逻辑和数据来源
  angular.module('starter.services', [])
    .service('Tab1Service', ["$http",function ($http) {
        this.getClassify = function () {
          return [
              { name: 'Nibbles', viewable: true,dirscript:"这是食物的一个简要介绍",price:"$1",url: '/info/list', page: 1, rows: 20 },
              { name: 'tarters', viewable: true,dirscript:"12",price:"12",url: '/info/list', page: 1, rows: 20 },
              { name: 'Drinks', viewable: true, dirscript:"这是食物的一个简要介绍",price:"$41",url: '/info/list', page: 1, rows: 20 },
              { name: 'bread', viewable: true,dirscript:"这是食物的一个简要介绍", price:"$5",url: '/info/list', page: 1, rows: 20 },
              { name: 'bread', viewable: true,dirscript:"这是食物的一个简要介绍",price:"$18",url: '/info/list', page: 1, rows: 20 }
          ]
        }

        this.getList = function (url, page, rows) {
          return $http.post(url, { page: page, rows: rows })
        } 
  }]);
})(angular)
