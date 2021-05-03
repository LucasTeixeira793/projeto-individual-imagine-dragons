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

var albumAtivo = 0;
var numAlbum = 0;
var nomeMusica = "";

function stopMusic(){
    playMusic.innerHTML = "";
    wave.style.display = "none";
    musicaHeader.innerHTML = "";
}

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
    }  
}