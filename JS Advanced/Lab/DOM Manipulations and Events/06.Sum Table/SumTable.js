function sumTable() {
    let table = document.querySelectorAll('table tr');

    let price = 0;

    for(let i = 1; i < table.length;i++){
        let currentPrice = table[i].children;
        price += Number(currentPrice[currentPrice.length - 1].textContent)
    }

    let result = document.getElementById('sum');
    result.textContent = price;
    
}