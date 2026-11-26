const fortunes = ["大吉", "中吉", "小吉", "凶"];

document.getElementById("fortuneButton").addEventListener("click", function() {
    const random = Math.floor(Math.random() * fortunes.length);
    document.getElementById("result").textContent = fortunes[random];
});