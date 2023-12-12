import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextIndexPlaylist } from "../../features/playerAudio";
import DisplayTime from "./DisplayTime";
import PlayerBar from "./PlayerBar";
import PlayerBtn from "./PlayerBtn";

export default function PlayerAudio() {
    const dispatch = useDispatch();
    const { playlist, indexPlaylist } = useSelector(
        (state) => state.playerAudio
    );
    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    const audioRef = useRef();

    function timeUpdate() {
        if (audioRef.current.ended) {
            setTimeout(() => {
                dispatch(nextIndexPlaylist());
            }, 1200);
        }

        setCurrentTime(audioRef.current.currentTime);

        setProgressBar(
            (audioRef.current.currentTime * 100) / audioRef.current.duration
        );
    }

    useEffect(() => {
        audioRef.current.src = playlist[indexPlaylist].url;
        audioRef.current.load();

        if (isPlay) {
            audioRef.current.play();
        }
    }, [indexPlaylist]);

    return (
        <div className="p-6 mx-auto w-full max-w-4xl">
            <h2 className="text-xl text-slate-800 font-semibold">
                {playlist[indexPlaylist].title}
            </h2>
            <div className="flex justify-between text-lg text-gray-900">
                <p>{playlist[indexPlaylist].artist}</p>
                <span>
                    {indexPlaylist + 1} / {playlist.length}
                </span>
            </div>
            <PlayerBtn
                isPlay={isPlay}
                setIsPlay={setIsPlay}
                audioRef={audioRef}
            />
            <PlayerBar
                setProgressBar={setProgressBar}
                audioRef={audioRef}
                timeUpdate={timeUpdate}
                setDuration={setDuration}
                progressBar={progressBar}
            />
            <DisplayTime currentTime={currentTime} duration={duration} />
        </div>
    );
}
