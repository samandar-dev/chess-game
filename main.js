let chess = []

for (let i = 8; i >= 1; i--) {
  for (let j = 1; j <= 8; j++) {
    let obj = {
      y: i,
      x: j,
    }
    chess.push(obj)
  }
}

let list = document.querySelector('.chess__list');

chess.forEach((items) => {
  let n;
  let li = document.createElement('li');
  li.className = "chess__item"
  n = items.x + items.y
  if (n % 2 != 0) {
    li.classList.add('itemWhite');
  } else {
    li.classList.add('itemBlack');
  }
  li.innerHTML = `
            <span class="span1">${items.y}</span>
            <span class="span2">${items.x}</span>`;
  list.appendChild(li);
})

let items = document.querySelectorAll('.chess__item');
let span1 = document.querySelectorAll('.span1');
let span2 = document.querySelectorAll('.span2');
let yNum = document.querySelector('.y-num');
let xNum = document.querySelector('.x-num');
// let x, y;
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;




// let horse2 = document.querySelector('#chess__btn2-2');
// let chessBtn3 = document.querySelector('#chess__btn3');
// let chessBtn4 = document.querySelector('#chess__btn4');
// let chessBtn5 = document.querySelector('#chess__btn5');
// let chessBtn6 = document.querySelector('#chess__btn6');
let tx1, ty1, tx2, ty2, hx1, hy1, hx2, hy2, x, y;
tx1 = 1;
ty1 = 2;
tx2 = 1;
ty2 = 8;
hx1 = 1;
hy1 = 3;
hx2 = 1;
hy2 = 7;

x = 1;
y = 6;

let son = 1;


function places() {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 2) {
      item.classList.add('forms')
      item.classList.add('turan1');
    }
    // if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 8) {
    //   item.classList.add('forms')
    //   item.classList.add('turan2');
    // }
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 3) {
      item.classList.add('forms')
      item.classList.add('horse1');
    }
    // if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 7) {
    //   item.classList.add('forms')
    //   item.classList.add('horse2');
    // }
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 6) {
      item.classList.add('forms')
      item.classList.add('bishop1');
    }
    // if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 6) {
    //   item.classList.add('forms')
    //   item.classList.add('bishop2');
    // }
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 4) {
      item.classList.add('forms')
      item.classList.add('queen');
    }
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 5) {
      item.classList.add('forms')
      item.classList.add('king');
    }
    if (item.childNodes[1].textContent == 1 && item.childNodes[3].textContent == 7) {
      item.classList.add('forms')
      item.classList.add('pow1');
    }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 2) {
    //   item.classList.add('forms')
    //   item.classList.add('pow2');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 3) {
    //   item.classList.add('forms')
    //   item.classList.add('pow3');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 4) {
    //   item.classList.add('forms')
    //   item.classList.add('pow4');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 5) {
    //   item.classList.add('forms')
    //   item.classList.add('pow5');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 6) {
    //   item.classList.add('forms')
    //   item.classList.add('pow6');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 7) {
    //   item.classList.add('forms')
    //   item.classList.add('pow7');
    // }
    // if (item.childNodes[1].textContent == 2 && item.childNodes[3].textContent == 8) {
    //   item.classList.add('forms')
    //   item.classList.add('pow8');
    // }
  })
} places()

// items.forEach((item) => {
//   item.addEventListener('click', () => {
//     if (item.childNodes[1].textContent == x1 && item.childNodes[3].textContent == y1) {
//       turan1()
//     }
//     if (item.childNodes[1].textContent == t_x2 && item.childNodes[3].textContent == t_y2) {
//       turan2()
//     }
//   })
//   console.log('ff');
// })

// function turan() {
//   items.forEach((e) => {
//     e.addEventListener('click', () => {
//       if (e.classList.contains('turan1')) {
//         console.log('tt');
//         if (e.childNodes[1].textContent == x1 && e.childNodes[3].textContent == y1) {
//           e.classList.add('movItem')
//           e.classList.add('form1')
//           turanFunc()
//         }
//         else {
//           e.classList.remove('form1')
//           e.classList.remove('movItem')
//         }
//       }
//     })
//   })
// } turan()

function turan1() {
  if (count1 == 1) {
    items.forEach((e) => {
      // if (e.classList.contains('turan1')) {
      // tx1 = e.childNodes[1].textContent;
      // ty1 = e.childNodes[3].textContent;

      e.addEventListener('click', () => {
        if (e.childNodes[1].textContent == tx1 || e.childNodes[3].textContent == ty1) {
          console.log('tt1');

          e.classList.add('movItem')
          e.classList.add('turan1')
          tx1 = e.childNodes[1].textContent;
          ty1 = e.childNodes[3].textContent;
          turanFunc1()
        }
        else {
          e.classList.remove('turan1')
          e.classList.remove('movItem')
        }
      })
      // }
      count1++
    })
  }
} turan1()

