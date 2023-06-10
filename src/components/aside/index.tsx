import { NavLink,useNavigate, useLocation  } from 'react-router-dom';
import { RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';

import { MusicData } from '../../db/data';
import { useContext } from 'react';
import { SongContext } from '../../context/SongContext';

function Aside() {
	const navigate = useNavigate();
	const location = useLocation ();
	const { songId, updateSong } = useContext(SongContext)

	function handleOnClick(type:string, id:number){
		return navigate(`/${type}/${id}`);
	}

	return (
		<aside className='fixed left-0 top-0 w-[75px] md:w-[300px] h-full bg-black m-2 rounded'>
			{/*top*/}
			<ul className='flex flex-col gap-y-2 mb-2 px-4 py-6 text-md text-gray-400 rounded-xl bg-[#121212] min-h-[12%]'>
		      <li className=''>
		        <NavLink className={`flex items-center gap-x-4 transition duration-100 hover:text-white ${location.pathname == "/" ? "text-white" : ""}`} to="/">
		          <RiHome2Line className="text-3xl"/> 
		          <span className='hidden md:block font-bold'>Home</span>
		        </NavLink>
		      </li>
		      <li className=''>
		        <NavLink className={`flex items-center gap-x-4 transition duration-300 hover:text-white ${location.pathname == "/search" ? "text-white" : ""}`} to="/search">
		          <RiSearchLine className="text-3xl"/> 
		          <span className='hidden md:block font-bold'>Search</span>
		        </NavLink>
		      </li>
    		</ul>
			{/*bottom*/}
			<div className='bg-[#121212] h-[88%] rounded-xl py-2'>
				<div className='flex justify-between text-gray-400 px-4'>
					<button className='flex items-center gap-x-2 text-md transition duration-100 hover:text-white'>
						<BiLibrary className="text-4xl"/> 
						<span className='hidden md:block font-bold'>Your Library</span>
					</button>
					<button className='hidden md:block text-4xl transition duration-100 hover:text-white'>+</button>
				</div>
				{/*filter and order*/}
				<div className='hidden md:flex gap-2 px-4 py-3 text-sm'>
					<button className='px-3 py-1 bg-[#232323] rounded-xl transition duration-100 hover:bg-[#323232]'>Playlists</button>
					<button className='px-3 py-1 bg-[#232323] rounded-xl transition duration-100 hover:bg-[#323232]'>Artists</button>
					<button className='px-3 py-1 bg-[#232323] rounded-xl transition duration-100 hover:bg-[#323232]'>Albums</button>
				</div>
				{/*user songs, playlists, albums and artists, make some up*/}
				{/*redirect to album, artist or song*/}
				<ul className='flex flex-col mt-4  max-h-[calc(100vh-240px)] overflow-y-auto'>
					{MusicData.slice(0,11).map((item,i)=>(
						<li key={i} className={`transition duration-100 hover:bg-[#232323] py-1   ${location.pathname == `/${item.type}/${item.id}` ? "bg-[#232323]" : ""} ${songId === item.id ? "text-[#1ECF5D]" : ""}`}>
						<div 
							role="button" 
							className='flex items-center justify-start px-4' 
							onClick={()=>handleOnClick(item.type, item.id)}>
							<img 
								src={item.img} 
								alt="Artist" 
								height={40} 
								width={50}
								className="rounded-md w-12 h-12 object-cover"/>
							<div className='hidden md:flex flex-col ml-3'>
								<p className='text-md font-medium'>{item.title}</p>
								<p className=' text-md text-gray-500'>{item.type}</p>
							</div>
							{/*if id is being played will render next*/}
							<AiFillSound className='hidden md:block ml-3'/>
						</div>
					</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default Aside