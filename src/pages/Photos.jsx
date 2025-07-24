import React, { useState, useRef, useEffect } from "react";
import {
  FaHeart,
  FaEllipsisV,
  FaPlusCircle,
  FaBookOpen,
  FaBookmark,
  FaTimes,
} from "react-icons/fa";

const initialMemories = [
  {
    title: "Split Fiction",
    date: "March 11, 2025",
    type: "photo",
    mediaUrl: "/photos/split.png",
    caption: "Split Fiction with You",
    description:
      "We played the new game called split fiction. I had so much fun playing it with you. The way we strategized and laughed together made it a night to remember.",
  },
  {
    title: "Hotdog",
    date: "March 10, 2025",
    type: "photo",
    mediaUrl: "/photos/hotdog.png",
    caption: "HA? Hatdog",
    description:
      "Remember this? We became hotdogs in the game. We bounced and danced. I was the brown one.",
  },
  {
    title: "Favorite Song",
    date: "June 24, 2023",
    type: "video",
    mediaUrl: "https://www.youtube.com/watch?v=SJsGISX8O8k",
    caption: "I Guess Im In Love",
    description:
      "This whole song is what I feel towards you. Just pure love and happiness. I wish I could play it for you and sing it to you everyday.",
  },
  {
    title: "Favorite Song",
    date: "February 2, 2025",
    type: "photo",
    mediaUrl: "/photos/dinkum.png",
    caption: "Up In The Sky With You",
    description:
      "We played the game Dinkum again. We had so much fun and we hopped into the hot air balloon. We went up in the sky and I felt like I was flying with you. I wish I could do that with you in real life.",
  },
  {
    title: "Your Clutch",
    date: "January 1, 2025",
    type: "video",
    mediaUrl: "/photos/mrclutch.mp4",
    caption: "Clutching the Game",
    description:
      "We played Marvel Rivals. We were about to lose but you clutched the game. You were so happy and I was so proud of you. I love how you always find a way to win. Just like how you always find a way to make me happy.",
  },
  {
    title: "Peak Time",
    date: "June 27, 2025",
    type: "photo",
    mediaUrl: "/photos/peak.png",
    caption: "Playing Peak with You",
    description:
      "You gifted me a game called Peak. It was so fun playing it with you. All the emotes and all it was so fun. I love you so much and I miss playing it with you.",
  },
  {
    title: "Repo With You",
    date: "March 9, 2025",
    type: "video",
    mediaUrl: "https://youtu.be/XvvgT2FIj0M",
    caption: "Playing Repo with You",
    description:
      "We played REPO and we found out that the love potion can make you talk. We touched it alternately and all those words that my character said were all true. I love you so much and I wish I could play it with you again.",
  },
  {
    title: "Dancing with You in Roblox",
    date: "July 24, 2024",
    type: "video",
    mediaUrl: "/photos/roblox.mp4",
    caption: "Danced the Night Away",
    description:
      "It was our monthsary that day. We looked for a game in roblox to play. We found a game where we can dance together. We danced the night away and I felt so happy. I love you so much and I wish I could dance with you in real life.",
  },
  {
    title: "Billiards",
    date: "April 23, 2024",
    type: "photo",
    mediaUrl: "/photos/billiard.jpg",
    caption: "Arcade Date",
    description:
      "We played billiards together. You were so good at it. We had so much fun and played two sets. I hope we can play it again. I miss you so much and I love you.",
  },
  {
    title: "Bowling",
    date: "April 23, 2024",
    type: "photo",
    mediaUrl: "/photos/bowling.jpg",
    caption: "Arcade Date 2",
    description:
      "After playing billiards, we played bowling. You always clear the pins with your first throw. I was so amazed by you. I love how you always impress me with your skills.",
  },
  {
    title: "Haru & Sachii",
    date: "January 5, 2025",
    type: "photo",
    mediaUrl: "/photos/hawusachii.jpg",
    caption: "Sweepy",
    description:
      "You stayed here for almost a month. I enjoyed every moment with you. We bought puto-bumbong, bibingka, ice-cream and many more. We also ate samgyup at home. I wish to do that again with you. I love you so much and I miss you babi.",
  },
  {
    title: "Sleepy Little Baby",
    date: "November 15, 2024",
    type: "photo",
    mediaUrl: "/photos/sweepy.jpg",
    caption: "Sweepy Babi",
    description:
      "I stayed at your house for almost a week. We cooked different foods, played games, and watched movies together. I loved every moment with you. I miss you so much and I love you.",
  },
];

