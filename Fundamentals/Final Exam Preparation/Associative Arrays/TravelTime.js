function travelTime(arr){
let destinations = {};

for(let destination of arr){

    let [country,town,cost] = destination.split(' > ');
    cost = Number(cost);

    if(!destinations.hasOwnProperty(country)){
        destinations[country] = {};
    }

    if(!destinations[country].hasOwnProperty(town)){
        destinations[country][town] = cost;
    }

    let cheapestPrice = destinations[country][town];

    if(cheapestPrice > cost){
        destinations[country][town] = cost;
    }
}

let sorted = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]));

for(let [country,town] of sorted){
    let sorted = Object.entries(town).sort((a,b) => a[1] - b[1]);

    let destination = `${country} -> `;

    sorted.map(([town, price]) => {
       destination += `${town} -> ${price} `;
      });

    console.log(`${destination}`);
}
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )