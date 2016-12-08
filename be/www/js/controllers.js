angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

		})
.controller('ToxoCtrl', function($scope, $state, $rootScope){
$scope.data= {};
$scope.test = 
url =""
$scope.test = function(){
	
}

})
.controller('HomeCtrl', function($scope, $state, $http) {
		$scope.data = {};
	$scope.test = 
		url = ""
		$scope.login = function() {
			$state.go('app.launch');
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
		$scope.continue = function() {
			$state.go('record');
		}
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $http) {
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

.controller('Step1Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.a = $scope.data.nb;
			if ($rootScope.a > 0){
				$state.go('step2');
			}
		}
})

.controller('Step2Ctrl', function($scope, $state, $http, $rootScope) {
		$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.c = 1;
			$state.go('step3');
		}
		$scope.no = function() {
			$rootScope.c = 0;
			$state.go('step3');
		}
})


.controller('Step3Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.d = 1;
			$state.go('step4');
		}
		$scope.no = function() {
			$rootScope.d = 0;
			$state.go('step4');
		}
})


.controller('Step4Ctrl', function($scope, $state, $http, $rootScope) {
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.a = 1;
			$state.go('step5');
		}
		$scope.no = function() {
			$rootScope.a = 0;
			$state.go('step15');
		}
})


.controller('Step5Ctrl', function($scope, $state,  $http, $rootScope) {
		$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.e = $scope.data.nb;
			if ($rootScope.e > 0){
				$state.go('step6');
			}
		}
})

.controller('Step6Ctrl', function($scope, $state, $http, $rootScope) {
		$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.b = 1;
			$state.go('step7');
		}
		$scope.no = function() {
			$rootScope.b = 0;
			$state.go('step8');
		}
})

.controller('Step7Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.c = $scope.data.nb;
			if ($rootScope.c > 0){
				$state.go('step8');
			}
		}
})

.controller('Step8Ctrl', function($scope, $state, $http, $rootScope) {
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.h = 1;
			$state.go('step9');
		}
		$scope.no = function() {
			$rootScope.h = 0;
			$state.go('step10');
		}
})

.controller('Step9Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.i = $scope.data.nb;
			if ($rootScope.i > 0){
				$state.go('step10');
			}
		}
})

.controller('Step10Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.j = 1;
			$state.go('step11');
		}
		$scope.no = function() {
			$rootScope.j = 0;
			$state.go('step11');
		}
})


.controller('Step11Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.k = 1;
			$state.go('step12');
		}
		$scope.no = function() {
			$rootScope.k = 0;
			$state.go('step12');
		}
})


.controller('Step12Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.sr = 1;
			$state.go('step13');
		}
		$scope.no = function() {
			$rootScope.sr = 0;
			$state.go('step13');
		}
})


.controller('Step13Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.m = $scope.data.nb;
			if ($rootScope.m > 0){
				$state.go('step14');
			}
		}
})

.controller('Step14Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.n = 1;
			$state.go('step15');
		}
		$scope.no = function() {
			$rootScope.n = 0;
			$state.go('step16');
		}
})


.controller('Step15Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.o = $scope.data.nb;
			if ($rootScope.o > 0){
				$state.go('step16');
			}
		}
})

.controller('Step16Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.p = 1;
			$state.go('step17');
		}
		$scope.no = function() {
			$rootScope.p = 0;
			$state.go('step17');
		}
})


.controller('Step17Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.yes = function(){
			$rootScope.q = 1;
			$state.go('step18');
		}
		$scope.no = function() {
			$rootScope.q = 0;
			$state.go('step18');
		}
})


.controller('Step18Ctrl', function($scope, $state,  $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.nb = function() {
			$rootScope.r = $scope.data.nb;
			if ($rootScope.r > 0){
				$state.go('step0');
			}
		}
})

