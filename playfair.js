window.onload = function(){
    // Variáveis globais
    let inputKey  = document.getElementById('key');
    let inputMessage  = document.getElementById('message');
    let grid = [];    
    
    document.getElementById("gerarkey").addEventListener('click', function(event){
        event.preventDefault();
        let key = inputKey.value.toUpperCase().trim().replace('J','I').replace(/[^A-Z]/g, '');
        console.log(key);

        // CREATE GRID FROM KEY
        const alphabet = ['ABCDEFGHIKLMNOPQRSTUVWXYZ'];
        //console.dir(alphabet);
        const keyGrid = [...new Set(`${key}${alphabet}`)];
        console.log(keyGrid);
    
        for(let i = 0; i < keyGrid.length; i += 5){
            grid.push(keyGrid.slice(i, (i+5)));
        }
        console.log(grid);
    });

    document.getElementById("encrypt").addEventListener('click', function(event){
        event.preventDefault();
               
        const message = inputMessage.value.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I').split('').filter(x => x !== ' ');
        //console.log(message);
        const duples = [];
        for(let i = 0; i < message.length; i += 2){
            const dupleCurrent = message.slice(i, i + 2);
            if(dupleCurrent.length !== 2){
                dupleCurrent.push('X');
                duples.push(dupleCurrent);
            } else if(dupleCurrent[0] === dupleCurrent[1]){
                message.splice(i+1,0,'X');
                duples.push(message.slice(i, i + 2));
            } else{
                duples.push(dupleCurrent);
            }
        }

        //console.log(duples);
        
    });

    document.getElementById("decrypt").addEventListener('click', function(event){
        event.preventDefault();
               
        console.log(inputMessage.value);
        
    });
};