export default function Scrapbook() {
  const [memories, setMemories] = useState(initialMemories);
  const [form, setForm] = useState({
    title: "",
    date: "",
    type: "photo",
    mediaUrl: "",
    caption: "",
    description: "",
  });

  const audioRef = useRef(null);

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      return `https://www.youtube.com/embed/${
        url.split("v=")[1].split("&")[0]
      }`;
    } else if (url.includes("youtu.be/")) {
      return `https://www.youtube.com/embed/${
        url.split("youtu.be/")[1].split("?")[0]
      }`;
    }
    return url;
  };

  const saveMemory = () => {
    if (
      !form.title ||
      !form.date ||
      !form.mediaUrl ||
      !form.caption ||
      !form.description
    ) {
      alert("Please fill in all fields");
      return;
    }
    const formattedDate = new Date(form.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const newMemory = {
      ...form,
      date: formattedDate,
      mediaUrl:
        form.type === "video" ? getEmbedUrl(form.mediaUrl) : form.mediaUrl,
    };

    setMemories([newMemory, ...memories]);
    setForm({
      title: "",
      date: "",
      type: "photo",
      mediaUrl: "",
      caption: "",
      description: "",
    });
  };

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (window.YT) return initializeYouTubeListeners();
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = initializeYouTubeListeners;
    };

    const initializeYouTubeListeners = () => {
      document.querySelectorAll(".youtube-iframe").forEach((iframe) => {
        new window.YT.Player(iframe, {
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                audioRef.current?.pause();
              } else if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                audioRef.current?.play().catch(() => {});
              }
            },
          },
        });
      });
    };

    loadYouTubeAPI();
  }, []);

  return (
    <div className="bg-rose-50 min-h-screen relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/sound/sparkle.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-rose-600 bg-white border border-rose-300 rounded-full p-2 shadow hover:bg-rose-100 transition-all z-50"
        aria-label="Back"
      >
        <FaTimes className="text-xl" />
      </button>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 text-red-300 text-6xl opacity-40 animate-pulse">
          <FaHeart />
        </div>
        <div className="absolute top-1/3 right-20 text-pink-300 text-4xl opacity-30">
          <FaHeart />
        </div>
        <div className="absolute bottom-20 left-20 text-rose-300 text-3xl opacity-40 animate-pulse">
          <FaHeart />
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-rose-800 mb-4 flex items-center justify-center gap-4">
            <FaBookOpen />
            Memories of Us
            <FaHeart className="text-red-500" />
          </h1>
          <p className="text-xl text-rose-600">Every moment with you is so special</p>
          <p className="text-xl text-rose-600">Just like my love for you</p>
        </header>

        {/* Memories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((mem, idx) => (
            <div
              key={idx}
              className="bg-white scrapbook-paper p-6 rounded-lg shadow-xl border-2 border-rose-200 relative transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-rose-800">
                  {mem.title}
                </h3>
                <span className="text-sm text-rose-500 bg-rose-100 px-3 py-1 rounded-full">
                  {mem.date}
                </span>
              </div>

              {/* Media */}
              {mem.type === "photo" ? (
                <div className="mb-4 polaroid">
                  <img
                    src={mem.mediaUrl}
                    alt={mem.caption}
                    className="w-full h-auto rounded"
                  />
                  <div className="p-3 bg-white text-center">
                    <p className="text-rose-700 italic">"{mem.caption}"</p>
                  </div>
                </div>
              ) : mem.mediaUrl.includes("youtube.com") ||
                mem.mediaUrl.includes("youtu.be") ? (
                <div className="mb-4">
                  <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full youtube-iframe"
                      src={`${getEmbedUrl(mem.mediaUrl)}?enablejsapi=1`}
                      title="YouTube Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-3 bg-white text-center">
                    <p className="text-rose-700 italic">"{mem.caption}"</p>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <video
                    controls
                    className="w-full h-auto rounded"
                    onPlay={() => audioRef.current?.pause()}
                    onPause={() => audioRef.current?.play().catch(() => {})}
                  >
                    <source src={mem.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3 bg-white text-center">
                    <p className="text-rose-700 italic">"{mem.caption}"</p>
                  </div>
                </div>
              )}

              <div className="bg-rose-50 p-4 rounded-lg mb-4">
                <p className="text-rose-800">{mem.description}</p>
              </div>
              <div className="flex justify-end">
                <button className="text-rose-600 hover:text-rose-800 mr-3">
                  <FaHeart />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