.controller('GhqCtrl', function($scope,  $state , $http, $rootScope){
	$scope.data = {};
	$scope.test = 
		url = ""
//C' est trop chelou, la variable chande dynamiquement des 
//que tu la change mais le submit le prend pas en compte
$scope.submit = function(ghq_a, ghq_b,ghq_c, ghq_d, ghq_e, ghq_f, ghq_g, ghq_h, ghq_i, ghq_j, ghq_k,ghq_l, ghq_m, ghq_n, ghq_o, ghq_p, ghq_q, ghq_r, ghq_s, ghq_t, ghq_u,ghq_v, ghq_w, ghq_x, ghq_y, ghq_z, ghq_za, ghq_zb){
	$rootScope.resGhq = 
		parseInt(ghq_a) 
		+ parseInt(ghq_b)
		+ parseInt(ghq_c)
		+ parseInt(ghq_d)
		+ parseInt(ghq_e)
		+ parseInt(ghq_f)
		+ parseInt(ghq_g)
		+ parseInt(ghq_h)
		+ parseInt(ghq_i)
		+ parseInt(ghq_j)
		+ parseInt(ghq_k)
		+ parseInt(ghq_l)
		+ parseInt(ghq_m)
		+ parseInt(ghq_n)
		+ parseInt(ghq_o)
		+ parseInt(ghq_p)
		+ parseInt(ghq_q)
		+ parseInt(ghq_r)
		+ parseInt(ghq_s)
		+ parseInt(ghq_t)
		+ parseInt(ghq_u)
		+ parseInt(ghq_v)
		+ parseInt(ghq_w)
		+ parseInt(ghq_x)
		+ parseInt(ghq_y)
		+ parseInt(ghq_z)
		+ parseInt(ghq_za)
		+ parseInt(ghq_zb);
	if ($rootScope.resGhq < 22){
		$rootScope.profilGhq = "Vos réponses au GHQ-28 suggèrent que vous êtes en etat de détresse, raison pour laquelle une consultations avec un professionnel de la santé mentale s'avère nécessaire. ";
	}
	else if ($rootScope.resGhq > 21){
		$rootScope.profilGhq = "Vos réponses au GHQ-28 suggèrent que vous êtes susceptible de souffrir de dépression. Il s'avère nécessaire que vous consultiez un professionnel de santé mentale prestement";
	}
	$state.go('app.psycho');
}
})

.controller('ScoffCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(s_a, s_b, s_c, s_d, s_e, s_f){
		$rootScope.resScoff = 
			parseInt(s_a) 
			+ parseInt(s_b)
			+ parseInt(s_c)
			+ parseInt(s_d)
			+ parseInt(s_e)
			+ parseInt(s_f);
	if ($rootScope.resScoff <= 2){
		$rootScope.profilScoff = "Vos réponses au SCOFF suggere que vous n'avez pas de probleme particulier ";
	}
	else if ($rootScope.resScoff > 2){
		$rootScope.profilScoff = "Vos réponses au SCOFF suggèrent que vous souffrez d'un trouble des conduites alimentares, raison pour laquelle une consultations avec un professionnel de la santé mentale s'avère nécessaire. ";
	}
	$state.go('app.psycho');
}

})

.controller('BdiCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(b_a, b_b, b_c, b_d, b_e, b_f,b_g, b_h, b_i,b_j, b_k, b_l, b_m){
		$rootScope.resBdi = 
			parseInt(b_a) 
			+ parseInt(b_b)
			+ parseInt(b_c)
			+ parseInt(b_d)
			+ parseInt(b_e)
			+ parseInt(b_f)
			+ parseInt(b_g)
			+ parseInt(b_h)
			+ parseInt(b_i)
			+ parseInt(b_j)
			+ parseInt(b_k)
			+ parseInt(b_l)
			+ parseInt(b_m);
	if ($rootScope.resBdi < 5 ){
		$rootScope.profilBDI = "Pas de dépression";
	}
	else if ($rootScope.resBdi < 8){
		$rootScope.profilBDI = "Dépression légère";	
	}
	else if ($rootScope.resBdi < 16){
		$rootScope.profilBDI = "Dépression modérée";	
	}
	else {
		$rootScope.profilBDI = "Dépression sévère";	
	}
	$state.go('app.psycho');
	}
})

.controller('StaiCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(){
		
	}
})

.controller('Epds1Ctrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(e1_a,e1_b, e1_c, e1_d, e1_e, e1_f, e1_g, e1_h){
		$rootScope.resEpds1 = 
			parseInt(e1_a) 
			+ parseInt(e1_b)
			+ parseInt(e1_c)
			+ parseInt(e1_d)
			+ parseInt(e1_e)
			+ parseInt(e1_f)
			+ parseInt(e1_g)
			+ parseInt(e1_h);
	$state.go('app.psycho');
	if ($rootScope.resEpds1 >= 10) {
		$rootScope.profilEpds1 = "Risque de dépression du postpartum";
	}
	else {
		$rootScope.profilEpds1 = "Pas de soucis";		
	}
	}
})

