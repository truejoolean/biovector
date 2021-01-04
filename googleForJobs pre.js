function googlePreProcess(data) {
	data.datePosted = data.datePosted.substring(0,9)
	data.hiringOrganization.logo = "http://biovector.de/" + data.hiringOrganization.logo.formats.thumbnail.url;
}
{
   "@context":"https://schema.org/",
   "@†ype":"JobPosting",
   "title":"Chemiker/in Peptide Drug Design (w/div/m)",
   "datePosted":"2020-12-23T11:00:00.000Z",
   "hiringOrganization":{
      "@type":"Organization",
      "name":"Hans-Knöll-Institut",
      "logo":{
         "id":13,
         "name":"hki.jpg",
         "alternativeText":"",
         "caption":"",
         "width":800,
         "height":800,
         "formats":{
            "thumbnail":{
               "name":"thumbnail_hki.jpg",
               "hash":"thumbnail_hki_bcd123e80a",
               "ext":".jpg",
               "mime":"image/jpeg",
               "width":156,
               "height":156,
               "size":2.91,
               "path":null,
               "url":"/uploads/thumbnail_hki_bcd123e80a.jpg"
            },
            "medium":{
               "name":"medium_hki.jpg",
               "hash":"medium_hki_bcd123e80a",
               "ext":".jpg",
               "mime":"image/jpeg",
               "width":750,
               "height":750,
               "size":17.08,
               "path":null,
               "url":"/uploads/medium_hki_bcd123e80a.jpg"
            },
            "small":{
               "name":"small_hki.jpg",
               "hash":"small_hki_bcd123e80a",
               "ext":".jpg",
               "mime":"image/jpeg",
               "width":500,
               "height":500,
               "size":10.43,
               "path":null,
               "url":"/uploads/small_hki_bcd123e80a.jpg"
            }
         },
         "hash":"hki_bcd123e80a",
         "ext":".jpg",
         "mime":"image/jpeg",
         "size":18.47,
         "url":"/uploads/hki_bcd123e80a.jpg",
         "previewUrl":null,
         "provider":"local",
         "provider_metadata":null,
         "created_at":"2020-12-23T07:48:02.877Z",
         "updated_at":"2020-12-23T07:48:02.890Z"
      },
      "sameAs":"http://biovector.de"
   },
   "jobLocation":{
      "@type":"Place",
      "address":{
         "@type":"PostalAddress",
         "streetAddress":"Adolf-Reichwein-Straße 23",
         "addressLocality":"jena",
         "addressRegion":"thueringen",
         "postalCode":12345,
         "addressCountry":"de"
      }
   }
}