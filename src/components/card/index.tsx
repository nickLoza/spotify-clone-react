import { Link } from "react-router-dom"

type CardsTypes = {
	linkUrl: string
	imgUrl: string
	title: string
	description: string
}


function Card({ linkUrl, imgUrl, title, description }:CardsTypes ) {
	return (
		<>
			<Link to={linkUrl} className="">
				<div className="relative">
					<img className="w-full" src={imgUrl} alt={title} height={150} width={150}/>
					<div className="absolute left-0 bottom-0 h-5 w-full bg-red"/>
				</div>
				<div className="flex items-center h-10">
					<p className="text-sm text-gray-300">{description}</p>
				</div>
			</Link>
		</>
	)
}

export default Card