// function turan2() {
//   if (count2 == 1) {
//     items.forEach((e) => {
//       e.addEventListener('click', () => {
//         if (e.classList.contains('turan2')) {
//           console.log(e.childNodes[1].textContent);
//           console.log(e.childNodes[3].textContent);
//           tx2 = e.childNodes[1].textContent;
//           ty2 = e.childNodes[3].textContent;

//           if (e.childNodes[1].textContent == tx2 && e.childNodes[3].textContent == ty2) {
//             console.log('tt2');
//             console.log(e.childNodes[1].textContent);
//             console.log(e.childNodes[3].textContent);

//             e.classList.add('movItem')
//             e.classList.add('turan2')
//             tx2 = e.childNodes[1].textContent;
//             ty2 = e.childNodes[3].textContent;
//             turanFunc2()
//           }
//           else {
//             e.classList.remove('turan2')
//             e.classList.remove('movItem')
//           }
//         }
//       })
//       count2++
//     })
//   }
// }


// function hourse1() {
//   chessBtn2.addEventListener('click', () => {
//     chessBtn1.classList.remove('forms__act');
//     chessBtn2.classList.add('forms__act');
//     chessBtn3.classList.remove('forms__act');
//     chessBtn4.classList.remove('forms__act');
//     chessBtn5.classList.remove('forms__act');
//     chessBtn6.classList.remove('forms__act');

//     items.forEach((e) => {
//       if (e.childNodes[1].textContent == x1 && e.childNodes[3].textContent == y1) {
//         e.classList.add('form2')
//         console.log('f');
//         e.addEventListener('click', () => {
//           e.classList.add('movItem')
//           e.classList.add('form2')
//           hourseFunc()
//         })
//       }
//       else {
//         e.classList.remove('form2')
//         e.classList.remove('movItem')
//       }
//     })
//   })
// } hourse()


// function hourse2() {
//   if (count == 1) {
//     items.forEach((e) => {
//       e.addEventListener('click', () => {
//         if (e.childNodes[1].textContent == x1 && e.childNodes[3].textContent == y1) {
//           console.log('h2');
//           e.classList.add('movItem')
//           e.classList.add('form2')
//           x1 = e.childNodes[1].textContent;
//           y1 = e.childNodes[3].textContent;
//           hourseFunc()
//         }
//         else {
//           e.classList.remove('form2')
//           e.classList.remove('movItem')
//         }
//       })
//       count++
//     })
//   }
// }



function horse1() {
  if (count2 == 1) {
    items.forEach((e) => {
      e.addEventListener('click', () => {
        if (e.childNodes[1].textContent == hx1 && e.childNodes[3].textContent == hy1) {
          e.classList.add('movItem')
          e.classList.add('horse1')
          hx1 = e.childNodes[1].textContent;
          hy1 = e.childNodes[3].textContent;
          horseFunc1()
        }
        else {
          e.classList.remove('horse1')
          e.classList.remove('movItem')
        }
      })
      count2++
    })
  }
} horse1()


function bishop() {
  if (count3 == 1) {
    items.forEach((e) => {
      e.addEventListener('click', () => {
        if (e.childNodes[1].textContent == x && e.childNodes[3].textContent == y) {
          e.classList.add('movItem')
          e.classList.add('bishop1')
          x = e.childNodes[1].textContent;
          y = e.childNodes[3].textContent;
          horseFunc1()
        }
        else {
          e.classList.remove('bishop1')
          e.classList.remove('movItem')
        }
      })
      count3++
    })
  }
} bishop()

function king() {
  if (count4 == 1) {
    items.forEach((e) => {
      e.addEventListener('click', () => {
        if (e.childNodes[1].textContent == kx && e.childNodes[3].textContent == ky) {
          e.classList.add('movItem')
          e.classList.add('king')
          kx = e.childNodes[1].textContent;
          ky = e.childNodes[3].textContent;
          horseFunc1()
        }
        else {
          e.classList.remove('horse1')
          e.classList.remove('movItem')
        }
      })
      count4++
    })
  }
} king()


// function bishop() {
//   // chessBtn3.addEventListener('click', () => {
//   //   chessBtn1.classList.remove('forms__act');
//   //   chessBtn2.classList.remove('forms__act');
//   //   chessBtn3.classList.add('forms__act');
//   //   chessBtn4.classList.remove('forms__act');
//   //   chessBtn5.classList.remove('forms__act');
//   //   chessBtn6.classList.remove('forms__act');

