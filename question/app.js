
// Section5
// Q1
let nickname = 'たよ';
let age = 26;
let greet = '私の名前は' + nickname + 'です。' + '年齢は' + age + 'です。';

console.log(greet);

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagesText =`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(languagesText);

// ${変数}で文章の中に変数を呼びだせる

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(age);

// Q7
// #1
user['birthday'] = '2000-09-27';
console.log(user.birthday);

// #2
user.sayHello = function () {
  console.log('Hello!');
}

user.sayHello();

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let favotiteMusic = playerList[1].favorites[1];

console.log(favotiteMusic);

// Q5
let playersAge = playerList.map(player => player.age);
let sum = 0;

function Average(playersAge) {
  let sum = playersAge.reduce((total, age) => total + age, 0);
  return sum / playersAge.length;
}

let playersAverageAge = Average(playersAge);
console.log(playersAverageAge);

// Q6
// #1
function sayHello() {
  let say = 'Hello';
  console.log(say);
}

sayHello();

// #2
const sayWorld = function() {
  console.log('World');
}

sayWorld();

// Q8
// let calc = {
//   x:3,
//   y:4,
//   add: function() {
//     return this.x + this.y;
//   }
// };

// let result = calc.add();
// console.log(result)

// let calc = {
//   x:30,
//   y:20,
//   subtract: function() {
//     return this.x - this.y;
//   }
// };

// let result = calc.subtract();
// console.log(result)

// let calc = {
//   x:7,
//   y:7,
//   multiply: function() {
//     return this.x * this.y;
//   }
// };

// let result = calc.multiply();
// console.log(result)

// let calc = {
//   x:10,
//   y:2,
//   divide: function() {
//     return this.x / this.y;
//   }
// };

// let result = calc.divide();
// console.log(result)

// Q9
function remainder() {
  let x = 5;
  let y = 3;
  let result =  x % y;

  console.log(x + 'を' + y + 'で割った余りは' + result + 'です。');

}

remainder();

// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);

// 関数内の中だけにスコープが有効なため関数fooの中に定義されているxをfooの外で使おうとするとエラーになってしまう
// let xを関数fooの外で定義してあげると関数の中と外どちらからでも参照することができる。



// Section6
// Q1
let random = Math.floor(Math.random()*10);
console.log('random => ', random);

// Q2
setTimeout(function () {
  console.log('Hello World!');
},
  3000);

// Q3
let num = 0;
if (num > 0) {
console.log('num is greater than 0');
} else if (num <= 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is less than 0');
}

// Q4
let numbers = [];

for(let i = 0; i <=99; i++) {
  numbers.push(i);
}

console.log(numbers);

// push　配列に新しく要素を追加するように命令するメソッド

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    if (mixed[i] % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
  } else{
    console.log('not number');
    }
}
