document.addEventListener("DOMContentLoaded", () => {
  const gameList = document.getElementById("gameList");
  const games = JSON.parse(localStorage.getItem("games")) || [];

  gameList.innerHTML = "";

  games.forEach((game) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

    col.innerHTML = `
      <div class="card h-100 border-0 hover-card rounded">
        <div class="card-body ">
          <img src="${game.iconPath || "placeholder.png"}" class="card-img-top" style="height:200px; object-fit:cover;">
          <h5 class="card-title text-center p-2">${game.gameName}</h5>
          <div class="text-center">
            <button class="btn btn-success me-2">Play</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    `;

    const playBtn = col.querySelector(".btn-success");
    playBtn.onclick = () => window.electronAPI.launchGame(game.gamePath);

    const deleteBtn = col.querySelector(".btn-danger");
    deleteBtn.onclick = () => deleteGame(game.id);

    gameList.appendChild(col);
  });
});

function deleteGame(id) {
  let games = JSON.parse(localStorage.getItem("games")) || [];
  games = games.filter((g) => g.id !== id);
  localStorage.setItem("games", JSON.stringify(games));
  window.location.reload();
}
