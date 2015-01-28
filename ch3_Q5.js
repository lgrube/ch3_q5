function checkin(name,movie,filmList,customerList) {
	if(movieList.contains(movie)) {
		var c = customer(name,movie);
	customerList.remove(c);
	movieList.append(movie);
	}
	else {
		print(customer + " is off the list of rentals");
	}
}
