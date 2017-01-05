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
.controller('PsychoCtrl', function($scope, $state, $http, $rootScope, $cordovaLocalNotification){
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
		setTimeout(function() { $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Hello',
        text: 'Toto',
        icon:'',
        data: {
          customProperty: '#/app/calendar'
        }
      });}, 300);
          
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
			$scope.profil += "Pendant la grossesse la seule façon de protéger votre foetus est de stopper toute consommation d'&#039;'alcool";}
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

.controller('LaunchCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate, $cordovaLocalNotification){
	$scope.data = {};
	$scope.test = 
		url = ""
		$scope.submit = function(gros) {
			
			// Date des dernieres regles //
			$rootScope.LastMenstruation = new Date(gros);
			$rootScope.LastMenstruationTimestamp = $rootScope.LastMenstruation.getTime();
			$rootScope.LastMenstruationDate = $rootScope.LastMenstruation.toLocaleDateString();
			
			// Date de début de grossesse theorique //
			$rootScope.BeginOfPregnancy = new Date($rootScope.LastMenstruation.getTime() + 1209600000);
			$rootScope.BeginOfPregnancyTimestamp = $rootScope.BeginOfPregnancy.getTime();
			$rootScope.BeginOfPregnancyDate = $rootScope.BeginOfPregnancy.toLocaleDateString();
		
			// Date de fiabilite Test de grossesse //
			$rootScope.ReliabilityTest = new Date($rootScope.BeginOfPregnancy.getTime() + 2246400000);
			$rootScope.ReliabilityTestTimestamp = $rootScope.ReliabilityTest.getTime();
			$rootScope.ReliabilityTestDate = $rootScope.ReliabilityTest.toLocaleDateString();
			
			// Date 1er consultation//
			$rootScope.FirstConsultStart = new Date($rootScope.BeginOfPregnancy.getTime() + 2246400000);
			$rootScope.FirstConsultEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 3456000000);
			$rootScope.FirstConsultStartTimestamp = $rootScope.FirstConsultStart.getTime();
			$rootScope.FirstConsultEndTimestamp = $rootScope.FirstConsultEnd.getTime();
			$rootScope.FirstConsultStartDate = $rootScope.FirstConsultStart.toLocaleDateString();
			$rootScope.FirstConsultEndDate = $rootScope.FirstConsultEnd.toLocaleDateString();
			
			// Date 1er Echo //
			$rootScope.FirstEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 5702400000);
			$rootScope.FirstEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 7257600000);
			$rootScope.FirstEchoStartDate = $rootScope.FirstEchoStart.toLocaleDateString();
			$rootScope.FirstEchoEndDate = $rootScope.FirstEchoEnd.toLocaleDateString();
			$rootScope.FirstEchoStartTimestamp = $rootScope.FirstEchoStart.getTime();
			$rootScope.FirstEchoEndTimestamp = $rootScope.FirstEchoEnd.getTime();
		
			//Date 1er entretien prenat
			$rootScope.FirstPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 7344000000 );
			$rootScope.FirstPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 8553600000 );
			$rootScope.FirstPrenatalCareStartDate = $rootScope.FirstPrenatalCareStart.toLocaleDateString();
			$rootScope.FirstPrenatalCareStartTimestamp = $rootScope.FirstPrenatalCareStart.getTime();
			$rootScope.FirstPrenatalCareEndDate = $rootScope.FirstPrenatalCareEnd.toLocaleDateString();
			$rootScope.FirstPrenatalCareEndTimestamp = $rootScope.FirstPrenatalCareEnd.getTime();
			
			//Date 2eme entretien prenat
			$rootScope.SecondPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 7862400000 );
			$rootScope.SecondPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 9072000000 );
			$rootScope.SecondPrenatalCareStartDate = $rootScope.SecondPrenatalCareStart.toLocaleDateString();
			$rootScope.SecondPrenatalCareStartTimestamp = $rootScope.SecondPrenatalCareStart.getTime();
			$rootScope.SecondPrenatalCareEndDate = $rootScope.SecondPrenatalCareEnd.toLocaleDateString();
			$rootScope.SecondPrenatalCareEndTimestamp = $rootScope.SecondPrenatalCareEnd.getTime();


			//Bilan
			$rootScope.BilanBucco = new Date($rootScope.BeginOfPregnancy.getTime() + 1.0368e+10);
			$rootScope.BilanBuccoDate = $rootScope.BilanBucco.toLocaleDateString();
			$rootScope.BilanBuccoTimestamp = $rootScope.BilanBucco.getTime();
			
			// Date 2eme Echo //
			$rootScope.SecondEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.10592e+10);
			$rootScope.SecondEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.21824e+10);
			$rootScope.SecondEchoStartDate = $rootScope.SecondEchoStart.toLocaleDateString();
			$rootScope.SecondEchoEndDate = $rootScope.SecondEchoEnd.toLocaleDateString();
			$rootScope.SecondEchoStartTimestamp = $rootScope.SecondEchoStart.getTime();
			$rootScope.SecondEchoEndTimestamp = $rootScope.SecondEchoEnd.getTime();		

			//Date 3eme entretien prenat
			$rootScope.ThirdPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.10592e+10);
			$rootScope.ThirdPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.21824e+10);
			$rootScope.ThirdPrenatalCareStartDate = $rootScope.ThirdPrenatalCareStart.toLocaleDateString();
			$rootScope.ThirdPrenatalCareStartTimestamp = $rootScope.ThirdPrenatalCareStart.getTime();
			$rootScope.ThirdPrenatalCareEndDate = $rootScope.ThirdPrenatalCareEnd.toLocaleDateString();
			$rootScope.ThirdPrenatalCareEndTimestamp = $rootScope.ThirdPrenatalCareEnd.getTime();
			
			//Diabete de grossesse
			$rootScope.diabeteStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.1664e+10);
			$rootScope.diabeteEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.52928e+10);
			$rootScope.diabeteStartDate = $rootScope.diabeteStart.toLocaleDateString();
			$rootScope.diabeteStartTimestamp = $rootScope.diabeteStart.getTime();
			$rootScope.diabeteEndDate = $rootScope.diabeteEnd.toLocaleDateString();
			$rootScope.diabeteEndTimestamp = $rootScope.diabeteEnd.getTime();

			//Date 4 entretien prenat
			$rootScope.FourPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.31328e+10);
			$rootScope.FourPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.43424e+10);
			$rootScope.FourPrenatalCareStartDate = $rootScope.FourPrenatalCareStart.toLocaleDateString();
			$rootScope.FourPrenatalCareStartTimestamp = $rootScope.FourPrenatalCareStart.getTime();
			$rootScope.FourPrenatalCareEndDate = $rootScope.FourPrenatalCareEnd.toLocaleDateString();
			$rootScope.FourPrenatalCareEndTimestamp = $rootScope.FourPrenatalCareEnd.getTime();
		
			//Date 5 entretien prenat
			$rootScope.FivePrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.57248e+10);
			$rootScope.FivePrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.69344e+10);
			$rootScope.FivePrenatalCareStartDate = $rootScope.FivePrenatalCareStart.toLocaleDateString();
			$rootScope.FivePrenatalCareStartTimestamp = $rootScope.FivePrenatalCareStart.getTime();
			$rootScope.FivePrenatalCareEndDate = $rootScope.FivePrenatalCareEnd.toLocaleDateString();
			$rootScope.FivePrenatalCareEndTimestamp = $rootScope.FivePrenatalCareEnd.getTime();
		
			// Date 3eme Echo //
			$rootScope.ThirdEchoStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.71072e+10);
			$rootScope.ThirdEchoEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.82304e+10);
			$rootScope.ThirdEchoStartDate = $rootScope.ThirdEchoStart.toLocaleDateString();
			$rootScope.ThirdEchoStartTimestamp = $rootScope.ThirdEchoStart.getTime();
			$rootScope.ThirdEchoEndDate = $rootScope.ThirdEchoEnd.toLocaleDateString();
			$rootScope.ThirdEchoEndTimestamp = $rootScope.ThirdEchoEnd.getTime();

			//Date 6 entretien prenat
			$rootScope.SixthPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.84032e+10);
			$rootScope.SixthPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 1.96128e+10);
			$rootScope.SixthPrenatalCareStartDate = $rootScope.SixthPrenatalCareStart.toLocaleDateString();
			$rootScope.SixthPrenatalCareStartTimestamp = $rootScope.SixthPrenatalCareStart.getTime();
			$rootScope.SixthPrenatalCareEndDate = $rootScope.SixthPrenatalCareEnd.toLocaleDateString();
			$rootScope.SixthPrenatalCareEndTimestamp = $rootScope.SixthPrenatalCareEnd.getTime();
		
			//Consultation anesthesiste
			$rootScope.AnesthetistConsultStart = new Date($rootScope.BeginOfPregnancy.getTime() + 1.95264e+10);
			$rootScope.AnesthetistConsultEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 2.00448e+10);
			$rootScope.AnesthetistConsultStartDate = $rootScope.AnesthetistConsultStart.toLocaleDateString();
			$rootScope.AnesthetistConsultStartTimestamp = $rootScope.AnesthetistConsultStart.getTime();
			$rootScope.AnesthetistConsultEndDate = $rootScope.AnesthetistConsultEnd.toLocaleDateString();
			$rootScope.AnesthetistConsultEndTimestamp = $rootScope.AnesthetistConsultEnd.getTime();
			
			//Date 7 entretien prenat
			$rootScope.SeventhPrenatalCareStart = new Date($rootScope.BeginOfPregnancy.getTime() + 2.10816e+10);
			$rootScope.SeventhPrenatalCareEnd = new Date($rootScope.BeginOfPregnancy.getTime() + 2.22912e+10);
			$rootScope.SeventhPrenatalCareStartDate = $rootScope.SeventhPrenatalCareStart.toLocaleDateString();
			$rootScope.SeventhPrenatalCareStartTimestamp = $rootScope.SeventhPrenatalCareStart.getTime();
			$rootScope.SeventhPrenatalCareEndDate = $rootScope.SeventhPrenatalCareEnd.toLocaleDateString();
			$rootScope.SeventhPrenatalCareEndTimestamp = $rootScope.SeventhPrenatalCareEnd.getTime();

			// Date terme theorique
			$rootScope.DateOfTerm = new Date($rootScope.BeginOfPregnancy.getTime() + 2.36736e+10);		
			$rootScope.DateOfTermDate = $rootScope.DateOfTerm.toLocaleDateString();
			$rootScope.DateOfTermTimestamp = $rootScope.DateOfTerm.getTime();

			//Nombre de semaines de grossesse 
			
			$rootScope.WeekPregnant = Math.round(((new Date().getTime() - $rootScope.LastMenstruation.getTime()) / (1000 * 60 * 60 * 24)) / 7);
			console.log($rootScope.WeekPregnant);

			$state.go('app.toxoAsk');
		}

})

