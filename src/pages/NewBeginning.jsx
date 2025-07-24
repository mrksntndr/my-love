import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewBeginning = () => {
  const navigate = useNavigate();
  const [letterContent, setLetterContent] = React.useState(
    "Dear Danica Gonzales,\n\n" +
    "Loving you will always be worth the wait. I know that our story was not perfect. We had arguments, fights, and misunderstandings. Instead of understanding you, sometimes I tend to ignore how you would feel. I was selfish for that. We had arguments that instead of giving it time to heal, I forced things so that it could be fixed as soon as possible.\n\n" +
    "I knew that you were hurt. You tried your best and gave me a lot of chances. You endured pain and sufferings too. I am so thankful for you with that. We had a lot of good memories. We've been together for two years. And that love of yours will be in my heart until the end of time. We do sleepovers, we play together, watch movies, go out together, cook together, and even go to the bathroom together. You are the best girlfriend ever.\n\n" +
    "I met your family. I was so scared at first because I thought they would not like me. I am not that handsome, not that fit, and not that smart. And you are so beautiful, smart, hardworking, so sexy, so gorgeous, talented and so good at everything. Yet, they accepted me with open arms. I am forever thankful with that. No words can express how much I love you. You mean the world to me. And I would love to spend the rest of my life with you.\n\n" +
    "We met through an online game and from there we built stories together, we built memories together, ones that could never be replaced by anything else in this world. You were there when I needed you just like how I am always there for you when you need. You opened up your problems to me and gave me your full trust. But I made mistakes that ruined your trust. I lied about things because I did not want to escalate problems not knowing that I would just result to even worse problem.\n\n" +
    "I lost your trust and I know it is hard to regain back. I always thought that communication was the key to a successful relationship. Yes we communicated a lot but there was one lacking. I lacked comprehension. I did not fully understand you or what you are feeling. I broke your trust and that may be the one that haunts you every night that resulted for you to slip away. And I regret everything that I've done. If there's a way to go back to the past and fix everything even if I lose everything that I have now, I would if that's the reason so that I can make you stay.\n\n" +
    "But that's not possible. And all I can do is improve on myself for the better. I did my best to learn you. To learn your feelings, your emotions and every little detail about you. It was all working well. Yet, it was not enough to erase your nightmares. And I am not blaming you for that, you've given me a lot of chances, showed me a lot of signals, yet I failed to see those things.\n\n" +
    "And that's the reason why you lost your love for me. And I understand if you need time and space to heal. I understand why you changed your pictures, your ign, your passwords, and all. Maybe it's because you wanted to start fresh. You are moving on from our past relationship and I know I should too. But I will never stop loving you throughout the process.\n\n" +
    "I have learned so much things about ourselves. The reason for our failure. I saw the mistakes that I was too blind to see back then. It really thought me a lot about how to take good care of you and love you. Because loving you is not enough to make you stay. I should first understand you. Give you what you need to make sure you are not suffocating. I need to respect your decisions, even when we had arguments. I learned how to understand you. I learned how to properly love you.\n\n" +
    "I am sorry for everything. I am sorry for not being the boyfriend you needed. I am sorry for not being there for you when you needed me the most. I am sorry for all the pain I caused you. I am sorry for not being able to fix things between us. I am sorry for not being able to make you happy. I am sorry for not being able to love you the way you deserved to be loved.\n\n" +
    "These past days have been really hard for me. I miss you every night. You are the one that I think about whenever I go to work. I kept checking my phone if you left a message or even a call. I am always so excited to talk to you whenever you message me. Even when playing games with you I am so happy and excited even though you don't want to be in the call. I need to earn all of those things back, I know.\n\n" +
    "But every day, I am doing my best to improve on myself. And my love for you is that one that drives me to do all those things. I want to be a better person not just for me, but especially to be a better man for you. I reflect on the things that I need to improve on, things that I need to change about myself to be the partner you deserve. I talked to your mom about how much I miss you and I love you. And she told me to never give up. And yes, I will never give up. I will never get tired of waiting. I will never get tired of loving you.\n\n" +
    "And though our past relationship was not perfect, it was sure beautiful. I taught me a lot how to be better, to be become a better man for you. How to understand things. How to provide you with what you need and not with what I want.\n\n" +
    "Now I will wait. I will not stop loving you. Even if I am tempted to give you things, to message you every time. To say that I love you and I miss you, I will be patient. I will gonna take it from that start. I will be gentle and patient. Slowly building my way back to your heart. And I will always be here for you when you need someone. And when you are ready, when you give me that chance to court you, I promise it will not be the same as the last time. I did not had a chance to court you properly back then. Now, I will court you slowly and gently. Even if it takes months and years, I will never get tired because my love for you is true. Never will you ever feel the pain in our previous relationship. I will make sure that in this new beginning, I will treat you right and love you right. The love that you deserve. Gentle and kind, passionate for each other. And whenever you are ready will you give me the chance to court you? I love you so much and I miss you so much Danica.\n\n" +
    
    "I love you so much Danica and I miss you so much. \n\n" +

    "Forever Yours,\nMark Adrian Santander"
  );

  const handleContentChange = (e) => {
    setLetterContent(e.target.value);
  };

  return (
    <div className="min-h-screen bg-rose-50 p-8 flex flex-col items-center">
        <audio autoPlay loop controls className="mb-4 w-full max-w-2xl">
            <source src="/sound/itolamang.mp3" type="audio/mpeg" />
             Your browser does not support the audio element.
        </audio>
      <div className="max-w-2xl w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-rose-400">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <h1 className="text-2xl font-serif font-bold text-rose-800">My Letter to You</h1>
          </div>
          
          <textarea
            className="w-full h-96 p-4 font-serif text-gray-700 focus:outline-none resize-none"
            value={letterContent}
            onChange={handleContentChange}
            placeholder="Pour your heart out..."
          />
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <button 
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200 transition"
            >
              Go Back
            </button>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBeginning;
