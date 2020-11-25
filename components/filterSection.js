import Filter from './filter'

export default function FilterSection( { handleChange }) {
	handleChange();
	let filters = [
		{
			filterTitle: "employer",
			filterOptions: ["startup", "academia", "corporate"]
		},
		{
			filterTitle: "type",
			filterOptions: ["full time", "part time", "internship", "Thesis"]
		}
	]
	return (
		<div>
			{filters.map( ({ filterTitle, filterOptions }) => {
				return (
					<div>
						<h1 className="text-2xl">{filterTitle.charAt(0).toUpperCase() + filterTitle.slice(1)}</h1>
						{filterOptions.map( (filterOption) => <Filter name={filterOption} />)}
					</div>	
				)
			})}
		</div>
	)
}

