'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';

angular.module('gtkpressCalculator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        url: '/'
      })
      .state('steps', {
        abstract: true,
        templateURL: 'app/steps/steps.html',
        url: '/steps'
      })
      .state('steps.basics', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/basics/steps.bascics.html',
        url: '/basics'
      })
      .state('steps.style', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/style/steps.style.html',
        url: '/style'
      });
      // .state('steps.binding', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/binding/steps.binding.html',
      //   url: '/binding'
      // })
      // .state('steps.paper-type', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/paper-type/steps.paper-type.html',
      //   url: '/paper-type'
      // })
      // .state('steps.cover', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/cover/steps.cover.html',
      //   url: '/cover'
      // })
      // .state('steps.shipping', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/shipping/steps.shipping.html',
      //   url: '/shipping'
      // })
      // .state('steps.quote', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/quote/steps.quote.html',
      //   url: '/quote'
      // })
      // .state('steps.inquire', {
      //   // loaded into ui-view of parent's template
      //   templateUrl: 'app/steps/inquire/steps.inquire.html',
      //   url: '/inquire'
      // });

    $urlRouterProvider.otherwise('/');
  })
;
