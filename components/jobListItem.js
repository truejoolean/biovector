export default function JobListItem( { id, title, description }) {
	return (
		<li className="w-full h-28 flex bg-white hover:shadow-lg mb-5">
			<div className="content flex my-auto ml-12">
				<img src="/images/profile.jpg" className="h-16"/>
				<div className="ml-8 my-auto text-2xl">
					<div>
						{title}
					</div>
					<div className="text-base text-gray-400">
						Junior • Internship • Munich
					</div>
				</div>
			</div>
		</li>
	)
}