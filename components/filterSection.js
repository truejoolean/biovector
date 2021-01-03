import Filter from './filter'

const filtersToRender = [
	{
		filterTitle: "extra",
		filterOptions: ["thesis", "full vacancy", "working student", "internship"]
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

export default function FilterSection({ filterState, filterDispatch }) {
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
			return;
		}
		filterDispatch({
			payload: {filterTitle},
			actionType: 'RESET_FILTER'
		})
	}

	return (
		<div>
			<div className="mb-4">
				<input type="text" placeholder="Anything specific?" className="w-full p-2 border-gray-500 border-b-2"/>
			</div>
			<div className="flex justify-between">
				<div className="">
					<div className="flex items-center justify-between"><h1 className="text-2xl">Location</h1><span className="underline text-sm" onClick={() => disableFilter('location')}>reset filter</span></div>
						<div className="flex flex-col content-around">
							<select name="city" id="city" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">Any city...</option>
								<option value="muenchen">Muenchen</option>
								<option value="heidelberg">Heidelberg</option>
								<option value="jena">Jena</option>
							</select>
							<p className="text-lg text-center font-bold">OR</p>
							<select name="state" id="state" className="w-52 p-2" onChange={dropdownHandler}>
								<option value="blank">Any state...</option>
								<option value="bayern">Bayern</option>
								<option value="brandenburg">Brandenburg</option>
								<option value="baden-wuerttemberg">Baden-Wuerttemberg</option>
							</select>
						</div>
				</div>

				{filtersToRender.map(({ filterTitle, filterOptions }) => {
					return (
						<div className="mr-16">
							<div className="flex items-center justify-between">
								<h1 className="text-2xl">{filterTitle.charAt(0).toUpperCase() + filterTitle.slice(1)}</h1>
								<span className="underline text-sm" onClick={() => disableFilter(filterTitle)}>reset filter</span>
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