.controller('ToxoAskCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate, $cordovaLocalNotification){
	$scope.data = {};
	$scope.test = 
	url = ""

	$scope.yes = function(){
		$rootScope.Toxo = 1;
		$state.go('app.calendar');
	}
	$scope.no = function(){
		$rootScope.Toxo = 0;
		
		$scope.planificationNotif();
	}
	$scope.IDontKnow = function(){
		$rootScope.Toxo = 2;
		$scope.planificationNotif();
	}
	$scope.planificationNotif = function(){
		$rootScope.ToxoDateOne =  ($rootScope.BeginOfPregnancyTimestamp + 2246400000) - new Date().getTime() ;
		$rootScope.ToxoDateTwo = ($rootScope.BeginOfPregnancyTimestamp + 4838400000) - new Date().getTime() ;
		$rootScope.ToxoDateThree = ($rootScope.BeginOfPregnancyTimestamp + 7430400000) - new Date().getTime() ;
		$rootScope.ToxoDateFour = ($rootScope.BeginOfPregnancyTimestamp + 1.00224e+10) - new Date().getTime() ;
		$rootScope.ToxoDateFive = ($rootScope.BeginOfPregnancyTimestamp + 1.26144e+10) - new Date().getTime() ;
		$rootScope.ToxoDateSix = ($rootScope.BeginOfPregnancyTimestamp + 1.52064e+10) - new Date().getTime() ;
		$rootScope.ToxoDateSeven = ($rootScope.BeginOfPregnancyTimestamp + 1.77984e+10) - new Date().getTime() ;
		$rootScope.ToxoDateEight = ($rootScope.BeginOfPregnancyTimestamp + 2.03904e+10) - new Date().getTime() ;
		if ($rootScope.ToxoDateOne >= 0){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
        			id: 1,
        			title: 'Test toxoplasmose',
        			text: 'Pensez à prendre rendez-vous pour votre prise de sang',
        			data: {
        			  customProperty: 'custom value'
        			}
        		});}
        	, $rootScope.ToxoDateOne);
		}

		if ($rootScope.ToxoDateTwo >= 0){
			setTimeout(function () {			
				$cordovaLocalNotification.schedule({
		       		id: 2,
		       		title: 'Prennez votre rendez vous pour votre test Toxo',
			        text: 'Toxo',			
				    data: {
        				  customProperty: 'custom value'
        			}
        		});},
        	 $rootScope.ToxoDateTwo);
		}

		if ($rootScope.ToxoDateThree >= 0){
			setTimeout(function () {			
				$cordovaLocalNotification.schedule({
		       		id: 3,
		       		title: 'Prennez votre rendez vous pour votre test Toxo',
			        text: 'Toxo',			
				    data: {
        				  customProperty: 'custom value'
        			}
        		});},
        	 $rootScope.ToxoDateThree);
		}

		if ($rootScope.ToxoDateFour){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
			        id: 4,
        			title: 'Test toxoplasmose',
       				text: 'Pensez à prendre rendez-vous pour votre prise de sang',
			        data: {
        				customProperty: 'custom value'
        			}
        		});},
        	$rootScope.ToxoDateFour);
        }

		if ($rootScope.ToxoDateFive){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
			        id: 5,
        			title: 'Test toxoplasmose',
       				text: 'Pensez à prendre rendez-vous pour votre prise de sang',
			        data: {
        				customProperty: 'custom value'
        			}
        		});},
        	$rootScope.ToxoDateFive);
        }

		if ($rootScope.ToxoDateSix){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
			        id: 6,
        			title: 'Test toxoplasmose',
       				text: 'Pensez à prendre rendez-vous pour votre prise de sang',
			        data: {
        				customProperty: 'custom value'
        			}
        		});},
        	$rootScope.ToxoDateSix);
		}

		if ($rootScope.ToxoDateSeven){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
			        id: 7,
        			title: 'Toxo',
       				text: 'Prennez rendez vous pour votre test ',
			        data: {
        				customProperty: 'custom value'
        			}
        		});},
        	$rootScope.ToxoDateSeven
        	);
		}

		if ($rootScope.ToxoDateHeight){
			setTimeout(function () {
				$cordovaLocalNotification.schedule({
			        id: 8,
        			title: 'Test toxoplasmose',
       				text: 'Pensez à prendre rendez-vous pour votre prise de sang',
			        data: {
        				customProperty: 'custom value'
        			}
        		});},
        	$rootScope.ToxoDateEight
        	);
		}
		
		$state.go('app.toxo');
	}
})

