
const Spotify = () => {
    return (
        <div className="h-full flex items-center rounded-3xl bg-[#F5F7F8] drop-shadow-lg">
            <div className="w-[29em]">
                <img src="/img/song_I_Do1.jpg"
                    className="rounded-3xl p-5" />
            </div>
            <div className="h-[28vh] w-full">
                <div className="w-full relative">
                    <img src="/img/spotify.png"
                        className="w-20 absolute inset-0" />
                </div>
                <div className="flex flex-col mt-32">
                    <div className="flex items-center">
                        <div className="strings flex mx-2 items-center">
                            <p className="bg-[#39d633] mx-1 rounded-lg string string1"></p>
                            <p className="bg-[#39d633] mx-1 rounded-lg string string2"></p>
                            <p className="bg-[#39d633] mx-1 rounded-lg string string3"></p>
                        </div>
                        <p className="text-black font-bold text-lg">
                            Last Played
                        </p>
                    </div>
                    <div className="song_details">
                        <p className="text-6xl font-bold">
                            Like I Do
                        </p>
                        <p className="text-xl text-slate-700 font-medium">
                            J.Tajor
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Spotify;
