let isScore = [5,6,7,8,9,10,11,12,13,14,15];

const interval = setInterval(function(){
    console.log(isScore.shift());
    if(isScore.length == 0) clearInterval(interval);
},1000);