const moneyGiven=1000;
const applePrice=400;
const orangePrice=300;
const expense=applePrice+orangePrice;
const remainMoney=moneyGiven-expense;
// console.log(remainMoney);

const marksMath=75.25;
const marksBiology=65;
const marksChemistry=80;
const marksPhysics=35.45;
const marksBangla=99.50;

const marksTotal=marksMath+marksBiology+marksChemistry+marksPhysics+marksBangla;
const marksAverage=parseFloat((marksTotal/5).toFixed(2));
// console.log(marksAverage);

const theNumber=119;
const reminder=119%5;
// console.log(reminder);

const num1=83;
const num2=79;
const num3=145;
if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
}
else{
    if(num2>num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}

