function login(){
player_1_name = document.getElementById("player1_name_input").value;
player_2_name = document.getElementById("player2_name_input").value;
localStorage.setItem("Player 1",player_1_name);
localStorage.setItem("Player 2",player_2_name);
window.location = "game_page.html";
}
