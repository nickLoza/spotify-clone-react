import { useParams } from "react-router-dom"
import { MusicData } from "../db/data"
import { useContext, useMemo, useState } from "react";


import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { CgLoadbarSound } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import { SongContext } from "../context/SongContext";



function MusicDetails() {

	const [ optionClicked , setOptionClicked ] = useState(false);
	const { id } = useParams()

	const { songId, updateSong } = useContext(SongContext)!

	 const currentMusic = useMemo(() => {
    	return MusicData.find((e) => e.id === Number(id));
  	}, [id]);

	 function handleOnClickOption(){
	 	setOptionClicked(!optionClicked)
	 }

	 function handleSelectSong(){
	 	if(currentMusic?.id !== songId){
	 		updateSong(currentMusic?.id!)
	 	}
	 }

	return (
		<>
			{/*cover and description*/}
			<div className="flex px-6 pt-[130px] gap-x-6 min-h-[30vh]">
				<img src={currentMusic?.img} alt={currentMusic?.title} height={50} width={150}/>
				<div className="self-end font-bold">
					<p className="text-base">{currentMusic?.type}</p>
					<h3 className="text-4xl mt-1 mb-3">{currentMusic?.title}</h3>
					<div className="text-sm">
						<span>Artist Name &middot; 2001</span>
					</div>
				</div>
			</div>
			{/*play song and favourite*/}
			<div className="flex items-center gap-x-5 text-4xl px-6 my-6">
				<button className="bg-[#1ECF5D] p-3 rounded-full text-black hover:scale-105" 
					onClick={()=>handleSelectSong()}>
					<BsFillPlayFill/>
				</button>
				<button>
					<AiOutlineHeart/>
				</button>
				<div className="relative w-[220px]">
					<button 
						className="text-gray-400 text-3xl"
						onClick={handleOnClickOption}>
						<SlOptions/>
					</button>
					{/*dropdown options*/}
					{optionClicked && 
					<ul className="flex flex-col gap-y-3 absolute right-10 top-12 text-base bg-[#282828] py-3 px-4">
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Add to queue</li>
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Go to artist radio</li>
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Remove from your library</li>
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Add to playlist</li>
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Share</li>
						<li className="hover:bg-gray-600 py-1 px-2 cursor-pointer">Open in Desktop App</li>
					</ul>}
				</div>
			</div>
			{/*songs*/}
			<div className="min-h-[70vh] px-6">
				<ul className="px-4">
					<li className="flex items-center justify-between border-b-[1px] border-gray-700 text-gray-400 px-2 pb-1 mb-3">
						<div className="flex gap-x-6">
							<span>#</span> <p>Title</p>
						</div>
						<BiTime/>
					</li>
					{MusicData.map((item,i)=>(
						<li key={i} className={`flex items-center justify-between  pb-1 ${songId === item.id? "text-[#1ECF5D]" : "text-white"}`}>
							<div className="flex items-center gap-x-3">
								{songId === item.id? <CgLoadbarSound size={25} className=""/> : <span className="w-[25px] pl-2">{i+1}</span>}
								
								<div className="">
									<p className="font-bold">{item.title}</p>
									<p className="text-gray-400">Charles Debussy</p>
								</div>
							</div>
							<p>3:30</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default MusicDetails