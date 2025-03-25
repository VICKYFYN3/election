import React, { useState, useRef } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sparkles, Share, Mail, ArrowRight} from 'lucide-react';
import RandomQuotes from './RandomQuotes';

const App = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isNeverHovering, setIsNeverHovering] = useState(false);
  const [showShareMessage, setShowShareMessage] = useState(false);
  const [neverButtonPosition, setNeverButtonPosition] = useState({ top: 0, left: 0 });

  // Create a ref for the platform section
  const platformSectionRef = useRef(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    if (reaction === '🏆' || reaction === '👍') {
      setShowShareMessage(true);
    }
  };

  const moveNeverButton = () => {
    setIsNeverHovering(true);
    const newTop = Math.floor(Math.random() * 100);
    const newLeft = Math.floor(Math.random() * 100);
    setNeverButtonPosition({ top: newTop, left: newLeft });

    // Reset after animation
    setTimeout(() => {
      setIsNeverHovering(false);
    }, 500);
  };

  const openWhatsAppGroup = () => {
    window.open('https://chat.whatsapp.com/DgP2Zmbmh66C5dPy8aCQ26', '_blank');
  };

  // New function to scroll to platform section
  const scrollToPlatform = () => {
    platformSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const shareNow = () => {
    toast.success("Flier downloaded successfully!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium tracking-wide">VOTE FOR BUCC MALE SPORTS DIRECTOR</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Victor Finecountry-Okezie
            </h1>

            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Bringing energy, innovation, and passion to BUCC sports. Let's take Babcock University Computer Club athletics to the next level.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={openWhatsAppGroup}
                className="bg-white cursor-pointer text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full 
                          transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Sparkles className="mr-2" size={20} />
                Support Finecountry
              </button>

              <button
                onClick={scrollToPlatform}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white 
                              font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                My Vision
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="w-full mt-16 bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-2">
                <p className="text-3xl font-bold">3+</p>
                <p className="text-blue-200">Years in BUCC</p>
              </div>
              <div className="p-2">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-blue-200">Sports Events Organized</p>
              </div>
              <div className="p-2">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-blue-200">Commitment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 -mr-32 -mb-16"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full filter blur-3xl opacity-20 -ml-32 -mt-16"></div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bofld text-gray-800 mb-6">Why I'm Running</h2>
              <p className="text-gray-600 mb-6">
                As a passionate member of the Babcock University Computer Club, I've seen the potential for our sports activities to create stronger bonds among members, promote wellness, and build a more vibrant tech community.
              </p>
              <p className="text-gray-600 mb-6">
                My vision is to create inclusive, exciting sports events that bring together tech enthusiasts of all skill levels. From esports tournaments to outdoor activities, I plan to revitalize BUCC's sports culture.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/vicky1.jpg"  
                alt="Victor at BUCC event"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Emoji Reaction Game Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Will You Support My Campaign?</h2>

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Trophy Button */}
              <button
                onClick={() => handleReactionClick('🏆')}
                className={`p-4 text-center rounded-lg text-2xl transition-all duration-300 hover:bg-blue-100 
                          ${selectedReaction === '🏆' ? 'bg-blue-200 animate-bounce' : 'bg-gray-100'}`}
              >
                🏆 <span className="block text-sm mt-1">Of course!</span>
              </button>

              {/* Thumbs Up Button */}
              <button
                onClick={() => handleReactionClick('👍')}
                className={`p-4 text-center rounded-lg text-2xl transition-all duration-300 hover:bg-green-100
                          ${selectedReaction === '👍' ? 'bg-green-200' : 'bg-gray-100'}`}
              >
                👍 <span className="block text-sm mt-1">Why not?</span>
              </button>

              {/* Thinking Button */}
              <button
                onClick={() => handleReactionClick('🤔')}
                className={`p-4 text-center rounded-lg text-2xl transition-all duration-300 hover:bg-yellow-100
                          ${selectedReaction === '🤔' ? 'bg-yellow-200' : 'bg-gray-100'}`}
              >
                🤔 <span className="block text-sm mt-1">Let me think...</span>
              </button>

              {/* Never Button - Moves on hover */}
              <div className="relative">
                <button
                  onMouseEnter={moveNeverButton}
                  className={`p-4 text-center rounded-lg text-2xl transition-all duration-300 bg-gray-100
                            absolute ${isNeverHovering ? 'opacity-50' : 'opacity-100'}`}
                  style={{
                    top: `${neverButtonPosition.top}%`,
                    left: `${neverButtonPosition.left}%`,
                    transform: isNeverHovering ? 'scale(0.9)' : 'scale(1)',
                  }}
                >
                  ❌ <span className="block text-sm mt-1">Never!</span>
                </button>
                <div className="p-4 text-center rounded-lg text-2xl bg-transparent">
                  {isNeverHovering && (
                    <span className="text-sm animate-pulse">You mean "Yes", right? 😆</span>
                  )}
                </div>
              </div>
            </div>

            {/* Response Messages */}
            <div className="min-h-24 text-center">
              {selectedReaction === '🏆' && (
                <div className="p-4 bg-blue-100 rounded-lg animate-pulse">
                  <p className="font-bold text-blue-800">You're amazing! Thank you for your support! 🎉</p>
                </div>
              )}

              {selectedReaction === '👍' && (
                <div className="p-4 bg-green-100 rounded-lg animate-pulse">
                  <p className="font-bold text-green-800">Great choice! I appreciate your support! 🎊</p>
                </div>
              )}

              {selectedReaction === '🤔' && (
                <div className="p-4 bg-yellow-100 rounded-lg">
                  <p className="font-bold text-yellow-800">Take your time... I'll be here! 😊</p>
                  <p className="text-sm mt-2">
                    (Between us though, I know I'm the best candidate for Male Sports Director!)
                  </p>
                </div>
              )}

              {showShareMessage && (
                <div className="mt-4 p-4 bg-purple-100 rounded-lg flex flex-col items-center">
                  <p className="font-bold text-purple-800 mb-3">Share this now!</p>
                  <button
                    onClick={shareNow}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center"
                  >
                    <a
                      href="/flier.png"  // Replace with the correct path to your flyer image
                      download="Fincountry_Flyer.png"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center"
                    >
                      <Share className="mr-2" size={20} />
                      Share with BUCC Members
                    </a>

                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* My Platform Section - Now with ref */}
      <div
        ref={platformSectionRef}
        className="py-16 bg-blue-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Esports Integration</h3>
              <p className="text-gray-700">Organizing competitive gaming events that celebrate both traditional sports and digital competitions, creating opportunities for gamers in BUCC to showcase their skills.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Intra-Departmental Tournaments</h3>
              <p className="text-gray-700">Creating friendly competitions between different computing departments to foster community spirit and healthy competition among BUCC members.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Tech-Fitness Integration</h3>
              <p className="text-gray-700">Introducing innovative ways to combine technology and fitness, such as fitness tracking challenges and tech-powered sports events unique to BUCC.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Help Spread the Word!</h2>
          <p className="text-lg font-semibold text-center mb-10">
            Stay <span className="text-2xl font-bold">F</span>IT, Stay{" "}
            <span className="text-2xl font-bold ">I</span>NSPIRED, Stay{" "}
            <span className="text-2xl font-bold ">N</span>EUTRAL, Stay{" "}
            <span className="text-2xl font-bold ">E</span>NERGIZED – Stay{" "}
            <span className="text-2xl font-bold">FINE</span> with{" "}
            <span className="text-2xl font-bold">FINECOUNTRY!</span>
          </p>


          <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 mb-8">
            <a href="https://api.whatsapp.com/send?text=🏆%20FineCountry%20for%20Sports%20Director?%20🏆%0A%0ANo%20FineCountry,%20No%20Sports%20Director!%20Let’s%20make%20the%20right%20choice!%20💪🔥%0A%0AJoin%20the%20movement%20now:%20https://chat.whatsapp.com/DgP2Zmbmh66C5dPy8aCQ26%0A%0A%23FineCountryForSportsDirector%20%23NoFineCountryNoSportsDirector%20🏅" target="_blank">
              Spread the Word! 🗣️
            </a>

          </button>

      <RandomQuotes />
        </div>
      </div>


    </div>
  );
};

export default App;