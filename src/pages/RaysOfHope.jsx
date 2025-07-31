import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const starNotes = [
  "You are my guiding light.",
  "Every night, I wish for you.",
  "Even the stars envy your glow.",
  "Hope shines through darkness.",
  "Love finds its way like starlight.",
  "You're the brightest in my sky.",
  "Every moment is a constellation with you.",
  "If you are lost, just look at the stars.",
  "You are the miracle between moonlight and magic.",
  "The stars will guide you home.",
  "Let this be a symbol of new dreams.",
  "You may be tried and fed up, but there’s strength within you, even if you don’t see it now. So Keep fighting.",
  "You carry beauty like the dawn—soft, powerful, unstoppable.",
  "Just like stars, hope is one thing that can help us get through the darkest times.",
  "You are my northern star.",
  "When you are struggling and start thinking about giving up, remember the power of hope.",
  "Beautiful minds, kind hearts, and wild souls—that’s what you’re made of.",
  "This spark belongs to you.",
  "Every star is a wish I made.",
  "Our love is infinite.",
  "You are amazing just the way the universe made you—flawed, fierce, and full of stardust.",
  "You bring hope like a sunrise.",
  "Your light will never fade.",
  "The stars know your name.",
  "You are a constellation of beauty in my sky of life.",
  "Even galaxies envy our love.",
  "Like a star, you shine even when the world is dark.",
  "Each twinkle is a memory.",
  "You are art, you are light, you are the miracle the stars wrote about.",
  "You’re not just beautiful—you are celestial.",
  "You are my compass in the sky.",
  "You amaze me every day with your kindness, your strength, and your glow.",
  "You are proof that stars live on Earth.",
  "You’re the soft glow in the night that calms my storm.",
  "In your eyes, I see galaxies.",
  "No distance dims your light.",
  "I never stop wishing for us.",
  "This star is your smile.",
  "Like stars, you exist to shine—never forget that.",
  "Hope is your soul’s way of saying: not yet, don’t give up.",
  "You are beautiful in ways the eyes can’t see and amazing in ways the mind can’t grasp.",
  "You are an entire world wrapped in warmth, wonder, and wild grace.",
  "Hold on to hope—it’s here.",
  "This light is yours to keep.",
  "Even the sky can't hide you.",
  "Beautiful is not enough to describe you—you are breathtaking, soul-deep.",
  "There’s something magical about how you light up every space you enter.",
  "The world is brighter, better, and more beautiful because you're in it.",
  "You're beautiful in the way stars are—never asking for attention, just glowing.",
  "One star closer to you.",
  "I traced your name in stars.",
  "When I see light, I see you.",
  "When you're weary, my love will be your warmth.",
  "Your light guided me here.",
  "This wish has your name.",
  "To me, you're the most beautiful version of love and light.",
  "Even the darkest night will end, and the stars will rise again.",
  "From this star, I love you.",
  "Starlight carries my promise.",
  "Hope is quiet, but it never stops shining.",
  "No matter how small, keep that spark of hope alive—it’s your guiding star.",
  "Don’t quit now—your future self is already proud of you.",
  "You are stronger than your silence, brighter than your doubts.",
  "I follow your trail of light.",
  "You're never alone in the dark — I’ll be the star right next to you.",
  "You are beauty, you are wonder, you are everything good wrapped in a single breath.",
  "To me, you're the most beautiful version of love and light.",
  "Every star tells a story of beauty and strength.",
  "When the world feels too heavy, lie back and count the stars with me.",
  "This star remembers our first look.",
  "Don’t let today’s clouds make you forget the stars above.",
  "The sky holds our secret.",
  "Even stars need to rest — when you do, I’ll be right here glowing softly beside you.",
  "Let your worries drift into space. I’ll keep your light safe.",
  "Light travels, but so does love.",
  "When you're tired, rest under my sky — the stars will watch over you.",
  "Even the cosmos blushes for us.",
  "You are never alone in the dark - you are worthy of beauty and wonder.",
  "When your light fades, I’ll be your soft glow in the dark.",
  "One twinkle closer to home.",
  "If your soul feels heavy, let me hold a piece of it for you.",
  "You are worthy of beauty and wonder.",
  "When the world is too loud, I’ll be your calm.",
];

