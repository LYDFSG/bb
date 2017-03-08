(function(angular){
   //主模块
    //把子模块引入到主模块
   angular.module('ionicApp', ['ionic', 'myApp.HomeTabCtrl', 'starter.services'])

.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "facts.html",
          controller: 'factsCtrl'
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "facts2.html",
          controller: 'facts2Ctrl'
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html",
          controller: 'aboutCtrl'
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "nav-stack.html",
          controller: 'nav-stackCtrl'
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "contact.html",
          controller: 'contactCtrl'
        }
      }
    })
    .state('tabs.blog', {
      url: "/blog",
      views: {
        'blog-tab': {
          templateUrl: "blog.html",
          controller: 'blogCtrl'
        }
      }
    })
    .state('tabs.aboutus', {
      url: "/aboutus",
      views: {
        'aboutus-tab': {
          templateUrl: "aboutus.html",
          controller: 'aboutusCtrl'
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

}])
})(angular)