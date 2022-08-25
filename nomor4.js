function determineKabisat(year){
    if ((year % 4 ===0) && (year%100 !==0) || (year % 400 ===0)){
        console.log("Kabisat");
    }  else {
        console.log("Bukan Kabisat");
    }
}

determineKabisat(1900);
determineKabisat(2000);
determineKabisat(2001);
determineKabisat(2016);
determineKabisat(2012);