import Filter from './filter'

const filtersToRender = [
	{
		filterTitle: "employerType",
		filterOptions: ["startup", "academia", "corporate"]
	},
	{
		filterTitle: "type",
		filterOptions: ["full time", "part time", "internship", "thesis"]
	},
	{
		filterTitle: "city",
		filterOptions: ["muc", "heidelberg"]
	}
]

export default function FilterSection({ filterState, filterDispatch }) {
	const changeHandler = (payload) => {
		filterDispatch({
			payload,
			actionType: 'SET_FILTER',
		});
	}

	return (
		<div className="flex justify-around">
			<div className="">
				<div>
					<h1 className="text-2xl">Location</h1>
					<select name="city" id="city" className="w-40">
						<option value="blank">Choose a city...</option>
						<option value="muenchen">München</option>
						<option value="heidelberg">Heidelberg</option>
						<option value="jena">Jena</option>
						<option value="muenchen">aa</option>
						<option value="muenchen">bb</option>
					</select>
				</div>
				<p>OR</p>
				<div>
					<select name="state" id="state" className="w-40">
						<option value="blank">Choose a state...</option>
						<option value="bayern">Bayern</option>
						<option value="brandenburg">Brandenburg</option>
					</select>
				</div>
			</div>

			{filtersToRender.map(({ filterTitle, filterOptions }) => {
				return (
					<div className="mr-16">
						<h1 className="text-2xl">{filterTitle.charAt(0).toUpperCase() + filterTitle.slice(1)}</h1>
							{filterOptions.map((filterOption) =>
								<Filter name={filterOption} checked={filterState[filterTitle]?.includes(filterOption)} changeHandler={(args) => changeHandler({ ...args, filterTitle })} />)}
					</div>
				)
			})}
		</div>
	)
}

