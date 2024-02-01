// 1-masala
// function SonlardanIbroatMassiv(berilganMassiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < berilganMassiv.length; i++) {
//     if (berilganMassiv[i] > 10) {
//       yangiMassiv.push(berilganMassiv[i]);
//     }
//   }
//   return yangiMassiv;
// }
// console.log(SonlardanIbroatMassiv([2, 4, 11, 12, 13]));

// 2-masala
// function kubMassiv(berilganMassiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < berilganMassiv.length; i++) {
//     yangiMassiv.push(Math.pow(berilganMassiv[i], 3));
//   }
//   return yangiMassiv;
// }

// console.log(kubMassiv([3, 4, 5]));

// 3-masala
// function uchBeshTekshirish(berilganMassiv) {
//   for (let i = 0; i < berilganMassiv.length; i++) {
//     if (berilganMassiv[i] % 3 === 0 || berilganMassiv[i] % 5 === 0) {
//       return "3-ga || 5-ga karali son ";
//     }
//   }
//   return "3-ga || 5-ga karali sonemas";
// }
// console.log(uchBeshTekshirish([1, 2, 3, 4, 5, 6]));

// 4-masala
// function engKattaUchKatta(massiv) {
//   if (massiv.length < 3) {
//     return "Massivda kamida uch element bo'lishi kerak";
//   }
//   massiv.sort(function (a, b) {
//     return b - a;
//   });
//   let kattaSonlar = [];
//   for (let i = 0; i < 3; i++) {
//     kattaSonlar.push(massiv[i]);
//   }
//   return kattaSonlar;
// }
// console.log(engKattaUchKatta([10, 2, 3, 4, 6, 34, 5, 64, 64]));

// 5-masala
function teskariTartib(massiv) {
  return massiv.reverse().toString();
}

// Funksiyaning misol qo'llanilishi
let sonlar = [10, 5, 8, 20, 3, 15];
console.log(teskariTartib(sonlar)); // "15,3,20,8,5,10"
