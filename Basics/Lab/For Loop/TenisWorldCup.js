function tenis(input) {
    let tournamets = Number(input[0]);
    let startingPoints = Number(input[1]);
    let winningPoints = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        
        let currentStage = input[i];

        switch (currentStage) {
            case 'W': winningPoints += 2000; wins++; break;
            case 'F': winningPoints += 1200; break;
            case 'SF': winningPoints += 720; break;
        }
    }

    let averagePoints = winningPoints / tournamets;

    console.log(`Final points : ${startingPoints + winningPoints}`);
    console.log(`Average points : ${Math.floor(averagePoints)}`);
    console.log(`${((wins / tournamets) * 100).toFixed(2)}%`);

}

tenis(["5","1400","F","SF","W","W","SF"]);