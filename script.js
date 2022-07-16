var index = 1;
var xDate = document.getElementsByClassName("newDate");
var xExpense = document.getElementsByClassName("newExpense");
var xSum = document.getElementsByClassName("newSum");
var visibility = document.getElementsByClassName("newRow");
var len = visibility.length;
var total = 0;
var calc = document.getElementById("total")

function Add() {
    let addDate = document.getElementById("date").value; //necesar sa fie ID
    let addExpense = document.getElementById("expense").value;
    let addSum = document.getElementById("amount").value;
    if (index > visibility.length) {
        alert("You've reached the maximum number");
    }
    visibility[index - 1].style.display = "table-row";
    xDate[index - 1].innerText = addDate;
    xExpense[index - 1].innerText = addExpense;
    xSum[index - 1].innerText = addSum;
    total += Number(addSum);
    index++;
    calc.innerText = total;
}
function Delete(n) {
    if (n == len) {
        visibility[n].style.display = "none";
        index--;
        total -= Number(xSum[n].innerText);
    }
    else {
        total -= Number(xSum[n].innerText);
        for (let i = n; i < index - 2; i++) {
            xDate[i].innerText = xDate[i + 1].innerText;
            xExpense[i].innerText = xExpense[i + 1].innerText;
            xSum[i].innerText = xSum[i + 1].innerText;
        }
        visibility[index - 2].style.display = "none";
        index--;
    }
    calc.innerText = total;
}