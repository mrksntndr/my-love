import { useNavigate } from 'react-router-dom';

const primaryColor = "#dfc7a7"; 

const HomePage = () => {
  const navigate = useNavigate();
  const pages = ["/our-story", "/photos", "/poetry", "/new-beginning"];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f7f4ef" }}>
      {/* Hero Section */}
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

      {/* Hearts Section */}
      <section id="hearts" className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: primaryColor }}>
            Our Journey Together
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {['Our Story', 'Photos', 'Poetry', 'New Beginning'].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(pages[index])}
                className="flex flex-col items-center transform hover:scale-110 transition duration-300"
              >
                <svg className="w-20 h-20 mb-2" fill={primaryColor} viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-lg font-medium text-gray-700">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section
        id="proposal"
        className="py-32 px-6 text-center"
        style={{ background: "linear-gradient(to right, #c9b293, #dfc7a7)" }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Will You Give Me A Chance To Court You?
          </h2>
          <p className="text-lg text-white max-w-xl mx-auto mb-8 opacity-90">
            When you are ready and when the time is right, I will court you with all my heart. I will be here patiently waiting and loving you.
          </p>
          <button
            className="px-10 py-4 text-xl rounded-full shadow-lg hover:opacity-90 transition"
            style={{ backgroundColor: "#fff", color: primaryColor }}
          >
            Yes, I Will ❤️
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
