console.log("Welcome to KBC (Kaun Banega Crorepati)")
console.log()
var n=require("readline-sync");
const question_list = [
    "Q1 How many continents are there?",       // phela question      
    "Q2 What is the capital of India?",        // dusra question   
    "Q3 NG mei kaun se course padhaya jaata hai?"   // teesra question
]

const options_list = [
    // #pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    // #second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    // #third question ke liye options
    ["Software Engineering", "Counselling", "Tourism", "Agriculture"]]
const solution_list = [3, 4, 1] 
const lifeline_option=[1,2,2]
lifeline_list=[["Seven","Four"],["Bhopal","Delhi"],["Tourism","Software Engineering"]]
var count=0;
for (var i=0;i<question_list.length;i++){
    console.log(question_list[i]);
    for (var j=0;j<options_list[i].length;j++){
        console.log(j+1,options_list[i][j]);
    }
    
    var lifeline_choice=n.question("Do you want 5050 lifeline? Say Y/N :");
    if (lifeline_choice=="Y"|| lifeline_choice=="y"){
        if (count<1){
            for (var k=0;k<lifeline_list[i].length;k++){
                console.log(k+1,lifeline_list[i][k]);
            }
            var user_input=n.questionInt("enter the answer :");
            if (user_input==lifeline_option[i]){
                console.log("Congrats your answer is correct")
            }
            else{
                console.log("Opps your answer is wrong")
                break;
            }
        }
    
        else{
            console.log("You already used 5050 lifeline");
            var user_input=n.questionInt("enter the answer :");
            if (user_input==solution_list[i]){
                console.log("Congrats your answer is correct");
            }
            else{
                console.log("Opps your answer is wrong");
                break;
            }
        }
        count++;
    }    
    else{
        (lifeline_choice=="N" || lifeline_choice=="n")
        var user_input=n.questionInt("enter the answer :")
        if (user_input==solution_list[i]){
            console.log("Congrats your answer is correct");
        }
        else{
            console.log("Opps your answer is wrong");
            break;
        }
    }    
    
}
