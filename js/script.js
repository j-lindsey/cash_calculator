let products = [];
let quantity = "";
let Cart = [];
let cartLength = 0;
let rowStart;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function addProduct() {
    let item = document.getElementById("product").value;
    let product = {
        name: item,
        price: 0
    };

    //erases the value in the text box for next input
    document.getElementById("product").value = "";

    if (item != "") {
        products.push(product);
        //alternate way to update
        //document.getElementById("pperunit").add(document.createElement("option").text);
        let menuList = document.getElementById("pperunit");
        let myOption = document.createElement("option");
        //document.createElement("option").text = product.name;
        myOption.text = product.name;
        //document.getElementById("pperunit").add(myOption);
        menuList.add(myOption);
    }
}

function addPrice() {
    let item = document.getElementById("pperunit").value;
    let price = document.getElementById("price").value;


    document.getElementById("price").value = "";
    if (price != "") {
        for (let i = 0; i < products.length; i++) {
            if (products[i].name === item) {
                products[i].price = price;
                let menuList = document.getElementById("selectproduct");
                let myOption = document.createElement("option");
                myOption.text = products[i].name + " $" + price + " /unit";
                menuList.add(myOption);
            }
        }
    }
}
function addUnit1() {
    quantity += "1";
    document.getElementById("amountDue").value = quantity;
}
function addUnit2() {
    quantity += "2";
    document.getElementById("amountDue").value = quantity;
}
function addUnit3() {
    quantity += "3";
    document.getElementById("amountDue").value = quantity;
}
function addUnit4() {
    quantity += "4";
    document.getElementById("amountDue").value = quantity;
}
function addUnit5() {
    quantity += "5";
    document.getElementById("amountDue").value = quantity;
}
function addUnit6() {
    quantity += "6";
    document.getElementById("amountDue").value = quantity;
}
function addUnit7() {
    quantity += "7";
    document.getElementById("amountDue").value = quantity;
}
function addUnit8() {
    quantity += "8";
    document.getElementById("amountDue").value = quantity;
}
function addUnit9() {
    quantity += "9";
    document.getElementById("amountDue").value = quantity;
}
function addUnit0() {
    quantity += "0";
    document.getElementById("amountDue").value = quantity;
}
function backspace() {
    quantity = quantity.slice(0, -1);
    console.log(quantity);
    document.getElementById("amountDue").value = quantity;
}
function clearQuant() {
    quantity = "";
    document.getElementById("amountDue").value = "";
}


function addToCart() {
    let table = document.getElementById("thisTable");
    let totalUnits = parseInt(quantity);
    if (rowStart == undefined) {
        rowStart = 3;
    }
    quantity = "";
    document.getElementById("amountDue").value = "";

    let item = document.getElementById("selectproduct").value;
    console.log(item);

    for (let i = 0; i < products.length; i++) {
        if (item.search(products[i].name) >= 0) {
            let prodandQuant = {
                product: products[i],
                units: totalUnits,
                totalPrice: totalUnits * products[i].price
            };

            Cart.push(prodandQuant);
            cartLength++;
            let index = Cart.length - 1;
            let prod2 = Cart[index].product;
            let totPri = Cart[index].totalPrice;
            let myUnits = Cart[index].units;
            let pricePerUnit = prod2.price;
            console.log(prod2, totPri, myUnits, pricePerUnit);
            let myRow = table.insertRow(rowStart);
            rowStart++;
            let dataCell1 = myRow.insertCell(0);
            let dataCell2 = myRow.insertCell(1);
            let dataCell3 = myRow.insertCell(2);
            let dataCell4 = myRow.insertCell(3);
            dataCell1.innerHTML = prod2.name;
            dataCell2.innerHTML = pricePerUnit;
            dataCell3.innerHTML = myUnits;
            dataCell4.innerHTML = totPri;
        }
    }
}



function calcAmountDue() {

    let grandPrice = 0;

    for (let i = 0; i < cartLength; i++) {

        grandPrice += Cart[i].totalPrice;
        console.log(grandPrice);
        console.log(Cart[i]);

    }
    let tax = grandPrice * 5.0 / 100;


    if (Cart.length > 0) {
        document.getElementById("totalprice").innerHTML = "Total Price: $ " + grandPrice.toFixed(2);
        document.getElementById("totalTax").innerHTML = "Taxes: $ " + tax.toFixed(2);
        document.getElementById("totalAmt").innerHTML = "Amount Due: $ " + (tax + grandPrice).toFixed(2);
    }
}


function newTransaction() {
    let table = document.getElementById("thisTable");
    rowStart = 3;
    for (let i = 0; i < Cart.length; i++) {
        table.deleteRow(rowStart);
    }
    cartLength = 0;
    Cart = [];
    document.getElementById("totalprice").innerHTML = "Total Price: $";
    document.getElementById("totalTax").innerHTML = "Taxes: $";
    document.getElementById("totalAmt").innerHTML = "Amount Due: $";

    console.log(products);
    console.log(quantity);
    console.log(Cart);
    console.log(cartLength);

}


function displayDate() {
    let dateTable = document.getElementById("dateInput");
    let time = document.getElementById("timeInput");
    let date = new Date();
    let hours = date.getHours();
    if (hours > 12) {
        let min = date.getMinutes();
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":0" + date.getMinutes() + " PM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":" + date.getMinutes() + " PM";
        }
    } else {
        let min = date.getMinutes();
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours()) + ":0" + date.getMinutes() + " AM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours()) + ":" + date.getMinutes() + " AM";
        }
    }

    dateTable.innerHTML = "Date: " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

}

