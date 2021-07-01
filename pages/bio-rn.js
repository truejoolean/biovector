import JobListItem from '../components/jobListItem'
import { fetchAPI } from "../lib/api";
import { processJobs } from '../util/makePretty.js';

export default function BioRN({ listings }) {
  return(
    <div>
      <section className="jobsAndFilter lg:w-11/12 max-screen-lg mx-auto mt-4">
        <ul className="w-full mt-4">
        {/*console.log("companyCity: " + listings[0].companyCity)*/}
          {listings
            /*
            .filter(({ employerType }) => filterState.employerType.includes(employerType))
            .filter(({ companyCity }) => filterState.city === 'blank' ? filterState : filterState.city.toLowerCase() === companyCity.toLowerCase())
            .filter(({ companyState }) => filterState.state === 'blank' ? filterState : filterState.state.toLowerCase() === companyState.toLowerCase())
            .filter(({ extra }) => filterState.extra.includes(extra))
            .filter(({ title, companyName }) => filterState.search === "" ? filterState : (title.toLowerCase().includes(filterState.search.toLowerCase()) || title.toLowerCase().includes(companyName.toLowerCase())))
            */
            .map((listing, i) => <JobListItem gray={true} listing={listing} />)}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const listingsAsArray = await Promise.all([
    fetchAPI("/jobs?_limit=-1&_sort=publishedAt:DESC") // articles are now called listings
  ]);

  let listingsPre = listingsAsArray[0]
  let listingsPost = processJobs(listingsPre)

  let listingsFiltered = listingsPost.filter(listing => listing.company.city === "heidelberg")
  console.log(listingsFiltered.length)

  return {
    props: { listings: listingsFiltered },
    // revalidate: 1,
  };
}