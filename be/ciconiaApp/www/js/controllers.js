angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('HomeCtrl', function($scope, $state, $http) {
	$scope.login = function() {
		$state.go('login');
	}
		$scope.create = function() {
			$state.go('first');
	}
})
.controller('FirstCtrl', function($scope, $state,  $http, $rootScope) {
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.name = function() {
		$rootScope.name = $scope.data.name;
		if ($rootScope.name){
		$state.go('step1');
	}
		}
})


.controller('RecordCtrl', function($scope, $state,  $http, $rootScope) {
console.log($rootScope);
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.continue = function() {
			$state.go('record');
		}

})
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $http) {
	
	$scope.data = {};
	$scope.test = 
		url = ""
	$scope.login = function() {
		LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
			$state.go('current');
			}).error(function(data){
				var alertPopup = $ionicPopup.alert({
					title: 'Login failed!',
					template: 'Please check your credentials!'
					});
			console.log($http.get('https://greta.ebaby.objectivemoon.io/Users/get/1'));
			});
		}
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('Step1Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.a = $scope.data.nb;
if ($rootScope.a > 0){
$state.go('step2');
}
}
})

.controller('Step2Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.c = 1;
$state.go('step3');
}
$scope.no = function() {
$rootScope.c = 0;
$state.go('step3');
}})


.controller('Step3Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.d = 1;
$state.go('step4');
}
$scope.no = function() {
$rootScope.d = 0;
$state.go('step4');
}})


.controller('Step4Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.a = 1;
$state.go('step5');
}
$scope.no = function() {
$rootScope.a = 0;
$state.go('step15');
}})


.controller('Step5Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.e = $scope.data.nb;
if ($rootScope.e > 0){
$state.go('step6');
}
}
})

.controller('Step6Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.b = 1;
$state.go('step7');
}
$scope.no = function() {
$rootScope.b = 0;
$state.go('step8');
}})


.controller('Step7Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.c = $scope.data.nb;
if ($rootScope.c > 0){
$state.go('step8');
}
}
})

.controller('Step8Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.h = 1;
$state.go('step9');
}
$scope.no = function() {
$rootScope.h = 0;
$state.go('step10');
}})


.controller('Step9Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.i = $scope.data.nb;
if ($rootScope.i > 0){
$state.go('step10');
}
}
})

.controller('Step10Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.j = 1;
$state.go('step11');
}
$scope.no = function() {
$rootScope.j = 0;
$state.go('step11');
}})


.controller('Step11Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.k = 1;
$state.go('step12');
}
$scope.no = function() {
$rootScope.k = 0;
$state.go('step12');
}})


.controller('Step12Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.sr = 1;
$state.go('step13');
}
$scope.no = function() {
$rootScope.sr = 0;
$state.go('step13');
}})


.controller('Step13Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.m = $scope.data.nb;
if ($rootScope.m > 0){
$state.go('step14');
}
}
})

.controller('Step14Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.n = 1;
$state.go('step15');
}
$scope.no = function() {
$rootScope.n = 0;
$state.go('step16');
}})


.controller('Step15Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.o = $scope.data.nb;
if ($rootScope.o > 0){
$state.go('step16');
}
}
})

.controller('Step16Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.p = 1;
$state.go('step17');
}
$scope.no = function() {
$rootScope.p = 0;
$state.go('step17');
}})


.controller('Step17Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.q = 1;
$state.go('step18');
}
$scope.no = function() {
$rootScope.q = 0;
$state.go('step18');
}})


.controller('Step18Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.r = $scope.data.nb;
if ($rootScope.r > 0){
$state.go('step19');
}
}
})

.controller('Step1Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.a = $scope.data.nb;
if ($rootScope.a > 0){
$state.go('step2');
}
}
})

.controller('Step2Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.c = 1;
$state.go('step3');
}
$scope.no = function() {
$rootScope.c = 0;
$state.go('step3');
}})


