const greetings = ["안녕하세요!", "Hello!", "Bonjour!", "Hola!", "こんにちは!"];
const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
const reset = '\x1b[0m';

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayColorfulGreeting() {
    const greeting = getRandomItem(greetings);
    const color = getRandomItem(colors);
    console.log(`${color}🌟 ${greeting} Welcome to Claude Code! 🚀${reset}`);
}

function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ko-KR');
    console.log(`⏰ 현재 시간: ${timeString}`);
}

function generateRandomQuote() {
    const quotes = [
        "코딩은 창조의 예술이다 🎨",
        "버그는 기능이 될 수 있다 🐛➡️✨",
        "좋은 코드는 시를 읽는 것과 같다 📖",
        "오늘도 멋진 코딩하세요! 💪"
    ];
    console.log(`💭 ${getRandomItem(quotes)}`);
}

displayColorfulGreeting();
showCurrentTime();
generateRandomQuote();

setInterval(() => {
    console.log("✨ 계속 작업 중...");
}, 5000);
