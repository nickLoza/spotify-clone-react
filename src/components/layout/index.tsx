import Routers from "../../routers/Routers"
import Aside from "../aside"
import Footer from "../footer"
import Header from "../header"
import SongPlayer from "../songPlayer"

function Layout() {
	return (
		<>
			<Aside/>
			<Header/>
			<div className="ml-[85px] md:ml-[315px] mt-[-55px] bg-[#1E1E1E] rounded-xl">
				<Routers/>
			</div>
			<SongPlayer/>
			<Footer/>
		</>
	)
}

export default Layout