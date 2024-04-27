let nums = document.getElementById("nums");
var expression='';

function press(num){ 
    expression += num;
    nums.value = expression
    }

function equal(){ 
    nums.value= eval(expression);
    expression ='';
    }

function erase(){
    expression='';
    nums.value=expression;
}