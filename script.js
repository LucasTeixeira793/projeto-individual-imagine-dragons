var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 400) {
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
            albumAtivo = 0;
        }
    
}

function musicasNightVisions(musica){
    if(playMusic.innerHTML == ""){
        imgSingles.style.height = "410px";        
        if(musica == 1){
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 2) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/5qaEfEh1AtSdrdrByCP7qR" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 3) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/7MXlTgQeo3IVlMpLnZuhxc" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 4) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1oQjPp1I7cwVE24JivbhzT" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 5) {
            playMusic.innerHTML = `<iframe src="https://open.spotify.com/embed/track/213x4gsFDm04hSqIUkg88w" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
    }else{
        playMusic.innerHTML = "";
        imgSingles.style.height = "300px";
    }  
}

function musicasSmokeMirrors(musica){
    if(playMusic1.innerHTML == ""){
        estrelas1.style.display = "flex";
        imgSingles1.style.height = "410px";        
        if(musica == 1){
            playMusic1.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2h6HdN3oPr4JijIQV29hv1" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 2) {
            playMusic1.innerHTML = `<iframe src="https://open.spotify.com/embed/track/0ct0vSOkP0IZnbPGiDltCR" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 3) {
            playMusic1.innerHTML = `<iframe src="https://open.spotify.com/embed/track/4IMMdhs18OjvvhDok5mJxW" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 4) {
            playMusic1.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Aiu4fCAEzvXpjmy1HsJxM" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 5) {
            playMusic1.innerHTML = `<iframe src="https://open.spotify.com/embed/track/4odGB283pgwsBUCYmjpXRq" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
    }else{
        playMusic1.innerHTML = "";
        estrelas1.style.display = "none";
        imgSingles1.style.height = "300px";
    }  
}

function musicasEvolve(musica){
    if(playMusic2.innerHTML == ""){
        estrelas2.style.display = "flex";
        imgSingles2.style.height = "410px";        
        if(musica == 1){
            playMusic2.innerHTML = `<iframe src="https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 2) {
            playMusic2.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Qn5zhYkTa37e91HC1D7lb" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 3) {
            playMusic2.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1y3bE5i57eUm3hfLAc7h08" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 4) {
            playMusic2.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1dekgAFF9uTCqLsklDaCWb" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 5) {
            playMusic2.innerHTML = `<iframe src="https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
    }else{
        playMusic2.innerHTML = "";
        estrelas2.style.display = "none";
        imgSingles2.style.height = "300px";
    }  
}

function musicasOrigins(musica){
    if(playMusic3.innerHTML == ""){
        estrelas3.style.display = "flex";
        imgSingles3.style.height = "410px";        
        if(musica == 1){
            playMusic3.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2FY7b99s15jUprqC0M5NCT" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 2) {
            playMusic3.innerHTML = `<iframe src="https://open.spotify.com/embed/track/6Tvzf3VEi16JMhAgOwdt2y" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 3) {
            playMusic3.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2RSHsoi04658QL5xgQVov3" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 4) {
            playMusic3.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2B1fuWoWaYnCXbjYp1gXg5" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
        if (musica == 5) {
            playMusic3.innerHTML = `<iframe src="https://open.spotify.com/embed/track/2bzitsPcImYC6DZWvvLCQi" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        }
    }else{
        playMusic3.innerHTML = "";
        estrelas3.style.display = "none";
        imgSingles3.style.height = "300px";
    }  
}