function CreateArray() {
    this.array = [];
    this.create = function () {
        for (let i = 0; i < 100; i++) {
            this.array.push(Math.floor(Math.random() * 101));
            let number = document.write(this.array[i] + ",");
            if (i % 9 == 0 && i > 0) {
                number += document.write("<br>");
            }
        }
    }
}

function Search() {
    this.input = prompt("Enter a number to search for: ");
    this.connect = function (array) {
        this.array = array;
    };
    this.count = 0;
    this.numericalOrder = [];
    this.search = function () {
        for (let i = 0; i < this.array.length; i++) {
            if (this.input == this.array[i]) {
                this.count++;
                this.numericalOrder.push(i);
            }
        }
    };
    this.searchBinary = function () {

        this.array.sort(function (a, b) {
            return a - b;
        });
        console.log(this.array.join(","));
        while (this.array.length) {
            let number = Math.floor(this.array.length / 2);

            if (this.array[number] < this.input) {
                this.array.splice(0, number == 0 ? 1 : number);
                continue;
            }

            if (this.array[number] > this.input) {
                this.array.splice(number, this.array.length);
                continue;
            }

            if (this.array[number] == this.input) {
                this.count++;
                this.array.splice(number, 1);
            }
        }
        return this.count;
    };
    this.display = function () {
        alert(this.input + " Appear: " + this.count + " Location: " + this.numericalOrder.join(","))
    };
}

let createArray = new CreateArray();
createArray.create();
let search = new Search();
search.connect(createArray.array);
// search.search();
search.searchBinary();
search.display();