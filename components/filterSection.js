import Filter from './filter'
import { prettify } from '../util/makePretty.js'
import { fetchAPI } from "../lib/api";

const filtersToRender = [
	{
		filterTitle: "extra",
		filterOptions: ["thesis", "fullVacancy", "workingStudent", "internship"]
	},
	{
		filterTitle: "employerType",
		filterOptions: ["startup", "academia", "corporate", "consulting"]
	},
	{
		filterTitle: "language",
		filterOptions: ["german", "english"]
	}
]

export default function FilterSection({ filterState, filterDispatch, allCities, allStates }) {
	const changeHandler = (payload) => {
		console.log(payload);
		filterDispatch({
			payload,
			actionType: 'CHECKBOX_SET_FILTER',
		});
	}

	function dropdownHandler(e) {
		console.log(e.target.name);
		console.log(e.target.value);
		let payload = {filterTitle: e.target.name, prop: e.target.value}
		filterDispatch({
			payload,
			actionType: 'DROPDOWN_SET_FILTER'
		});
	}

	function searchFilter(e) {
		console.log(e.target.value);
		filterDispatch({
			payload: {
				prop: e.target.value
			}
		})
	}

	function disableFilter(filterTitle) {
		console.log("disabling filter: " + filterTitle )
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

	return (
		<div>
			<div className="mb-4">
				<input type="text" placeholder="Anything specific?" className="w-full p-2 border-gray-500 border-b-2" onChange={searchFilter}/>
			</div>
			<div className="flex justify-between">
				<div className="">
					<div className="flex items-center justify-between"><h1 className="text-2xl">Location</h1><span className="cursor-pointer underline text-sm" onClick={() => disableFilter('location')}>reset filter</span></div>
						<div className="flex flex-col content-around">
							<select value={filterState['city']} name="city" id="city" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">Any city...</option>
								{allCities.map((city) => <option value={city}>{prettify(city)}</option>)}
							</select>
							<p className="text-lg text-center font-bold">OR</p>
							<select value={filterState['state']} name="state" id="state" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">Any state...</option>
								{allStates.map((state) => <option value={state}>{prettify(state)}</option>)}
							</select>
						</div>
				</div>

				{filtersToRender.map(({ filterTitle, filterOptions }) => {
					return (
						<div className="mr-16">
							<div className="flex items-center justify-between">
								<h1 className="text-2xl">{prettify(filterTitle)}</h1>
								<span className="cursor-pointer underline text-sm" onClick={() => disableFilter(filterTitle)}>reset filter</span>
							</div>
								{filterOptions.map((filterOption) =>
									<Filter name={filterOption} checked={filterState[filterTitle]?.includes(filterOption)} changeHandler={(args) => changeHandler({ ...args, filterTitle })} />)}
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

