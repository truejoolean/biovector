export const prettify = (s) => {
	let map = {
		'employerType': 'Employer Type',
		'workingStudent': "Working student",
		'fullVacancy': 'Full vacancy',
		'internship': 'Internship',

		'badenWuerttemberg': 'Baden-Wuerttemberg'
	}

	if (map[s] !== undefined) return map[s];
	else return s.charAt(0).toUpperCase() + s.slice(1)
	// else return s;
}