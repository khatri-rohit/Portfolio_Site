import '../style/Player.css';

const StaticPlayer = () => {
    return (
        // Chaand 1
        // Brave World 1
        // Like I Do
        // J.Tajor
        <div className="rounded-3xl p-2 drop-shadow-lg bg-white dark:bg-[#222831] duration-300 h-full w-full flex flex-col justify-around">
            <div className="song_img flex items-start p-2">
                <img src="https://imgs.search.brave.com/3iIFIesN_QrhEzPhASZLvxTD3C81CDeq_hYb4LdSSvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn"
                    className="w-[20%] p-2 mx-4" />
                <img src="/img/song.jpg"
                    alt="Spotify_song"
                    className="rounded-2xl w-[62%]" />
            </div>
            <div className="flex p-2 dark:text-white items-center justify-around">
                <div className="song_details">
                    <p className="md:text-[1em] text-[0.85em] font-semibold">Chaand</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                        Brave World
                    </p>
                </div>
                <div className="flex items-center justify-around">
                    <div className="strings flex mx-2 items-center">
                        <p className="bg-[#39d633] mx-1 rounded-lg string string1">
                        </p>
                        <p className="bg-[#39d633] mx-1 rounded-lg string string2">
                        </p>
                        <p className="bg-[#39d633] mx-1 rounded-lg string string3">
                        </p>
                    </div>
                    <p className="text-[#39d633] font-bold md:text-[1em] text-[0.85em] ">
                        Last Played
                    </p>
                </div>
            </div>

        </div>
    )
};

export default StaticPlayer;
