//declear an object array
const users = [
    {"username":"master", "code":"1234"},
    {"username":"joy", "code":"1233"},
    {"username":"kelven", "code":"1134"},
] 
function submit(){
const backusername = document.getElementById("username").value
const backcode = document.getElementById("password").value
const display = document.getElementById("display")

//find method to get username and password and also give condition
const check= users.find((check) =>
    check.username === backusername && check.code === backcode)
//condition that display the text
if(check){
    display.textContent="you are welcome to my first authentication app"}
else
    {display.textContent="ensure that you are registered yet"}
}

function addregs(){
   const username = document.getElementById("regname").value
    const password = document.getElementById("regpassword").value
    const display = document.getElementById("showreg")

    const addreg = {username , password}
    const checkreg = users.push(addreg) // this add the details to the array

    if(checkreg){
        display.textContent = "fully registered Abdulrasheed"
    }
        else{display.textContent = "not probbarly registered"}


}