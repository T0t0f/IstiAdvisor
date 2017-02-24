
class User {
	constructor(id, nom, prenom, surnom, cursus) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.surnom = surnom;
		this.cursus = cursus;
	}
	
	print(){
		return ("User{"+this.id+","+this.prenom+","+this.nom+","+this.surnom+","+this.cursus+"}");
	}
}

class Workplacement {
	constructor(id, user_id, lieu, ville, pays, date_debut, date_fin)
	{
		this.id = id;
		this.user_id = user_id;
		this.lieu = lieu;
		this.ville = ville;
		this.pays = pays;
		this.date_debut = date_debut;
		this.date_fin = date_fin;
	}
	
	print(){
		return ("Workplacement{"+this.id+","+this.user_id+","+this.lieu+","+this.ville+","+this.pays+","+this.date_debut+","+this.date_fin+"}");
	}
}

class Keypoint {
	constructor(id, nom, type, ville, pays, annee)
	{
		this.id = id;
		this.nom = nom;
		this.type = type;
		this.ville = ville;
		this.pays = pays;
		this.annee = annee;
	}
	
	print(){
		return ("Keypoint{"+this.id+","+this.nom+","+this.type+","+this.ville+","+this.pays+","+this.annee+"}");
	}
}

class Commentaire {
	constructor(id, id_user, id_keypoint, note, commentaire)
	{
		this.id = id;
		this.id_user = id_user;
		this.id_keypoint = id_keypoint;
		this.note = note;
		this.commentaire = commentaire;
	}
	
	print(){
		return ("Commentaire{"+this.id+","+this.id_user+","+this.id_keypoint+","+this.note+","+this.commentaire+"}");
	}
}


var bdd_user = [new User(0,"Cueille","Vincent","VCueille","AGI"),
				new User(1,"Garcia","Christophe","T0t0f","AGI"),
				new User(2,"Bourget","Simon","Sim","AGI"),
				new User(3,"Jaffre","Cindy","Cja","AGI"),
				new User(4,"TestQsf","TestQsf","TestQsf","QSF"),
				new User(5,"TestIno","TestIno","TestIno","INNO")];
				
var bdd_stage = [new Workplacement(10,0,"UFMG","Belo Horizonte","Brésil","04/05/2015","01/08/2015"),
				 new Workplacement(11,1,"HITLABNZ","Christchurch","Nouvelle-Zélande","04/05/2015","01/08/2015"),
				 new Workplacement(12,2,"University of Zielona Gora","Zielona Gora","Pologne","04/05/2015","01/08/2015"),
				 new Workplacement(13,3,"Universidad National de Ingenieria","Lima","Pérou","04/05/2015","01/08/2015"),
				 new Workplacement(14,4,"Université des QSF","Vierzon","France","04/05/2015","01/08/2015"),
				 new Workplacement(15,5,"Université des INNO","Moscou","Russie","04/05/2015","01/08/2015")];

var bdd_keypoint = [new Keypoint(20, "Macdo UFMG", "Restaurant", "Belo Horizonte", "Brésil", "2015"),
					new Keypoint(21, "M. Aldair Ferderas", "Location", "Angers", "France", "2015")];

var bdd_commentaire = [new Commentaire(30, 0, 20, 5, "Super Macdo comme à la maison, proche du labo, juste parfait pour le midi"),
					   new Commentaire(31, 0, 21, 5, "Super maison partagée, ouverte sur le jardin, les autres locataires sont sympas, proprio super cool !")];


//			########################
//			::: GESTION BDD USER :::

function findUserById(id) {
	for(var i = 0; i < bdd_user.length; i++)
	{
		if(bdd_user[i].id === id)
			return bdd_user[i];
	}
	return null;
}

function findUserBySurnom(surnom) {
	for(var i = 0; i < bdd_user.length; i++)
	{
		if(bdd_user[i].surnom === surnom)
			return bdd_user[i];
	}
	return null;
}

function findUserByPrenomNom(prenom, nom) {
	for(var i = 0; i < bdd_user.length; i++)
	{
		if(bdd_user[i].prenom === prenom && bdd_user[i].nom === nom)
			return bdd_user[i];
	}
	return null;
}

//			########################