const generateStars = (count = 80) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 95}%`,
    size: `${Math.random() * 4 + 2}px`,
    delay: `${Math.random() * 5}s`,
    twinkleDuration: `${Math.random() * 3 + 2}s`,
    note: starNotes[i % starNotes.length],
  }));
};

const RaysOfHope = () => {
  const [stars] = useState(generateStars(80));
  const [activeStar, setActiveStar] = useState(null);
  const clickSound = useRef(null);
  const firstAudio = useRef(null);
  const secondAudio = useRef(null);
  const thirdAudio = useRef(null);
  const bgMusic = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    clickSound.current = new Audio("/sound/click.mp3");

    firstAudio.current = new Audio("/sound/stars.mp3");
    secondAudio.current = new Audio("/sound/fixyou1.mp3");
    thirdAudio.current = new Audio("/sound/allofthestars.mp3");

    firstAudio.current.volume = 0.2;
    secondAudio.current.volume = 0.2;
     thirdAudio.current.volume = 0.2;

    bgMusic.current = firstAudio.current;

    const playMusic = async () => {
      try {
        await firstAudio.current.play();
      } catch {
        console.warn("Autoplay blocked.");
      }
    };

firstAudio.current.addEventListener("ended", () => {
  secondAudio.current.play().catch(() => {});
  bgMusic.current = secondAudio.current;
});

secondAudio.current.addEventListener("ended", () => {
  thirdAudio.current.play().catch(() => {});
  bgMusic.current = thirdAudio.current;
});


    document.addEventListener(
      "click",
      () => {
        playMusic();
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
      },
      { once: true }
    );

    return () => {
[firstAudio.current, secondAudio.current, thirdAudio.current].forEach((audio) => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});

    };
  }, []);

  const handleStarClick = (star) => {
    setActiveStar(star);
    if (clickSound.current && clickSound.current.play) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  const handleBack = () => {
    if (bgMusic.current) {
      bgMusic.current.pause();
      bgMusic.current.currentTime = 0;
    }
    navigate("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans bg-gradient-to-b from-black via-blue-950 to-black">

      <button
        onClick={handleBack}
        className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-white/5 text-white hover:bg-white/10 transition z-50"
      >
        ← Back to Home
      </button>

      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover opacity-30 mix-blend-screen"
        style={{ backgroundImage: "url('/images/stars-bg.png')" }}
      />

      {[
        "don’t ever lose hope — when the sun goes down, the stars come out",
        "each star holds a meaning",
        "don’t lose hope — it’s written in the stars",
        "you are amazing — more than you know",
        "you are beautiful — never forget it",
        "the night listens when your heart speaks",
        "you matter — more than the stars could say",
        "your light hasn’t dimmed — not even once",
        "breathe — you’re doing just fine",
        "hope lingers in every twilight",
      ].map((msg, index) => (
        <div
          key={index}
          className={`absolute text-xs text-white/10 whitespace-nowrap animate-slide-${index +
            1} z-10 select-none pointer-events-none`}
          style={{
            top: `${25 + index * 6}%`,
            transform: "rotate(-45deg)",
          }}
        >
          {msg}
        </div>
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          onClick={() => handleStarClick(star)}
          className="absolute rounded-full bg-white cursor-pointer hover:scale-125 transition"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 10px 4px rgba(255,255,255,0.9)",
            animation: `twinkle ${star.twinkleDuration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}

      {activeStar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur"
          onClick={() => setActiveStar(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-indigo-800 to-blue-900 border border-indigo-400 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full"
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-300">
              The Stars Are Yours ⭐
            </h2>
            <p className="text-white mb-4 opacity-90">{activeStar.note}</p>
            <button
              className="mt-4 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition"
              onClick={() => setActiveStar(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.2); }
        }

        /* Diagonal shooting animation for floating texts */
        @keyframes slide-diagonal-1 {
          0% { transform: translate(100vw, -50vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-100vw, 100vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-2 {
          0% { transform: translate(120vw, -60vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-120vw, 120vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-3 {
          0% { transform: translate(140vw, -70vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-140vw, 140vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-4 {
          0% { transform: translate(160vw, -80vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-160vw, 160vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-5 {
          0% { transform: translate(180vw, -90vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-180vw, 180vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-6 {
          0% { transform: translate(200vw, -100vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-200vw, 200vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-7 {
          0% { transform: translate(220vw, -110vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-220vw, 220vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-8 {
          0% { transform: translate(240vw, -120vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-240vw, 240vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-9 {
          0% { transform: translate(260vw, -130vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-260vw, 260vh) rotate(-45deg); opacity: 0; }
        }
        @keyframes slide-diagonal-10 {
          0% { transform: translate(280vw, -140vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-280vw, 280vh) rotate(-45deg); opacity: 0; }
        }

        .animate-slide-1 { animation: slide-diagonal-1 40s linear infinite; }
        .animate-slide-2 { animation: slide-diagonal-2 50s linear infinite; }
        .animate-slide-3 { animation: slide-diagonal-3 60s linear infinite; }
        .animate-slide-4 { animation: slide-diagonal-4 70s linear infinite; }
        .animate-slide-5 { animation: slide-diagonal-5 80s linear infinite; }
        .animate-slide-6 { animation: slide-diagonal-6 90s linear infinite; }
        .animate-slide-7 { animation: slide-diagonal-7 100s linear infinite; }
        .animate-slide-8 { animation: slide-diagonal-8 110s linear infinite; }
        .animate-slide-9 { animation: slide-diagonal-9 120s linear infinite; }
        .animate-slide-10 { animation: slide-diagonal-10 130s linear infinite; }
      `}</style>
    </div>
  );
};

export default RaysOfHope;