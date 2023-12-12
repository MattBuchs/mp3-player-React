import { useDispatch } from "react-redux";
import {
    previousIndexPlaylist,
    nextIndexPlaylist,
} from "../../features/playerAudio";
import prevIcon from "../../assets/prev-icon.svg";
import nextIcon from "../../assets/next-icon.svg";
import playIcon from "../../assets/play-icon.svg";
import pauseIcon from "../../assets/pause-icon.svg";

export default function PlayerBtn({ isPlay, setIsPlay, audioRef }) {
    const dispatch = useDispatch();

    function handlePlaySong() {
        setIsPlay(!isPlay);

        if (isPlay) audioRef.current.pause();
        else audioRef.current.play();
    }

    return (
        <div className="flex justify-center items-center mt-2 select-none">
            <button
                onClick={() => dispatch(previousIndexPlaylist())}
                className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center hover:bg-slate-500"
            >
                <img src={prevIcon} alt="Previous song" className="w-5 h-5" />
            </button>
            <button
                onClick={handlePlaySong}
                className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none hover:bg-slate-100"
            >
                <img
                    src={isPlay ? pauseIcon : playIcon}
                    alt="Play song"
                    className="w-20 h-20"
                />
            </button>
            <button
                onClick={() => dispatch(nextIndexPlaylist())}
                className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center hover:bg-slate-500"
            >
                <img src={nextIcon} alt="Next song" className="w-5 h-5" />
            </button>
        </div>
    );
}