//   items.forEach((e) => {
//     // e.addEventListener('mouseout', () => {
//     //   e.classList.remove('form3')
//     // })
//     e.addEventListener('click', () => {
//       items.forEach((ee) => {
//         ee.classList.remove('form1')
//         ee.classList.remove('form2')
//         ee.classList.remove('form3')
//         ee.classList.remove('form4')
//         ee.classList.remove('form5')
//         ee.classList.remove('form6')
//         e.classList.remove('movItem')
//       })
//       e.classList.add('movItem')
//       e.classList.add('form3')
//       x = e.childNodes[1].textContent;
//       y = e.childNodes[3].textContent;

//       // chessBtn3.addEventListener('click', forms3(x, y))
//       // if (count == 1) {
//       //   count++
//       // } else {
//       //   count = 1
//       // }
//     })
//     // e.classList.remove('movItem')
//   })
//   // })
// } bishop()

// function horse2() {
//   if (count4 == 1) {
//     items.forEach((e) => {
//       e.addEventListener('click', () => {
//         if (e.childNodes[1].textContent == hx2 && e.childNodes[3].textContent == hy2) {
//           e.classList.add('movItem')
//           e.classList.add('horse2')
//           hx2 = e.childNodes[1].textContent;
//           hy2 = e.childNodes[3].textContent;
//           horseFunc2()
//         }
//         else {
//           e.classList.remove('horse2')
//           e.classList.remove('movItem')
//         }
//       })
//       count4++
//     })
//   }
// }



// let turan1btn = document.querySelector('.turan1');
// let turan2btn = document.querySelector('.turan2');
// let horse1btn = document.querySelector('.horse1');

// function remAdd() {
//   items.forEach((itms) => {
//     itms.addEventListener('click', () => {
//       if (itms.childNodes[1].textContent == tx1 || itms.childNodes[3].textContent == ty1) {
//         if (son == 1) {
//           console.log('remadd t1');
//           son++
//           turan1()
//         }
//         else {
//           son = 1
//         }
//       }
//       if (itms.childNodes[1].textContent == hx1 || itms.childNodes[3].textContent == hy1) {
//         if (son == 1) {
//           console.log('remadd t1');
//           son++
//           horse1()
//         }
//         else {
//           son = 1
//         }
//       }
//     })
//   })
// } 


// function horse2() {
//   if (count == 1) {
//     items.forEach((e) => {
//       e.addEventListener('click', () => {
//         if (e.childNodes[1].textContent == x2 && e.childNodes[3].textContent == y2) {
//           console.log('h2');
//           e.classList.add('movItem')
//           e.classList.add('form2')
//           x2 = e.childNodes[1].textContent;
//           y2 = e.childNodes[3].textContent;
//           hourseFunc2()
//         }
//         else {
//           e.classList.remove('form2')
//           e.classList.remove('movItem')
//         }
//       })
//       count++
//     })
//   }
// }

// function bishop() {
//   chessBtn3.addEventListener('click', () => {
//     chessBtn1.classList.remove('forms__act');
//     chessBtn2.classList.remove('forms__act');
//     chessBtn3.classList.add('forms__act');
//     chessBtn4.classList.remove('forms__act');
//     chessBtn5.classList.remove('forms__act');
//     chessBtn6.classList.remove('forms__act');

//     items.forEach((e) => {
//       e.addEventListener('mouseout', () => {
//         e.classList.remove('form3')
//       })
//       e.addEventListener('mouseover', () => {
//         items.forEach((ee) => {
//           ee.classList.remove('form1')
//           ee.classList.remove('form2')
//           ee.classList.remove('form3')
//           ee.classList.remove('form4')
//           ee.classList.remove('form5')
//           ee.classList.remove('form6')
//           e.classList.remove('movItem')
//         })
//         e.classList.add('movItem')
//         e.classList.add('form3')
//         x = e.childNodes[1].textContent;
//         y = e.childNodes[3].textContent;

//         chessBtn3.addEventListener('click', forms3(x, y))
//         if (count == 1) {
//           count++
//         } else {
//           count = 1
//         }
//       })
//       e.classList.remove('movItem')
//     })
//   })
// } bishop()

// function quenn() {
//   chessBtn4.addEventListener('click', () => {
//     chessBtn1.classList.remove('forms__act');
//     chessBtn2.classList.remove('forms__act');
//     chessBtn3.classList.remove('forms__act');
//     chessBtn4.classList.add('forms__act');
//     chessBtn5.classList.remove('forms__act');
//     chessBtn6.classList.remove('forms__act');

