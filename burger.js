class Hamburger {
    constructor (size, stuffing, flavoring, mayo) { 
        this.size = size;
        this.stuffing = stuffing;
        this.flavoring = flavoring;
        this.mayo = mayo;
    }

    countPrice() {
        var sum = 0;

        if (this.size == 'small') {
            sum += 50;
        }
        else {
            sum += 100;
        }

        switch(this.stuffing) {
            case 'cheese':
                sum += 10;
                break;
            case 'salad':
                sum += 20;
                break;
            case 'potatoes':
                sum += 15;
                break;        
        }
        
        if (this.flavoring) {
            sum += 15;
        }

        if (this.mayo) {
            sum += 20;
        }

        return sum;
    }

    countCalories() {
        var sum = 0;

        if (this.size == 'small') {
            sum += 20;
        }
        else {
            sum += 40;
        }

        switch(this.stuffing) {
            case 'cheese':
                sum += 20;
                break;
            case 'salad':
                sum += 5;
                break;
            case 'potatoes':
                sum += 10;
                break;        
        }
        
        if (this.flavoring) {
            sum += 0;
        }

        if (this.mayo) {
            sum += 5;
        }

        return sum;
    }

}

document.querySelector('.ok').onclick = function() {
    var size = document.getElementById('small').checked;
    var stuffing = document.getElementById('cheese').checked;
    var flavoring = document.getElementById('kurry').checked;
    var mayo = document.getElementById('mayo').checked;

    var hamburger = new Hamburger(size, stuffing, flavoring, mayo);
    document.getElementById('price').innerHTML = String(hamburger.countPrice() + ' рублей');
    document.getElementById('calories').innerHTML = String(hamburger.countCalories() + ' калорий');
};


