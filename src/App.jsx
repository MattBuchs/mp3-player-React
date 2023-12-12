import { useSelector } from "react-redux";
import SongList from "./components/SongList";
import PlayerAudio from "./components/PlayerAudio/PlayerAudio";

function App() {
    const { playlist } = useSelector((state) => state.playerAudio);

    return (
        <div className="bg-slate-800 w-full min-h-screen flex flex-col justify-between">
            <section className="my-16 px-8 mx-auto w-full max-w-2xl">
                <h1 className="text-slate-100 text-2xl px-4">
                    PlayerMania - Your songs
                </h1>
                <ul className="mt-3 max-h-[550px] px-4 overflow-auto">
                    {playlist.map((song) => (
                        <SongList key={song.id} song={song} />
                    ))}
                </ul>
            </section>
            <section className="bg-gradient-to-r from-indigo-100 to-purple-200">
                <PlayerAudio />
            </section>
        </div>
    );
}

export default App;
