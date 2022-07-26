var index = 1;
var xDate = document.getElementsByClassName("newDate");
var xExpense = document.getElementsByClassName("newExpense");
var xSum = document.getElementsByClassName("newSum");
var visibility = document.getElementsByClassName("newRow");
var len = visibility.length;
var total = 0;
var calc = document.getElementById("total");

function Add() {
    let addDate = document.getElementById("date").value; //doar ID
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
    bubbleSort();
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

function bubbleSort() 
{ 
let i, j; 
for (i = 0; i < len-1; i++) 
{ 
    for (j = 0; j < len-i-1; j++) 
    { 
        if (new Date(xDate[j].innerText) > new Date(xDate[j+1].innerText))  //convert string to date obj
        { 
            let temp1 = xDate[j].innerText;
            let temp2 = xExpense[j].innerText;
            let temp3 = xSum[j].innerText;
            xDate[j].innerText = xDate[j + 1].innerText;
            xExpense[j].innerText = xExpense[j + 1].innerText;
            xSum[j].innerText = xSum[j + 1].innerText;
            xDate[j+1].innerText = temp1;
            xExpense[j+1].innerText = temp2;
            xSum[j+1].innerText = temp3;
        } 
    } 
  
} 
}