//     items.forEach((e) => {
//       e.addEventListener('mouseout', () => {
//         e.classList.remove('form4')
//       })
//       e.addEventListener('mouseover', () => {
//         items.forEach((ee) => {
//           ee.classList.remove('form1')
//           ee.classList.remove('form2')
//           ee.classList.remove('form3')
//           ee.classList.remove('form4')
//           ee.classList.remove('form5')
//           ee.classList.remove('form6')
//           e.classList.remove('movItem')
//         })
//         e.classList.add('movItem')
//         e.classList.add('form4')
//         x = e.childNodes[1].textContent;
//         y = e.childNodes[3].textContent;

//         chessBtn4.addEventListener('click', forms4(x, y))
//         if (count == 1) {
//           count++
//         } else {
//           count = 1
//         }
//       })
//       e.classList.remove('movItem')
//     })
//   })
// } quenn()

// function king() {
//   chessBtn5.addEventListener('click', () => {
//     chessBtn1.classList.remove('forms__act');
//     chessBtn2.classList.remove('forms__act');
//     chessBtn3.classList.remove('forms__act');
//     chessBtn4.classList.remove('forms__act');
//     chessBtn5.classList.add('forms__act');
//     chessBtn6.classList.remove('forms__act');

//     items.forEach((e) => {
//       e.addEventListener('mouseout', () => {
//         e.classList.remove('form5')
//       })
//       e.addEventListener('mouseover', () => {
//         items.forEach((ee) => {
//           ee.classList.remove('form1')
//           ee.classList.remove('form2')
//           ee.classList.remove('form3')
//           ee.classList.remove('form4')
//           ee.classList.remove('form5')
//           ee.classList.remove('form6')
//           e.classList.remove('movItem')
//         })
//         e.classList.add('movItem')
//         e.classList.add('form5')
//         x = e.childNodes[1].textContent;
//         y = e.childNodes[3].textContent;

//         chessBtn5.addEventListener('click', forms5(x, y))
//         if (count == 1) {
//           count++
//         } else {
//           count = 1
//         }
//       })
//       e.classList.remove('movItem')
//     })
//   })
// } king()

// function paw() {
//   chessBtn6.addEventListener('click', () => {
//     chessBtn1.classList.remove('forms__act');
//     chessBtn2.classList.remove('forms__act');
//     chessBtn3.classList.remove('forms__act');
//     chessBtn4.classList.remove('forms__act');
//     chessBtn5.classList.remove('forms__act');
//     chessBtn6.classList.add('forms__act');

//     items.forEach((e) => {
//       e.addEventListener('mouseout', () => {
//         e.classList.remove('form6')
//       })
//       e.addEventListener('mouseover', () => {
//         items.forEach((ee) => {
//           ee.classList.remove('form1')
//           ee.classList.remove('form2')
//           ee.classList.remove('form3')
//           ee.classList.remove('form4')
//           ee.classList.remove('form5')
//           ee.classList.remove('form6')
//           e.classList.remove('movItem')
//         })
//         e.classList.add('movItem')
//         e.classList.add('form6')
//         x = e.childNodes[1].textContent;
//         y = e.childNodes[3].textContent;

//         chessBtn6.addEventListener('click', forms6(x, y))
//         if (count == 1) {
//           count++
//         } else {
//           count = 1
//         }
//       })
//       e.classList.remove('form6')
//     })
//   })
// } paw()

// function itemsFun() {
//   items.forEach((e) => {
//     e.addEventListener('mouseout', () => {
//       e.classList.remove('movitem2')
//       e.classList.remove('movItem')
//     })
//     e.addEventListener('mouseover', () => {
//       items.forEach((ee) => {
//         ee.classList.remove('movitem2')
//         ee.classList.remove('movItem')
//       })
//       e.classList.remove('movItem')
//       e.classList.add('movitem2')
//       xNum.innerHTML = e.childNodes[1].textContent;
//       yNum.innerHTML = e.childNodes[3].textContent;
//     })
//     e.classList.remove('movitem2')
//     e.classList.remove('movItem')
//   })
// } itemsFun()


// function clickFun() {
//   items.forEach((itms) => {
//     itms.addEventListener('click', () => {
//       if (itms.classList.contains('turan1')) {
//         console.log('turan1');
//         turan1()
//       }
//       if (itms.classList.contains('turan2')) {
//         console.log('turan2');
//         turan2()
//       }
//       if (itms.classList.contains('horse1')) {
//         console.log('horse1');
//         horse1()
//       }
//       if (itms.classList.contains('horse2')) {
//         console.log('horse2');
//         horse2()
//       }
//     })
//   })
// }


