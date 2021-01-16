export const prettify = (s) => {
	s = s.toLowerCase()
	let map = {
		'employertype': 'Employer',
		'workingstudent': "Working student",
		'fullvacancy': 'Full vacancy',
		'internship': 'Internship',

		'badenwuerttemberg': 'Baden-Wuerttemberg'
	}

	if (map[s] !== undefined) return map[s];
	else return s?.charAt(0).toUpperCase() + s?.slice(1)
	// else return s;
}