.controller('CalendarCtrl', function($scope, $state, $http, $rootScope, $ionicSideMenuDelegate){
		$scope.data = {};
		$scope.test = 
		url = ""
		$rootScope.today = new Date().getTime();
		$rootScope.nbSemaine = Math.round(((new Date().getTime() - $rootScope.BeginOfPregnancy.getTime()) / (1000 * 60 * 60 * 24)) / 7);
		$scope.tes = function(){
			console.log("test");
		}
		   $scope.hideA = true;
		   $scope.hideAA = true;
		   $scope.hideAAA = true;
		   $scope.hideB = true;
		   $scope.hideC = true;
		   $scope.hideD = true;
		   $scope.hideE = true;
		   $scope.hideF = true;
		   $scope.hideG = true;
		   $scope.hideH = true;
		   $scope.hideI = true;
		   $scope.hideJ = true;
		   $scope.hideK = true;
		   $scope.hideL = true;
		   $scope.hideM = true;
		   $scope.hideN = true;
		   $scope.hideO = true;
		   $scope.hideP = true;


$scope.changeA = function(){
if ($scope.hideA == false)
   $scope.hideA = true;
else
   $scope.hideA = false;
}
$scope.changeAA = function(){
if ($scope.hideAA == false)
   $scope.hideAA = true;
else
   $scope.hideAA = false;
}
$scope.changeAAA = function(){
if ($scope.hideAAA == false)
   $scope.hideAAA = true;
else
   $scope.hideAAA = false;
}
$scope.changeB = function(){
if ($scope.hideB == false)
   $scope.hideB = true;
else
   $scope.hideB = false;
}
$scope.changeC = function(){
if ($scope.hideC == false)
   $scope.hideC = true;
else
   $scope.hideC = false;
}
$scope.changeD = function(){
if ($scope.hideD == false)
   $scope.hideD = true;
else
   $scope.hideD = false;
}
$scope.changeE = function(){
if ($scope.hideE == false)
   $scope.hideE = true;
else
   $scope.hideE = false;
}
$scope.changeF = function(){
if ($scope.hideF == false)
   $scope.hideF = true;
else
   $scope.hideF = false;
}
$scope.changeG = function(){
if ($scope.hideG == false)
   $scope.hideG = true;
else
   $scope.hideG = false;
}
$scope.changeH = function(){
if ($scope.hideH == false)
   $scope.hideH = true;
else
   $scope.hideH = false;
}
$scope.changeI = function(){
if ($scope.hideI == false)
   $scope.hideI = true;
else
   $scope.hideI = false;
}
$scope.changeJ = function(){
if ($scope.hideJ == false)
   $scope.hideJ = true;
else
   $scope.hideJ = false;
}
$scope.changeK = function(){
if ($scope.hideK == false)
   $scope.hideK = true;
else
   $scope.hideK = false;
}
$scope.changeL = function(){
if ($scope.hideL == false)
   $scope.hideL = true;
else
   $scope.hideL = false;
}
$scope.changeM = function(){
if ($scope.hideM == false)
   $scope.hideM = true;
else
   $scope.hideM = false;
}
$scope.changeN = function(){
if ($scope.hideN == false)
   $scope.hideN = true;
else
   $scope.hideN = false;
}
$scope.changeO = function(){
if ($scope.hideO == false)
   $scope.hideO = true;
else
   $scope.hideO = false;
}
$scope.changeP = function(){
if ($scope.hideP == false)
   $scope.hideP = true;
else
   $scope.hideP = false;
}
})