function turanFunc1() {
  items.forEach((itmm) => {
    // if (itmm.childNodes[1].textContent == 1 && itmm.childNodes[3].textContent == 1) {
    //   itmm.classList.remove('forms')
    // }
    // if (son == 1) {
    if (itmm.childNodes[1].textContent == tx1 || itmm.childNodes[3].textContent == ty1) {
      if ((!itmm.classList.contains('horse1') && !itmm.classList.contains('queen') &&
        !itmm.classList.contains('king') && !itmm.classList.contains('bishop1') &&
        !itmm.classList.contains('pow1'))) {
        itmm.classList.add('green')

        itmm.addEventListener('click', () => {
          // if (son == 1) {
          if (itmm.childNodes[1].textContent == tx1 || itmm.childNodes[3].textContent == ty1) {
            if (!itmm.classList.contains('forms')) {
              console.log('t1');
              items.forEach((itm) => {
                itm.classList.remove('turan1')
                itm.classList.remove('movItem')
              })
              itmm.classList.add('movItem')
              itmm.classList.add('turan1')
              tx1 = itmm.childNodes[1].textContent;
              ty1 = itmm.childNodes[3].textContent;
            }
          }
          // }
          // else {
          //   son++
          //   itmm.classList.remove('green')
          //   remAdd()
          // }
        })
      }
      else if (itmm.classList.contains('forms')) {
        itmm.classList.add('xitem')
      }
    }
    else {
      itmm.classList.remove('movItem')
      itmm.classList.remove('green')
      itmm.classList.remove('xitem')
    }
    // }
    // else {
    //   son++
    //   console.log('tt11');
    //   itmm.classList.remove('green')
    // }
  })
  // clickFun()
  // remAdd()
  turan1()
}

// function turanFunc2() {
//   items.forEach((itmm) => {
//     if (itmm.childNodes[1].textContent == 1 && itmm.childNodes[3].textContent == 8) {
//       itmm.classList.remove('forms')
//     }
//     if (itmm.childNodes[1].textContent == tx2 || itmm.childNodes[3].textContent == ty2) {
//       if (!itmm.classList.contains('forms')) {
//         itmm.classList.add('green')

//         itmm.addEventListener('click', () => {
//           console.log(itmm);
//           if (itmm.childNodes[1].textContent == tx2 || itmm.childNodes[3].textContent == ty2) {
//             if (!itmm.classList.contains('forms')) {
//               console.log('t2');
//               items.forEach((itm) => {
//                 itm.classList.remove('turan2')
//                 itm.classList.remove('movItem')
//               })
//               itmm.classList.add('movItem')
//               itmm.classList.add('turan2')
//               tx2 = itmm.childNodes[1].textContent;
//               ty2 = itmm.childNodes[3].textContent;
//             }
//           }
//         })
//       }
//       else if (itmm.classList.contains('forms')) {
//         itmm.classList.add('xitem')
//       }
//     }
//     else {
//       itmm.classList.remove('movItem')
//       itmm.classList.remove('green')
//       itmm.classList.remove('xitem')
//     }
//   })
//   clickFun()
// }


function horseFunc1() {
  items.forEach((itmm) => {
    console.log('hh');
    // if (itmm.childNodes[1].textContent == 1 && itmm.childNodes[3].textContent == 2) {
    //   itmm.classList.remove('forms')
    // }
    if (itmm.childNodes[1].textContent == eval(hx1) - 1 && itmm.childNodes[3].textContent == eval(hy1) - 2 ||
      itmm.childNodes[1].textContent == eval(hx1) - 2 && itmm.childNodes[3].textContent == eval(hy1) - 1 ||
      itmm.childNodes[1].textContent == eval(hx1) - 2 && itmm.childNodes[3].textContent == eval(hy1) + 1 ||
      itmm.childNodes[1].textContent == eval(hx1) - 1 && itmm.childNodes[3].textContent == eval(hy1) + 2 ||
      itmm.childNodes[1].textContent == eval(hx1) + 1 && itmm.childNodes[3].textContent == eval(hy1) - 2 ||
      itmm.childNodes[1].textContent == eval(hx1) + 1 && itmm.childNodes[3].textContent == eval(hy1) + 2 ||
      itmm.childNodes[1].textContent == eval(hx1) + 2 && itmm.childNodes[3].textContent == eval(hy1) - 1 ||
      itmm.childNodes[1].textContent == eval(hx1) + 2 && itmm.childNodes[3].textContent == eval(hy1) + 1) {
      if (!itmm.classList.contains('turan1')) {
        itmm.classList.add('green')
        itmm.addEventListener('click', () => {
          if (itmm.childNodes[1].textContent == eval(hx1) - 1 && itmm.childNodes[3].textContent == eval(hy1) - 2 ||
            itmm.childNodes[1].textContent == eval(hx1) - 2 && itmm.childNodes[3].textContent == eval(hy1) - 1 ||
            itmm.childNodes[1].textContent == eval(hx1) - 2 && itmm.childNodes[3].textContent == eval(hy1) + 1 ||
            itmm.childNodes[1].textContent == eval(hx1) - 1 && itmm.childNodes[3].textContent == eval(hy1) + 2 ||
            itmm.childNodes[1].textContent == eval(hx1) + 1 && itmm.childNodes[3].textContent == eval(hy1) - 2 ||
            itmm.childNodes[1].textContent == eval(hx1) + 1 && itmm.childNodes[3].textContent == eval(hy1) + 2 ||
            itmm.childNodes[1].textContent == eval(hx1) + 2 && itmm.childNodes[3].textContent == eval(hy1) - 1 ||
            itmm.childNodes[1].textContent == eval(hx1) + 2 && itmm.childNodes[3].textContent == eval(hy1) + 1) {

            if (!itmm.classList.contains('turan1')) {
              items.forEach((itm) => {
                itm.classList.remove('horse1')
                itm.classList.remove('movItem')
              })

              itmm.classList.add('movItem')
              itmm.classList.add('horse1')
              hx1 = itmm.childNodes[1].textContent;
              hy1 = itmm.childNodes[3].textContent;
            }
          }
          else if (itmm.classList.contains('turan1')) {
            itmm.classList.add('xitem')
          }
        })
      }
    }
    else {
      itmm.classList.remove('green')
      itmm.classList.remove('movItem')
    }
  })
  horse1()
}

