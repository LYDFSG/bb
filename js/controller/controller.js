(function(angular){

     //子模块
    angular.module("myApp.HomeTabCtrl",[])
    // 子模块的控制器
        .controller('HomeTabCtrl',["$scope","Tab1Service","$ionicSlideBoxDelegate","$ionicTabsDelegate","$location", function ($scope, Tab1Service,  $ionicSlideBoxDelegate, $ionicTabsDelegate,$location) {
            var items = Tab1Service.getClassify();
            $scope.slides = items;
            $scope.tabs = items;

            var slideIndex = 0;

            $scope.slideChanged = function (index) {
                $ionicTabsDelegate._instances[1].select(index);
            };
            $scope.$on('$ionicView.afterEnter', function () {
                $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
            });

            $scope.selectedTab = function (index) {
                //滑动的索引和速度
                $ionicSlideBoxDelegate.slide(index)
            }    
          
            $scope.hrefString = $location.path();

            $scope.hiddenTabs = function(){              
                 
                  var result =  $scope.hrefString.match("/tab/facts2")
                  if(!result){
                    
                    $("#tabs .tabs").animate({"bottom":"-50px"},1000);
                    console.log($("#tabs .tabs"));
                  }else{
                      $("#tabs .tabs").animate({"bottom":"0px"},1000);
                  }
            }   

           $scope.$watch("hrefString",function(newValue,oldValue){

            console.log(newValue);
            console.log(oldValue);

           },true)

           $(".back-button").click("on",function(){
                 
                 console.log(1);
                 var result =  $scope.hrefString.match("/tab/facts2")
                  if(!result){
                     $("#tabs .tabs").animate({"bottom":"0px"},1000);
                    
                    
                  }else{
                      $("#tabs .tabs").animate({"bottom":"-50px"},1000);
                  }

           })
          //界面初始化时判断购物车是否为空，为空隐藏购物车
           $scope.sumCount = $("#count").text();
               console.log($scope.sumCount <= 0);
               if($scope.sumCount){
                  $("#cart-p").hide();  
               }else{
                  $("#cart-p").show();
               }
           

           $scope.btnCount = 0;
           $scope.sumCount = 0;
          //加入商品方法
           $scope.increase = function(event,index){
          
                if (this.btnCount >= 0) {
                    $(".bt3").eq(index).show();
                    $(".bt2").eq(index).show();
                    
                  }
                this.btnCount++;
                $scope.sumCount++;
                //飞入购物车效果
                //找到结束位置的元素节点的坐标
                var offset=$("#myCart").offset();
                $scope.flyer = $('<span style="background:#000;font-size:24px;color:#fff;border-radius:10px;display:block;width:20px;height:20px;z-index:0" class="u-flyer" src="'+1+'"></span>'); //要飞入的元素
                //飞
            $scope.flyer.fly({
              //起点
              start: {
                left: event.clientX,
                top: event.clientY
              },
              //终点
              end: {
                left: offset.left,
                top: offset.top+10,
                width: 0,
                height: 0
              },
              //回调函数
              onEnd: function(){
                console.log("到达终点");
                //移除要飞入的节点
                $scope.flyer.remove()
                //更新购物车数量
                

                //判断此时购物车是否为空
                
                 if(this.spancount){
                    $("#cart-p").animate({"opacity":"0.3"},500).hide();  
                 }else{
                    $("#cart-p").show().animate({"opacity":"1"},500);
                 }
              }
              });
               
           }
           //减少商品
          $scope.reduce = function(event,index){
              if (this.btnCount <= 0) {
                $(".bt3").eq(index).hide();
                $(".bt2").eq(index).hide();
                return;
              }
               this.btnCount--;
                $scope.sumCount--;
                if($scope.sumCount <= 0){
                  $("#cart-p").hide();  
               }else{
                  $("#cart-p").show();
               }


          }
            
        }])
       .controller('factsCtrl', ['$scope', function($scope){


       }])
       .controller('facts2Ctrl', ['$scope', function($scope){


       }])
       .controller('aboutCtrl', ['$scope', function($scope){


       }])
       .controller('nav-stackCtrl', ['$scope', function($scope){


       }])
       .controller('contactCtrl', ['$scope', function($scope){


       }])
       .controller('blogCtrl', ['$scope', function($scope){


       }])
       .controller('aboutusCtrl', ['$scope', function($scope){


       }])
          
       
})(angular)
