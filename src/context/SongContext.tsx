import { ReactNode, createContext, useState } from 'react';


type SongProviderTypes = {
  children: ReactNode
}

type SongContextType = {
  songId: number|null,
  updateSong: (name: number)=> void,
}
export const SongContext = createContext<SongContextType>({
  songId: null,
  updateSong: () => {},
});


export const SongProvider = ({ children }: SongProviderTypes)=>{
	const [songId, setSongId] = useState<number|null>(null);

	const updateSong = (name: number) => {
    	setSongId(name);
 	};
 	return (
      <SongContext.Provider value={{songId, updateSong}}>
        {children}
      </SongContext.Provider>
  );

}
