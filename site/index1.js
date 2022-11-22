// function createCircle(radius) {
//     return {
//         radius, //radius: radius,
//         draw: function() {
//             console.log('draw factory');
//         } //method
//     };
// }

// const factoryCircle = createCircle(1);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw construcotr');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('draw construcotr');
//     }
// `);

// const circle1 = new Circle1(1);

// const constructorCircle = new Circle(1);

// let x = {value: 10};
// let y = x;

// x.value = 20;

// console.log(x,y);

// let num = {value: 10};
// function increase(num) {
//     num.value++;
// }
// increase(num);
// console.log(num);


// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = {x: 0, y: 0};

//     this.draw = function() {
//         console.log('draw construcotor');
//     }

//     Object.defineProperties(this, 'defaultlocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if(!value.x || !value.y)
//             throw new Error('Invalid location');
//             defaultLocation = value;
//         }
//     });
// }

const constructorCircle = new Circle(10);


// for (let key in constructorCircle) {
//     if (typeof constructorCircle[key] !== 'function') {
//         console.log(key, constructorCircle[key]);
//     }
// }