const fruits = ['mango', 'mango', 'banana', 'orange', 'apple', 'melon']

const myNumbers = [1, '1', 2, 2, 4, '1', '1']
const transaction = [230, 900, 110, 77, 811]

if(fruits.includes('mango')){
    // console.log(true)
}else{
    // console.log(false)
}


// const fruit = fruits.filter((fruit) => fruit != 'mango')

// const fruit = fruits.find((fruit) => fruit === 'mango')

const returnNumber = transaction.filter((number) => number > 850)

// console.log(returnNumber)

const totalTransactions = transaction.reduce((a, b) => a + b)
const filterFruits = (value) => {
    for(let i=0; i<fruits.length; i++){
        if(fruits[i] === value){
            return ["Found ", value]
        }

    }
    return ["Not found"]
}


const myName = 'Sadeeq'

// console.log(myName.split('').reverse().join(''))

// filterFruits('oranges')

// console.log(totalTransactions)

// document.write(filterFruits('mango'))

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

    const checkUser = users.find((user) => (
        user.username === username && user.password === password
    ))

    if(checkUser){
        showText.textContent = "User found"
    }else{
        showText.textContent = "User not found"
    }
}

const submitRegForm = () => {
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