.controller('Step3Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.d = 1;
$state.go('step4');
}
$scope.no = function() {
$rootScope.d = 0;
$state.go('step4');
}})


.controller('Step4Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.a = 1;
$state.go('step5');
}
$scope.no = function() {
$rootScope.a = 0;
$state.go('step15');
}})


.controller('Step5Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.e = $scope.data.nb;
if ($rootScope.e > 0){
$state.go('step6');
}
}
})

.controller('Step7Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.c = $scope.data.nb;
if ($rootScope.c > 0){
$state.go('step8');
}
}
})

.controller('Step9Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.i = $scope.data.nb;
if ($rootScope.i > 0){
$state.go('step10');
}
}
})

.controller('Step10Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.j = 1;
$state.go('step11');
}
$scope.no = function() {
$rootScope.j = 0;
$state.go('step11');
}})


.controller('Step11Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.k = 1;
$state.go('step12');
}
$scope.no = function() {
$rootScope.k = 0;
$state.go('step12');
}})


.controller('Step12Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.sr = 1;
$state.go('step13');
}
$scope.no = function() {
$rootScope.sr = 0;
$state.go('step13');
}})


.controller('Step13Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.m = $scope.data.nb;
if ($rootScope.m > 0){
$state.go('step14');
}
}
})

.controller('Step14Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.n = 1;
$state.go('step15');
}
$scope.no = function() {
$rootScope.n = 0;
$state.go('step16');
}})


.controller('Step15Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.o = $scope.data.nb;
if ($rootScope.o > 0){
$state.go('step16');
}
}
})

.controller('Step16Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.p = 1;
$state.go('step17');
}
$scope.no = function() {
$rootScope.p = 0;
$state.go('step17');
}})


.controller('Step17Ctrl', function($scope, $state, $http, $rootScope) {
$scope.data= {};
$scope.test = 
url = ""
$scope.yes = function(){
$rootScope.q = 1;
$state.go('step18');
}
$scope.no = function() {
$rootScope.q = 0;
$state.go('step18');
}})


.controller('Step18Ctrl', function($scope, $state,  $http, $rootScope) {

$scope.data = {};
$scope.test = 
url = 
$scope.nb = function() {
$rootScope.r = $scope.data.nb;
if ($rootScope.r > 0){
$state.go('step0');
}
}
})

.controller('Step0Ctrl', function($scope, $state, $http, $rooScope) {
$scope.data = {};
$test = 
$url =
$scope.profil = "Bonjour"

if ( $rootscope.a < 35 ){
                    $profil += "Faible risque d&#039;anomalie chromosomique foetale";}
			else if ( $rootscope.a < 38 ){
                    $profil += "Risque modéré d&#039;anomalie chromosomique foetale";
}
			else if ( $rootscope.a < 42 ){
                    $profil += "Risque élevé d&#039;anomalie chromosomique foetale ";
}
			else if ( $rootscope.a >= 42 ){
                    $profil += " Risque très élevé d&#039;anomalie chromosomique foetale"; 
}
if ( $rootscope.o >= 3 ){
                    $profil += "Nous vous conseillons une consultation spécialisé avec un bilan complet. Un traitement peut-être necessaire pendant le début voir avant le début de votre grossesse.Nous vous conseillons une consultation spécialisé avec un bilan complet. Un traitement peut-être necessaire pendant le début voir avant le début de votre grossesse."; 
}
if ( $rootscope.r < 10 ){
                    $profil += "Pendant la grossesse la seule façon de protéger votre foetus est de stopper toute consommation d&#039;alcool";}
			else if ( $rootscope.r >= 10 ){
                    $profil += "Vous avez peut être un probleme  de dépendance avec l&#039;alcoolun consultation spécialisé s&#039;impose";
}
			else if ( $rootscope.r >= 10 ){
                    $profil += "Vous devez vous faire aider"; 
}
$scope.test = 
url = ""
$scope.continue = function() {
$state.go('record');
}
})

