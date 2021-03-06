var albumAtivo = 0;
var numAlbum = 0;
var nomeMusica = "";
var numMusicaAtiva = 0;
var comentarioAtivo = 0;
var usuarioLogado = sessionStorage.getItem('logado');
var navbar;

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
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
} else {
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
    <li><a href="index.html#albuns">Álbuns</a></li>
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
    <li><a href="index.html#albuns">Álbuns</a></li>
    <li><a href="index.html#novidades">Notícias</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="estatisticas.html">Ranking</a></li>

    <!-- Logado -->
    <li id="navbarLogado" style="font-family: Monserrat; cursor: pointer;"><b onclick="mostrarPerfil()">Perfil</b></li>
    <li class="navbarLogado" style="font-family: Monserrat; cursor: pointer;"><a onclick="logoff()"><b>Sair</b></a></li>
</ul>
`;

var comentariosLogado = `
        <div class="comentarios-cabecalho">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-times" onclick="abrirComentario()" id="idFecharComentarios" aria-hidden="true"></i>
                </div>
                <div class="col-11">
                    <span>Comentários: <b id="nomeMusicaComent"></b></span>
                </div>
            </div>
        </div>
        <div class="comentarios_conteudo" id="comentarios_conteudo">
        </div>
        <div class="comentarios-rodape">
            <form id="form_publicar" method="post" onsubmit="return publicar()">
                <div class="row">
                    <div class="col-10">
                        <input type="text" name="inputComentario" id="inputComentario" maxlength="200" placeholder="Digite seu comentário aqui...">
                    </div>
                    <div class="col-2 display-flex">
                        <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </form>
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


function stopMusic() {
    playMusic.innerHTML = "";
    wave.style.display = "none";
    musicaHeader.innerHTML = "";
    fecharComentario();
}

function mostrarPerfil() {
    sectionModalPerfil.style.display = 'flex';
    nomeUserModal.innerHTML = sessionStorage.getItem('nome');
    idUserModal.innerHTML = sessionStorage.getItem('id');
    emailUserModal.innerHTML = sessionStorage.getItem('email');
    nicknameUserModal.innerHTML = sessionStorage.getItem('nickname');
}

function esconderPerfil() {
    sectionModalPerfil.style.display = 'none';
}

/* ---------------------------------------------------------------------------------- */
/* Albuns */
/* ---------------------------------------------------------------------------------- */

function albuns(album) {
    // alert(`Album: ${album}, Numalbum: ${numAlbum}`)
    if (albumAtivo == 0) {
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
    else {
        idAlbumNightVisions.style.transform = "scale(1)";
        idAlbumSmoke.style.transform = "scale(1)";
        idAlbumEvolve.style.transform = "scale(1)";
        idAlbumOrigins.style.transform = "scale(1)";
        nightvisions.style.display = "none";
        smokeMirrors.style.display = "none";
        estrelas.style.display = "none";
        evolve.style.display = "none";
        origins.style.display = "none";
        playMusic.innerHTML = "";
        musicaHeader.innerHTML = "";
        wave.style.display = "none";
        albumAtivo = 0;
        fecharComentario();
    }

}

function musicasNightVisions(musica) {
    numMusicaAtiva = musica;
    if (playMusic.innerHTML == "") {
        if (musica == 1) {
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
        calcularMediaEstrelas(numMusicaAtiva);
        wave.style.display = "flex";
        nomeMusicaEstrelas.innerHTML = nomeMusica;
        musicaHeader.innerHTML = nomeMusica;
        nomeMusicaComent.innerHTML = nomeMusica;
        obterPublicacoes();
        abrirComentario();
    } else {
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas.style.display = "none";
        fecharComentario();
        ultimaAvaliacao = 0;
    }
}

function musicasSmokeMirrors(musica) {
    numMusicaAtiva = musica + 5;
    if (playMusic.innerHTML == "") {
        if (musica == 1) {
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
        calcularMediaEstrelas(numMusicaAtiva);
        estrelas.style.display = "flex";
        nomeMusicaEstrelas.innerHTML = nomeMusica;
        musicaHeader.innerHTML = nomeMusica;
        nomeMusicaComent.innerHTML = nomeMusica;
        obterPublicacoes();
        abrirComentario();
    } else {
        musicaHeader.innerHTML = "";
        wave.style.display = "none";
        playMusic.innerHTML = "";
        estrelas.style.display = "none";
        fecharComentario();
        ultimaAvaliacao = 0;
    }
}

function musicasEvolve(musica) {
    numMusicaAtiva = musica + 10;
    if (playMusic.innerHTML == "") {
        if (musica == 1) {
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
        calcularMediaEstrelas(numMusicaAtiva);
        estrelas.style.display = "flex";
        nomeMusicaEstrelas.innerHTML = nomeMusica;
        musicaHeader.innerHTML = nomeMusica;
        nomeMusicaComent.innerHTML = nomeMusica;
        obterPublicacoes();
        abrirComentario();
    } else {
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas.style.display = "none";
        fecharComentario();
        ultimaAvaliacao = 0;
    }
}

function musicasOrigins(musica) {
    numMusicaAtiva = musica + 15;
    if (playMusic.innerHTML == "") {
        if (musica == 1) {
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
        calcularMediaEstrelas(numMusicaAtiva);
        estrelas.style.display = "flex";
        nomeMusicaEstrelas.innerHTML = nomeMusica;
        musicaHeader.innerHTML = nomeMusica;
        nomeMusicaComent.innerHTML = nomeMusica;
        obterPublicacoes();
        abrirComentario();
    } else {
        wave.style.display = "none";
        musicaHeader.innerHTML = "";
        playMusic.innerHTML = "";
        estrelas.style.display = "none";
        fecharComentario();
        ultimaAvaliacao = 0;
    }
}


/* ---------------------------------------------------------------------------------- */
/* Estrelas */
/* ---------------------------------------------------------------------------------- */

var ultimaAvaliacao = 0;

function mostrarEstrelas(mediaAvaliacoes) {
    estrelaUnica.innerHTML = "";
    var contador = 1;
    var media = mediaAvaliacoes[0];
    media = Number(media[0].media);
    avaliacao.innerHTML = media.toFixed(1);
    media = media.toFixed(0);
    while (contador <= 5) {
        if (contador <= media) {
            estrelaUnica.innerHTML += `<i class="fa fa-star" id="iconeEstrela${contador}" onclick="adicionarEstrelas(${contador})" aria-hidden="true"></i>`;
        } else {
            estrelaUnica.innerHTML += `<i class="fa fa-star-o" id="iconeEstrela${contador}" onclick="adicionarEstrelas(${contador})" aria-hidden="true"></i>`;
        }
        contador++;
    }
    for (var contador = 1; contador <= ultimaAvaliacao; contador++) {
        document.getElementById(`iconeEstrela${contador}`).style.color = '#ff8100';
    }
}

function adicionarEstrelas(estrela) {

    if (usuarioLogado == 1) {
        var idUsuario = Number(sessionStorage.getItem('id'));

        console.log("entrei em adicionarEstrelas!");

        fetch(`/avaliacoes/cadastrar/${numMusicaAtiva}/${idUsuario}/${estrela}`).then((resposta) => {
            if (resposta.ok) {

                for (var contador = 1; contador <= estrela; contador++) {
                    document.getElementById(`iconeEstrela${contador}`).style.color = '#ff8100';
                }
                var contador = 0;
                ultimaAvaliacao = estrela;
                calcularMediaEstrelas(numMusicaAtiva);


            } else {
                obterPublicacoes();
                console.log("Erro ao publicar!");
                console.log(resposta);
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        });

        return false;

    } else {
        alert("Faça login para poder avaliar esta música");
        window.location.href = "login.html";
    }
}

function calcularMediaEstrelas(musicaAtiva) {
    var mediaAvaliacoes = 0;

    fetch(`/avaliacoes/${musicaAtiva}`)
        .then((resposta) => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    mediaAvaliacoes = resposta;
                    mostrarEstrelas(mediaAvaliacoes);

                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
                return mediaAvaliacoes;
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção das publicações: ${error.message}`);
        });


}

function cadastrarAvaliacao(estrela) {
    alert("essa função não existe mais");
}

/* ---------------------------------------------------------------------------------- */
/* Notícias */
/* ---------------------------------------------------------------------------------- */

var maisNoticiaAtiva = false;
function verMaisNoticias() {
    if (maisNoticiaAtiva == false) {
        antigas.style.display = 'block';
        buttonVerMaisNoticias.style.display = 'none';
        buttonVerMenosNoticias.style.display = 'block';
        maisNoticiaAtiva = true;
    } else {
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

function publicar() {
    console.log("entrei!");
    var formulario = new URLSearchParams(new FormData(form_publicar));
    var idUsuario = Number(sessionStorage.getItem("id"));

    if (inputComentario.value == "") {
        alert("Escreva um comentário");
    } else {
        fetch(`/comentarios/publicar/${idUsuario}/${numMusicaAtiva}`, {
            method: "POST",
            body: formulario,
        }).then((resposta) => {
            if (resposta.ok) {
                inputComentario.value = "";
                obterPublicacoes();
            } else {
                console.log("Erro ao publicar!");
                console.log(resposta);
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        });
    }

    return false;
}

function atualizarFeed(publicacoes) {
    var feed = document.getElementById("comentarios_conteudo");
    feed.innerHTML = "";
    for (let i = 0; i < publicacoes[0].length; i++) {
        var publicacao = publicacoes[0];

        feed.innerHTML += `
            <div class="comentario-unico">
                <div class="row">
                    <div class="col-10">
                        <span id="nickname" class="nickname">@${publicacao[i].nickname}</span><br>
                        <span id="msg">${publicacao[i].comentario}</span>
                    </div>
                    <div class="col-2">
                        <div class="centralizar" onclick="curtir(${publicacao[i].idComentario})" style="cursor: pointer;">
                            <div>
                                <i class="fa fa-heart-o" id="coracao${publicacao[i].idComentario}" aria-hidden="true"></i><br>
                                <center>
                                    <span id="ContadorCurtidas${publicacao[i].idComentario}">${publicacao[i].curtidas}</span>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        mudarLike(publicacao[i].idComentario);
    }
}

function obterPublicacoes() {
    fetch(`/comentarios/${numMusicaAtiva}`)
        .then((resposta) => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    atualizarFeed(resposta);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção das publicações: ${error.message}`);
        });
}



/* ---------------------------------------------------------------------------------- */
/* Cadastro */
/* ---------------------------------------------------------------------------------- */

var valNome = 0;
var valNick = 0;
var valEma = 0;
var valsen = 0;

function validar(campo) {
    var nomeCadastro = inputNomeCadastro.value;
    var nicknameCadastro = inputNicknameCadastro.value;
    var emailCadastro = inputEmailCadastro.value;
    var senhaCadastro = inputSenha.value;
    var confirmaCadastro = inputConfirmaSenha.value;
    switch (campo) {
        case 'nome':
            if (nomeCadastro.length < 3) {
                inputNomeCadastro.style.borderBottom = '2px solid red';
                valNome = 0;
            }
            else {
                valNome = 1;
                inputNomeCadastro.style.borderBottom = '2px solid #0077ff';
            }

            break;

        case 'nickname':
            if (nicknameCadastro < 4 || nicknameCadastro.indexOf(' ') != -1) {
                inputNicknameCadastro.style.borderBottom = '2px solid red';
                valNick = 0;
            } else {
                valNick = 1;
                inputNicknameCadastro.style.borderBottom = '2px solid #0077ff';
            }
            break;

        case 'email':
            if (emailCadastro.length < 4 || emailCadastro.indexOf(' ') != -1 || emailCadastro.indexOf('@') == -1 || emailCadastro.indexOf('.com') == -1) {
                inputEmailCadastro.style.borderBottom = '2px solid red';
                valEma = 0;
            } else {
                valEma = 1;
                inputEmailCadastro.style.borderBottom = '2px solid #0077ff';
            }
            break;

        case 'senha':
            if (senhaCadastro.length < 6) {
                inputSenha.style.borderBottom = '2px solid red';
            } else {
                inputSenha.style.borderBottom = '2px solid #0077ff';
            }
            break;

        case 'confirma':
            if (confirmaCadastro != senhaCadastro || confirmaCadastro.length < 6) {
                inputSenha.style.borderBottom = '2px solid red';
                inputConfirmaSenha.style.borderBottom = '2px solid red';
                valSen = 0;
            } else {
                inputSenha.style.borderBottom = '2px solid #0077ff';
                inputConfirmaSenha.style.borderBottom = '2px solid #0077ff';
                valSen = 1;
            }
            break;
        default:
            alert('deu erro')
            break;
    }
    desbloquearBotao();

}

function desbloquearBotao() {
    if (valNome == 1 && valNick == 1 && valEma == 1 && valSen == 1) {
        document.getElementById("btn_entrar").disabled = false;
    } else {
        document.getElementById("btn_entrar").disabled = true;
    }
}

function cadastrar() {
    var senhaCadastro = inputSenha.value;
    var confirmaSenhaCadastro = inputConfirmaSenha.value;

    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {

        if (response.ok) {

            window.location.href = 'login.html';

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            finalizar_aguardar();
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    div_erro.style.display = 'none';
}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
    div_erro.style.display = 'block';
}




/* ---------------------------------------------------------------------------------- */
/* Login */
/* ---------------------------------------------------------------------------------- */

var emailUsuarioSessao = '';
var nomeUsuarioSessao = '';

function validarLogin(campo) {
    var emailLogin = inputEmailLogin.value;
    var senhaLogin = inputSenha.value;
    switch (campo) {
        case 'email':
            if (emailLogin.length < 4 || emailLogin.indexOf(' ') != -1 || emailLogin.indexOf('@') == -1 || emailLogin.indexOf('.com') == -1) {
                inputEmailLogin.style.borderBottom = '2px solid red';
            } else {
                inputEmailLogin.style.borderBottom = '2px solid #0077ff';
            }
            break;

        case 'senha':
            if (senhaLogin.length < 5) {
                inputSenha.style.borderBottom = '2px solid red';
            } else {
                inputSenha.style.borderBottom = '2px solid #0077ff';
            }
            break;

        default:
            alert('deu erro')
            break;
    }

}

function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.id_usuario_meuapp = json.idUser;
                sessionStorage.login_usuario_meuapp = json.email;
                sessionStorage.nickname_usuario_meuapp = json.nickname;
                sessionStorage.nome_usuario_meuapp = json.nomeUser;
                idUsuarioSessao = sessionStorage.id_usuario_meuapp = json.idUser;
                nicknameUsuarioSessao = sessionStorage.nickname_usuario_meuapp = json.nickname;
                emailUsuarioSessao = sessionStorage.login_usuario_meuapp = json.email;
                nomeUsuarioSessao = sessionStorage.nome_usuario_meuapp = json.nomeUser;
                alert('Bem vindo ' + nomeUsuarioSessao);
                sessionStorage.setItem('logado', 1);
                sessionStorage.setItem('id', idUsuarioSessao);
                sessionStorage.setItem('nickname', nicknameUsuarioSessao);
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

function alterarNavbar(toggle) {
    if (toggle == 1) {
        navbar = navbarUserLogado;
        // alert(sessionStorage.getItem('nome'))
        // b_usuario.innerHTML = sessionStorage.getItem('nome');
    } else {
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
    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        validar_sessao();
        b_usuario.innerHTML = nomeUsuarioSessao;
    }

}

function logoff() {
    // finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
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
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}


/* ---------------------------------------------------------------------------------- */
/* SOBRE */
/* ---------------------------------------------------------------------------------- */

function mostrarSobreBanda() {
    if (textoSobreBanda.style.display == '') {
        textoSobreBanda.style.display = 'block';
        botaoLerMais.style.display = 'none';
    } else {
        botaoLerMais.style.display = 'block';
        textoSobreBanda.style.display = '';
    }
}


/* ---------------------------------------------------------------------------------- */
/* Chamado */
/* ---------------------------------------------------------------------------------- */

function abrirChamado() {
    var assuntoChamado = inputAssunto.value;
    var msgChamado = inputMensagemChamado.value;
    if (usuarioLogado == 1) {
        if (assuntoChamado != "" || msgChamado != "") {
            console.log("entrei!");
            var formulario = new URLSearchParams(new FormData(form_chamado));
            var idUsuario = Number(sessionStorage.getItem("id"));
            fetch(`/chamados/publicar/${idUsuario}`, {
                method: "POST",
                body: formulario,
            }).then((resposta) => {
                if (resposta.ok) {
                } else {
                    alert("chamado feito");
                    console.log("Erro ao publicar!");
                    console.log(resposta);
                }
            });
        } else {
            alert("Informações inválidas");
        }
    } else {
        alert("Faça login para abrir um chamado");
    }
}


/* ---------------------------------------------------------------------------------- */
/* Curtida */
/* ---------------------------------------------------------------------------------- */

function curtir(idComentario) {
    console.log("entrei!");
    var idUsuario = Number(sessionStorage.getItem("id"));

    fetch(`/curtidas/curtir/${idUsuario}/${idComentario}`)
    .then((resposta) => {
        if (resposta.ok) {
            obterPublicacoes();
            alert("Deu Bom");
        } else {
            obterPublicacoes();
            console.log("Erro ao publicar!");
            console.log(resposta);
            resposta.text().then((texto) => {
                console.error(texto);
            });
        }
    });

    return false;
}

function mudarLike(idComentario) {
    var idUsuario = Number(sessionStorage.getItem("id"));
    fetch(`/curtidas/${idUsuario}/${idComentario}`)
        .then((resposta) => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    if (resposta[0].curtido == 1) {
                        document
                            .getElementById("coracao" + idComentario)
                            .classList.remove("fa-heart-o");
                        document
                            .getElementById("coracao" + idComentario)
                            .classList.add("fa-heart");
                        document.getElementById("coracao" + idComentario).style.color =
                            "red";

                        document.getElementById(`ContadorCurtidas${idComentario}`).style.color = "red";
                    }
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção das publicações: ${error.message}`);
        });
}