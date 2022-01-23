const fs=require('fs')
const readline_sync=require("readline-sync")
var user_choice=readline_sync.question("Do you want to Login/Signup?")
const file_exists = fs.existsSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json")
if (user_choice=="signup"){
    username=readline_sync.question("enter the name :")
    password=readline_sync.question("enter the password and  password length should be 6 or greater than 6 : " )
    confirm_password=readline_sync.question("enter password again :")
    if (password!=confirm_password){
        console.log("Both password are not same")
    }else{
        if (password.length>=6){
            let dic={}
            dic["username"]=username
            dic["password"]=password
            if (file_exists==true){
                data1=fs.readFileSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json",{encoding:"utf8"})
                data2=JSON.parse(data1)
                for(i of data2){
                    if (i["username"]==username){
                        console.log("ID already exists");
                        break
                    }else if (data2.indexOf(i)==data2.length-1 && i["username"]!=username){
                        console.log("Congrats",username," You are Signed up successfully")
                        Description=readline_sync.question("enter your description :")
                        Birth_Date=readline_sync.question("enter your D.O,B :")
                        Hobbies=readline_sync.question("enter your hobby :")
                        Gender=readline_sync.question("Enter M/F :")
                        dic["description"]=Description
                        dic["dob"]=Birth_Date
                        dic["hobbies"]=Hobbies
                        dic["gender"]=Gender
                        console.log(dic);
                        data1=fs.readFileSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json",{encoding:"utf8"})
                        data2=JSON.parse(data1)
                        data2.push(dic)
                        fs.writeFileSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json",JSON.stringify(data2,null,4))
                    }
                }
            }
            else{
                console.log("Congrats",username," You are Signed up successfully")
                Description=readline_sync.question("enter your description :")
                Birth_Date=readline_sync.question("enter your D.O,B :")
                Hobbies=readline_sync.question("enter your hobby :")
                Gender=readline_sync.question("Enter M/F :")
                dic["description"]=Description
                dic["dob"]=Birth_Date
                dic["hobbies"]=Hobbies
                dic["gender"]=Gender
                console.log(dic);
                fs.writeFileSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json",JSON.stringify([dic],null,4))
                }
        }else{
                console.log("Create some strong password please");
            }
        }
}else{
    username=readline_sync.question("enter the name :")
    if (file_exists==true){
        data1=fs.readFileSync("/home/ishita/Desktop/JavaScript/Function/userdetails.json",{encoding:"utf8"})
        data2=JSON.parse(data1)
        for(i of data2){
            if (i["username"]==username){
                password=readline_sync.question("enter the password :")
                if (i["password"]==password){
                    console.log("Login successful");
                    break
                }else{
                    console.log("Incorrect password");
                    break
                }
                
            }else if (data2.indexOf(i)==data2.length-1 && i["username"]!=username){
                console.log("ID doesn't exists");
                }
            }
        
        }
    }
