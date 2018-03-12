window.onload = function(){
    // Variáveis globais
    let inputKey  = document.getElementById('key');
    let inputMessage  = document.getElementById('message');

    document.getElementById("gerarkey").addEventListener('click', function(event){
        event.preventDefault();
        key = inputKey.value.toUpperCase().trim().replace('J','I').replace(/[^A-Z]/g, '');
        //console.log(key);

        // CREATE GRID FROM KEY
        const alphabet = ['ABCDEFGHIKLMNOPQRSTUVWXYZ'];
        //console.dir(alphabet);
        const keyGrid = [...new Set(`${key}${alphabet}`)];
        console.log(keyGrid);
    
        let grid = [];    
        for(let i = 0; i < keyGrid.length; i += 5){
            grid.push(keyGrid.slice(i, (i+5)));
        }
        console.log(grid);
    });

    document.getElementById("encrypt").addEventListener('click', function(event){
        event.preventDefault();
               
        console.log(inputMessage.value);
        
    });

    document.getElementById("decrypt").addEventListener('click', function(event){
        event.preventDefault();
               
        console.log(inputMessage.value);
        
    });
};