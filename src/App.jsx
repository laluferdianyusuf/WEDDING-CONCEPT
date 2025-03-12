import { useState, useRef } from "react";
import "./App.css";
import Cover from "./components/Cover";
import Audio from "./assets/audio/wedding.mp3";
import { PiMusicNotesFill, PiPauseFill } from "react-icons/pi";
import Menubar from "./components/Menubar";

function App() {
  const [modal, setModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const closeModal = () => {
    setModal(false);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {modal && <Cover closeModal={closeModal} />}
      <div className="flex place-content-center">
        <div className="text-center pt-16">
          <h1 className="text-white text-8xl">NIKAH BANG</h1>
        </div>

        <button
          onClick={togglePlayPause}
          className="bg-white p-2 rounded-full absolute top-5 right-5 cursor-pointer"
        >
          {isPlaying ? (
            <PiPauseFill size={20} color="black" />
          ) : (
            <PiMusicNotesFill size={20} color="black" />
          )}
        </button>

        <audio ref={audioRef} src={Audio} loop></audio>

        <Menubar />
      </div>
    </div>
  );
}

export default App;
