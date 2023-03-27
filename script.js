const fruits = ['mango', 'banana', 'orange', 'apple', 'melon']

// const myNumbers = [1, '1', 2, 2, 4, '1', '1']
const transaction = [230, 900, 110, 77, 811]

// if(fruits.includes('mango')){
//     console.log(true)
// }else{
//     console.log(false)
// }


const f = fruits.filter((fruit) => fruit === 'banana' )
// console.log(f)

// const fruit = fruits.find((fruit) => fruit === 'orange')
// console.log(fruit)

// const returnNumber = transaction.filter((number) => number <= 900)

// console.log(returnNumber)

// const totalTransactions = transaction.reduce((a, b) => a + b)
// console.log(totalTransactions)

            //FILTER USING FOR LOOP. 
            //THESE NOT CLEAR
    // filterFruits = (value) => {
    //  for(i=0; i<fruits.length; i++){
    //      if(fruits[i] === value){
    //          return ["Found ", value]
    //      }
            
    //  }
    //  return ["Not found"] 

    // }
    // console.log(filterFruits('applee'))

// filterFruits('oranges')

// console.log(totalTransactions)



        //SPLIT, REVERSE AND JOIN METHOD
const myName = 'sadeeq'

// console.log(myName.split('').reverse().join(''))

//42 -43
// const divide = myName.split('').join('')
// console.log(divide)



const users = [
    {"username": "yusuf", "password": "1234"},
    {"username": "hamza", "password": "2222"},
    {"username": "fatima", "password": "1111"},
    {"username": "garba", "password": "8903"},
]

const submitForm = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const showText = document.getElementById('show_text')



    //to filter username and password to fetch personal information
    const checkUser = users.find((user) => 
                                (user.username === username && user.password === password))

                //statement to print out using textContent method               

    if(checkUser){
        showText.textContent = "welcome"
    }else{
        showText.textContent = "check your detail or pls register"
    }
}

function submitRegForm  ()  {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const showText = document.getElementById('show_reg_text')

    const user = {
        username,
        password
}

    const checkUser = users.push(user)
    
    if(checkUser){
        showText.textContent = "User registered"
    }else{
        showText.textContent = "User not registered"
    }
}

