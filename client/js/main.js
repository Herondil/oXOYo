console.log('hello world');
let socket; 
socket = io.connect();
let playerID = 0;

socket.on('playerNumber',function(data)
{
	console.log(data)

	console.log("Vous êtes le Joueur " + data.ball)
	playerID = data.ball;
	/*game.load.script("control_player"+data.ball+".js", "../Dual_Mobile_2/client/js/control_player"+data.ball+".js");*/
	console.log("Load player " + data.ball);
	let control = ""; 
        if(playerID == 1)
            {control = "↑ et ↓"}
        else if(playerID)
            {control = "← et →"}

        let controlText = game.add.text(15,75, "Vos contrôles sont : "+control, {font: "36px Arial", fill: "#fff"});
        controlText.fixedToCamera = true;
});
socket.on('startGame',function()
{
	console.log("game has started")
	/*startGame = true;*/
	socket.emit('gameStarted')
})
socket.on('disconnection'),function()
{
	startGame = false;
}