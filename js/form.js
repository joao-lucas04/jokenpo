//mensagem de condição do jogo
function mostrar_msg(mensagem) {
    const msg = document.getElementById('mensagem');
    msg.textContent = mensagem;
}

//função caso o jogador escolha pedra
function pedra(){

    //declando as imagens do inicio
    let player_joga = document.getElementById('player_img')
    let CPU_joga = document.getElementById('CPU_img')

    //declando aleatoriamente oque a maquina vai jogar
    var randomDecimal = Math.random();
    var maquina = Math.floor(randomDecimal * 3) + 4; //sorteia um num de 4 a 6
    
    //resultado do jogo da velha, caso o player jogue pedra
    if (maquina===4){
        player_joga.src = "img/"+1+".png";
        CPU_joga.src = "img/"+4+".png";
        mostrar_msg('Empate');
        alert('Empate');

    } else if (maquina===5) {
        player_joga.src = "img/"+1+".png";
        CPU_joga.src = "img/"+5+".png";
        mostrar_msg('Você Perdeu -_-');
        alert('Derrota');

    } else if (maquina===6) {
        player_joga.src = "img/"+1+".png";
        CPU_joga.src = "img/"+6+".png";
        mostrar_msg('Você Ganhou ^.^');
        alert('Vitória!')
    }
}


//mesmo código citado, porém no caso papel
function papel(){

    let player_joga = document.getElementById('player_img')
    let CPU_joga = document.getElementById('CPU_img')

    var randomDecimal = Math.random();
    var maquina = Math.floor(randomDecimal * 3) + 4; 
    
    if (maquina===4){
        player_joga.src = "img/"+2+".png";
        CPU_joga.src = "img/"+4+".png";
        mostrar_msg('Você Ganhou ^.^');
        alert('Vitória!');

    } else if (maquina===5) {
        player_joga.src = "img/"+2+".png";
        CPU_joga.src = "img/"+5+".png";
        mostrar_msg('Empate');
        alert('Empate');

    } else if (maquina===6) {
        player_joga.src = "img/"+2+".png";
        CPU_joga.src = "img/"+6+".png";
        mostrar_msg('Você Perdeu -_-');
        alert('Derrota');
    }
}


function tesoura(){

    let player_joga = document.getElementById('player_img')
    let CPU_joga = document.getElementById('CPU_img')

    var randomDecimal = Math.random();
    var maquina = Math.floor(randomDecimal * 3) + 4; 
    
    if (maquina===4){
        player_joga.src = "img/"+3+".png";
        CPU_joga.src = "img/"+4+".png";
        mostrar_msg('Você Perdeu -_-');
        alert('Derrota');

    } else if (maquina===5) {
        player_joga.src = "img/"+3+".png";
        CPU_joga.src = "img/"+5+".png";
        mostrar_msg('Você Ganhou ^.^');
        alert('Vitória!');

    } else if (maquina===6) {
        player_joga.src = "img/"+3+".png";
        CPU_joga.src = "img/"+6+".png";
        mostrar_msg('Empate');
        alert('Empate');
    }
}




//reiniciar o jogo e atualizar a página
function reiniciar(){
    const recomeca = document.getElementById('player');
    recomeca.reset();
    location.reload();
}





    