import { useDispatch } from "react-redux";
import { updateIndexPlaylist } from "../features/playerAudio";

export default function SongList({ song }) {
    const dispatch = useDispatch();

    return (
        <li
            onClick={() => dispatch(updateIndexPlaylist(song.id))}
            className="bg-indigo-100 my-3 font-semibold rounded hover:bg-indigo-200"
        >
            <button className="w-full h-full p-2 text-left">
                {song.title} - {song.artist}
            </button>
        </li>
    );
}
