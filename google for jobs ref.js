{
	"@context": "https://schema.org/",
	"@†ype": "JobPosting",
	"title": listing.title,
	"description": listing.content,
	"datePosted": listing.datePosted,
	"hiringOrganization": {
		"@type": "Organization",
		"name": listing.companyName,
		"logo": listing.image,
		"sameAs": "http://biovector.de" // todo
	},
	"jobLocation": {
		"@type": "Place",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": listing.street,
			"addressLocality": listing.city,
			"addressRegion": listing.state,
			"postalCode": listing.postalCode,
			"addressCountry": "de"
		}
	}
}