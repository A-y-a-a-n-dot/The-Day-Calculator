/*beta Test 2 Day calculator**/
function leaps(year){

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        p = 'leap';
    } else {
        p = 'Nleap';
    }
    return p

    
}
;
function monthy(month,monthcode){    
    if(month==1){
        monthcode=0
    }
    else if(month==2){
        monthcode=3
    }
    else if(month==3){
        monthcode=3
    }
    else if(month==4){
        monthcode=6
    }
    else if(month==5){
        monthcode=1
    }
    else if(month==6){
        monthcode=4
    }
    else if(month==7){
        monthcode=6
    }
    else if(month==8){
        monthcode=2
    }
    else if(month==9){
        monthcode=5
    }
    else if(month==10){
        monthcode=0
    }
    else if(month==11){
        monthcode=3
    }
    else if(month==12){
        monthcode=5
    }
    return monthcode
}

function Calculator(year,z){
    if (Math.floor(Number(year) / z) === 39 || Math.floor(Number(year) / z) === 35 || Math.floor(Number(year) / z) === 31 || Math.floor(Number(year) / z) === 27 || Math.floor(Number(year) / z) === 23 || Math.floor(Number(year) / z) === 19 || Math.floor(Number(year) / z) === 15 || Math.floor(Number(year) / z) === 11 || Math.floor(Number(year) / z) === 7 || Math.floor(Number(year) / z) === 3) {
        yearcode = 0
    
    }
    else if (Math.floor(Number(year) / z) === 38 || Math.floor(Number(year) / z) === 34 || Math.floor(Number(year) / z) === 30 || Math.floor(Number(year) / z) === 26 || Math.floor(Number(year) / z) === 22 || Math.floor(Number(year) / z) === 18 || Math.floor(Number(year) / z) === 14 || Math.floor(Number(year) / z) === 10 || Math.floor(Number(year) / z) === 6 || Math.floor(Number(year) / z) === 2) {
        yearcode = 2
    
    }
    else if (Math.floor(Number(year) / z) === 37 || Math.floor(Number(year) / z) === 33 || Math.floor(Number(year) / z) === 29 || Math.floor(Number(year) / z) === 25 || Math.floor(Number(year) / z) === 21 || Math.floor(Number(year) / z) === 17 || Math.floor(Number(year) / z) === 13 || Math.floor(Number(year) / z) === 9 || Math.floor(Number(year) / z) === 5 || Math.floor(Number(year) / z) === 1) {
        yearcode = 4
    
    }
    else if (Math.floor(Number(year) / z) === 36 || Math.floor(Number(year) / z) === 32 || Math.floor(Number(year) / z) === 28 || Math.floor(Number(year) / z) === 24 || Math.floor(Number(year) / z) === 20 || Math.floor(Number(year) / z) === 16 || Math.floor(Number(year) / z) === 12 || Math.floor(Number(year) / z) === 8 || Math.floor(Number(year) / z) === 4 || Math.floor(Number(year) / z) === 0) {
        yearcode = 6
    
    }
    return yearcode 

   
        
    }

function DayCalculator(day,monthcode,yearcode,a,lastTwoDigits){
    Result=day+monthcode+yearcode+a+lastTwoDigits
    console.log(day,monthcode,yearcode,a,lastTwoDigits)
    
    if(Result%7==0){
        document.getElementById('invis1').innerHTML ="Sunday"
    }
    if(Result%7==1){
        document.getElementById('invis1').innerHTML = "Monday"
    }
    if(Result%7==2){
        document.getElementById('invis1').innerHTML = "Tuesday"
    }
    if(Result%7==3){
        document.getElementById('invis1').innerHTML ="Wednesday"
    }
    if(Result%7==4){
        document.getElementById('invis1').innerHTML = "Thursday"
    }
    if(Result%7==5){
        document.getElementById('invis1').innerHTML = "Friday"
    }
    if(Result%7==6){
        document.getElementById('invis1').innerHTML = "Saturday"
    } 
    
}
function Daylator(day,monthcode,yearcode,a,lastTwoDigits){
    Result=day+monthcode+yearcode+a+lastTwoDigits
    console.log(Result)
    if(Result%7==0){
        document.getElementById('invis1').innerHTML = "Saturday"
    }
    if(Result%7==1){
        document.getElementById('invis1').innerHTML = "Sunday"
    }
    if(Result%7==2){
        document.getElementById('invis1').innerHTML = "Monday"
    }
    if(Result%7==3){
        document.getElementById('invis1').innerHTML = "Tuesday"
    }
    if(Result%7==4){
        document.getElementById('invis1').innerHTML = "Wednesday"
    }
    if(Result%7==5){
        document.getElementById('invis1').innerHTML = "Thusrday"
    }
    if(Result%7==6){
        document.getElementById('invis1').innerHTML = "Friday"
    }
    
}
document.getElementById('sub').onclick = function(){
    let day=document.getElementById('Day').value
   
    let month=document.getElementById('Month').value
    
    let year=document.getElementById('Year').value
    year = Number(year)
    day= Number(day)
    month=Number(month)
    let z=100
    
    let u
    const lastTwoDigits = year % 100;
    console.log(lastTwoDigits); // Output: 99
    let a=Math.floor(lastTwoDigits/4)
    
    let monthcode = monthy(month)
    
    
    let yearcode = Calculator(year,z)
    let p = leaps(year)
    console.log(p)
    if(month===1 || month===2){
        u=false}
    if(p==="leap" && u ==false){
        Daylator(day,monthcode,yearcode,a,lastTwoDigits)
        console.log(2)}
    else{
        DayCalculator(day,monthcode,yearcode,a,lastTwoDigits)
        console.log(3)
        
    }
    console.log(day+monthcode+yearcode+a+lastTwoDigits)

    console.log(monthcode)




}