function bishopFunc() {
  items.forEach((itmm) => {
    console.log('hh');
    // if (itmm.childNodes[1].textContent == 1 && itmm.childNodes[3].textContent == 2) {
    //   itmm.classList.remove('forms')
    // }
    if (
      itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
      itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
      itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
      itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
      itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
      itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
      itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
      itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
      itmm.classList.add('green')

      if (!itmm.classList.contains('turan1')) {
        itmm.classList.add('green')
        itmm.addEventListener('click', () => {
          if (
            itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
            itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
            itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
            itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
            itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
            itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
            itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
            itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')

            if (!itmm.classList.contains('turan1')) {
              items.forEach((itm) => {
                itm.classList.remove('bishop1')
                itm.classList.remove('movItem')
              })

              itmm.classList.add('movItem')
              itmm.classList.add('bishop1')
              x = itmm.childNodes[1].textContent;
              y = itmm.childNodes[3].textContent;
            }
          }
          else if (itmm.classList.contains('turan1')) {
            itmm.classList.add('xitem')
          }
        })
      }
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')

      if (!itmm.classList.contains('turan1')) {
        itmm.classList.add('green')
        itmm.addEventListener('click', () => {
          if (
            itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
            itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
            itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
            itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
            itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
            itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
            itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
            itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')

            if (!itmm.classList.contains('turan1')) {
              items.forEach((itm) => {
                itm.classList.remove('bishop1')
                itm.classList.remove('movItem')
              })

              itmm.classList.add('movItem')
              itmm.classList.add('bishop1')
              x = itmm.childNodes[1].textContent;
              y = itmm.childNodes[3].textContent;
            }
          }
          else if (itmm.classList.contains('turan1')) {
            itmm.classList.add('xitem')
          }
        })
      }
    }
    else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
      itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
      itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
      itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
      itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
      itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
      itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
      itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
      itmm.classList.add('green')

      if (!itmm.classList.contains('turan1')) {
        itmm.classList.add('green')
        itmm.addEventListener('click', () => {
          if (
            itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
            itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
            itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
            itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
            itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
            itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
            itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
            itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')

            if (!itmm.classList.contains('turan1')) {
              items.forEach((itm) => {
                itm.classList.remove('bishop1')
                itm.classList.remove('movItem')
              })

              itmm.classList.add('movItem')
              itmm.classList.add('bishop1')
              x = itmm.childNodes[1].textContent;
              y = itmm.childNodes[3].textContent;
            }
          }
          else if (itmm.classList.contains('turan1')) {
            itmm.classList.add('xitem')
          }
        })
      }
    }
    else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
      itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
      itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
      itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
      itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
      itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
      itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
      itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
      itmm.classList.add('green')

      if (!itmm.classList.contains('turan1')) {
        itmm.classList.add('green')
        itmm.addEventListener('click', () => {
          if (
            itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
            itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
            itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
            itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
            itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
            itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
            itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
            itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
            itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
            itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
            itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
            itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
            itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
            itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
            itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
            itmm.classList.add('green')
          }
          else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
            itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
            itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
            itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
            itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
            itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
            itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
            itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
            itmm.classList.add('green')

            if (!itmm.classList.contains('turan1')) {
              items.forEach((itm) => {
                itm.classList.remove('bishop1')
                itm.classList.remove('movItem')
              })

              itmm.classList.add('movItem')
              itmm.classList.add('bishop1')
              x = itmm.childNodes[1].textContent;
              y = itmm.childNodes[3].textContent;
            }
          }
          else if (itmm.classList.contains('turan1')) {
            itmm.classList.add('xitem')
          }
        })
      }
    }

    else {
      itmm.classList.remove('green')
      itmm.classList.remove('movItem')
    }
  })
  bishop()
}

