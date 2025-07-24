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
  }
];

const PoetryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();

  const audioRef = useRef(null);

useEffect(() => {
  audioRef.current = new Audio('/sound/poetryaudio.mp3');
  audioRef.current.loop = true;
  audioRef.current.volume = 0.1;
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

        {/* Book cover shadow */}
        <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gray-300 blur-lg opacity-50 rounded-full"></div>
        
        {/* Main book container */}
        <div className="relative flex h-[32rem] shadow-2xl overflow-hidden rounded-lg">
          {/* Book spine */}
          <div className="w-12 flex flex-col items-center justify-between py-8 bg-gradient-to-b from-amber-800 to-amber-900">
            <div className="h-16 w-8 bg-amber-900 rounded-sm"></div>
            <div className="text-center vertical-text text-amber-100 font-bold tracking-wider">
              <span className="transform -rotate-90 block">POETRY</span>
            </div>
            <div className="h-16 w-8 bg-amber-900 rounded-sm"></div>
          </div>
          
          {/* Left page */}
          <div className={`flex-1 flex flex-col ${currentPoem.color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTMtMC4wMDEtMS42NTctMS4zNDQtMy0zLTNzLTMgMS4zNDMtMyAzYzAgMS42NTcgMS4zNDMgMyAzIDN6TTM0IDkwYzEuNjU3IDAgMy0xLjM0MyAzLTMgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjY1NyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6TTEyIDg2YzIuMjEgMCA0LTEuNzkgNC00IDAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0em0yOC02NWMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0yOSAyMmMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6TTMyIDYzYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptNTctMTNjMi43NiAwIDUtMi4yNCA1LTUtMC4wMS0yLjc2LTIuMjUtNS01LTVzLTUgMi4yNC01IDVjMCAyLjc2IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek02MCA5MWMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuLjg5NS0yIDIgMC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek0xMiA2MGMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuODk1LTIgMiAwLjg5NSAyIDIgMnoiIGZpbGw9IiNlMGQ2YzIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-amber-200"></div>
            
            {/* Decorative elements */}
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
          
          {/* Right page */}
          <div className={`flex-1 flex flex-col ${currentPoem.color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3em00OCAyNWMzLjg2NiAwIDctMy4xMzQgNy03cy0zLjEzNC03LTctNy03IDMuMTM0LTcgNyAzLjEzNCA3IDcgN3ptLTQzLTdjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTYzIDMxYzEuNjU3IDAgMy0xLjM0MyAzLTMtMC4wMDEtMS42NTctMS4zNDQtMy0zLTNzLTMgMS4zNDMtMyAzYzAgMS42NTcgMS4zNDMgMyAzIDN6TTM0IDkwYzEuNjU3IDAgMy0xLjM0MyAzLTMgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjY1NyAxLjM0MyAzIDMgM3ptNTYtNzZjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6TTEyIDg2YzIuMjEgMCA0LTEuNzkgNC00IDAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0em0yOC02NWMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTIzLTExYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptLTYgNjBjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0yOSAyMmMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNS01IDIuMjQtNSA1IDIuMjQgNSA1IDV6TTMyIDYzYzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01LTUgMi4yNC01IDUgMi4yNCA1IDUgNXptNTctMTNjMi43NiAwIDUtMi4yNCA1LTUtMC4wMS0yLjc2LTIuMjUtNS01LTVzLTUgMi4yNC01IDVjMCAyLjc2IDIuMjQgNSA1IDV6bS05LTIxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek02MCA5MWMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuLjg5NS0yIDIgMC44OTUgMiAyIDJ6TTM1IDQxYzEuMTA1IDAgMi0wLjg5NSAyLTJzLTAuODk1LTItMi0yLTIgMC44OTUtMiAyIDAuODk1IDIgMiAyek0xMiA2MGMxLjEwNSAwIDItMC44OTUgMi0ycy0wLjg5NS0yLTItMi0yIDAuODk1LTIgMiAwLjg5NSAyIDIgMnoiIGZpbGw9IiNlMGQ2YzIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-amber-200"></div>
            
            {/* Decorative elements */}
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
                  <pre className={`font-serif text-amber-900 whitespace-pre-line leading-relaxed ${currentPoem.id === 2 || currentPoem.id === 3 || currentPoem.id === 4 || currentPoem.id === 5 || currentPoem.id === 6  || currentPoem.id === 7 || currentPoem.id === 8 ? 'text-sm' : 'text-lg'}`}>
                    {currentPoem.content}
                  </pre>
                  <div className="w-24 h-1 bg-amber-300 mx-auto mt-8"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page flipping animation container */}
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
        
        {/* Floating quill decoration */}
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
