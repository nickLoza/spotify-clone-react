import { Link, useNavigate } from "react-router-dom"
import { MusicData } from "../db/data"
import Card from "../components/card";

function Home() {

	const navigate = useNavigate();

	function handleOnClick(type:string, id:number){
		return navigate(`/${type}/${id}`);
	}
	return (
		<>
			<section className="bg-[#1E1E1E] pt-14 mt-[-55px] rounded-xl">
				<h1 className="text-3xl font-bold px-4 pt-4 pb-6">Good afternoon</h1>
				<ul className="grid grid-cols-2 gap-2 px-2">
					{MusicData.slice(0,6).map((item,i)=>(
						<li key={i} className={`transition duration-100 bg-[#303030] hover:brightness-125 rounded-xl`}>
						<div 
							role="button" 
							className='flex items-center w-full' 
							onClick={()=>handleOnClick(item.type, item.id)}>
							<img 
								src={item.img} 
								alt="Artist" 
								height={100} 
								width={100}
								className="rounded-md w-15 h-full object-cover"/>
							<div className='md:flex flex-col ml-3'>
								<p className='text-md font-medium'>{item.title}</p>
							</div>
						</div>
					</li>
					))}
				</ul>
			</section>
			<section className="p-6">
				<div className="flex items-center justify-between ">
					<h2 className="text-2xl font-bold">Your top mixes</h2>
					<Link to={"/"} className="text-gray-300 font-medium">Show all</Link>
				</div>
				<ul className="flex gap-x-2 overflow-hidden pt-4">
					{MusicData.slice(5.12).map((item,i)=>(
						<li key={i} className="min-w-[175px] max-h-[300px] bg-[#121212] p-4 pb-0 transition duration-200 hover:bg-[#303030] rounded-xl">
							<Card linkUrl={`/${item.type}/${item.id}`} imgUrl={item.img} title={item.title} description={item.description}/>
						</li>
					))}
				</ul>
			</section>
			<section className="p-6">
				<div className="flex items-center justify-between ">
					<h2 className="text-2xl font-bold">Jump back in</h2>
				</div>
				<ul className="flex gap-x-2 overflow-hidden pt-4">
					{MusicData.slice(5.12).map((item,i)=>(
						<li key={i} className="min-w-[175px] max-h-[300px] bg-[#121212] p-4 pb-0 transition duration-200 hover:bg-[#303030] rounded-xl">
							<Card linkUrl={`/${item.type}/${item.id}`} imgUrl={item.img} title={item.title} description={item.description}/>
						</li>
					))}
				</ul>
				
			</section>
		</>
	)
}

export default Home