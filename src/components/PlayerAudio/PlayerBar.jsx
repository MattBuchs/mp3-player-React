import { useSelector } from "react-redux";

export default function PlayerBar({
    setProgressBar,
    audioRef,
    timeUpdate,
    setDuration,
    progressBar,
}) {
    const { playlist, indexPlaylist } = useSelector(
        (state) => state.playerAudio
    );
    function updateBar(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const coordinate = (x * 100) / rect.width;
        const updateMusic = (coordinate * audioRef.current.duration) / 100;

        audioRef.current.currentTime = updateMusic;
    }

    return (
        <div className="w-full mt-4 select-none">
            <div
                onClick={updateBar}
                className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden"
            >
                <div
                    className="bg-indigo-400 origin-left h-full pointer-events-none"
                    style={{ width: `${progressBar}%` }}
                ></div>
                <audio
                    ref={audioRef}
                    src={playlist[indexPlaylist].url}
                    onTimeUpdate={timeUpdate}
                    onLoadedMetadata={() => {
                        setDuration(audioRef.current.duration);
                        setProgressBar(0);
                    }}
                ></audio>
            </div>
        </div>
    );
}
