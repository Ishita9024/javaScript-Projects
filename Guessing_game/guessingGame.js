const secretNum=5;
var i=1;
while (i<=5){
    const n=require("readline-sync")
    var num=n.questionInt("enter the number :");
    if (num==secretNum){
        console.log("Hurray! You won the game ");
        break;
    }else if (num>=1 && num<=10 && num!=secretNum){
        console.log("Oops! wrong guess");
    }else{
        console.log("take number less than 10");
    }
    if (5-i==0){
        console.log("guess finish");
    }else{
        console.log(5-i,"chances left")
    }
    i++;
}