require(['jquery', 'polyfills', 'test'], function ($, polyfills, test) {
  
  'use strict';
  
  console.log('Main loaded');

  test.publicMethod('Hello');

});