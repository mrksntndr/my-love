import { useState, useEffect, useRef } from "react";

const primaryColor = "#dfc7a7";

const backgrounds = [
  "bg-blue-300",  // page 1 - sky
  "bg-cyan-300",  // page 2 - ice
  "bg-red-400",   // page 3 - fire
  "bg-gradient-to-b from-blue-900 to-black",
  "bg-pink-200"   // page 5
];

const milestones = [
  { title: "How We Met", img: "/images/farlight.png", description: "We met on a game called farlight and never did I knew that day would change my whole life" },
  { title: "First Date", img: "/images/first-date.jpg", description: "After some time, we had our firts date. It was so much fun and you are so beautiful" },
  { title: "My-Birthday", img: "/images/my-birthday.jpg", description: "I don't usually celebrate birthday but you made me feel so special that day. Having you was the best gift ever. I love you so much!" },
  { title: "That Night", img: "/images/that-night.jpg", description: "The magical moment when danced and kissed at the night of my birthday" },
  { title: "Such A Cutie", img: "/images/such-a-cutie.jpg", description: "You sent me cute pictures of you. They're so adorable I kept falling in love" },
  { title: "Overnight", img: "/images/overnight.jpg", description: "The day we went to Azure to have some overnight. We cooked and spent the night together. I sure miss this" },
  { title: "Sleep Over", img: "/images/sleepover.jpg", description: "September 25, 2023, I stayed in your house for 4 days. We cooked various foods and enjoyed our time together" },
  { title: "Going Out!", img: "/images/going-out.jpg", description: "We went out to get you a National ID then went to eat Samgyupsal. God, you are so pretty" },
  { title: "Celebration!", img: "/images/celebration.jpg", description: "The first time I met your mother in person. I was so scared but it all went well. I brought a cake which you liked" },
  { title: "Visiting", img: "/images/visiting.jpg", description: "We went on a date and ate some ramen then you visited our house before going home. Mama was so happy and she told me you're so kind and beautiful" },
  { title: "Manila Date", img: "/images/going-to-manila.jpg", description: "We went to Manila City, rode a bicycle around intramuros then ate some pizza and pasta at Manila Cafe. I miss doing those kinds of dates with you" },
  { title: "A Very Special Day 1", img: "/images/special-day-1.jpg", description: "It's your birthday! We celebrated it outside and we ate at your favorite ramen restaurant. I love you so much babi!" },
  { title: "A Very Special Day 2", img: "/images/special-day-2.jpg", description: "After going out, we went home. You blew your candle and made a wish. We spent the night together until Christmas Day. I miss you so much!" },
  { title: "New Year With You", img: "/images/new-year.jpg", description: "We celebrated a new year together and would want to celebrate those until the end of our lifetime" },
  { title: "Vacation!", img: "/images/vacation.jpg", description: "You stayed here for quite some time and we went out. You liked puto-bumbong and ice cream from Pan De Manila so I buy you everytime" },
  { title: "Arcade Date!", img: "/images/arcade-date.jpg", description: "This day was so much fun. We went to Trinoma to go to the largest timezone. We went to play different games and danced. Let's do this again please!" },
  { title: "Going Out!", img: "/images/date-out.jpg", description: "I treated you and mama some samgyupsal and it was fan. It was also the same place where we had our first date" },
  { title: "Meet the Parents!", img: "/images/meet-our-parents.jpg", description: "You and my family went out to eat some all-you-can-eat buffet. We had our dogs with us too. It was also the first time that you met my father too" },
  { title: "Another Year For You!", img: "/images/celebration2.jpg", description: "We celebrated your birthday together and spent the rest of the days together until new year. I love you so much" },
  { title: "Graduation Day With You!", img: "/images/graduation.jpg", description: "You were at my graduation day. It was already the best give ever. Yet, you gave me flowers and it was my first time receiving. You brought me to tears. I love you so much!" },
  { title: "Forever Promise", img: "", description: "Our relationship wasn’t perfect — but it was the most beautiful chapter of my life. You taught me so much you made me see the world through a softer lens. With your gentle soul and pure heart, you showed me what true love really feels like — patient, kind, and unwavering. I will carry those moments with me always. Even if our time together was short, its impact will last forever. I understand that you want to rest for now, but my love for you remains — deeper than ever. I will wait. Whether it takes months or years, I will wait for the day your heart finds its way back to mine. Because I still love you — endlessly and unconditionally. And I will continue loving you, by your side, until my very last breath." }
];

