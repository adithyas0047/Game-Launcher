document.getElementById("game_Path").addEventListener("submit", (event) => {
  event.preventDefault();

  const game = {
    id: Date.now(),
    iconPath: document.getElementById("iconPath").value,
    gamePath: document.getElementById("gamePath").value,
    gameName: document.getElementById("gameName").value,
  };

  const games = JSON.parse(localStorage.getItem("games")) || [];

  games.push(game);

  localStorage.setItem("games", JSON.stringify(games));

  alert("game added");
  window.location.href = "index.html";
});
