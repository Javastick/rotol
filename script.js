// data
var jumlah = 0;
var bot = Math.floor(Math.random() * 10)+1;
// meletakan input button ke data
function button(index){
    jumlah = index;
    
    // logika
    
    
    if(jumlah == bot){
        document.getElementById("rotol").src="img/sip.jpeg";
        document.getElementById("capt").innerHTML = "Wihhh bener";
        document.getElementById("jawaban").innerHTML = "Jawabanya " +bot;
        
        document.getElementById("reload").style ="display: block;"
        document.getElementById("maenin").style ="display: block;"
        
    } else if(jumlah<bot){
        document.getElementById("rotol").src="img/ups.jpeg";
        document.getElementById("capt").innerHTML = "Kekecilan cuy.";
    } else if(jumlah>bot){
        document.getElementById("rotol").src="img/turu.jpeg";
        document.getElementById("capt").innerHTML = "Kecilin lagiii";

    }
    
}

// fungsi button mainin
function maen(angka){
    angka = Math.floor(Math.random() * 7)+1;
    
    if(angka == 1){
        document.getElementById("rotol").src = "img/angry.jpeg";
        document.getElementById("capt").innerHTML = "Walaupun nama gue Rotol (Robot Tolol), gue bukan maenan. Tolol!";
        angka = Math.floor(Math.random() * 7)+1;
    }
    else if(angka == 2){
        document.getElementById("rotol").src = "img/cheers.jpeg";
        document.getElementById("capt").innerHTML = "Cheers dulu bang, Lu asik bgt orangnya.";
        
        angka = Math.floor(Math.random() * 7)+1;
    }
    else if(angka == 3){
        document.getElementById("rotol").src = "img/haloh.jpeg";
        document.getElementById("capt").innerHTML = "Halohh... Iya pak bentar lagi mandinya, ini lagi maen.";
        angka = Math.floor(Math.random() * 7)+1;
    }
    else if(angka == 4){
        document.getElementById("rotol").src = "img/laptop.jpeg";
        document.getElementById("capt").innerHTML = "Aku king koding.";
        angka = Math.floor(Math.random() * 7)+1;
    }
    else if(angka == 5){
        document.getElementById("rotol").src = "img/off.jpeg";
        document.getElementById("capt").innerHTML = "Sekitar 50 jam lagi.";
        angka = Math.floor(Math.random() * 7)+1;
    }
    else if(angka == 6){
        document.getElementById("rotol").src = "img/yeay.jpeg";
        document.getElementById("capt").innerHTML = "Stretching dulu ga si, biar otak encer.";
        angka = Math.floor(Math.random() * 7)+1;
    }
}