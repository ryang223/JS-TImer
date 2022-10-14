const countDown = (time) => {
    let timer = setinterval(() => {
        time--;
        if(time <= 0) {
            clearInterval(timer)
            console.log('DONE !');
        }
        else {
            console.log(time);
        }
    }, 1000)
}

const randomGame = () => { 
    let num; 
    let times = 0; 
    let timer = setInterval(() => {
        num = Math.random();
        times++
        if (num > .75) {
            clearInterval(timer);
            console.log( `it took ${times} try/tries.`)
        }
    }, 1000)
}