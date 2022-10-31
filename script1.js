


function getStatistic (mas){
    let chet = 0
    let nechet = 0
    let nul = 0
    
    for (let i=0; i<mas.length; i++) {
        if (typeof mas[i] === 'number' && !isNaN(mas[i])) {
            if (mas[i]%2===0) {
                chet += 1
            }
            else{
                if (mas[i]%2===1) {
                    nechet += 1
                }
                else {
                    nul += 1
                }
            }
        }
    }
    
    console.log('чётные - ', chet)
    console.log('нечётные - ', nechet)
    console.log('ноль - ', nul)  
}

getStatistic([3,'fre', 32, 344, NaN])
getStatistic([5,'fre', 56, 'tr', NaN])
getStatistic([3,'fre', 'wefds', 344, NaN])