import { useState } from "react";
import { MusicData } from "../db/data";
import Card from "../components/card";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(MusicData); // Store the search results here

  const handleSearch = () => {
    // Perform the search based on the searchQuery
    const results:any = MusicData.filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto p-4 min-h-[100vh] pt-14">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search for a song title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded text-black px-4 py-2 w-full mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Search
        </button>
      </div>

      <div className="pt-6">
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul className="flex flex-wrap gap-x-4 pl-6">
            {searchResults.map((song:any) => (
              <li key={song.id} className="max-w-[150px] hover:scale-105">
              	<Card linkUrl={`/${song.type}/${song.id}`} imgUrl={song.img} title={song.title} description={song.description}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
