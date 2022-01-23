const readline = require("readline-sync")
var user=readline.questionInt("how maney task in user shedule list:")
var i=0
var index=1
var newlist=[]
while (i<user){
    let user_work=readline.question(`${index} task...`)
    newlist.push(user_work)
    index=index+1
    i=i+1
} 
var a=newlist 
let a1=readline.questionInt("how many task completed...")
var j=0
while (j<a1){
    let a3=readline.question("enter the task that you completed....")
    a.splice(a.indexOf(a3),1)
    j=j+1 
    
}    
console.log("not completed task",a)    
