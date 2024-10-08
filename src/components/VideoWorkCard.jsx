

export default function VideoWorkCard({ name, imageC, href, avg_color, setCurrent, width="w-1/3" }) {

	return (
		<>
			<a
				href={href}
				className={`lg:flex hidden group/work relative aspect-w-3 aspect-w-4 ${width} shadow-xl transition duration-500 overflow-hidden border-[1px] border-white`}
				onClick={() => setCurrent("chris-work")}>
				<img
					src={imageC} className="h-full w-full object-cover group-hover/work:scale-110 transition duration-300" alt={name}
				/>
				<div className={`absolute top-0 left-0 items-start z-2 w-full h-full ${avg_color} flex flex-col justify-end
			group-hover/work:bg-transparent transition duration-500`}>
					<div className='flex flex-col border-logo-white m-auto p-3 border-[1px] group-hover/work:bg-black group-hover/work:border-logo transition-all duration-300'>
						<div className='text-logo-white text-3xl font-bold'>{name}</div>
					</div>
				</div>
			</a>
			{/* Mobile */}
			<a
				href={href}
				className='lg:hidden group/work relative aspect-w-3 aspect-w-4 w-full md:w-2/3 shadow-xl transition duration-500 overflow-hidden border-[1px] border-white'
				onClick={() => setCurrent("chris-work")}>
				<img
					src={imageC} className="h-full w-full object-cover" alt={name}
				/>
				<div className={`absolute top-0 left-0 items-start z-2 w-full h-full ${avg_color} flex flex-col justify-end bg-transparent`}>
					<div className='flex flex-col m-auto p-3 border-[1px] bg-black border-logo'>
						<div className='text-logo-white text-xl md:text-3xl'>{name}</div>
					</div>
				</div>
			</a>
		</>


	)
}