// function forms3() {
//   items.forEach((itmm) => {
//     if (
//       itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
//       itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
//       itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
//       itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
//       itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
//       itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
//       itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
//       itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else {
//       itmm.classList.remove('green')
//     }
//   })
// }

// function horseFunc2() {
//   items.forEach((itmm) => {
//     console.log('hh');
//     // if (itmm.childNodes[1].textContent == 1 && itmm.childNodes[3].textContent == 2) {
//     //   itmm.classList.remove('forms')
//     // }
//     if (itmm.childNodes[1].textContent == eval(hx2) - 1 && itmm.childNodes[3].textContent == eval(hy2) - 2 ||
//       itmm.childNodes[1].textContent == eval(hx2) - 2 && itmm.childNodes[3].textContent == eval(hy2) - 1 ||
//       itmm.childNodes[1].textContent == eval(hx2) - 2 && itmm.childNodes[3].textContent == eval(hy2) + 1 ||
//       itmm.childNodes[1].textContent == eval(hx2) - 1 && itmm.childNodes[3].textContent == eval(hy2) + 2 ||
//       itmm.childNodes[1].textContent == eval(hx2) + 1 && itmm.childNodes[3].textContent == eval(hy2) - 2 ||
//       itmm.childNodes[1].textContent == eval(hx2) + 1 && itmm.childNodes[3].textContent == eval(hy2) + 2 ||
//       itmm.childNodes[1].textContent == eval(hx2) + 2 && itmm.childNodes[3].textContent == eval(hy2) - 1 ||
//       itmm.childNodes[1].textContent == eval(hx2) + 2 && itmm.childNodes[3].textContent == eval(hy2) + 1) {
//       if (!itmm.classList.contains('turan1') && !itmm.classList.contains('turan2')) {
//         itmm.classList.add('green')
//         itmm.addEventListener('click', () => {
//           if (itmm.childNodes[1].textContent == eval(hx2) - 1 && itmm.childNodes[3].textContent == eval(hy2) - 2 ||
//             itmm.childNodes[1].textContent == eval(hx2) - 2 && itmm.childNodes[3].textContent == eval(hy2) - 1 ||
//             itmm.childNodes[1].textContent == eval(hx2) - 2 && itmm.childNodes[3].textContent == eval(hy2) + 1 ||
//             itmm.childNodes[1].textContent == eval(hx2) - 1 && itmm.childNodes[3].textContent == eval(hy2) + 2 ||
//             itmm.childNodes[1].textContent == eval(hx2) + 1 && itmm.childNodes[3].textContent == eval(hy2) - 2 ||
//             itmm.childNodes[1].textContent == eval(hx2) + 1 && itmm.childNodes[3].textContent == eval(hy2) + 2 ||
//             itmm.childNodes[1].textContent == eval(hx2) + 2 && itmm.childNodes[3].textContent == eval(hy2) - 1 ||
//             itmm.childNodes[1].textContent == eval(hx2) + 2 && itmm.childNodes[3].textContent == eval(hy2) + 1) {

//             if (!itmm.classList.contains('turan1') && !itmm.classList.contains('turan2')) {
//               items.forEach((itm) => {
//                 itm.classList.remove('horse2')
//                 itm.classList.remove('movItem')
//               })

//               itmm.classList.add('movItem')
//               itmm.classList.add('horse2')
//               hx1 = itmm.childNodes[1].textContent;
//               hy1 = itmm.childNodes[3].textContent;
//             }
//           }
//           else if (itmm.classList.contains('turan1') && itmm.classList.contains('turan2')) {
//             itmm.classList.add('xitem')
//           }
//         })
//       }
//     }
//     else {
//       itmm.classList.remove('green')
//       itmm.classList.remove('movItem')
//     }
//   })
//   // horse1()
// }

// function forms3(x, y) {
//   items.forEach((itmm) => {
//     if (
//       itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
//       itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
//       itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
//       itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
//       itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
//       itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
//       itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
//       itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else {
//       itmm.classList.remove('green')
//     }
//   })
// }

