function netherRealms(str) {
  let splitPattern = /[, ]+/g;
  let demonsArray = str.split(splitPattern);
  let healthPattern = /[^0-9.\/+*-]/g;
  let sumPatters = /[+-]?\d+\.?\d*/g;
  let damagePattern = /\*|\//g;

  let demons = {};

  for(let demon of demonsArray){
    let demonHealth = 0;
    let demonDamage = 0;
    
    let healthMatch = demon.match(healthPattern);

    if(healthMatch){
        for(let char of healthMatch){
            let code = char.charCodeAt();
            demonHealth += code;
        }
    }

    let sumMatch = demon.match(sumPatters);

    if(sumMatch){

        for(let char of sumMatch){
            demonDamage += Number(char);
        }
    }

    let multipler = demon.match(damagePattern);

    if(multipler){
        for(let operation of multipler){

            if(operation == '*'){
                demonDamage *= 2;
            }else {
                demonDamage /= 2;
            }
        }
    }
    demons[demon] = {};
    demons[demon]['health'] = demonHealth;
    demons[demon]['damage'] = demonDamage;
    
  }

  let sorted = Object.entries(demons).sort((a,b) => a[0].localeCompare(b[0]));

  for(let [name,value] of sorted){
    console.log(`${name} - ${value['health']} health, ${value['damage'].toFixed(2)} damage`);
  }
  
}

netherRealms(`M3ph-0.5s-0.5t0.0**`);
netherRealms(`M3ph1st0**, Azazel`);
