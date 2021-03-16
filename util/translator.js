export const translate = (s, lang) => {
	s = s.toLowerCase();
	let map = {
		pagemetatitle: {
			en: "Visit the Biovector for Germany's top biotechnology jobs and vacancies. Easily search and filter vacancies based on your skillset!",
			de: "Finde Deutschlands Top Auswahl für Biotechnologie Jobs und Stellenanzeigen, übersichtlich und auf Deine Bedürfnisse angepasst."
		},
		tagline: {
			en: "Find Germany's most exciting jobs in biotechnology!",
			de: "Finde Deutschlands top Jobs der Biotechnologie!"
		},

		// FilterSection...
		anycity: {
			en: "Any city..",
			de: "Jede Stadt.."
		},
		or: {
			en: "or",
			de: "oder"
		},
		
		anystate: {
			en: "Any state...",
			de: "Jedes Bundesland..."
		},
		location: {
			en: "Location",
			de: "Standort"
		},
		resetfilter: {
			en: "reset filter",
			de: "Filter zurücksetzen"
		},
		employertype: {
			en: "Employer",
			de: "Arbeitgeber"
		},
		startup: {
			en: "Startup",
			de: "Startup"
		},
		academia: {
			en: 'Academia',
			de: "Academia"
		},
		industry: {
			en: "Industry",
			de: "Industrie"
		},
		consulting: {
			en: "Consulting",
			de: "Beratung"
		},
		workingstudent: {
			en: "Working student",
			de: "Werkstudent"
		},
		fullvacancy: {
			en: "Full vacancy",
			de: "Vollzeitstelle"
		},
		internship: {
			en: "Internship",
			de: "Praktikum"
		},
		searchplaceholder: {
			en: "Any specific job title?",
			de: "Suchst Du nach einem bestimmten Jobtitel?"
		},
		/* ==================================================== */
		/* Find Talent */
		findtalentmetatitle: {
			en: "The Biovector is the perfect opportunity for all German biotechnology endeavours to find talented employees.",
			de: "Der Biovector ist die perfekte Möglichkeit aller deutschen Biotechnologie Unternehmen, herausragendes Talent zu finden." // TODO
		},
		talenttagline: {
			en: "Grow your biotech company with the best talents.",
			de: "Finden Sie die perfekten Talente für Ihr Biotech-Unternehmen."
		},
		hereswhy: {
			en: "We are unlike any other job platform. Here's why:",
			de: "Wir sind anders als jede andere Jobplattform:"
		},
		targetedlistingstitle: {
			en: "Targeted listings",
			de: "Gezielte Anzeigen"
		},
		targetedlistingsdescription: {
			en: "Other platforms drown your expensive listing in a sea of 1000s of job postings. The Biovector's selectivity and filtering helps them stay afloat.",
			de: "Andere Plattformen ertränken Ihre teuren Anzeigen in einem See tausender anderer Anzeigen. Die Selektivität und die Filterfunktionen machen Ihre Anzeige langfristig sichtbar."
		},
		focussedexpertisetitle: {
			en: "Focussed expertise",
			de: "Expertise der Branche"
		},
		focussedexpertisedescription: {
			en: "Having gathered experience in multiple biotechnology enterprises, we know the intricacies of this special labor market.",
			de: "Die Erfahrung, die unser Team in der Biotechnologie Branche sammeln durfte, erlaubt uns die gezielte Ausrichtung auf diesen speziellen Arbeitsmarkt."
		},
		fairpricingtitle: {
			en: "Fair pricing",
			de: "Faire Preise"
		},
		fairpricingdescription: {
			en: "We want you to invest into amazing talents, not recruiters.",
			de: "Sie sollen in einmalige Talente investieren, nicht in Recruiter."
		},
		internationaltalentstitle: {
			en: "International talents",
			de: "Internationale Talente"
		},
		internationaltalentsdescription: {
			en: "We attract high-potentials from around the world to Germany",
			de: "Wir ziehen high-potentials der ganzen Welt an und machen sie auf Ihr Unternehmen aufmerksam."
		},
		studentacademiafree: {
			en: "We consider it integral to our mission to feature listings for student academia for free.",
			de: "Wir betrachten es als zentral zu unserer Mission, Anzeigen für studentische Academia kostenlos anzubieten."
		},
		featuresandpricing: {
			en: "Features & Pricing",
			de: "Features und Preise"
		},
		price: {
			en: "Price",
			de: "Preis"
		},
		months: {
			en: "Months of exposure",
			de: "Anzeigendauer"
		},
		targetedads: {
			en: "Investment into targeted advertisement",
			de: "Investment in gezielte Werbung"
		},
		extrapostgoogleads: {
			en: "Extra post on Google Jobs",
			de: "Extra Post auf Google Jobs"
		},
		admanagement: {
			en: "Manual management of advertisement campaigns",
			de: "Manuelles Management der Werbekampagne"
		},
		order: {
			en: "Order now!",
			de: "Jetzt bestellen!"
		},
		comingsoon: {
			en: "Coming soon!",
			de: "Kommt bald!"
		},
		/* ===================================================== */
		/* FOOTER */
		footerdescription: {
			en: "The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers.",
			de: "Der Biovector sammelt Deutschlands top Stellenanzeigen und Jobs der Biotechnologie. Von Hausarbeiten in Startups über Werkstudent Möglichkeiten bis hin zu Karrieren in der Beratung."
		},
		/* =======================================================*/

		contact: {
			en: "Contact",
			de: "Kontakt"
		},
		applynow: {
			en: 'Apply now at ',
			de: "Jetzt bewerben bei "
		},
		employernavbar: {
			en: 'Employers',
			de: "Arbeitgeber"
		}
	}
	if (map[s] && map[s][lang]) return map[s][lang];
	else return s?.charAt(0).toUpperCase() + s?.slice(1)
}