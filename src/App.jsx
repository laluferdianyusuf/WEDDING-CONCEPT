/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import "./App.css";
import Cover from "./components/Cover";
import Audio from "./assets/audio/wedding.mp3";
import bg3 from "./assets/images/background3.png";
import Flower from "./assets/images/corner.png";
import Border from "./assets/images/border.png";
import Model from "./assets/images/model.png";
import { PiMusicNotesFill, PiPauseFill } from "react-icons/pi";
import Menubar from "./components/Menubar";
import { Swiper, SwiperSlide } from "swiper/react";
import ListMessages from "./components/ListMessages";
import AddMessages from "./components/AddMessages";
import data from "./data/messages.json";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

function App() {
  const [modal, setModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [messages, setMessages] = useState(data.messages);
  const [showAddMessages, setShowAddMessages] = useState(false);

  const handleAddMessages = () => {
    setShowAddMessages(true);
  };

  const addMessages = async (messages) => {
    const newMessages = {
      id: Math.floor(Math.random() * 1000),
      ...messages,
    };

    try {
      const response = await axios.post(
        `https://wedding-concept.vercel.app/messages`,
        newMessages
      );

      setMessages((prevMessages) => [...prevMessages, response.data]);

      setShowAddMessages(false);
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  const handleCancelAdd = () => {
    setShowAddMessages(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeModal = () => {
    setModal(false);

    setIsModelVisible(true);

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
    <div className="w-full overflow-auto">
      {modal && <Cover closeModal={closeModal} />}
      <div
        className="relative w-full flex place-content-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="container mx-auto max-w-screen-lg text-center relative">
          <div
            className="flex flex-col items-center h-screen px-4 justify-center gap-12 relative"
            id="main"
          >
            <h1 className="font-[Amsterdam] text-4xl font-bold text-black">
              The Wedding Of
            </h1>

            <div className="relative w-[80%] flex justify-center">
              <img src={Border} alt="" className="w-full z-30" />
              <img
                src={Model}
                alt=""
                className={`w-60 h-60 sm:w-60 sm:h-60 rounded-full absolute top-2 left-[47%] -translate-x-1/2 z-20 object-cover ${
                  isModelVisible
                    ? "opacity-100 scale-100 model-animation"
                    : "opacity-0 scale-0"
                }`}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-9">
              <div className="flex gap-3">
                <h1 className="font-[Amsterdam] text-3xl font-bold text-black">
                  Aku
                </h1>
                <h1 className="font-[Amsterdam] text-3xl text-black">&</h1>
                <h1 className="font-[Amsterdam] text-3xl font-bold text-black">
                  Dia
                </h1>
              </div>
              <p className="text-black text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-30 text-sm relative">
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                menciptakan pasangan - pasangan untukmu dari (jenis) dirimu
                sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di
                antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang
                demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah)
                bagi kaum yang berpikir.
              </p>
            </div>
            <img
              src={Flower}
              alt=""
              className="absolute w-62 bottom-0 top-[-4%] right-[-20%] z-0 scale-y-[-1] flower-animation"
            />
            <img
              src={Flower}
              alt=""
              className="absolute w-62 bottom-[-4%] left-[-20%] z-0 scale-x-[-1] flower-animation"
            />
            <img
              src={Flower}
              alt=""
              className="absolute w-62 bottom-[-4%] right-[-20%] z-0 flower-animation"
            />
            <img
              src={Flower}
              alt=""
              className="absolute w-62 top-[-4%] left-[-20%] z-0 scale-x-[-1] scale-y-[-1] flower-animation"
            />
          </div>

          <div
            className="flex flex-col items-center h-screen justify-center gap-12 relative "
            id=""
          >
            <h1 className="text-3xl text-black">asdasdsad</h1>
            <img
              src={Flower}
              alt=""
              className="absolute w-62 top-[-4%] left-[-20%] z-0 scale-y-[-1] scale-x-[-1] flower-animation"
            />
            <img
              src={Flower}
              alt=""
              className="absolute w-62 top-[-4%] right-[-20%] z-0 scale-y-[-1] flower-animation"
            />
          </div>

          <div
            className="flex flex-col items-center h-screen justify-center gap-12 relative "
            id=""
          >
            <h1 className="text-3xl text-black">Galdsadsadasdlery</h1>
          </div>
          {/* gallery section */}
          <div
            className="flex flex-col items-center h-screen justify-center gap-12 relative bg-[#ffdbe1]"
            id="gallery"
          >
            <h1 className="text-3xl text-black font-[Amsterdam] font-bold">
              Our Gallery
            </h1>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              navigation={false}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full max-w-2xl h-1/2"
            >
              <SwiperSlide>
                <img
                  src={Model}
                  alt="Gallery 1"
                  className="rounded-lg shadow-lg h-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Model}
                  alt="Gallery 2"
                  className="rounded-lg shadow-lg h-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Model}
                  alt="Gallery 3"
                  className="rounded-lg shadow-lg h-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Model}
                  alt="Gallery 4"
                  className="rounded-lg shadow-lg h-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Model}
                  alt="Gallery 5"
                  className="rounded-lg shadow-lg h-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* location */}
          <div
            className="flex flex-col items-center h-screen justify-center gap-12 relative"
            id="location"
          >
            <h1 className="text-3xl text-black">Location</h1>
          </div>
          {/* messages */}
          <div
            className="flex flex-col items-center h-screen justify-center gap-12 relative"
            id="message"
          >
            <h1 className="text-3xl text-black">Message</h1>
            {showAddMessages ? (
              <AddMessages
                addMessages={addMessages}
                onCancel={handleCancelAdd}
              />
            ) : (
              <ListMessages messages={messages} onAdd={handleAddMessages} />
            )}
          </div>

          <button
            onClick={togglePlayPause}
            className="bg-white p-2 rounded-full fixed top-5 z-30 right-5 cursor-pointer"
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
    </div>
  );
}

export default App;