.controller('HomeCtrl', function($scope, $state, $http, $rootScope) {
		$scope.data = {};
	$scope.test = 
		url = ""
		$scope.login = function() {
			$state.go('app.launch');
		}
		$scope.create = function() {
			$state.go('first');
		}
		$scope.french = function(){
			$rootScope.langage = 1;
			//home
			$rootScope.account = "Je possède déjà un compte";
			$rootScope.begin = "Commençons l'aventure";

			// launch
			$rootScope.hello = "Bonjour, aujourd\'hui vous en êtes à votre ";
			$rootScope.numberOfWeek = "ème semaine de grossesse"

			$rootScope.helloFirst = "Vous avez choisi de continuer votre aventure avec nous et nous vous en remercions."
			

			//Calendar
			$rootScope.NumberCalendar = "Félicitation vous en êtes à votre ";
			$rootScope.Weeks = "eme semaines de grossesse aujourd'hui !";
			$rootScope.delivery = "Vous devriez accoucher le ";
			$rootScope.calendar = "Votre calendrier";

			$rootScope.DateOfMenstruation = "Commencez par rentrer la date de vos dernieres regles";

			$rootScope.LastM = "La date de vos dernieres règles est le:";
			$rootScope.LastMenstruationDetail = "L'aménorrhée signifie l'absence de règles. Les professionnels de santé calculent le stade d'évolution de la grossesse en semaines d'aménorrhée à partir du premier jour des dernières règles. ";

			$rootScope.BeginOfP = "Votre Grossesse a débuté le:";
			$rootScope.BeginOfPregnancyDetail = "Cette date sera déterminée avec précision par votre médecin à partir des résultats de la 1ère échographie et de la date de vos dernières règles.";

			$rootScope.ReliabilityT = "Fiabilité du test de grossesse à partir du:";
			$rootScope.ReliabilityTPast = "Fiabilité du test de grossesse depuis le:";
			$rootScope.ReliabilityTestDetail = "Il est recommandé de confirmer les résultats du test de grossesse par une prise de sang en laboratoire, afin de mesurer avec plus de précision le taux d'hormone hCG.";
			
			$rootScope.FirstC = "Votre première consultation doit être réalisé entre le ";
			$rootScope.FirstCPast = "Votre première consultation à été réalisé le inserer la date quand on stock les données";
			$rootScope.FirstConsultDetail = "Votre grossesse est suivie par un médecin ou une sage-femme (libérale, en hôpital ou en PMI). A ce titre, vous bénéficiez de 7 consultations médicales prénatales. Lors de la 1ère consultation, vous allez établir les principales étapes de votre suivi de grossesse. Il est nécessaire de retracer avec votre médecin votre passé médical.";

			$rootScope.FirstE = "Votre première echographie doit être réalisé entre le ";
			$rootScope.FirstEPast = "Votre première echographie à été réalisé le ";
			$rootScope.FirstEchoDetail = "L'échographie de datation doit être réalisée entre la 11ème et la 13ème semaine d'aménorrhée. Elle permet de confirmer le terme de la grossesse, de déterminer le nombre d'embryons, de mesurer la clarté nucale et de rechercher certains signes de malformation. ";
			
			$rootScope.FirstPC = "Votre premier entretien prenatal doit être réalisé entre le ";
			$rootScope.FirstPCPast = "Votre premiere entretien prenatal à été réalisé le ";
			$rootScope.FirstPrenatalCareDetail = "Cet entretien individuel ou en couple est réalisé par une sage-femme ou un médecin et permet d'exprimer vos besoins et vos attentes, de répondre à vos interrogations et d'échanger sur votre projet de naissance.";

			$rootScope.SecondPC = "Votre second entretien prenatal doit être réalisé entre le ";
			$rootScope.SecondPCPast = "Votre second entretien prenatal à été réalisé le";
			$rootScope.SecondPrenatalCareDetail = "Votre médecin peut vous proposer d'effectuer le Triple Test, il s'agit d'un examen médical non obligatoire qui permet de dépister la trisomie 21 par le biais d'un dosage de marqueurs effectué sur votre sang. Si vous avez plus de 38 ans, il vous sera systématiquement proposé d'effectuer une amiocentèse. Votre médecin peut également vous recommander deffectuer un examen médical du père - cet examen pris en charge à 100% a pour objectif de compléter votre dossier médical.";

			$rootScope.BilanB = "Bilan buccodentaire";
			$rootScope.BilanBuccoDetail = "Vous pouvez bénéficier d'un bilan bucco-dentaire pris en charge à 100% et sans avance de frais de votre part. Prenez soin de vos dents car les modifications hormonales notamment peuvent fragiliser vos dents et vos gencives, ce qui peut augmenter le risque d'accouchement prématuré.";
			
			$rootScope.SecondE = "Votre seconde echographie doit être réalisé entre le ";
			$rootScope.SecondEPAst = "Votre seconde echographie à été réalisé le ";
			$rootScope.SecondEchoDetail = "L'échographie morphologique doit être réalisée entre la 21ème et la 23ème semaine d'aménorrhée. Elle permet d'analyser la morphologie du foetus, de vérifier la croissance foetale, de localiser le placenta et de dépister d'autres anomalies. Vous pouvez, si vous le souhaitez, connaître le sexe de votre bébé !";

			$rootScope.ThirdPC = "Votre troisième entretien prenatal doit être réalisé entre le ";
			$rootScope.ThirdPCPast = "Votre troisième entretien prenatal à été réalisé le ";
			$rootScope.ThirdPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie morphologique.";

			$rootScope.diabete = "Votre depistage diabete doit être réalisé entre le ";
			$rootScope.diabetePast = "Votre depistage diabete à été réalisé le ";
			$rootScope.diabetePregnant = "Le diabète gestationnel également appelé hyperglycémie ou diabète de grossesse, est une élévation du taux de sucre dans le sang qui survient pendant la grossesse. Il s'agit d'une forme bénigne de diabète qui concerne entre 6% et 12% des grossesses et nécessite la mise en place d'un suivi adapté.";

			$rootScope.FourPC = "Votre quatrieme entretien prenatal doit être réalisé entre le ";
			$rootScope.FourPCPast = "Votre quatrieme entretien prenatal à été réalisé le ";
			$rootScope.FourPrenatalCareDetail = "Consultation médicale de votre 6ème mois de grossesse.";
		
			$rootScope.FivePC = "Votre cinquieme entretien prenatal doit être réalisé entre le ";
			$rootScope.FivePCPast = " Votre cinquieme entretien prenatal à été réalisé le ";
			$rootScope.FivePrenatalCareDetail = "Consultation médicale de votre 7ème mois de grossesse.";

			$rootScope.ThirdE = "Votre troisieme echographie doit être réalisé entre le ";
			$rootScope.ThirdEPast = "Votre troisieme echographie à été réalisé le";
			$rootScope.ThirdEchoDetail = "L'échographie de croissance foetale doit être réalisée entre la 31ème et la 33ème semaine d'aménorrhée. Elle permet de vérifier la croissance foetale, la présentation et la localisation placentaire.";

			$rootScope.SixthPC = "Votre sixieme entretien prenatal doit être réalisé entre le ";
			$rootScope.SixthPCPast = " Votre sixieme entretien prenatal à été réalisé le ";
			$rootScope.SixthPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie de croissance. C'est également l'occasion pour lui de vous informer sur votre mode d'accouchement.";

			$rootScope.AnesthetistC = "Votre consultation avec l'anesthesiste doit être réalisé entre le ";
			$rootScope.AnesthetistCPast = " Votre consultation avec l'anesthesiste à été réalisé le ";
			$rootScope.AnesthetistConsultDetail = "Cette consultation permet d'assurer la sécurité d'une éventuelle anesthésie et est obligatoire.";

			$rootScope.SeventhPC = "Votre septieme entretien prenatal doit être réalisé entre le ";
			$rootScope.SeventhPCPast = " Votre septieme entretien prenatal à été réalisé le ";
			$rootScope.SeventhPrenatalCareDetail = "Votre médecin vous confirmera le lieu et les modalités de votre accouchement. Il vous informera également des différents signes qui doivent attirer votre attention et vous faire venir à la maternité en urgence (contractions, perte de liquide, perte de sang, etc.)";

			$rootScope.DateOfT = "Votre date de terme théorique est le: " 
			$rootScope.DateOfTermDetail = "Vous devez consulter votre médecin ou sage-femme.";

			


			// Toxo
			$rootScope.QToxo = "Etes-vous immunisé contre la toxoplasmose?";


			// Divers
			$rootScope.And = " et le ";
			$rootScope.ToxoYes = "Oui";
			$rootScope.ToxoNo = "Non";
			$rootScope.ToxoIDontKnow = "Je ne sais pas";
			$state.go('home');
		}
		$scope.english = function(){
			$rootScope.langage = 2;
			//home
			$rootScope.account = "I already have an account";
			$rootScope.begin = "Start adventure";
			
			//Launch
			$rootScope.hello = "Hello, today you are at your ";
			$rootScope.numberOfWeek = "Th week of pregnancy"
			$rootScope.helloFirst = "You have chosen to continue your adventure with us and we thank you for it. ";

//Calendar
			$rootScope.NumberCalendar = "Congratulations to your";
			$rootScope.Weeks = "th weeks of pregnancy today!";
			$rootScope.delivery = "You should give birth to ";
			$rootScope.calendar = "Your calendar";

			$rootScope.LastM = "The date of your last menstruation is: ";
			$rootScope.DateOfMenstruation = "Start by entering the date of your last rules ";
			$rootScope.LastMenstruationDetail = "Amenorrhea means no rules. Health professionals calculate the stage of pregnancy in weeks of amenorrhea from the first day of the last menstrual period. ";

			$rootScope.BeginOfP = "Your Pregnancy started on: ";
			$rootScope.BeginOfPregnancyDetail = "This date will be determined precisely by your doctor from the results of the first ultrasound and the date of your last menstruation.";

			$rootScope.ReliabilityT = "Reliability of the pregnancy test from: ";
			$rootScope.ReliabilityTPast = "Reliability of the pregnancy test since: ";
			$rootScope.ReliabilityTestDetail = "It is recommended to confirm the results of the pregnancy test with a laboratory blood test in order to more accurately measure hCG hormone levels.";

			$rootScope.FirstC = "Your first consultation must be made between the ";
			$rootScope.FirstCPast = "Your first consultation was carried out the insert the date when we store the data";
			$rootScope.FirstConsultDetail = "Your pregnancy is followed by a doctor or a midwife (liberal, hospital or PMI). As such, you benefit from 7 prenatal medical consultations. During the first consultation, you will establish the main steps of your pregnancy follow-up. It is necessary to trace with your doctor your medical history.";

			$rootScope.FirstE = "Your first ultrasound should be performed between ";
			$rootScope.FirstEPast = "Your first ultrasound was carried out on ";
			$rootScope.FirstEchoDetail = "The dating ultrasound should be performed between the 11th and 13th week of amenorrhea. It allows to confirm the term of pregnancy, to determine the number of embryos, to measure nuchal translucency and to look for certain signs of malformation.";


			$rootScope.FirstPC = "Your first prenatal care must be made between the ";
			$rootScope.FirstPCPast = "Your first prenatal care was conducted in the ";
			$rootScope.FirstPrenatalCareDetail = "This individual or couple interview is carried out by a midwife or a doctor and allows to express your needs and your expectations, to answer your questions and to exchange on your project of birth.";
			

			$rootScope.SecondPC = "Your second prenatal interview should be ";
			$rootScope.SecondPCPast = "Your second prenatal interview was carried out on ";
			$rootScope.SecondPrenatalCareDetail = "Your physician may suggest that you perform the Triple-Test, which is a non-mandatory medical examination that allows you to screen Down Trisomy 21 through a marker assay performed on your blood. If you are over 38 years old, you will be systematically offered to perform an asbestosis test. Your doctor may also recommend that you perform a medical examination of the father - this 100% supported examination is intended to supplement your medical record. ";

			$rootScope.BilanB = "Oral assessment from ";
			$rootScope.BilanBuccoDetail = "You can benefit from a 100% oral health check-up and no advance fees from you. Take care of your teeth as hormonal changes in particular can weaken your teeth and gums, which can increase the risk of premature delivery.";

			$rootScope.SecondE = "Your second ultrasound should be ";
			$rootScope.SecondEPAst = "Your second ultrasound was performed on ";
			$rootScope.SecondEchoDetail = "The morphological ultrasound should be performed between the 21st and 23rd week of amenorrhea. It allows to analyze the morphology of the fetus, to check the fetal growth, to locate the placenta and to detect other anomalies. You can, if you wish, know the sex of your baby!";

			$rootScope.ThirdPC = "Your third prenatal interview should be ";
			$rootScope.ThirdPCPast = "Your third prenatal interview was carried out on ";
			$rootScope.ThirdPrenatalCareDetail = "Your doctor interprets and explains the morphological ultrasound.";

			$rootScope.diabete = "Your diabete screening should be done between the ";
			$rootScope.diabetePast = "Your diabete screening was completed on";
			$rootScope.diabeteDetail = "Gestational diabetes also called hyperglycemia or pregnancy diabetes, is an elevation of blood sugar that occurs during pregnancy. It is a benign form of diabetes which affects between 6% and 12% of pregnancies and requires the setting up of an adapted follow-up.";


			$rootScope.FourPC = "Your fourth prenatal interview should be done between ";
			$rootScope.FourPCPast = "Your fourth prenatal interview was";
			$rootScope.FourPrenatalCareDetail = "Medical consultation of your 6th month of pregnancy.";


			$rootScope.FivePC = "Your fifth prenatal interview should be ";
			$rootScope.FivePCPast = "Your fifth prenatal interview was carried out on ";
			$rootScope.FivePrenatalCareDetail = "Medical consultation of your 7th month of pregnancy.";
			
			$rootScope.ThirdE = "Your third ultrasound should be";
			$rootScope.ThirdEPAst = "Your third ultrasound was performed on";
			$rootScope.ThirdEchoDetail = "Fetal growth ultrasound should be performed between the 31st and 33rd week of amenorrhea. It allows to check fetal growth, presentation and placental location.";

			$rootScope.SixthPC = "Your sixth prenatal interview should be";
			$rootScope.SixthPCPast = "Your sixth prenatal interview was completed on ";
			$rootScope.SixthPrenatalCareDetail = "Your doctor interprets and explains to you the ultrasound of growth. It is also the occasion for him to inform you about your mode of delivery.";

			$rootScope.AnesthetistC = "Your consultation with the anesthetist must be done between ";
			$rootScope.AnesthetistCPast = "Your consultation with the anesthetist was carried out on ";
			$rootScope.AnesthetistConsultDetail = "This consultation ensures the safety of any anesthesia and is mandatory.";

			$rootScope.SeventhPC = "Your seventh prenatal maintenance should be performed between ";
			$rootScope.SeventhPCPast = " Your seventh prenatal maintenance was performed on ";
			$rootScope.SeventhPrenatalCareDetail = "Your doctor will confirm the place and the modalities of your delivery. It will also inform you of the different signs that should attract your attention and bring you to emergency maternity (contractions, loss of fluid, loss of blood, etc.)";

			$rootScope.DateOfT = "Your theoretical term date is: " 
			$rootScope.DateOfTermDetail = "You should consult your doctor or midwife.";

			// Toxo
			$rootScope.QToxo = "Are you immunized against toxoplasmosis?";

			//Divers
			$rootScope.And = " and the ";
			$rootScope.ToxoYes = "Yes";
			$rootScope.ToxoNo = "No";
			$rootScope.ToxoIDontKnow = "I don't know";

			$state.go('home');
		}

})
