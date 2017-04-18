Step1 -> age -> Année Naissance -> $rs.age / nb
Step2 -> cigarette -> Y / N -> $rs.smoke / 1 ou 0
Step3 -> enfant -> Y / N -> $rs.child / 1 ou 0
	
	IF child = 1
	Step3_1 -> Nombre d'enfant -> $rs.nbchild / nb
	Step3_2 -> Enfant + de 4kg -> Y or N -> $rs.nbmmore 
		IF nbchild > 1
		Step3_2_1 -> Nombre + de 4kg -> nb -> $rs.nbmore
	
	Step3_3 -> Enfant - de 2kg200 -> Y / N -> $rs.less /nb
		IF nbchild > 1
		Step3_3_1 -> Nombre - 2k200 -> nb -> $rs.less / nb
		Step3_3_2 -> Prématuré -> Y / N -> $rs.prema / 1 ou 0
	
	Step3_4 -> Pré Eclampsy -> Y / N -> $rs.preEcl / 1 ou 0
	Step3_5 -> Diabete de grossesse -> Y / N -> $rs.diab / 1 ou 0
	Step3_5 -> Nb césarienne -> nb -> $rs.cesa / nb

Step4 -> Fausse couche -> Y / N -> fc / nb 
	IF Fausse couche
	Step4_1 -> nb Fausse couche -> nb -> $rs.fc / nb

Step5 -> IVG -> Y / N -> $rs.ivg / nb
	IF IVG
	Step5_1 -> nb IVG -> nb -> $rs.ivg / nb

Step6 -> IMG -> Y / N -> $rs.img /nb
	IF IMG
	Step6_1 -> nb IMG -> $rs.img /nb
Step7 -> nb de Verre d'alcool par jour -> Dragbar / nb
Step8 -> Epilepsie -> Y / N -> $rs.epi / 1 ou 0
Step9 -> Flébite -> Y / N -> $rs.flb / 1 ou 0
Step10 -> Hypertension -> Y / N -> $rs.ht / 1 ou 0
Step11 -> Diabète -> Y / N -> $rs.diab / 1 ou 0
Step12 -> Medicament: -> Y / N -> $rs.med / 1 ou 0
	IF medicament = 1
			IF Epilepsie
				Anti épileptique -> $rs.a 
			IF Hypertension
				Anti hypertenseur -> $rs.b
			IF Diabete
				Insuline -> $rs.c

			Antidépresser -> $rs.d
			Tranquilisant -> $rs.e
			Somnifere -> $rs.f
			Anti anxiolytique -> $rs.g
			Anti coagulant -> $rs.h
Step13 -> Poids -> nb -> $rs.weight / nb
Step14 -> Taille -> nb -> $rs.height
Step15 -> Travail -> Y / N -> $rs.work / 1 ou 0
	If travail = 1
	Step15_1 :
		 nb Heure de Travail -> nb -> $rs.hwork / nb
		 temps de trajet -> nb -> $rs.hTwork / nb
	Step15_2 -> Travail + de 6 heure debout -> Y / N -> $rs.workD / 1 ou 0