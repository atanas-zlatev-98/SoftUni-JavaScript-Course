function carFactory(obj) {
    const engine = {
        smallEngine: {power:90,volume:1800},
        normalEngine: {power:120,volume:2400},
        monsterEngine: {power:200,volume:3500}
    }

    const result = {
        model: obj.model,
        engine: null,
        carriage: {
            type: obj.carriage,
            color: obj.color,
        },
        wheels: undefined,
    };

    if(obj.power <= 90){
        result.engine = engine.smallEngine
    }else if(obj.power <= 120){
        result.engine = engine.normalEngine
    }else {
        result.engine = engine.monsterEngine
    }
 
    let wheels = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;
    result.wheels = new Array(4).fill(wheels);
    return result

}
/*carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })*/

carFactory({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
})