.controller('Epds2Ctrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(e2_a,e2_b, e2_c, e2_d, e2_e, e2_f, e2_g, e2_h ){
		$rootScope.resEpds1 = 
			parseInt(e1_a) 
			+ parseInt(e1_b)
			+ parseInt(e1_c)
			+ parseInt(e1_d)
			+ parseInt(e1_e)
			+ parseInt(e1_f)
			+ parseInt(e1_g)
			+ parseInt(e1_h);
	if ($rootScope.resEpds1 >= 10) {
		$rootScope.profilEpds1 = "dépression post-natale avérée";
	}
	else {
		$rootScope.profilEpds1 = "Pas de soucis";		
	}
	
	$state.go('app.psycho');
	}
})

.controller('PaiCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(p_a, p_b, p_c, p_d, p_e, p_f, p_g, p_h, p_i, p_j, p_k, p_l, p_m, p_n, p_o, p_p, p_q, p_r, p_s, p_t, p_u){
		$rootScope.resPai = 
			parseInt(p_a) 
			+ parseInt(p_b)
			+ parseInt(p_c)
			+ parseInt(p_d)
			+ parseInt(p_e)
			+ parseInt(p_f)
			+ parseInt(p_g)
			+ parseInt(p_h)
			+ parseInt(p_i)
			+ parseInt(p_j)
			+ parseInt(p_k)
			+ parseInt(p_l)
			+ parseInt(p_m)
			+ parseInt(p_n)
			+ parseInt(p_o)
			+ parseInt(p_p)
			+ parseInt(p_q)
			+ parseInt(p_r)
			+ parseInt(p_s)
			+ parseInt(p_t)
			+ parseInt(p_u);
	if ($rootScope.resPai < 42){
		$rootScope.profilPAI = "Pas cool";
	}
	else{
		$rootScope.profilPAI = "Cool";
	}
	$state.go('app.psycho');
	}
})

.controller('MibCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(){
		
	}
})

.controller('EatCtrl', function($scope, $state, $http, $rootScope){
	$scope.data = {};
	$scope.test = 
	$scope.url = ""
	$scope.submit = function(e_a, e_b, e_c, e_d, e_e, e_f, e_g, e_h, e_i, e_j, e_k, e_l, e_m, e_n, e_o, e_p, e_q, e_r, e_s, e_t, e_u, e_v, e_w, e_x, e_y, e_z, e_za){
			alert("toto");
			$rootScope.resEAT = 
			parseInt(e_a) 
			+ parseInt(e_b)
			+ parseInt(e_c)
			+ parseInt(e_d)
			+ parseInt(e_e)
			+ parseInt(e_f)
			+ parseInt(e_g)
			+ parseInt(e_h)
			+ parseInt(e_i)
			+ parseInt(e_j)
			+ parseInt(e_k)
			+ parseInt(e_l)
			+ parseInt(e_m)
			+ parseInt(e_n)
			+ parseInt(e_o)
			+ parseInt(e_p)
			+ parseInt(e_q)
			+ parseInt(e_r)
			+ parseInt(e_s)
			+ parseInt(e_t)
			+ parseInt(e_u)
			+ parseInt(e_v)
			+ parseInt(e_w)
			+ parseInt(e_x)
			+ parseInt(e_y)
			+ parseInt(e_z)
			+ parseInt(e_za);

	if ($rootScope.resEAT < 20){
		$rootScope.profilEAT = "Cool";
	}
	else{
		$rootScope.profilEAT = "Vos résultats au EAT-26 suggèrent que vous pourriez souffrir d'un trouble des conduites alimentaires. Il est donc recommandé de consulter un professionnel de la santé qualifié dans le domaine afin de déterminer s’il y a présence ou non d’un diagnostic et les soins qu'il demande.";
	}	
		$state.go('app.psycho');
	}
})
.controller('PsychoCtrl', function($scope, $state, $http, $rootScope){
		$scope.data = {};
		$scope.test = 
		url = ""
		$scope.ghq = function(){
			$state.go('app.ghq');
		}
		$scope.scoff = function(){
			$state.go('app.scoff');
		}
		$scope.bdi = function(){
			$state.go('app.bdi');
		}
		$scope.stai = function(){
			$state.go('app.stai');
		}
		$scope.epds1 = function(){
			$state.go('app.epds1');
		}
		$scope.epds2 = function(){
			$state.go('app.epds2');
		}
		$scope.pai = function(){
			$state.go('app.pai');
		}
		$scope.mib = function(){
			$state.go('app.mib');
		}
		$scope.eat = function(){
			$state.go('app.eat');
		}	

})

