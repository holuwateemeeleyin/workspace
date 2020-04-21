// let and const
/*let divs = document.getElementsByTagName('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(){
        console.log('you clicked on div ' +i);
        
    })
}*/

//for template strings
function employeeDetails() {
    const name = 'Tobi'
    const age = 23
    position = 'developer'
    
    console.log(`My name is ${name}, i'm ${age} years old and i'm a ${position}`);
    
}
employeeDetails();

// template strings for object
const user = {
    name : "Samuel",
    matric : "16/52ha000",
    dept : "Computer Science"
}
console.log(`The name is ${user.name} with Matric no ${user.matric} in department of ${user.dept} `);

// //getting names
// let list = document.querySelector('.user_List')

// function addUser(name, lastname) {
//     let template = `
//     <div class="user">
//     <div> ${name}</div>
//     <div> ${lastname}</div>
//     </div>
//     `;
//     list.insertAdjacentHTML("beforeend", template)

// }
// addUser('Timi', 'James')
// addUser('Tommy', 'James')

//exercise on template string answer
//"My name is xxx xxx, i'm xxx years old. I work as xxx and make $xxx.
function userProfile() {
    name = "Samuel"
    lastname = "Abe"
    age = 21
    profession = "developer"
    salary = "$30000"
    console.log(`My name is ${name} ${lastname}, i'm ${age}. i work as ${profession} and make ${salary}`);
    
}
userProfile();

// //foreach
// const items = ['book', 'pen','razor', 'chair']
//  let template = ''
//  items.forEach(function(item) {
//      template += `<div>i bought ${items}</div>`
    
//  } );
//  document.body.insertAdjacentHTML("afterend",template)


// // i can do this in ES5 way using forloop
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
     
// }

const products = [
    {name: 'Iphone', price:200},
    {name: 'Motorola', price:70},
    {name: 'Samsung', price:150},
    {name: 'Sony', price:98},
    {name: 'Windows pone', price:10},
];
let template = '';
products.forEach(function(product) {

    function discount() {
        if (product.price<100) {
            return `<span>On sale !!</span>`   
        }
        
        
    }
    template += `<div class="product">
    <h1>${product.name}</h1>
    ${discount()}
    <strong>Price: $ ${product.price} </strong>
 </div>`
} );
document.body.insertAdjacentHTML("afterbegin", template)

//Using Map
const numbers = [1, 2, 3, 4, 5]
const otherArray = numbers.map(function(number){
    return number * 10
})
 console.log(otherArray);

 //exercise on map
 const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]
let messages = paintings.map(function(painting){
    return `<div> The ${painting.name} is ${painting.width} * ${painting.height} </div>`
})
console.log(messages);
document.body.insertAdjacentHTML("beforebegin", messages)

// more exercise on map

const cars = [
    {name: 'Ford', price:200},
    {name: 'Nissan', price:400},
    {name: 'Nissan', price:600}
]
// i want to display "Ford is 40000"
// let mesg = cars.map(function(car){
//     let currency = 200;
//     return `<div>${car.name} is ${car.price*currency} </div> `
// })
// console.log(mesg);


// we can do it in a formal way (converting the price)
function priceConverter(price) {
    return price * 365
    
}
const price = cars.map(function(car) {
    return `<div>${car.name} is ${priceConverter(car.price)}</div>`
})
console.log(price);

//how to use filter
//We have a list of channels and we want to create a new array only with the premium channels.
const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];
//  // to check for Premium
// const result = channels.filter(function(channel){
//    return channel.premium 
// })
// console.log(result);


// another exercise
//we need to get the NOT premium channels and the 
//PREMIUM CHANNELS whenever we call the methods.

 const users = {
    name:'Francis',
    premium:true,
    premiumChannels:function(){
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
    },
    channels:function(){
        // GET THE NON-PREMIUM CHANNELS
    }
 }
 //console.log(users.premiumChannels())
 // brings HBO and MAX
 //console.log(users.channels())
 // brings LIFE, COOCKING CHANNEL AND WOBI

 