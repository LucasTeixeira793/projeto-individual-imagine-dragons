var albumAtivo = 0;
var numAlbum = 0;
var nomeMusica = "";
var comentarioAtivo = 0;
var usuarioLogado = sessionStorage.getItem('logado');
var navbar;

if (sessionStorage.getItem('logado') == 1) {
    usuarioLogado = 1;
}else{
    usuarioLogado = 0;
}

var navbarUserDeslogado = `
        <a href="index.html#inicio"><img src="img/logo.png" class="logo" alt=""></a>
        <div class="wave-header">
            <center>
                <span id="musicaHeader" onclick="stopMusic()"></span><br>
            </center>
            <img src="img/wave.gif" onclick="stopMusic()" id="wave" alt="">
        </div>
        <ul>
            <li><a href="index.html#inicio">Home</a></li>
            <li><a href="index.html#novidades">Notícias</a></li>
            <li><a href="sobre.html">Sobre</a></li>

            <!-- Deslogado -->
            <li class="navbarDeslogado"><a href="cadastro.html">Cadastrar</a></li>
            <li class="navbarDeslogado"><a href="login.html">Login</a></li>

        </ul>
    `;
var navbarUserLogado = `
    <a href="index.html#inicio"><img src="img/logo.png" class="logo" alt=""></a>
    <div class="wave-header">
        <center>
            <span id="musicaHeader" onclick="stopMusic()"></span><br>
        </center>
        <img src="img/wave.gif" onclick="stopMusic()" id="wave" alt="">
    </div>
    <ul>
        <li><a href="index.html#inicio">Home</a></li>
        <li><a href="index.html#novidades">Notícias</a></li>
        <li><a href="sobre.html">Sobre</a></li>

        <!-- Logado -->
        <li id="navbarLogado" style="font-family: Monserrat; cursor: pointer;">Olá <b id="b_usuario"></b></li>
        <li class="navbarLogado" style="font-family: Monserrat; cursor: pointer;"><a onclick="logoff()">Sair</a></li>
    </ul>
`;
alterarNavbar(usuarioLogado);


/* ---------------------------------------------------------------------------------- */
/* Navbar */
/* ---------------------------------------------------------------------------------- */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
        // document.getElementById("header").style.top = "-120px";
        header.style.background = "rgba(0, 0, 0, 0.98)";
        header.style.transition = "2s";
    } else {
        // document.getElementById("header").style.top = "0";
        header.style.background = "rgba(0, 0, 0, 0.00)";
        header.style.transition = "2s";
    }
}

function stopMusic(){
    playMusic.innerHTML = "";
    wave.style.display = "none";
    musicaHeader.innerHTML = "";
    fecharComentario();
}

/* ---------------------------------------------------------------------------------- */
/* Albuns */
/* ---------------------------------------------------------------------------------- */

function albuns(album){
    // alert(`Album: ${album}, Numalbum: ${numAlbum}`)
    if(albumAtivo == 0){
            numAlbum = album;
            albumAtivo = 1;
            idAlbumNightVisions.style.transform = "scale(0.8)";
            idAlbumSmoke.style.transform = "scale(0.8)";
            idAlbumEvolve.style.transform = "scale(0.8)";
            idAlbumOrigins.style.transform = "scale(0.8)";
            if (album == 1) {
                idAlbumNightVisions.style.transform = "scale(1.2)";
                nightvisions.style.display = "block";            
            }
            if (album == 2) {
                idAlbumSmoke.style.transform = "scale(1.2)";
                smokeMirrors.style.display = "block";
            }
            if (album == 3) {
                idAlbumEvolve.style.transform = "scale(1.2)";
                evolve.style.display = "block";
            }
            if (album == 4) {
                idAlbumOrigins.style.transform = "scale(1.2)";
                origins.style.display = "block";
            }
        }
        else{
            idAlbumNightVisions.style.transform = "scale(1)";
            idAlbumSmoke.style.transform = "scale(1)";
            idAlbumEvolve.style.transform = "scale(1)";
            idAlbumOrigins.style.transform = "scale(1)";
            nightvisions.style.display = "none";
            smokeMirrors.style.display = "none";
            evolve.style.display = "none";
            origins.style.display = "none";
            playMusic.innerHTML = "";
            musicaHeader.innerHTML = "";
            wave.style.display = "none";
            albumAtivo = 0;
            fecharComentario();
        }
    
}

