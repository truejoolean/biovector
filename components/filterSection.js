import Filter from './filter'

export default function FilterSection( { filterHandler }) {
	const filtersToRender = [
		{
			filterTitle: "employer",
			filterOptions: ["startup", "academia", "corporate"]
		},
		{
			filterTitle: "type",
			filterOptions: ["full time", "part time", "internship", "thesis"]
		},
		{
			filterTitle: "city",
			filterOptions: ["muenchen", "heidelberg"]
		}
	]
	return (
		<div>
			{filtersToRender.map( ({ filterTitle, filterOptions }) => {
				return (
					<div>
						<h1 className="text-2xl">{filterTitle.charAt(0).toUpperCase() + filterTitle.slice(1)}</h1>
						{filterOptions.map( (filterOption) => <Filter name={filterOption} filterHandler = {filterHandler}/>)}
					</div>	
				)
			})}
		</div>
	)
}

