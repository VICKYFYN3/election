import React, { useState, useEffect } from "react";

const quotes = [
    "Great teams don’t just happen—they are built through passion and dedication. 🏆",
    "Code, compete, conquer—BUCC is where innovation meets sportsmanship. 💻⚽",
    "In sports and tech, consistency beats intensity. Keep pushing! 🔥",
    "The best way to predict the future is to create it. – Alan Kay 🚀",
    "Champions train. Losers complain. Which one are you? 💪",
    "Technology and sports both require the same mindset—practice, adapt, and win. 🏅",
    "BUCC isn’t just a club—it’s a movement. Let’s build the future together! 🤝",
    "No FineCountry, No Sports Director! Make the right choice. 🏆🔥",
    "The strength of the team is each individual. The strength of each individual is the team. – Phil Jackson 🏀",
    "Every line of code and every step on the field takes us closer to greatness. 👨‍💻⚽",
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke 💯",
    "BUCC sports + innovation = a future we can all be proud of! 🔥",
    "From gaming tournaments to the football field—we play to win! 🎮⚽",
    "Stay FIT, Stay INSPIRED, Stay NEUTRAL, Stay ENERGIZED – Stay FINE with FineCountry! 💪",
    "Esports or athletics, we dominate both. Join the movement! 🎮🏆",
    "The best way to lead is by example—watch me take BUCC to the next level! 🌟"
];


const RandomQuotes = () => {
    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }, 3800); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 text-center font-semibold text-lg italic mb-[-40px]">
            "{quote}"
        </div>
    );
};

export default RandomQuotes;
