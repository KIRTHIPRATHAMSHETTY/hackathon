import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from "../data.json";
import SignUp from './SignUp';
// Replace with your actual OpenWeatherMap API key
const API_KEY = '9a34b8e2ff4c8ab44d30c03ed5f22013';

const getWeather = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const Main = () => {
  const [data] = useState(Data);
  const [weather, setWeather] = useState(null);
  const [manualWeather, setManualWeather] = useState('');
  const [icon, setIcon] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); // Moved here

  const weatherVideos = {
    clear: `${process.env.PUBLIC_URL}/videos/clear.gif`,
    rain: `${process.env.PUBLIC_URL}/videos/rain.gif`,
    clouds: `${process.env.PUBLIC_URL}/videos/clouds.gif`,
    snow: `${process.env.PUBLIC_URL}/videos/snow.gif`,
    thunderstorm: `${process.env.PUBLIC_URL}/videos/thunderstorm.gif`,
    drizzle: `${process.env.PUBLIC_URL}/videos/drizzle.gif`,
    mist: `${process.env.PUBLIC_URL}/videos/mist.gif`,
    haze: `${process.env.PUBLIC_URL}/videos/haze.gif`,
    fog: `${process.env.PUBLIC_URL}/videos/fog.gif`,
    smoke: `${process.env.PUBLIC_URL}/videos/smoke.gif`,
    dust: `${process.env.PUBLIC_URL}/videos/dust.gif`,
    sand: `${process.env.PUBLIC_URL}/videos/sand.gif`,
    ash: `${process.env.PUBLIC_URL}/videos/ash.gif`,
    squall: `${process.env.PUBLIC_URL}/videos/squall.gif`,
    tornado: `${process.env.PUBLIC_URL}/videos/tornado.gif`,
  };

  const updateTheme = (weatherCondition) => {
    const weatherColor = {
      clear: '#FFD700',
      rain: '#00BFFF',
      clouds: '#A9A9A9',
      snow: '#ADD8E6',
      thunderstorm: '#8B0000',
      drizzle: '#4682B4',
      mist: '#D3D3D3',
      haze: '#708090',
      fog: '#C0C0C0',
      smoke: '#696969',
      dust: '#D2B48C',
      sand: '#EDC9AF',
      ash: '#BEBEBE',
      squall: '#778899',
      tornado: '#800000',
    };

    document.body.style.backgroundColor = weatherColor[weatherCondition] || '#FFFFFF';
    setWeather(weatherCondition);
  };

  const fetchWeather = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const data = await getWeather(position.coords.latitude, position.coords.longitude);
        if (data) {
          const weatherCondition = data.weather[0].main.toLowerCase();
          setWeather(weatherCondition);
          setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
          updateTheme(weatherCondition);
        }
      }, () => {
        if (manualWeather) {
          updateTheme(manualWeather.toLowerCase());
        }
      });
    } else if (manualWeather) {
      updateTheme(manualWeather.toLowerCase());
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [manualWeather]);

  const handleManualWeatherChange = (e) => {
    const inputWeather = e.target.value.toLowerCase();
    setManualWeather(inputWeather);
    updateTheme(inputWeather);
  };

  if (!data) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const videoSrc = weather ? weatherVideos[weather] : '';

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <div className="text-gray-900 min-h-screen flex flex-col p-8 relative">
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
        />
      )}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <p className="text-3xl font-bold">Current Weather: {weather || 'Manual Entry'}</p>
          {icon && <img src={icon} alt="Weather Icon" className="ml-4 w-16 h-16" />}
        </div>

  
  <button className='text-lg rounded p-2 my-5 bg-gray-600 text-white' onClick={handleSignUpClick}>SIGN UP</button><br></br>
        {/* Communication Channels Section */}
        <section id="communication" className="mb-12">
       
          <h2 className="text-3xl font-semibold text-brown-700 mb-6">
            Communication Channels 
          
             {/* Conditionally render SignUp component */}
        {showSignUp && <SignUp />}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.communicationChannels.map(channel => (
              <div key={channel.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-500 mb-4">{channel.name}</h3>
                <p className="text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Disasters Section */}
        <section id="disasters" className="mb-12">
          <h2 className="text-3xl font-semibold text-brown-700 mb-6">Disasters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.disasters.map(disaster => (
              <div key={disaster.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src={process.env.PUBLIC_URL + disaster.image} 
                  alt={disaster.type} 
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-bold text-green-500 mb-4">{disaster.type}</h3>
                <p className="text-gray-600 mb-4">{disaster.description}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Preparation Tips:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {disaster.preparationTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Response:</h4>
                <p className="text-gray-600">{disaster.response}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Resources Section */}
        <section id="resources">
          <h2 className="text-3xl font-semibold text-brown-700 mb-6">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.educationResources.map(resource => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-500 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
