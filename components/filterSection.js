import Filter from './filter'
import { prettify } from '../util/makePretty.js'
// import { fetchAPI } from "../lib/api";
import { useRouter } from 'next/router'

import { translate } from '../util/translator.js';

const filtersToRender = [
	{
		filterTitle: "employerType",
		filterOptions: ["startup", "academia", "industry", "consulting"]
	},
	{
		filterTitle: "extra",
		filterOptions: ["thesis", "fullVacancy", "workingStudent", "internship"]
	},
	// {
	// 	filterTitle: "language",
	// 	filterOptions: ["german", "english"]
	// }
]

export default function FilterSection({ filterState, filterDispatch, allCities, allStates }) {
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'

	const changeHandler = (payload) => {
		// console.log(payload);
		plausible('checkbox-filter', {props: {filter: payload.filterTitle, value: payload.prop }})
		filterDispatch({
			payload,
			actionType: 'CHECKBOX_SET_FILTER',
		});
	}

	function dropdownHandler(e) {
		// console.log(e.target.name);
		// console.log(e.target.value);
		plausible('dropdown-filter', {props: {filter: e.target.name, value: e.target.value }})

		let payload = {filterTitle: e.target.name, prop: e.target.value}
		filterDispatch({
			payload,
			actionType: 'DROPDOWN_SET_FILTER'
		});
	}

	function searchFilter(e) {
		// console.log("search filter in filterSection: " + e.target.value);
		filterDispatch({
			payload: {
				prop: e.target.value
			},
			actionType: 'SEARCHBAR_SET_FILTER'
		})
	}

	function disableFilter(filterTitle) {
		// console.log("disabling filter: " + filterTitle )
		if (filterTitle === 'location') { // location needs to disable two filters
			filterDispatch({
				payload: {
					filterTitle: 'city'
				},
				actionType: 'RESET_FILTER'
			})
			filterDispatch({
				payload: {
					filterTitle: 'state'
				},
				actionType: 'RESET_FILTER'
			})
			return; // no need for further un-filtering
		}
		filterDispatch({
			payload: {filterTitle},
			actionType: 'RESET_FILTER'
		})
	}
		
	function renderOneFilter(filterTitle, filterOption) {
		return <Filter name={filterOption} checked={filterState[filterTitle]?.includes(filterOption)} changeHandler={(args) => changeHandler({ ...args, filterTitle })} />
	}

	return (
		<div>
			<div className="mb-4">
				<input type="text" value={filterState['search']} placeholder={translate("searchPlaceholder", lang)} className="w-full p-2 border-gray-500 border-b-2" onChange={searchFilter}/>
			</div>
			<div className="flex justify-between md:block">
				<div className="">
					<div className="flex items-center justify-between"><h1 className="text-2xl text-gray-700">{translate("location", lang)}</h1><span className="cursor-pointer underline text-sm" onClick={() => disableFilter('location')}>{translate("resetFilter", lang)}</span></div>
						<div className="flex flex-col content-around">
							<select value={filterState['city']} name="city" id="city" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">{translate("anyCity", lang)}</option>
								{allCities.map((city) => <option value={city}>{prettify(city)}</option>)}
							</select>
							<p className="text-lg text-center font-bold">{translate("or", lang)}</p>
							<select value={filterState['state']} name="state" id="state" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">{translate("anyState", lang)}</option>
								{allStates.map((state) => <option value={state}>{prettify(state)}</option>)}
							</select>
						</div>
				</div>
					{filtersToRender.map(({ filterTitle, filterOptions }) => {
						return (
							<div className="mr-16">
								<div className="flex items-center justify-between">
									<h1 className="text-2xl text-gray-700">{translate(filterTitle, lang)}</h1>
									<span className="cursor-pointer underline text-sm ml-2" onClick={() => disableFilter(filterTitle)}>{translate("resetFilter", lang)}</span>
								</div>
								<div>
								{filterOptions.map((filterOption) => renderOneFilter(filterTitle, filterOption))}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}
// get all possible cities and all possible states
// export async function getStaticProps() {
// 	console.log("is this even running?")
//   // Run API calls in parallel
//   const listingsAsArray = await Promise.all([
//     fetchAPI("/jobs") // articles are now called listings
//   ]);
//   const listings = listingsAsArray[0]
//   console.log(listingsAsArray);

//   let allCities = [];
//   let allStates = [];

//   for (let i = 0; i < listings.length; i++) {
//   	allCities.push(listings[i].companyCity);
//   	allStates.push(listings[i].companyState);
//   }
//   console.log("allCities in gsp: " , allCities)

//   return {
//     props: { allCities, allStates },
//     // revalidate: 10,
//   };
// }

