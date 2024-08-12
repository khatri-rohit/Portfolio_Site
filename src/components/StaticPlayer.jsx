import '../style/Player.scss'

const StaticPlayer = () => {
    return (
        // Chaand 1
        // Brave World 1
        // Like I Do
        // J.Tajor
        <>
            <div className="rounded-3xl p-2 drop-shadow-lg">
                <div className="song_img relative flex flex-col items-center justify-center">
                    <img src="/img/song_I_Do.jpg"
                        alt="Spotify_song"
                        className="rounded-2xl w-[65%]" />
                    <img src="https://imgs.search.brave.com/3iIFIesN_QrhEzPhASZLvxTD3C81CDeq_hYb4LdSSvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn"
                        className="absolute inset-0 w-10 p-2" />
                </div>
                <div className="flex items-center justify-around p-2">
                    <div className="song_details">
                        <p className="text-xl font-semibold">Like I Do</p>
                        <p className="text-xs text-slate-700 font-medium">
                            J.Tajor
                        </p>
                    </div>
                    <div className="mx-6 flex items-center justify-around">
                        <div className="strings flex mx-2 items-center">
                            <p className="bg-[#39d633] mx-1 rounded-lg string string1"></p>
                            <p className="bg-[#39d633] mx-1 rounded-lg string string2"></p>
                            <p className="bg-[#39d633] mx-1 rounded-lg string string3"></p>
                        </div>
                        <p className="text-black font-bold text-lg">
                            Last Played
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
};

export default StaticPlayer;
