import { playlist } from "../public/data/playlist.json";
import prevIcon from "./assets/prev-icon.svg";
import nextIcon from "./assets/next-icon.svg";
import playIcon from "./assets/play-icon.svg";
import pauseIcon from "./assets/pause-icon.svg";

function App() {
    return (
        <div className="bg-slate-800 w-full h-screen flex flex-col justify-between">
            <section className="my-16 px-8 mx-auto w-full max-w-2xl">
                <h1 className="text-slate-100 text-2xl">
                    PlayerMania - Your songs
                </h1>
                <ul className="mt-3 h-[570px] px-4 overflow-auto">
                    {playlist.map((song) => (
                        <li key={song.id} className="bg-blue-50 my-2 rounded">
                            <button className="w-full h-full p-2 text-left">
                                {song.title} - {song.artist}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-blue-50">
                <div className="p-5 mx-auto w-full max-w-4xl">
                    <h2>L'amour est un oiseau rebelle</h2>
                    <div className="flex justify-between">
                        <p className="font-light text-sm">Maria Callas</p>
                        <span className="text-xs">5 / 5</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-slate-400 w-7 h-7 p-1 mr-3 rounded-full shadow flex justify-center items-center hover:bg-slate-500">
                            <img
                                src={prevIcon}
                                alt="Previous song"
                                className="w-4 h-4"
                            />
                        </button>
                        <button className="bg-white rounded-full shadow hover:bg-slate-100">
                            <img src={playIcon} alt="Play song" />
                        </button>
                        <button className="bg-slate-400 w-7 h-7 p-1 ml-3 rounded-full shadow flex justify-center items-center hover:bg-slate-500">
                            <img
                                src={nextIcon}
                                alt="Next song"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>
                    <input type="range" className="w-full mt-2" />
                    <div className="flex justify-between -mt-3 text-xs">
                        <span>0:15</span>
                        <span>4:05</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
