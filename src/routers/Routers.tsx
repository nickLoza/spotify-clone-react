import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { PuffLoader } from "react-spinners";
const Home = lazy(()=>import("../pages/Home"));
const Search = lazy(()=>import("../pages/Search"));
const MusicDetails = lazy(()=>import("../pages/MusicDetails"));

function Routers() {
	return (
		<>
		<Suspense fallback={
			<PuffLoader
			  className="spinner"
			  color="#a6a6a6"
			  size={100}/>}/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/search" element={<Search/>}/>
			<Route path="/playlist/:id" element={<MusicDetails/>}/>
			<Route path="/song/:id" element={<MusicDetails/>}/>
			<Route path="/artist/:id" element={<MusicDetails/>}/>
			<Route path="/album/:id" element={<MusicDetails/>}/>
			<Route path='/*' element={<Home/>} />
		</Routes>
		</>
	)
}

export default Routers