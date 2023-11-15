let h2 = document.querySelectorAll('h2')


h2.forEach((item)=>{
    let count = 0;
    function counter() {
        count++
        item.innerHTML = count
    
        if(count >=  item.dataset.number){
            clearInterval(stop)
        }
    
    }
    let stop = setInterval(() => {
        counter()
    }, item.dataset.time)
    
})