const OurStory = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalData, setModalData] = useState(null);
    const [page, setPage] = useState(0);
  
    const backgroundAudioRef = useRef(null);
    const romanticAudioRef = useRef(null);
    const foreverPromiseAudioRef = useRef(null);
    const hasPlayedLalimRef = useRef(false);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(milestones.length / itemsPerPage);
  
    const openModal = (data) => {
        setModalData(data);
      
        // Only initialize background audio once
        if (data.title === "How We Met" && !backgroundAudioRef.current) {
          backgroundAudioRef.current = new Audio("/sound/nobodygetsme.mp3");
          backgroundAudioRef.current.loop = true;
          backgroundAudioRef.current.volume = 0.5;
        }
      };
      
    const closeModal = () => setModalData(null);
  
    const handleNext = () => {
      if (page < totalPages - 1) {
        setPage(page + 1);
        setActiveIndex((page + 1) * itemsPerPage);
      }
    };
  
    const handlePrev = () => {
      if (page > 0) {
        setPage(page - 1);
        setActiveIndex((page - 1) * itemsPerPage);
      }
    };
  
    useEffect(() => {
        // Initialize background audio once
        if (!backgroundAudioRef.current) {
          backgroundAudioRef.current = new Audio("/sound/nobodygetsme.mp3");
          backgroundAudioRef.current.loop = true;
          backgroundAudioRef.current.volume = 0.5;
        }
      
        if (!romanticAudioRef.current) {
          romanticAudioRef.current = new Audio("/sound/lalim.mp3");
          romanticAudioRef.current.loop = false;
          romanticAudioRef.current.volume = 0.3;
        }
      
        if (page >= 0 && page <= 3) {
          // Play nobodygetsme (background audio)
          backgroundAudioRef.current.play().catch((error) => {
            console.error("Background audio playback failed:", error);
          });
      
          // Ensure romantic audio is stopped
          romanticAudioRef.current.pause();
          romanticAudioRef.current.currentTime = 0;
          hasPlayedLalimRef.current = false;
      
        } else if (page === 4) {
          // Stop background audio
          backgroundAudioRef.current.pause();
          backgroundAudioRef.current.currentTime = 0;
      
          // Play lalim only once
          if (!hasPlayedLalimRef.current) {
            romanticAudioRef.current.play().catch((error) => {
              console.error("Romantic audio playback failed:", error);
            });
            hasPlayedLalimRef.current = true;
          }
      
        } else {
          // Stop both for other pages
          backgroundAudioRef.current.pause();
          backgroundAudioRef.current.currentTime = 0;
      
          romanticAudioRef.current.pause();
          romanticAudioRef.current.currentTime = 0;
          hasPlayedLalimRef.current = false;
        }
      }, [page]);
      
      

  return (
    <div className={`min-h-screen relative overflow-hidden ${backgrounds[page % backgrounds.length]} transition-colors duration-700`}>
      <div className="absolute inset-0 z-0">
        {page % backgrounds.length !== 3 && (
          <>
            <div className="absolute top-10 left-10 w-24 h-12 bg-white rounded-full opacity-80" />
            <div className="absolute top-20 left-40 w-32 h-14 bg-white rounded-full opacity-80" />
            <div className="absolute top-8 right-20 w-20 h-10 bg-white rounded-full opacity-80" />
          </>
        )}
        {page % backgrounds.length === 3 && (
          <>
            <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute top-20 left-40 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-32 left-80 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute top-16 left-64 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-5 right-20 w-1.5 h-1.5 bg-white rounded-full"></div>
          </>
        )}

        {page === 4 && (
          <>
            <img src="/images/heartt.png" className="absolute w-8 animate-heart1 left-1/4 top-20" alt="Heart" />
            <img src="/images/heartt.png" className="absolute w-10 animate-heart2 right-1/4 top-32" alt="Heart" />
            <img src="/images/heartt.png" className="absolute w-6 animate-heart3 left-1/2 top-10" alt="Heart" />
          </>
        )}

        <div className="absolute bottom-0 left-0 w-1/2 h-40 bg-green-600 rounded-t-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-green-700 rounded-t-full" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-amber-800" />
      </div>

      <img src="/images/goombaa.png" alt="Goomba" className="absolute bottom-12 w-14 z-10 animate-goomba1" />
      <img src="/images/goombaa.png" alt="Goomba" className="absolute bottom-12 w-14 z-10 animate-goomba2" />
      <img src="/images/goombaa.png" alt="Goomba" className="absolute bottom-12 w-14 z-10 animate-goomba3" />
      <img src="/images/goombaa.png" alt="Goomba" className="absolute bottom-12 w-14 z-10 animate-goomba4" />

      <div className="relative z-10 pt-16 px-6">
      {page === 4 && (
  <div className="absolute top-6 right-6 z-30">
    <button
      onClick={() => window.location.href = '/'}
      className="flex items-center gap-2 px-4 py-2 bg-yellow-400 border-4 border-red-600 rounded-full shadow-md hover:scale-105 transition transform duration-200 mario-font"
    >
      <img src="/images/mario-starr.png" alt="Back Icon" className="w-6 h-6" />
      <span className="text-red-700 font-bold text-sm">Back to Main</span>
    </button>
  </div>
)}

        <h1 className="text-4xl md:text-5xl text-center font-bold mb-12 text-white drop-shadow-lg">
          Our Story
        </h1>

        <div className="relative overflow-hidden pb-32 h-64 flex items-center justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out relative z-10"
            style={{ transform: `translateX(-${page * 100}%)`, width: `${totalPages * 100}%` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex justify-center items-center gap-32 w-full flex-shrink-0 py-10 mt-40"
              >
                {milestones
                  .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                  .map((milestone, i) => {
                    const realIndex = pageIndex * itemsPerPage + i;
                    return (
                      <div key={realIndex} className="relative flex flex-col items-center">
                        <button
                          onClick={() => {
                            setActiveIndex(realIndex);
                            openModal(milestone);
                          }}
                          className={`relative w-24 h-24 rounded-full border-4 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeIndex === realIndex ? "animate-pulse-glow" : ""}`}
                          style={{
                            backgroundColor: activeIndex === realIndex ? "#ffd966" : "#fff3cc",
                            borderColor: activeIndex === realIndex ? "#ffcc00" : "#c9b293",
                            transform: activeIndex === realIndex ? "scale(1.2)" : "scale(1)",
                          }}
                        >
                          {activeIndex === realIndex ? (
                            <img
                              src="/images/princess-peachh.png"
                              alt="Princess Peach"
                              className="w-18 h-auto animate-bounce"
                            />
                          ) : (
                            <img
                              src="/images/mario-starr.png"
                              alt="Star"
                              className="w-10 opacity-70"
                            />
                          )}
                        </button>
                        <span className="mt-2 text-sm text-white font-bold drop-shadow-md text-center w-24 leading-tight h-10 flex items-center justify-center">
                          {milestone.title}
                        </span>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 disabled:opacity-40 hover:scale-110 transition cursor-pointer"
          >
            <img
              src="/images/mario-coinn.png"
              alt="Previous"
              className="w-12 h-12 pointer-events-none"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 disabled:opacity-40 hover:scale-110 transition cursor-pointer"
          >
            <img
              src="/images/mario-coinn.png"
              alt="Next"
              className="w-12 h-12 pointer-events-none"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-yellow-300 border-4 border-red-600 rounded-3xl shadow-lg max-w-md w-full p-6 mario-modal">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-red-700 hover:text-red-500 text-3xl font-extrabold drop-shadow-lg"
              style={{ textShadow: "1px 1px 0 #fff" }}
            >
              ×
            </button>

            <div className="flex justify-center mb-4">
              <img
                src="/images/mario-coinn.png"
                alt="Mario Coin"
                className="w-12 h-12 animate-bounce"
              />
            </div>

            {modalData.img && (
              <img
                src={modalData.img}
                alt={modalData.title}
                className="w-full max-h-[50vh] object-contain rounded-xl border-4 border-red-600 shadow-md"
              />
            )}

            <h2 className="text-3xl font-extrabold mt-4 mb-2 text-center text-red-700 drop-shadow-md mario-font">
              {modalData.title}
            </h2>

            <p className="text-center text-gray-800 text-lg leading-relaxed px-2 mario-font">
              {modalData.description}
            </p>
          </div>

          <style>{
            `.mario-font {
              font-family: 'Press Start 2P', cursive, sans-serif;
            }
            .mario-modal {
              box-shadow: 0 0 20px #ffcc00, 0 0 40px #ff9900, 0 0 60px #ff6600;
              animation: pop-up 0.3s ease-out;
            }
            @keyframes pop-up {
              0% { transform: scale(0.7); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }`
          }</style>
        </div>
      )}

      {/* Animations */}
      <style>{
        `@keyframes goomba-walk {
          0% { transform: translateX(-20%); }
          100% { transform: translateX(110vw); }
        }
        .animate-goomba1 { animation: goomba-walk 8s infinite linear; }
        .animate-goomba2 { animation: goomba-walk 10s infinite linear 2s; }
        .animate-goomba3 { animation: goomba-walk 12s infinite linear 4s; }
        .animate-goomba4 { animation: goomba-walk 14s infinite linear 6s; }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
          }
          50% {
            box-shadow: 0 0 20px #ffeb99, 0 0 40px #ffcc00, 0 0 60px #ffcc00;
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.5s infinite;
        }

        @keyframes heart-float1 {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-80px); opacity: 0; }
        }
        .animate-heart1 {
          animation: heart-float1 3s infinite ease-in-out;
        }

        @keyframes heart-float2 {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-60px); opacity: 0; }
        }
        .animate-heart2 {
          animation: heart-float2 4s infinite ease-in-out;
        }

        @keyframes heart-float3 {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        .animate-heart3 {
          animation: heart-float3 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OurStory;