// function forms4(x, y) {
//   items.forEach((itmm) => {
//     if (itmm.childNodes[1].textContent == x || itmm.childNodes[3].textContent == y) {
//       itmm.classList.add('green')
//     }
//     else if (
//       itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
//       itmm.childNodes[1].textContent == x - 2 && itmm.childNodes[3].textContent == y - 2 ||
//       itmm.childNodes[1].textContent == x - 3 && itmm.childNodes[3].textContent == y - 3 ||
//       itmm.childNodes[1].textContent == x - 4 && itmm.childNodes[3].textContent == y - 4 ||
//       itmm.childNodes[1].textContent == x - 5 && itmm.childNodes[3].textContent == y - 5 ||
//       itmm.childNodes[1].textContent == x - 6 && itmm.childNodes[3].textContent == y - 6 ||
//       itmm.childNodes[1].textContent == x - 7 && itmm.childNodes[3].textContent == y - 7 ||
//       itmm.childNodes[1].textContent == x - 8 && itmm.childNodes[3].textContent == y - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y) - 2 ||
//       itmm.childNodes[1].textContent == eval(x) + 3 && itmm.childNodes[3].textContent == eval(y) - 3 ||
//       itmm.childNodes[1].textContent == eval(x) + 4 && itmm.childNodes[3].textContent == eval(y) - 4 ||
//       itmm.childNodes[1].textContent == eval(x) + 5 && itmm.childNodes[3].textContent == eval(y) - 5 ||
//       itmm.childNodes[1].textContent == eval(x) + 6 && itmm.childNodes[3].textContent == eval(y) - 6 ||
//       itmm.childNodes[1].textContent == eval(x) + 7 && itmm.childNodes[3].textContent == eval(y) - 7 ||
//       itmm.childNodes[1].textContent == eval(x) + 8 && itmm.childNodes[3].textContent == eval(y) - 8) {
//       itmm.classList.add('green')
//     }
//     else if (itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) - 2 && itmm.childNodes[3].textContent == eval(y) + 2 ||
//       itmm.childNodes[1].textContent == eval(x) - 3 && itmm.childNodes[3].textContent == eval(y) + 3 ||
//       itmm.childNodes[1].textContent == eval(x) - 4 && itmm.childNodes[3].textContent == eval(y) + 4 ||
//       itmm.childNodes[1].textContent == eval(x) - 5 && itmm.childNodes[3].textContent == eval(y) + 5 ||
//       itmm.childNodes[1].textContent == eval(x) - 6 && itmm.childNodes[3].textContent == eval(y) + 6 ||
//       itmm.childNodes[1].textContent == eval(x) - 7 && itmm.childNodes[3].textContent == eval(y) + 7 ||
//       itmm.childNodes[1].textContent == eval(x) - 8 && itmm.childNodes[3].textContent == eval(y) + 8) {
//       itmm.classList.add('green')
//     }
//     else {
//       itmm.classList.remove('green')
//     }
//   })
// }

// function forms5(x, y) {
//   items.forEach((itmm) => {
//     console.log(x, y);
//     if (itmm.childNodes[1].textContent == x - 1 && itmm.childNodes[3].textContent == y - 1 ||
//       itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) + 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) ||
//       itmm.childNodes[1].textContent == eval(x) - 1 && itmm.childNodes[3].textContent == eval(y) ||
//       itmm.childNodes[1].textContent == eval(x) && itmm.childNodes[3].textContent == eval(y) - 1 ||
//       itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) - 1
//     ) {
//       itmm.classList.add('green')
//     }
//     else {
//       itmm.classList.remove('green')
//     }
//   })
// }

// function forms6(x, y) {
//   items.forEach((itmm) => {
//     console.log(x, y);
//     if (itmm.childNodes[1].textContent == eval(x) + 1 && itmm.childNodes[3].textContent == eval(y) && itmm.childNodes[1].textContent != x && x != 1 ||
//       x == 2 && itmm.childNodes[1].textContent == eval(x) + 2 && itmm.childNodes[3].textContent == eval(y)) {
//       itmm.classList.add('green')
//     }
//     else {
//       itmm.classList.remove('green')
//     }
//   })
// }

// list.addEventListener('mouseout', () => {
//   items.forEach((im) => {
//     im.classList.remove('green')
//     im.classList.remove('form1')
//     im.classList.remove('form2')
//     im.classList.remove('form3')
//     im.classList.remove('form4')
//     im.classList.remove('form5')
//     im.classList.remove('form6')
//     xNum.innerHTML = "";
//     yNum.innerHTML = "";
//   })
// })

let anim3D = document.querySelector('.chess__3d');
let cou = 1
anim3D.addEventListener('click', () => {
  list.classList.toggle('anim3D')
  if (cou == 1) {
    anim3D.textContent = '2D'
    cou++
  }
  else {
    anim3D.textContent = '3D'
    cou = 1
  }
})