const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function(){
    const gridContainer = document.querySelector('.grid-container');
    const bombs = [];
    



    while(bombs.length < 16){
        const newRandomNumber = getRandomNumber(1,100);
        console.log('newRandomNumber', newRandomNumber, typeof newRandomNumber);
        
        if(bombs.includes(newRandomNumber) == false ){
            bombs.push(newRandomNumber);  
        }
        else{
            console.log('DUPLICATO')
        }
    
    }
    console.log('bombs' ,bombs, typeof bombs);

    gridContainer.innerHTML = '';
    

    for(let i = 1 ; i <= 100; i++){
        const cell = document.createElement('div');
        cell.innerHTML ='<span>' + i + '</span>'  ;
        cell.classList.add('cell');


        cell.addEventListener('click', function(){
            const allClickBombs = document.querySelectorAll('.cell.bomb');
            console.log('Bombe Cliccate', allClickBombs.length);
            const allClickedCell = document.querySelectorAll('.cell.click');
                console.log('Punti', allClickedCell.length);
            
            if(
                allClickBombs.length == 0 && allClickedCell.length < (100 -16)
            ){

                if(allClickBombs.length == 0) {
                    const numberInCell = parseInt(this.innerText);
                    

                    if (bombs.includes(numberInCell)== false){
                        this.classList.add('click');
                        if(document.querySelector('.cell.click').length == (100 - 16)){
                            alert('IL TUO PUNTEGGIO = ' + document.querySelectorAll('.cell.click').length);
                        }
                    }
                    else {
                    this.classList.add('bomb');

                    alert('HAI PERSO! IL TUO PUNTEGGIO = ' + allClickedCell.length );
                    }
                }
           

             }

        });
        
    gridContainer.append(cell);
    }
}); 


function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}