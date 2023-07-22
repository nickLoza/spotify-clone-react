import { SongContext } from "../../context/SongContext";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MusicData } from "../../db/data";
import { AiFillSound, AiOutlineHeart } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { FaPause, FaPlay } from "react-icons/fa";
import { CgInpicture } from "react-icons/cg";
import { HiOutlineViewList } from "react-icons/hi";
import { BiDevices, BiSkipNext, BiSkipPrevious } from "react-icons/bi";

function SongPlayer() {

	const { songId, updateSong } = useContext(SongContext)!
 	const [isPlaying, setPlaying] = useState(false);
 	const [progress, setProgress] = useState<number>(0);
 	const [volume, setVolume] = useState(100);
  	const audioRef = useRef<HTMLAudioElement | null>(null);

	 const currentMusic = useMemo(() => {
    	return MusicData.find((e) => e.id === songId);
  	}, [songId]);


	useEffect(() => {
	  	if(isPlaying === false) setPlaying(true)
	}, [songId]);

	  const handlePreviousSong = () => {
	    updateSong((songId! - 1 + MusicData.length) % MusicData.length);
	    setPlaying(false)
	  };

	  const handleNextSong = () => {
	    updateSong((songId! + 1 + MusicData.length) % MusicData.length);
	    setPlaying(false)
	  };

	  const handlePlayPause = () => {
	   if (audioRef?.current?.paused) {
	    	audioRef.current.play();
	    	setPlaying(true);
	  } else {
	    	audioRef?.current?.pause();
	    	setPlaying(false);
	  }
	 };
	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	    const newVolume = Number(event.target.value);
	    setVolume(newVolume);
	    if (audioRef.current) {
	      audioRef.current.volume = newVolume / 100;
    	}
  	};

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current!;
    // Calculate progress percentage
    const progress = (currentTime / duration) * 100;
    setProgress(progress)
  };

  const volumeBarStyle = {
    background: `linear-gradient(to right, white ${volume}%, #4B5563 ${volume}%)`,
  };

	return (
		<>
		{songId &&
		<div className="flex items-center justify-between fixed left-0 bottom-0 w-full h-[90px] bg-black px-4">
			{/*left*/}
			<div className="flex items-center gap-x-2 w-[250px]">
				<img src={currentMusic?.img} alt={currentMusic?.title} width={60} height={50}/>
				<div className="hidden md:block text-sm mr-2">
					<p>{currentMusic?.title}</p>
					<p className="text-gray-500">{currentMusic?.type}</p>
				</div>
				<button>
					<AiOutlineHeart/>
				</button>
				<button>
					<CgInpicture/>
				</button>
			</div>
			{/*center*/}
			<div className="flex flex-col items-center gap-y-2">
				<div className="flex gap-x-4 text-3xl">
					<button onClick={handlePreviousSong} className="text-4xl">
						<BiSkipPrevious/>
					</button>
		        	<button onClick={handlePlayPause}>
		        		{isPlaying ? <FaPause/> : <FaPlay/>}
		        	</button>
		        	<button onClick={handleNextSong} className="text-4xl">
		        		<BiSkipNext/>
		        	</button>
				</div>
				<audio
		          ref={audioRef}
		          src={currentMusic?.audio}
		          onTimeUpdate={handleTimeUpdate}
		          onEnded={handleNextSong} autoPlay/>
		         <div className="h-2 bg-gray-600 w-[200px] md:w-[300px] rounded-xl">
					  <div
					    className="h-full bg-white rounded-xl"
					    style={{ width: `${progress}%` }}
					  >
				  </div>
				</div>
			</div>
			
			{/*right*/}
			<div className="flex items-center gap-x-1 text-lg">
				<LuMic2/>
				<HiOutlineViewList/>
				<BiDevices/>
				<div className="flex items-center ml-2 gap-x-1">
					<AiFillSound/>
					<input
			        type="range"
			        min={0}
			        max={100}
			        value={volume}
			        onChange={handleVolumeChange}
			        className="w-20 md:w-40 h-2 bg-gray-300 rounded-lg appearance-none"
			        style={volumeBarStyle}/>
			        <style>{`
			          input[type="range"]::-webkit-slider-thumb {
			            -webkit-appearance: none;
			            appearance: none;
			            width: 8px;
			            height: 8px;
			            border-radius: 50%;
			            background-color: #fff;}`}		
			        </style>
				</div>
			</div>
		</div>}
		</>
	)
}

export default SongPlayer