.controller('Step0Ctrl', function($scope, $state, $http, $rootScope) {
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.profil = "Bonjour"

		if ( $rootScope.a < 35 ){
			$scope.profil += "Faible risque d'anomalie chromosomique foetale";
		}
		else if ( $rootScope.a < 38 ){
			$scope.profil += "Risque modéré d'anomalie chromosomique foetale";
		}
		else if ( $rootScope.a < 42 ){
			$scope.profil += "Risque élevé d'anomalie chromosomique foetale ";
		}
		else if ( $rootScope.a >= 42 ){
			$scope.profil += " Risque très élevé d&#039;anomalie chromosomique foetale"; 
		}
		if ( $rootScope.o >= 3 ){
			$scope.profil += "Nous vous conseillons une consultation spécialisé avec un bilan complet. Un traitement peut-être necessaire pendant le début voir avant le début de votre grossesse.Nous vous conseillons une consultation spécialisé avec un bilan complet. Un traitement peut-être necessaire pendant le début voir avant le début de votre grossesse."; 
		}
		if ( $rootScope.r < 10 ){
			$scope.profil += "Pendant la grossesse la seule façon de protéger votre foetus est de stopper toute consommation d&#039;alcool";}
		else if ( $rootScope.r >= 10 ){
			$scope.profil += "Vous avez peut être un probleme  de dépendance avec l&#039;alcoolun consultation spécialisé s&#039;impose";
		}
		else if ( $rootScope.r >= 10 ){
			$scope.profil += "Vous devez vous faire aider"; 
		}
		$scope.continue = function() {
				$state.go('app.launch');
			}
})

.controller('LaunchCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.submit = function(gros) {
			// Date des dernieres regles //
			$rootScope.DerniereRegle = new Date(gros);
			console.log("DR");
			console.log($rootScope.DerniereRegle.toLocaleDateString());
			// Date de début de grossesse theorique //
			$rootScope.DebutGrossesse = new Date($rootScope.DerniereRegle.getTime() + 1209600000);
			console.log("Debut grossesse");
			console.log($rootScope.DebutGrossesse.toLocaleDateString());
			// Date de fiabilite Test de grossesse //
			$rootScope.FiabiliteTest = new Date($rootScope.DebutGrossesse.getTime() + 2246400000);
			console.log("Fiabilité Test");
			console.log($rootScope.FiabiliteTest.toLocaleDateString());
			// Date 1er consultation//
			$rootScope.FirstConsultDebut = new Date($rootScope.DebutGrossesse.getTime() + 2592000000);
			$rootScope.FirstConsultFin = new Date($rootScope.DebutGrossesse.getTime() + 3801600000);
			console.log("Premier consult entre le ");
			console.log($rootScope.FirstConsultDebut.toLocaleDateString());
			console.log("et le ");
			console.log($rootScope.FirstConsultFin.toLocaleDateString());
			// Date 1er detection Toxo //



//			$rootScope.WeekGrossesse = Math.round(((new Date().getTime() - $rootScope.grossesse.getTime()) / (1000 * 60 * 60 * 24)) / 7);
//			var ms = new Date().getTime() + (25401600000 - $rootScope.grossesse.getTime());
//			console.log($rootScope.grossesse.getTime());
//			var dateToday = new Date().getTime();
//			var dateTerm = new Date($rootScope.grossesse.getTime() + 25401600000);
//			$rootcScope.terme = dateTerm.toLocaleDateString();
	

		}

})
.controller('CalendarCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
			$scope.data = {};
	$scope.test = 
		url = ""
		$scope.tes = function(){
			console.log("test");
		}
})

