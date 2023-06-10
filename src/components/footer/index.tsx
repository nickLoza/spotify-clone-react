import { BsGithub } from "react-icons/bs"

function Footer() {
	return (
		<footer className="flex flex-wrap gap-3 text-lg text-gray-400 ml-[85px] md:ml-[315px] p-6 mt-10">
			<div className="min-w-[500px]">
				<p className="text-xl font-bold text-white mb-2">Important</p>
				<a 
					className="flex items-center gap-x-2 text-[#1ECF5D] hover:text-white" 
					href="https://github.com/nickLoza/spotify-clone-react" 
					target="_blank">
				<BsGithub/>	Repository
				</a>
				<p>Lorem</p>
				<p>Lorem the Lorem</p>
			</div>
			<div className="min-w-[500px]">
				<p className="text-xl font-bold text-white">Communities</p>
				<p>For Artist</p>
				<p>Adversiting</p>
				<p>Investors</p>
				<p>Vendors</p>
				<p>Spotify for Work</p>
			</div>
			<div className="min-w-[500px]">
				<p className="text-xl font-bold text-white">Useful links</p>
				<p>Support</p>
				<p>Free Mobile App</p>
			</div>
		</footer>
	)
}

export default Footer