function maxMinAvg(arr) {
    var tempmax = arr[0];
    var tempmin = arr[0];
    var tempavg = 0;
    var arrnew = [];
    for(var a= 0; a<arr.length;a++){
        if(tempmax<[a]){
            max = arr[a];
        }
    }
    for (var b=0;b<arr.length; b++){
        if(tempmin > [b]){
            tempmin = arr[b];
        }
    }
    for(var c=0;c<arr.length;c++){
        tempavg = tempavg + arr[c];
    }
    arrnew[0] = tempmax;
    arrnew[1] = tempmin;
    arrnew[2] = tempavg/arr.length;
    return arrnew; 
}