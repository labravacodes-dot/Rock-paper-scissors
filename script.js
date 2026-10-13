// ==========================================
// Step 1: Translation Dictionary (7 Languages)
// ==========================================
const translations = {
    en: {
        musicPause: "🔊 Pause Music",
        musicPlay: "🎵 Start Music",
        ninjaUnknown: "Ninpo: Mysterious unknown hand sign...?",
        tie: "An equilibrium of a battle, just like your current chakra flow! A bow for a worthy opponent. Next time, I will definitely win, dattebayo!",
        win: (p, c) => `Thumbs up for your win! I admit defeat...for now. Your ${p} triumphs over ${c}!`,
        lose: (p, c) => `Too bad, you lost! Your Next Door Sparring Partner That Always Comes Back Asking For More's ${c} defeats your ${p}. Do not give up! That is the Road to Ninja! 🤌🥷`,
        hokageWin: "🎉 Congrats. The Hokage wants to congratulate you, and invite you to ramen, dattebayo!",
        myobokuLoss: "🐸🦊 Your Next Door Sparring Partner That Always Comes Back Asking For More reached 5 points first! Defeat! Time to head to Mount Myoboku and the Falls of Truth to master Sage Mode—and grab a massive bowl of ramen at Ichiraku for Kurama to nap through!"
    },
    es: {
        musicPause: "🔊 Pausar Música",
        musicPlay: "🎵 Iniciar Música",
        ninjaUnknown: "Ninpo: ¿Misterioso sello de mano desconocido...?",
        tie: "¡Un equilibrio de batalla, al igual que tu flujo de chakra actual! Una reverencia para un digno oponente. ¡La próxima vez definitivamente ganaré, dattebayo!",
        win: (p, c) => `¡Pulgar arriba por tu victoria! Admito la derrota... por ahora. ¡Tu ${p} triunfa sobre ${c}!`,
        lose: (p, c) => `¡Qué mal, perdiste! El ${c} de tu compañero de sparring de al lado que siempre vuelve a pedir más derrota a tu ${p}. ¡No te rindas! ¡Ese es el Camino del Ninja! 🤌🥷`,
        hokageWin: "🎉 ¡Felicidades! ¡El Hokage quiere felicitarte e invitarte a ramen, dattebayo!",
        myobokuLoss: "🐸🦊 ¡Tu compañero de sparring de al lado llegó a 5 puntos primero! ¡Derrota! ¡Es hora de ir al Monte Myoboku y a las Cascadas de la Verdad para dominar el Modo Sabio—y comer un tazón gigante de ramen en Ichiraku para que Kurama eche una siesta!"
    },
    ru: {
        musicPause: "🔊 Пауза Музыки",
        musicPlay: "🎵 Включить Музыку",
        ninjaUnknown: "Ниндзюцу: Неизвестный загадочный знак руки...?",
        tie: "Равновесие в битве, прямо как твой текущий поток чакры! Поклон достойному сопернику. В следующий раз я обязательно выиграю, даттебайо!",
        win: (p, c) => `Палец вверх за твою победу! Признаю поражение... пока что. Твой ${p} превосходит ${c}!`,
        lose: (p, c) => `Как жаль, ты проиграл! ${c} твоего соседа-спарринг-партнера, который вечно возвращается за добавкой, побеждает твой ${p}. Не сдавайся! Это Путь Ниндзя! 🤌🥷`,
        hokageWin: "🎉 Поздравляю! Хокаге хочет поздравить тебя и пригласить на рамен, даттебайо!",
        myobokuLoss: "🐸🦊 Твой вечно возвращающийся сосед-спарринг-партнер первым набрал 5 очков! Поражение! Время отправляться на гору Мёбоку и к Водопаду Истины, чтобы овладеть Режимом Мудреца — и съесть огромную миску рамена в Ичираку, пока Курама спит!"
    },
    ja: {
        musicPause: "🔊 音楽一時停止",
        musicPlay: "🎵 音楽再生",
        ninjaUnknown: "忍法：謎の未知の印…？",
        tie: "今のチャクラの流れのようだ！互角の戦いだな。次こそは必ず勝つ、だってばよ！",
        win: (p, c) => `お前の勝ちだ！今のところは敗北を認める…！お前の${p}が${c}を圧倒した！`,
        lose: (p, c) => `残念、敗北だ！いつもおかわりをねだる隣のスパリングパートナーの${c}がお前の${p}を打ち破った。諦めるな！それが忍の道だ！ 🤌🥷`,
        hokageWin: "🎉 おめでとう！火影様がお前を称え、ラーメンをご馳走してくれるそうだ、だってばよ！",
        myobokuLoss: "🐸🦊 いつも挑戦してくる隣のスパリングパートナーが先に5ポイントに到達した！敗北だ！妙木山と真実の滝へ行って仙人モードをマスターし、一楽でクラマが居眠りできるほどの巨大ラーメンを食らう時だ！"
    },
    ko: {
        musicPause: "🔊 음악 일시정지",
        musicPlay: "🎵 음악 재생",
        ninjaUnknown: "닌술: 알 수 없는 미지의 손 인가...?",
        tie: "현재 차크라 흐름처럼 균형 잡힌 전투다! 가치 있는 상대에게 경례를. 다음에는 내가 반드시 이긴다, dattebayo!",
        win: (p, c) => `승리를 축하한다! 일단은 패배를 인정하지... 네 ${p}가 ${c}를 압도했다!`,
        lose: (p, c) => `아쉽게도 졌다! 자꾸만 찾아와 도전하는 옆집 스파링 파트너의 ${c}가 네 ${p}를 격파했다. 포기하지 마라! 그것이 닌자의 길이다! 🤌🥷`,
        hokageWin: "🎉 축하한다! 호카게님이 너를 축하하며 라멘을 사주겠다고 하신다, dattebayo!",
        myobokuLoss: "🐸🦊 자꾸 찾아오는 옆집 스파링 파트너가 먼저 5점에 도달했다! 패배다! 묘목산과 진실의 폭포로 가서 선인 모드를 마스터하고, 쿠라마가 낮잠 잘 수 있는 거대한 라멘을 먹으러 가자!"
    },
    zh: {
        musicPause: "🔊 暂停音乐",
        musicPlay: "🎵 播放音乐",
        ninjaUnknown: "忍术：神秘的未知结印...？",
        tie: "势均力敌的战斗，就像你当前的查克拉流动一样！向值得尊敬的对手致敬。下次我绝对会赢，dattebayo！",
        win: (p, c) => `为你获胜点赞！我暂且承认失败……你的${p}战胜了${c}！`,
        lose: (p, c) => `太遗憾了，你输了！那个总是纠缠不休的邻居陪练伙伴的${c}击败了你的${p}。绝不要放弃！这就是忍者的道路！ 🤌🥷`,
        hokageWin: "🎉 恭喜！火影大人要亲自祝贺你，并请你吃一碗拉面，dattebayo！",
        myobokuLoss: "🐸🦊 那个总是找你过招的邻居陪练伙伴率先达到了5分！失败了！是时候前往妙木山和真实瀑布掌握仙人模式了——顺便在一乐拉面来碗超大份拉面让九喇嘛呼呼大睡！"
    },
    de: {
        musicPause: "🔊 Musik pausieren",
        musicPlay: "🎵 Musik starten",
        ninjaUnknown: "Ninpo: Mysteriöses unbekanntes Handzeichen...?",
        tie: "Ein ausgeglichener Kampf, genau wie dein aktueller Chakra-Fluss! Eine Verbeugung vor einem würdigen Gegner. Das nächste Mal gewinne ich definitiv, dattebayo!",
        win: (p, c) => `Daumen hoch für deinen Sieg! Ich gebe mich geschlagen... vorerst. Dein ${p} triumphiert über ${c}!`,
        lose: (p, c) => `Schade, du hast verloren! Das ${c} deines ständigen Sparringspartners von nebenan besiegt dein ${p}. Gib nicht auf! Das ist der Weg des Ninjas! 🤌🥷`,
        hokageWin: "🎉 Glückwunsch. Der Hokage möchte dir gratulieren und dich zu Ramen einladen, dattebayo!",
        myobokuLoss: "🐸🦊 Dein ständiger Sparringspartner von nebenan hat zuerst 5 Punkte erreicht! Niederlage! Zeit, zum Berg Myoboku und zu den Wasserfällen der Wahrheit zu reisen, um den Eremiten-Modus zu meistern – und bei Ichiraku eine riesige Schüssel Ramen zu essen, während Kurama ein Schläfchen hält!"
    }
};

