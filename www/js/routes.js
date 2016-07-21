angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('tabsController.yourAccount', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/yourAccount.html',
        controller: 'yourAccountCtrl'
      }
    }
  })

  .state('tabsController.nepal', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/nepal.html',
        controller: 'nepalCtrl'
      }
    }
  })

  .state('map', {
    url: '/page9',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('tabsController.tapWaterQuality', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/tapWaterQuality.html',
        controller: 'tapWaterQualityCtrl'
      }
    }
  })

  .state('tabsController.nepal2', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/nepal2.html',
        controller: 'nepal2Ctrl'
      }
    }
  })

  .state('tabsController.userReviews', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/userReviews.html',
        controller: 'userReviewsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page6')

  

});