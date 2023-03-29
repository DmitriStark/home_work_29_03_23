// השתמשו בprompt:




//targil 1
// צרו תוכנית בה המשתמש מזין את אורך צלעותיו של מלבן (2 צלעות) והתוכנית מדפיסה את שטח המלבן, אם שני הצלעות שוות הדפיסו את שטח המלבן בצירוף המילה "square"
// var malben = [prompt("azen et oreh shel malben")]
// for (let index = 0; index < malben; index++) {
//     malben.push([i])

//     for(let i = 0;i<malben;i++){

//     }


// }
// console.log(malben)


// targil 2
// צרו תוכנית בה המשתמש מזין את שנת הולדתו והתוכנית מדפיסה לו את גילו בקירוב בהנחה שהשנה היא השנה הנוכחית 2022


// var age = prompt("enter your bith year")

// console.log(2023-age)

//targil 3
// צרו תוכנית בה המשתמש מזין 6 פעמים מצרכים ומכניסה אותם לתוך מערך, צרו לולאה שעוברת על המערך ומדפיסה את הפריטים במערך בסדר הפוך.

// var mizrhim = []
// var sfira =0


// while (sfira!=6) {
//     var pelet = prompt("enter mishpat")
//     mizrhim.push(pelet)
//     sfira++


// }

// console.log(mizrhim.reverse())

//targil 4
// צרו תוכנית שמקבלת מהמשתמש מספר מ1 עד 7, המספרים מייצגים את ימות השבוע, אם המשתמש הזין מספר המייצג את יום ראשון עד חמישי, הדפס לקונסול "Workday" אם המספר מייצג את ימי שישי ושבת הדפס לקונסול "Weekend"


function dayselector (number){

var days = ["sunday","monday","tuesday","saturday","hamishi","shishi","shabat"]


for (let index = 0; index == days.length; index++) {
    if(number == 4){
       return console.log("HOFESH" + days[index])
    }




}
}
dayselector(4)
// targil 5
// צרו תוכנית בה אתם מקבלים 6 שמות מהמשתמש והכניסו אותם למערך, הדפיסו רק את השמות במיקום אי זוגי.


// var names = ["aharon", "yakov"]

// for (var i = 0; i < 6; i++) {

//     var userinput = prompt("enter names")
//     names.push(userinput)
//     console.log(names)
   

//     if(i %=0){
//         console.log(i)
//     }
// }

