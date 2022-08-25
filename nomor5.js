function filmRating (umur){
    if (umur >= 21){
        console.log("DEWASA");
    } else if (umur >= 13){
        console.log("REMAJA");
    } else if (umur >= 9) {
        console.log("BIMBINGAN ORANG TUA");
    } else if (umur < 9){
        console.log("SEMUA USIA");
    }
}

filmRating(15);
filmRating(32);
filmRating(20);