function musicasNightVisions(musica){
    if(playMusic.innerHTML == ""){        
        if(musica == 1){
            playMusic.innerHTML = `<iframe id="iframeMusica" src="https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            estrelas.style.display = "flex";
            nomeMusica = "Radioactive";
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/5qaEfEh1AtSdrdrByCP7qR" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            estrelas.style.display = "flex";
            nomeMusica = "Demons";
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/7MXlTgQeo3IVlMpLnZuhxc" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            estrelas.style.display = "flex";
            nomeMusica = "It's Time";
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1oQjPp1I7cwVE24JivbhzT" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            estrelas.style.display = "flex";
            nomeMusica = "Bleeding Out";
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/213x4gsFDm04hSqIUkg88w" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            estrelas.style.display = "flex";
            nomeMusica = "On the top of the World";
        }
        wave.style.display = "flex";
        musicaHeader.innerHTML = nomeMusica;
    }else{
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas.style.display = "none";
        fecharComentario()
    }  
}

function musicasSmokeMirrors(musica){
    if(playMusic.innerHTML == ""){
        estrelas1.style.display = "flex";
        if(musica == 1){
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2h6HdN3oPr4JijIQV29hv1" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Shots";
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/0ct0vSOkP0IZnbPGiDltCR" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "I Bet My Life";
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/4IMMdhs18OjvvhDok5mJxW" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Gold";
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Aiu4fCAEzvXpjmy1HsJxM" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Smoke and mirrors";
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/4odGB283pgwsBUCYmjpXRq" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Friction";
        }
        wave.style.display = "flex";
        musicaHeader.innerHTML = nomeMusica;
    }else{
        musicaHeader.innerHTML = "";
        wave.style.display = "none";
        playMusic.innerHTML = "";
        estrelas1.style.display = "none";
        fecharComentario()
    }  
}

function musicasEvolve(musica){
    if(playMusic.innerHTML == ""){
        estrelas2.style.display = "flex";
        if(musica == 1){
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Believer";
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Qn5zhYkTa37e91HC1D7lb" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Whatever it takes";
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1y3bE5i57eUm3hfLAc7h08" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Walking the wire";
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1dekgAFF9uTCqLsklDaCWb" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Mouth of the river";
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Thunder";
        }
        wave.style.display = "flex";
        musicaHeader.innerHTML = nomeMusica;
    }else{
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas2.style.display = "none";
        fecharComentario()
    }  
}

function musicasOrigins(musica){
    if(playMusic.innerHTML == ""){
        estrelas3.style.display = "flex";
        if(musica == 1){
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2FY7b99s15jUprqC0M5NCT" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Natural";
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Tvzf3VEi16JMhAgOwdt2y" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Birds";
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2RSHsoi04658QL5xgQVov3" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Bad Liar";
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2B1fuWoWaYnCXbjYp1gXg5" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Boomerang";
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2bzitsPcImYC6DZWvvLCQi" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Zero";
        }
        wave.style.display = "flex";
        musicaHeader.innerHTML = nomeMusica;
    }else{
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas3.style.display = "none";
        fecharComentario()
    }  
}




/* ---------------------------------------------------------------------------------- */
/* Comentários */
/* ---------------------------------------------------------------------------------- */

function abrirComentario(){
    if(comentarioAtivo == 0){
        sessaoComentarios.style.display = "block";
        musicaComentario.innerHTML = nomeMusica;
        sessaoComentarios.style.right = "0";
        comentarioAtivo = 1;
    }else{
        fecharComentario();
    }
}

function fecharComentario(){
    sessaoComentarios.style.right = "-500px";
    comentarioAtivo = 0;
}




/* ---------------------------------------------------------------------------------- */
/* Login */
/* ---------------------------------------------------------------------------------- */

function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
            method: "POST",
            body: formulario
        }).then(resposta => {

            if (resposta.ok) {

                resposta.json().then(json => {

                    sessionStorage.login_usuario_meuapp = json.email;
                    sessionStorage.nome_usuario_meuapp = json.nomeUser;
                    alert('Você está logado');
                    sessionStorage.setItem('logado', 1);
                    window.location.href = 'index.html';
                    alterarNavbar(1);
                });

            } else {
                console.log('Erro de login!');

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizar_aguardar(texto);
                });
            }
    });

        return false;
    }

    function aguardar() {
        btn_entrar.disabled = true;
        // img_aguarde.style.visibility = 'visible';
        div_erro.style.visibility = 'hidden';
    }

    function finalizar_aguardar(resposta) {
        btn_entrar.disabled = false;
        // img_aguarde.style.visibility = 'hidden';
        div_erro.style.visibility = 'visible';
        div_erro.innerHTML = resposta;
    }

    function alterarNavbar(toggle){
        if (toggle == 1) {
            navbar = navbarUserLogado;
        }else{
            navbar = navbarUserDeslogado;
        }
        header.innerHTML = navbar;
    }

    


/* ---------------------------------------------------------------------------------- */
/* Logoff */
/* ---------------------------------------------------------------------------------- */


    let login_usuario;
    let nome_usuario;

    function redirecionar_login() {
        window.location.href = 'login.html';
    }

    function verificar_autenticacao() {
        login_usuario = sessionStorage.login_usuario_meuapp;
        nome_usuario = sessionStorage.nome_usuario_meuapp;
        if (login_usuario == undefined)  {
            redirecionar_login();
        } else {
            b_usuario.innerHTML = "awdawdaddawd";
            validar_sessao();
        }
        
    }

    function logoff() {
        finalizar_sessao();
        sessionStorage.clear();
        redirecionar_login();
    }

    function validar_sessao() {
        fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);    
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            } 
        });    
    }

    function finalizar_sessao() {
        fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
    }