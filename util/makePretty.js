export const prettify = (s) => {
	console.log("pretiffy called with string: " + s);
	s = s.toLowerCase()
	let map = {
		'employertype': 'Employer',
		'workingstudent': "Working student",
		'fullvacancy': 'Full vacancy',
		'internship': 'Internship',

		'badenwuerttemberg': 'Baden-Wuerttemberg',
		'neuherberg near munich': 'Neuherberg near Munich'
	}

	if (map[s] !== undefined) return map[s];
	else return s?.charAt(0).toUpperCase() + s?.slice(1)
	// else return s;
}

export const processJobs = (allListings) => {
	for (let i = 0; i < allListings.length; i++) {
		console.log(allListings[i])
		allListings[i].companyName = allListings[i].company.name;
		allListings[i].companyState = allListings[i].company.state;
		allListings[i].companyCity = allListings[i].company.city;
		allListings[i].companyStreet = allListings[i].company.street;
		allListings[i].companyPostalCode = allListings[i].company.postalCode;
		allListings[i].image = allListings[i].company.logo;
	}
	console.log(allListings)
	return allListings;
}

export const processOneJob = (listing) => {
	// console.log("LISTING aaa: ", listing)
	listing.companyName = listing.company.name;
	listing.companyState = listing.company.state;
	listing.companyCity = listing.company.city;
	listing.companyStreet = listing.company.street;
	listing.companyPostalCode = listing.company.postalCode;
	listing.image = listing.company.logo;
	return listing;
}