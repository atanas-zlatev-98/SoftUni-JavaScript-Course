function muOnline(arr){

   let rooms =  arr.split('|');
   let health = 100;
   let bitcoins = 0;

for(let i =0;i < rooms.length;i++){
    let room = rooms[i].split(' ');
    let type = room[0];
    let num = Number(room[1]);

    if(type =='potion'){

        if(health + num > 100){
            num = 100 - health;
        }

        health += num;

        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);


    }else if(type =='chest'){

        bitcoins += num;
        console.log(`You found ${num} bitcoins.`);

    }else{

        health -= num;

        if(health <= 0){
            console.log(`You died! Killed by ${type}.`);
            console.log(`Best room: ${i + 1}`);
            return;
        }else {
            console.log(`You slayed ${type}.`)
        }
    }
}

console.log(`You've made it!`);
console.log(`Bitcoins: ${bitcoins}`);
console.log(`Health: ${health}`);



}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");