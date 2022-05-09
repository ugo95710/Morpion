function affiche(image,ligne,colonne){
	if(termine ==1){
		return;
	}
	if(grille[ligne][colonne] !=-1){
		alert("Case deja remplie");
		return;
	}

	joueur=tour%2;
	tour++;
	grille[ligne][colonne]=joureur;
	image.src=""
}