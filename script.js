const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Dream big and dare to fail.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Not all who wander are lost.",
    "The only person you are destined to become is the person you decide to be.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "If you want to fly give up everything that weighs you down.",
    "If you don’t like the road you’re walking, start paving another one.",
    "Your life is your message to the world. Make it inspiring.",
    "No one can make you feel inferior without your consent.",
    "Turn your wounds into wisdom.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The secret of getting ahead is getting started.",
    "Setting goals is the first step in turning the invisible into the visible.",
    "You are never too old to set another goal or to dream a new dream.",
    "You are enough just as you are.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "The only place where success comes before work is in the dictionary.",
    "What seems to us as bitter trials are often blessings in disguise.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is not in what you have, but who you are.",
    "You miss 100% of the shots you don’t take.",
    "If you want to achieve greatness stop asking for permission.",
    "It’s not about ideas. It’s about making ideas happen.",
    "Success usually comes to those who are too busy to be looking for it.",
    "You have to learn the rules of the game. And then you have to play better than anyone else.",
    "The future depends on what you do today.",
    "It always seems impossible until it’s done.",
    "Start where you are. Use what you have. Do what you can."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = `"${quotes[randomIndex]}"`;
}


generateQuote();
