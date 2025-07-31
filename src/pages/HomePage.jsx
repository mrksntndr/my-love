import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const primaryColor = "#dfc7a7";

const HomePage = () => {
  const navigate = useNavigate();
  const pages = ["/our-story", "/photos", "/poetry", "/new-beginning", "/rays-of-hope"];
  const [rejected, setRejected] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [isBegging, setIsBegging] = useState(false);

  const floatingTexts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: `${Math.random() * 360}deg`,
    delay: `${Math.random() * 3}s`,
  }));

  useEffect(() => {
    if (accepted) {
      const timer = setTimeout(() => {
        setAccepted(false);
        setIsBegging(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [accepted]);

  const handleNoClick = () => {
    if (noClickCount < 2) {
      setNoClickCount(prev => prev + 1);
    } else {
      setRejected(true);
      setIsBegging(true);
    }
  };

  const resetState = () => {
    setRejected(false);
    setAccepted(false);
    setNoClickCount(0);
    setIsBegging(true);
  };

  const handleYesClick = () => {
    setAccepted(true);
    setRejected(false);
    setNoClickCount(0);
    setIsBegging(false);
  };

  const buttonBaseStyle = "w-52 px-8 py-4 text-xl rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300";

  return (
    <div className="relative min-h-screen font-sans" style={{ backgroundColor: "#f7f4ef" }}>

      {rejected && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          {floatingTexts.map(({ id, top, left, rotate, delay }) => (
            <div
              key={`rejected-${id}`}
              className="absolute text-xl sm:text-3xl font-bold text-rose-600 opacity-0 animate-fadeLoop"
              style={{
                top,
                left,
                transform: `rotate(${rotate})`,
                animationDelay: delay,
              }}
            >
              Please say yes 💔
            </div>
          ))}
        </div>
      )}

      {accepted && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          {floatingTexts.map(({ id, top, left, rotate, delay }) => (
            <div
              key={`accepted-${id}`}
              className="absolute text-xl sm:text-3xl font-bold text-pink-600 opacity-0 animate-fadeLoop"
              style={{
                top,
                left,
                transform: `rotate(${rotate})`,
                animationDelay: delay,
              }}
            >
              I love you ❤️
            </div>
          ))}
        </div>
      )}

      <section
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(to right, #c9b293, #dfc7a7)" }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            "Will You Stay With Me On Our Journey?"
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8 opacity-90">
            Every moment with you is a memory I’ll treasure forever.
            These things may not be complete but it depicts our story together.
          </p>
          <a
            href="#hearts"
            className="px-8 py-3 rounded-full text-lg shadow-md hover:opacity-90 transition"
            style={{ backgroundColor: "#fff", color: primaryColor }}
          >
            Explore Our Journey
          </a>
        </div>
      </section>

      <section id="hearts" className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: primaryColor }}>
            Our Journey Together
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {['Our Story', 'Photos', 'Poetry', 'New Beginning', 'Rays of Hope'].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item === 'Rays of Hope') {
                    const el = document.documentElement;
                    if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
                    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
                    else if (el.msRequestFullscreen) el.msRequestFullscreen();
                  }
                  navigate(pages[index]);
                }}
                className="flex flex-col items-center transform hover:scale-110 transition duration-300"
              >
                <svg className="w-20 h-20 mb-2" fill={primaryColor} viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                    2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09
                    3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0
                    3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="text-lg font-medium text-gray-700">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        id="courting"
        className="py-32 px-6 text-center"
        style={{ background: "linear-gradient(to right, #c9b293, #dfc7a7)" }}
      >
        <div className="container mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Will You Give Me A Chance To Court You?
          </h2>
          <p className="text-lg text-white max-w-xl mx-auto mb-8 opacity-90">
            When you are ready and when the time is right, I will court you with all my heart.
            I will be here patiently waiting and loving you.
          </p>

          {!rejected ? (
            <div className={`relative h-40 flex items-center gap-6 ${isBegging ? "justify-center" : "justify-center md:justify-center"}`}>
              <button
                onClick={handleYesClick}
                className={`${buttonBaseStyle} z-10`}
                style={{ backgroundColor: "#fff", color: primaryColor }}
              >
                Yes, I Will ❤️
              </button>

              {!isBegging && noClickCount < 3 && (
                <button
                  onClick={handleNoClick}
                  className={`${buttonBaseStyle} z-20`}
                  style={{
                    backgroundColor: "#fff",
                    color: "#d9534f",
                    position: noClickCount > 0 ? "absolute" : "relative",
                    right: noClickCount === 1 ? "20px" : "auto",
                    transform: noClickCount === 2 ? "scale(0.4)" : "scale(1)",
                  }}
                >
                  No 😔
                </button>
              )}
            </div>
          ) : (
            <button
              className="mt-6 px-12 py-5 text-2xl font-bold rounded-full shadow-2xl transition transform hover:scale-105"
              style={{ backgroundColor: "#fff", color: "#d9534f" }}
              onClick={resetState}
            >
              Please say yes 😢
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
