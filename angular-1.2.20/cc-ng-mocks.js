
'use strict'

(function(window, angular, undefined){

angular.mock = {}

angular.mock.$BrowserProvider = function(){
    
}

angular.mock.$Browser = function(){
    
}

angular.mock.$Browser.prototype = function(){
    
}

angular.mock.$ExceptionHandlerProvider = function(){
    
}

angular.mock.$LogProvider = function(){
    
}

angular.mock.$IntervalProvider = function(){
        
}

var R_ISO08061_STR = /^$/

function jsonStringToDate(string){
    
}

function int(str){
    
}

function padNumber(num, digits, trim){
    
}

angular.mock.TzDate = function(offset, timestamp){
    
}

angular.mock.TzDate.prototype = Date.prototype

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

angular.mock.dump = function(object){
    
}  

angular.mock.$HttpBackendProvider = function(){
    
}

function createHttpBackendMock($rootScope, $delegate, $browser){
    
}

function MockHttpExpectation(method, url, data, headers){
    
}

function createMockXhr(){
    
}

function MockXhr(){
    
}

angular.mock.$TimeoutDecorator = function($delegate, $browser){
    
}

angular.mock.$RAFDecorator = function($delegate){
    
}

angular.mock.$AsyncCallbackDecorator = function($delegate){
    
}

angular.mock.$RootElementProvider = function(){
    
}

angular.module('ngMock', ['ng'])

angular.module('ngMockE2E', ['ng'])

angular.mock.e2e = {}

angular.mock.e2e.$httpBackendDecorator = []

angular.mock.clearDataCache = function(){
    
}

if(window.jasmine || window.mocha){
    
}

})(window, angular)
