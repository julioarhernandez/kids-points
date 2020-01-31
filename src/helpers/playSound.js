import good from "../assets/sounds/good.mp3";
import bad from "../assets/sounds/bad.mp3";

const playSound = (type) => {
    const audio = new Audio(type);
    audio.play();
}

const playGood = () => {
    playSound(good)
}

const playBad = () => {
    playSound(bad)
}

export {playGood, playBad};