let currentLang = 'en';

function changeLanguage(langCode) {
    if (!translations[langCode]) return;
    currentLang = langCode;
    localStorage.setItem('shinobi_lang', langCode);
}

// Auto-load saved language preference on start
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('shinobi_lang') || 'en';
    changeLanguage(savedLang);
});

// ==========================================
// Step 2: Global State & Setup
// ==========================================
console.log("hello, shinobi, dattebayo!");

const backgroundMusic = document.getElementById("bgm");
if (backgroundMusic) {
    backgroundMusic.volume = 0.3;
}
let musicStarted = false;

let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM Elements
const humanScoreDisplay = document.querySelector("#human-score") || document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result") || document.querySelector("#results");
const playerChoiceDisplay = document.querySelector("#player-choice-display");
const computerChoiceDisplay = document.querySelector("#computer-choice-display");
const musicBtn = document.querySelector("#music-btn");

// ==========================================
// Step 3: Get Computer Choice
// ==========================================
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// ==========================================
// Step 4: Play a Single Round
// ==========================================
function playRound(humanChoice) {
    const lang = translations[currentLang];

    if (!musicStarted && backgroundMusic) {
        backgroundMusic.play().then(() => {
            if (musicBtn) musicBtn.textContent = lang.musicPause;
        }).catch(error => console.log("Audio play error:", error));
        musicStarted = true;
    }

    if (humanScore >= winningScore || computerScore >= winningScore) {
        return;
    }

    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    if (playerChoiceDisplay) playerChoiceDisplay.textContent = humanChoice;
    if (computerChoiceDisplay) computerChoiceDisplay.textContent = computerChoice;

    // Shinobi Jutsu logs
    if (humanChoice === "rock") {
        console.log("Ninpo: Rokku no Jutsu!");
    } else if (humanChoice === "paper") {
        console.log("Ninpo: Kami no Jutsu!");
    } else if (humanChoice === "scissors") {
        console.log("Ninpo: Hasami no Jutsu!");
    } else {
        console.log(lang.ninjaUnknown);
    }

    let message = "";

    if (humanChoice === computerChoice) {
        message = lang.tie;
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = lang.win(humanChoice, computerChoice);
    } 
    else {
        computerScore++;
        message = lang.lose(humanChoice, computerChoice);
    }

    if (humanScoreDisplay) humanScoreDisplay.textContent = humanScore;
    if (computerScoreDisplay) computerScoreDisplay.textContent = computerScore;
    if (roundResultDisplay) roundResultDisplay.textContent = message;

    if (humanScore === winningScore) {
        if (roundResultDisplay) roundResultDisplay.textContent = lang.hokageWin;
    } else if (computerScore === winningScore) {
        if (roundResultDisplay) roundResultDisplay.textContent = lang.myobokuLoss;
    }
}

// ==========================================
// Step 5: Event Listeners for UI Buttons
// ==========================================
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

if (rockBtn) rockBtn.addEventListener("click", () => playRound("rock"));
if (paperBtn) paperBtn.addEventListener("click", () => playRound("paper"));
if (scissorsBtn) scissorsBtn.addEventListener("click", () => playRound("scissors"));

// ==========================================
// Step 6: Event Listeners for Background Music Toggle
// ==========================================
if (musicBtn && backgroundMusic) {
    musicBtn.addEventListener("click", () => {
        const lang = translations[currentLang];
        if (backgroundMusic.paused) {
            backgroundMusic.play().then(() => {
                musicBtn.textContent = lang.musicPause;
            }).catch(error => console.log("Audio play error:", error));
        } else {
            backgroundMusic.pause();
            musicBtn.textContent = lang.musicPlay;
        }
    });
}