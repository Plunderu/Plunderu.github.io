const leaderBoardEl = document.querySelector("#leaderBoard")


function allLagring() {

    let arkiv = []
    let keys = Object.keys(localStorage)

    let key

    for (let i = 0; key = keys[i]; i++) { //Dette må skjønnes
        arkiv.push( [key, Number(localStorage.getItem(key))]);
    }

    return arkiv;
}

let brukerArr = allLagring()

//write a function to sort a two-dimensinal array by the second element

function sorter(array) {
    array.sort(function(a, b) {
        return b[1] - a[1];
     });
    
    }
    
    sorter(brukerArr)
    
    console.log(brukerArr)

    for(let i = 0; i<brukerArr.length && i<20;i++){ //Legger til de 20 beste poengene i tabellen. 
        leaderBoardEl.innerHTML += 
        `<tr>
            <td id="plass">${i+1}</td>
            <td>${brukerArr[i][0]}</td>
            <td>${brukerArr[i][1]}</td>
        </tr>`  
    }






