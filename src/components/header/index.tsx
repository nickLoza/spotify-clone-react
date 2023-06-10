import { BsArrowDownCircle, BsChevronLeft } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
	return (
		<header className="flex items-center h-14 justify-between ml-[85px] md:ml-[315px] text-2xl bg-transparent mt-2 p-4 rounded-xl">
				<button className="bg-[#00000050] rounded-xl p-1">
					<BsChevronLeft/>
				</button>
				<div className="flex items-center">
					<button className="flex items-center text-base font-medium gap-x-1 bg-[#00000050] rounded-xl py-1 px-2">
						<BsArrowDownCircle/> <span>Install App</span>
					</button>
					<button>
						<AiOutlineUser/>
					</button>
				</div>
			</header>
	)
}

export default Header