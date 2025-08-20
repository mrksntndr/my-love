import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import './Poetry.css';

const poetryCollection = [
  {
    id: 1,
    title: "Love will wait",
    author: "Mark Santander",
    content: `Loving you will be worth the wait,\nThe days may stretch, but I’ll have faith.\nNo hour too long, no dusk too late,\nBecause loving you will be worth the wait.`,
    color: "bg-amber-50"
  },
  {
    id: 2,
    title: "Wanderer",
    author: "Mark Santander",
    content: `I had a dream about you,\nEyes sparkling through the the soft skies of blue.\nYou held my hand, we kissed through the night,\nGuiding me back to the light.\n\nBut then I woke up pale and grey.\nBut still that dream will never drift away.\nI’ll wait for that day to become true.\nA silent and sweet wish for me and you.`,
    color: "bg-orange-50"
  },
  {
    id: 3,
    title: "Captivated",
    author: "Mark Santander",
    content: `You captivated my heart in an instant.\nNo warning signs, no sound from the distance.\nYour aura pierced throughout my body.\nYou’re beautiful, amazing, and godly.\n\nI’ll offer you my heart and soul,\nLoving you until the end is my ultimate goal.\nWith use one smile, you changed my mind.\nAnd in that moment, I knew you were the one.`,
    color: "bg-blue-50"
  },
  {
    id: 4,
    title: "Waiting Game",
    author: "Mark Santander",
    content: `Love is but a waiting game.\nSometime it will drive you insane.\nYou count the days, those sleepless nights.\nYou question yourself, Am I doing it right?\n\nBut even through the ache and pain,\nEveryday you chose to feel it again.\nHoping that love will comeback, that it won’t leave.\nKnow love is still worthy if you believe.`,
    color: "bg-amber-50"
  },
  {
    id: 5,
    title: "Magbalik",
    author: "Mark Santander",
    content: `Nais ko mahagkan muli ang iyong mga kamay.\nAng pagmamahal sayo ay di’ kukupas.\nTila hiling na paulit-ulit kong binibigkas.\nAng haplos mo na minsang sa akin ay lumikas.\n\nNaaalala ko pa ang init ng iyong palad,\nNagsisilbing silong sa makulimlim na ulap.\nMaghihintay na lamang sa iyong pagbabalik.\nNa sana’y makamit muli ang yakap mo at halik.`,
    color: "bg-orange-50"
  },
  {
    id: 6,
    title: "Liwanag",
    author: "Mark Santander",
    content: `Ang iyong mga mata ay ilaw sa gabing madilim.\nTulad ng tala sa langit, tahimik ngunit matimtim.\nAng mga labi mo ay tila rosas sa hardin.\nUmaasa na kahit saglit ay iyong mapansin.\n\nDi man palaging magkalapit ang ating kamay,\nAng liwanag mo’y sapat upang ako’y maghintay.\nKapag ako’y nangungulila sayo gabing kay lamig,\nTinitignan ko ang iyong larawan, pinapakinggan ang iyong himig.`,
    color: "bg-blue-50"
  },
  {
    id: 7,
    title: "Simula",
    author: "Mark Santander",
    content: `Hindi ko na nais balikan pa ang dati.\nAlam kong masalimuot ang mga nangyari.\nKung iyong pahihintulutan, ay gagawa tayong muli.\nNg bagong landas, di na muli magwawagi ang hapdi.\n\nAlam kong hindi na maiwawasto ang mga kahapon,\nKaya’t mas pipiliin ko na buuin ang sa ngayon.\nKung bubuksan mong muli ang iyong puso’t ngiti,\nAko’y narito, handang magsimulang muli.`,
    color: "bg-amber-50"
  },
  {
    id: 8,
    title: "Pagkamoot",
    author: "Mark Santander",
    content: `An pagkamoot ko saimo, dai nawawara bisan sa kasakit.\nMaski an panahon maglaog, bako ini nabubura sa isip.\nIkaw an pulot sa gabing ko na mapait,\nSa kasurong kan banggi, ikaw an liwanag kong init.\n\nPero saro sana akong parahampang na paraslayag,\nNahale an puso ko sa saimong bitbit na taming.\nMaging saimo an sakuya'ng pinapangadyi,\nSa lambang balod, ngaran mo an sakuya'ng awit.`,
    color: "bg-orange-50"
  },
  {
    id: 9,
    title: "Your Name",
    author: "Mark Santander",
    content: `Deeper than the ocean, higher than the sky.\nA love that does not know how to say goodbye.\nNever giving up no matter the situation,\nI anchor my soul to our shared constellation.\nCan I hold your hand until the end of time?\nA promise sealed in stars, eternally sublime.\n\nGoverned by love and trust,\nOur new bond no storm can ever rust.\nNot even the strongest earthquake can bring us down.\nZealously we stand, with hearts as our crown.\nAnd when you are ready, I will be here.\nLonging for you love and touch, my dear.\nEvery single day my heart screams for your name.\nSilently waiting, like the moon awaits the flame.`,
    color: "bg-blue-50"
  },
    {
    id: 10,
    title: "Stars",
    author: "Mark Santander",
    content: `Your presence feels like poetry in a noisy world.\nA Let your worries drift into space. I’ll keep your light safe.\nNever giving up no matter the situation,\nI’ll gather every scattered star that ever mirrored your name.\nAnd tuck them into the quiet corners of your heart.\n\nEven though there are no rhymes in this poem,\nThere is rhythm in the way you breathe beside me,\nAnd when the darkness forgets your spark.\nI’ll remind the universe — you are made of light.`,
    color: "bg-amber-50"
  },
  {
   id: 11,
   title: "My favorite color",
   author: "Mark Santander",
   content: `She asked me, "What's your favorite color?"\nA question so simple-yet my heart froze.\nWords tangled on my tougue like shy petals in the wind.\n\nSo I turned the question back to her.\nShe smiled softly and said, "Brown".\n\nFrom that moment, brown was never just a color.\nIt became the warmth of her eyes.\nAnd ever since, I've paintend my world in the shades of her.`,
   color: "bg-orange-50"
  },
  {
   id: 12,
    title: "Constellations",
    author: "Mark Adrian Santander",
    content:  `Perhaps the stars have yet to meet in the sky,\nBut one day, they will find their way to each other.\nJust as the constellations weave their eternal dance above.\nIn that moment, I will feel your warmth once more,\n\nAnd together, we will not just be a love,\nBut entire galaxies, colliding in endless light.\nOur souls would became one again,\nA love that trancends from time and space until eternity.`,
   color: "bg-blue-50",
  },
  {
    id: 13,
    title: "Drifting Towards Your Distant Floating World",
    author: "Mark Adrian Santander",
    content: `Perhaps my presence no longer blooms in your heart,\nAnd my voice no longer lingers like a cherished song.\nYet because I love you as the sea loves the shore,\nI will grant your heart its horizon.\nBut if you asked me, Do I still love you?\nI would cry it to the heavens until the stars themselves listened, \nHow deeply I love you, how badly I miss you.\nThat every beat of my heart is carved in your name.\nUntil that day, I will burn quietly in the shadows,\nWaiting for the moment you come home to me.`,
    color: "bg-amber-50",
  },
  {
    id: 14,
    title: "Whisper to the stars",
    author: "Mark Adrian Santander",
    content: `Every night, I whisper to the stars,\nHoping they’ll carry my wish to you.\nTo feel your love and warmth once more,\nYet the silence screams louder than any words.\nEach dawn, I wake with the same prayer,\nTo call you mine again,\nPerhaps I am just living in my own fantasy,\nBut even in this fragile fantasy,\nI love you and I miss you.\nMore than the night misses the sun.\nMore than the stars miss the moon.\nCause my love for you is endless, boundless, and timeless.\nAnd I will wait for you, no matter how long it takes.`,
    color: "bg-orange-50"
  },
  {
    id: 15,
    title: "One in a Billion",
    author: "Mark Adrian Santander",
    content: `How can someone not be in love with someone like you?\nYou are beautiful, kind, and smart.\nVery rare and one of a kind.\nA true gem in the world full of stones.\nYou are like a rose in a garden,\nYou are like a pearl in the sea.\nAnd every day I ponder,\nHow someone like me can be loved by you.\nYou are the dawn that kisses the horizon,\nA melody that lingers in my soul,\n A constant star that burns brighter than the rest.\nIf the world were to forget what beauty is,\nIt would still remember your name.\nIf the oceans dried and the skies went dark,\nYour glowing light would be the only one that will guide me home.`,
    color: "bg-blue-50"
  },
  {
    id: 16,
    title: "The Night She Cried",
    author: "Mark Adrian Santander",
    content: `The night, she called me,\n I heard her trembling voice though the line.\nI did not know what had gone wrong.\nIt gave me a worry beat in my heart so strong.\n\nI whispered softly "What happened dear, why are you crying?"\nHoping she'd hear it, I kept on trying.\nWishing my words could calm her fears.\nBut the call ended, didn't knew the reason for her tears.\nIf she ever tells me I promise to be in all ears.\n\n And even though I was far,\nMy heart was so near.\nI stayed awake for hours,\nTo hold her and keep her dear.`,
    color: "bg-amber-50"
  },
  {
    id: 17,
    title: "You Look So Beautiful",
    author: "Mark Adrian Santander",
    content: `Today you look as beautiful as ever,\nYou're amazing, caring and oh so clever,\nYou are beautiful, smart and so outstanding,\nYour soft voice and pretty face so blinding.\nI am so happy spending time with you,\nEnjoying each moment, each minute too.\nYour laughter and smiles melts my heart.\nEverytime we meet, I wish time would not start.\nYour happiness will always be my priority,\nTo cherish you with love and sincerity.\nTo stand by your side through all the adversity,\nAnd treasure you endlessly for eternity.\nMay I have the honor of caring for your heart?\nIf you allow me, we'll never be apart.\nBut please take your time, there's no need to decide,\nI will wait with patience, with love as my guide.`,
    color: "bg-orange-50"
  },
  {
    id: 18,
    title: "In You Embrace",
    author: "Mark Adrian Santander",
    content: `In your embrace, I find a haven of peace,\nWhere all worries and troubles cease.\nIn your smile, the world shines ever so bright.\nA radiant glow, a beacon of light.\n\nEvery inch of you is just perfection.\nSo mesmerizing, no hesitations.\nYou are my everything, what I can say.\nYou are always on my mind each and every day.\n\nIn your voice, I hear a gentle song.\nA melody that carries my heart along,\nWith every word, my spirit takes flight.\nGuided by love through the endless night.`,
    color: "bg-blue-50"
  }

];

const PoetryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();

  const audioRef = useRef(null);

useEffect(() => {
  audioRef.current = new Audio('/sound/yellow.mp3');
  audioRef.current.loop = true;
  audioRef.current.volume = 0.2;
  audioRef.current.play().catch(err => {
    console.warn("Audio play was prevented. User interaction may be required.");
  });

  return () => {
    audioRef.current?.pause();
    audioRef.current = null;
  };
}, []);

  
  const nextPage = () => {
    if (currentPage < poetryCollection.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };
  
  const currentPoem = poetryCollection[currentPage];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#A47551' }}>
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl"
      >
        <button
  onClick={() => navigate('/')}
  className="absolute top-1 left-1 bg-amber-800 text-white text-xs font-serif px-2 py-1 rounded-sm shadow hover:bg-amber-900 transition-colors z-50"
>
  ← Go back
</button>

        <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gray-300 blur-lg opacity-50 rounded-full"></div>

        <div className="relative flex h-[32rem] shadow-2xl overflow-hidden rounded-lg">
          <div className="w-12 flex flex-col items-center justify-between py-8 bg-gradient-to-b from-amber-800 to-amber-900">
            <div className="h-16 w-8 bg-amber-900 rounded-sm"></div>
            <div className="text-center vertical-text text-amber-100 font-bold tracking-wider">
              <span className="transform -rotate-90 block">POETRY</span>
            </div>
            <div className="h-16 w-8 bg-amber-900 rounded-sm"></div>
          </div>

          <div className={`flex-1 flex flex-col ${currentPoem.color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTMtMC4wMDEtMS42NTctMS4zNDQtMy0zLTNzLTMgMS4zNDMtMyAzYzAgMS42NTcgMS4zNDMgMyAzIDN6TTM0IDkwYzEuNjU3IDAgMy0xLjM0MyAzLTMgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjY1NyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6TTEyIDg2YzIuMjEgMCA0LTEuNzkgNC00IDAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0em0yOC02NWMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0yOSAyMmMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6TTMyIDYzYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptNTctMTNjMi43NiAwIDUtMi4yNCA1LTUtMC4wMS0yLjc2LTIuMjUtNS01LTVzLTUgMi4yNC01IDVjMCAyLjc2IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek02MCA5MWMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuLjg5NS0yIDIgMC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek0xMiA2MGMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuODk1LTIgMiAwLjg5NSAyIDIgMnoiIGZpbGw9IiNlMGQ2YzIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-amber-200"></div>

            <div className="absolute top-4 left-4 h-8 w-8 border-b-2 border-r-2 border-amber-800"></div>
            <div className="absolute bottom-4 right-4 h-8 w-8 border-t-2 border-l-2 border-amber-800"></div>
            
            <div className="p-8 flex flex-col h-full relative z-10">
              {currentPage > 0 ? (
                <>
                  <div className="flex justify-between items-start mb-12">
                    <button 
                      onClick={prevPage}
                      className="text-amber-900 hover:text-amber-700 font-serif text-lg transition-colors"
                    >
                      ← Previous
                    </button>
                    <span className="text-amber-800 text-sm font-serif">
                      Page {currentPage}
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-16 h-1 bg-amber-300 my-4"></div>
                    <h3 className="font-serif text-xl text-amber-900 mb-2">
                      {poetryCollection[currentPage - 1].title}
                    </h3>
                    <p className="font-serif text-amber-800 mb-4">
                      by {poetryCollection[currentPage - 1].author}
                    </p>
                    <div className="w-16 h-1 bg-amber-300 my-4"></div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <h2 className="font-serif text-3xl text-amber-900 mb-6">
                      Book of Poetry
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto my-6"></div>
                    <p className="font-serif text-amber-700 mb-8">
                      A collection of poems that I made<br />
                      just for you Danica, my love.
                    </p>
<img 
  src="/images/us2.jpg" 
  alt="A photo of us on our monthsary"
  className="mx-auto rounded-sm shadow-md mb-8 max-w-full h-auto max-h-56"
/>
                    <button 
                      onClick={nextPage}
                      className="px-6 py-2 bg-amber-700 text-white font-serif rounded-sm hover:bg-amber-800 transition-colors"
                    >
                      Begin Reading
                    </button>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          <div className={`flex-1 flex flex-col ${currentPoem.color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTMtMC4wMDEtMS42NTctMS4zNDQtMy0zLTNzLTMgMS4zNDMtMyAzYzAgMS42NTcgMS4zNDMgMyAzIDN6TTM0IDkwYzEuNjU3IDAgMy0xLjM0MyAzLTMgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjY1NyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6TTEyIDg2YzIuMjEgMCA0LTEuNzkgNC00IDAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0em0yOC02NWMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0yOSAyMmMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6TTMyIDYzYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptNTctMTNjMi43NiAwIDUtMi4yNCA1LTUtMC4wMS0yLjc2LTIuMjUtNS01LTVzLTUgMi4yNC01IDVjMCAyLjc2IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek02MCA5MWMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuLjg5NS0yIDIgMC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek0xMiA2MGMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuODk1LTIgMiAwLjg5NSAyIDIgMnoiIGZpbGw9IiNlMGQ2YzIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-amber-200"></div>

            <div className="absolute top-4 right-4 h-8 w-8 border-b-2 border-l-2 border-amber-800"></div>
            <div className="absolute bottom-4 left-4 h-8 w-8 border-t-2 border-r-2 border-amber-800"></div>
            
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="text-amber-800 text-sm font-serif">
                  Page {currentPage + 1}
                </span>
                <button 
                  onClick={nextPage}
                  className="text-amber-900 hover:text-amber-700 font-serif text-lg transition-colors"
                  disabled={currentPage === poetryCollection.length - 1}
                >
                  {currentPage === poetryCollection.length - 1 ? 'The End' : 'Next →'}
                </button>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center max-w-md"
                >
                  <h2 className="font-serif text-2xl text-amber-900 mb-4">
                    {currentPoem.title}
                  </h2>
                  <p className="font-serif text-amber-700 italic mb-8">
                    by {currentPoem.author}
                  </p>
                  <div className="w-24 h-1 bg-amber-300 mx-auto mb-8"></div>
<pre className={`font-serif text-amber-900 whitespace-pre-line leading-relaxed ${currentPoem.id === 9 || currentPoem.id === 10 || currentPoem.id === 11 || currentPoem.id === 13 || currentPoem.id === 14 || currentPoem.id === 15 || currentPoem.id === 16 || currentPoem.id === 17 || currentPoem.id === 18? 'text-[8px]' : currentPoem.id === 2 || currentPoem.id === 3 || currentPoem.id === 4 || currentPoem.id === 5 || currentPoem.id === 6  || currentPoem.id === 7 || currentPoem.id === 8 || currentPoem.id === 12?'text-sm' : 'text-lg'}`}>
  {currentPoem.content}
</pre>
                  <div className="w-24 h-1 bg-amber-300 mx-auto mt-8"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {isFlipping && (
          <div className="absolute inset-0 pointer-events-none" style={{ perspective: 1500 }}>
            <div className="relative h-full w-full">
              <div 
                className="absolute top-0 left-1/2 h-full w-1/2 origin-left transition-transform duration-600"
                style={{ transform: 'rotateY(-180deg)', transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100" style={{ backfaceVisibility: 'hidden' }}></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50" 
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <motion.div
          animate={{ 
            rotate: [0, -5, 0],
            transition: { 
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          className="absolute -right-8 top-1/4"
        >
          <img 
            src="/images/quill.png" 
            alt="Vintage quill pen with ink droplets floating beside the book"
            className="w-16 opacity-90"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PoetryBook;
