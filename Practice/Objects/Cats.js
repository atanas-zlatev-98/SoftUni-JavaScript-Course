function cat(arr){
    
    class Cat {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

   for(let i = 0; i < arr.length;i++){
    let tokens = arr[i].split(' ');

    let [catName,catAge] = tokens;

    let newCat = new Cat(catName,catAge);

    newCat.meow();

   }

}

//cat(['Mellow 2', 'Tom 5'])
cat(['Candy 1', 'Poppy 3', 'Nyx 2']);