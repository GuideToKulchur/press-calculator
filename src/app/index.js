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
        controller: 'StepsCtrl',
        url: '/steps'
      })
      .state('steps.basics', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/basics/steps.bascics.html',
        controller: 'StepsBasicCtrl',
        url: '/basics'
      })
      .state('steps.style', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/style/steps.style.html',
        controller: 'StepsStyleCtrl',
        url: '/style'
      })
      .state('steps.binding', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/binding/steps.binding.html',
        controller: 'StepsBindingCtrl',
        url: '/binding'
      })
      .state('steps.paper-type', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/paper-type/steps.paper-type.html',
        controller: 'StepsPaperTypeCtrl',
        url: '/paper-type'
      })
      .state('steps.cover', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/cover/steps.cover.html',
        controller: 'StepsCoverCtrl',
        url: '/cover'
      })
      .state('steps.shipping', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/shipping/steps.shipping.html',
        controller: 'StepsShippingCtrl',
        url: '/shipping'
      })
      .state('steps.quote', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/quote/steps.quote.html',
        controller: 'StepsQuoteCtrl',
        url: '/quote'
      })
      .state('steps.inquire', {
        // loaded into ui-view of parent's template
        templateUrl: 'app/steps/inquire/steps.inquire.html',
        controller: 'StepsInquireCtrl',
        url: '/inquire'
      });

    $urlRouterProvider.otherwise('/');
  })
;
