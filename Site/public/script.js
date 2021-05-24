var albumAtivo = 0;
var numAlbum = 0;
var nomeMusica = "";
var comentarioAtivo = 0;
var usuarioLogado = sessionStorage.getItem('logado');
var navbar;

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

if (sessionStorage.getItem('logado') == 1) {
    usuarioLogado = 1;
}else{
    usuarioLogado = 0;
}



/* ---------------------------------------------------------------------------------- */
/* Componentes */
/* ---------------------------------------------------------------------------------- */


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
<li id="navbarLogado" style="font-family: Monserrat; cursor: pointer;">Olá <b>${sessionStorage.getItem('nome')}</b></li>
<li class="navbarLogado" style="font-family: Monserrat; cursor: pointer;"><a onclick="logoff()">Sair</a></li>
</ul>
`;

var comentariosLogado = `
<div class="comentarios-cabecalho">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-times" onclick="abrirComentario()" id="idFecharComentarios" aria-hidden="true"></i>
                </div>
                <div class="col-11">
                    <span>Comentários:</span>
                </div>
            </div>
        </div>
        <div class="comentarios-conteudo">
            <div class="comentario-unico">
                <div class="row">
                    <div class="col-10">
                        <span id="nickname" class="nickname">@anonimous123</span><br>
                        <span id="msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus quod earum.</span>
                    </div>
                    <div class="col-2">
                        <div class="centralizar">
                            <div>
                                <i class="fa fa-heart-o" aria-hidden="true"></i><br>
                                <span>15</span>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="comentarios-rodape">
            <div class="row">
                <div class="col-10">
                    <input type="text" placeholder="Digite seu comentário aqui...">
                </div>
                <div class="col-2 display-flex">
                    <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
`;

var comentariosDeslogado = `
<div class="comentarios-cabecalho">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-times" onclick="abrirComentario()" id="idFecharComentarios" aria-hidden="true"></i>
                </div>
                <div class="col-11">
                    <span>Comentários:</span>
                </div>
            </div>
        </div>
        <div class="comentarios-conteudo-deslogado">
            <div class="centralizar" style="margin-top: 40vh;">
                <h3>Faça login ou cadastre-se para continuar:</h3>
            </div>
            <a href=""></a>
            <div class="centralizar" style="margin-top: 20px;">
                <a href="cadastro.html"><button class="btn btn-cadastro">Cadastrar</button></a>
                <a href="login.html"><button class="btn btn-login" style="margin-left: 5px;">Login</button></a>
            </div>
        </div>
`;


/* ---------------------------------------------------------------------------------- */
/* Navbar */
/* ---------------------------------------------------------------------------------- */

alterarNavbar(usuarioLogado);
alterarComentarios(usuarioLogado);



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
            nomeMusica = "Radioactive";
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/5qaEfEh1AtSdrdrByCP7qR" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Demons";
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/7MXlTgQeo3IVlMpLnZuhxc" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "It's Time";
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1oQjPp1I7cwVE24JivbhzT" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "Bleeding Out";
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/213x4gsFDm04hSqIUkg88w" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            nomeMusica = "On the top of the World";
        }
        estrelas.style.display = "flex";
        adicionarEstrelas();
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
/* Estrelas */
/* ---------------------------------------------------------------------------------- */

    var listaAvaliacoes = [4,1];
    function adicionarEstrelas(){
        estrelaUnica.innerHTML = ""
        var contador = 1
        var mediaAvaliacoes = calcularMedia();
        avaliacao.innerHTML = mediaAvaliacoes.toFixed(1);
        mediaAvaliacoes = mediaAvaliacoes.toFixed(0);
        while(contador <= 5){
            if(contador <= mediaAvaliacoes){
                estrelaUnica.innerHTML += `<i class="fa fa-star" id="iconeEstrela${contador}" onclick="cadastrarAvaliacao(${contador})" aria-hidden="true"></i>`;
            }else{
                estrelaUnica.innerHTML += `<i class="fa fa-star-o" id="iconeEstrela${contador}" onclick="cadastrarAvaliacao(${contador})" aria-hidden="true"></i>`;
            }
            contador++;
        }
    }

    function calcularMedia(){
        var mediaAvaliacoes = 0;
        for(var contador = 0; contador < listaAvaliacoes.length - 1; contador++){
            mediaAvaliacoes += listaAvaliacoes[contador];
        }
        mediaAvaliacoes = mediaAvaliacoes /  listaAvaliacoes.length;        
        return mediaAvaliacoes;

    }

    function cadastrarAvaliacao(estrela){
        listaAvaliacoes.push(estrela);
        adicionarEstrelas();    
        for(var contador = 1; contador <= estrela; contador++){
            document.getElementById(`iconeEstrela${contador}`).style.color = '#fdf201';
        }
        var contador = 0;
    }

/* ---------------------------------------------------------------------------------- */
/* Notícias */
/* ---------------------------------------------------------------------------------- */

    var maisNoticiaAtiva = false;
    function verMaisNoticias(){
        if(maisNoticiaAtiva == false){
            antigas.style.display = 'block';
            buttonVerMaisNoticias.style.display = 'none';
            buttonVerMenosNoticias.style.display = 'block';
            maisNoticiaAtiva = true;
        }else{
            antigas.style.display = 'none';
            buttonVerMaisNoticias.style.display = 'block';
            buttonVerMenosNoticias.style.display = 'none';
            maisNoticiaAtiva = false;
        }
    }


/* ---------------------------------------------------------------------------------- */
/* Comentários */
/* ---------------------------------------------------------------------------------- */
var comentarios;

function abrirComentario(){
    if(comentarioAtivo == 0){
        sessaoComentarios.style.display = "block";
        // musicaComentario.innerHTML = nomeMusica;
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

function alterarComentarios(toggle){

    if (toggle == 1) {
        comentarios = comentariosLogado;
        
    }else{
        comentarios = comentariosDeslogado;
    }
    sessaoComentarios.innerHTML = comentarios;

}



/* ---------------------------------------------------------------------------------- */
/* Login */
/* ---------------------------------------------------------------------------------- */

var emailUsuarioSessao = '';
var nomeUsuarioSessao = '';
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
                    emailUsuarioSessao = sessionStorage.login_usuario_meuapp = json.email;
                    nomeUsuarioSessao = sessionStorage.nome_usuario_meuapp = json.nomeUser;
                    alert('Você está logado');
                    sessionStorage.setItem('logado', 1);
                    sessionStorage.setItem('nome', nomeUsuarioSessao);
                    sessionStorage.setItem('email', emailUsuarioSessao);
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
            // alert(sessionStorage.getItem('nome'))
            // b_usuario.innerHTML = sessionStorage.getItem('nome');
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
        alert(teste)
        alert(teste2)
        // login_usuario = sessionStorage.login_usuario_meuapp;
        // nome_usuario = sessionStorage.nome_usuario_meuapp;
        if (login_usuario == undefined)  {
            redirecionar_login();
        } else {
            validar_sessao();
            b_usuario.innerHTML = nomeUsuarioSessao;
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