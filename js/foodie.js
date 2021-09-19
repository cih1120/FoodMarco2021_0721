// 計算器切換
const calculatorFans = document.getElementById('calculatorFans');
const calculatorTraffic = document.getElementById('calculatorTraffic');
const calculatorToggle = document.getElementById('calculatorToggle');
calculatorToggle.addEventListener('click', (e) => {
    if (calculatorToggle.checked == true) {
        calculatorFans.setAttribute('class', 'calculatorBox');
        calculatorTraffic.setAttribute('class', 'calculatorBox calculatorBox--active');
    } else {
        calculatorFans.setAttribute('class', 'calculatorBox calculatorBox--active');
        calculatorTraffic.setAttribute('class', 'calculatorBox');
    }
})

const calculatorFans_percentage=0.03;

//以粉絲數計算
const calculatorFans_ans = document.getElementById('calculatorFans-ans');//答案
let count_calculatorFans = ()=>{
    let fans = document.getElementById('calculatorFans-fans').value;
    let share = document.getElementById('calculatorFans-share gtm-engage-foodie-calculatorFans').value;
    let approbatePeople = document.getElementById('calculatorFans-approbatePeople');
    let approbateMonth = document.getElementById('calculatorFans-approbateMonth').value;
    let consumePrice = document.getElementById('calculatorFans-consume gtm-engage-foodie-calculatorFans').value;
    let consumeText = document.getElementById('calculatorFans-consumeText');

    let num_approbatePeople = Math.round(fans*share); //四捨五入共有?人認可我的食記
    approbatePeople.innerHTML = num_approbatePeople;
    let num_ans = num_approbatePeople*approbateMonth*consumePrice*calculatorFans_percentage*12;
    consumeText.innerHTML = consumePrice;
    num_ans=num_ans.toLocaleString('en-US');
    calculatorFans_ans.innerHTML=num_ans;
}

let calculatorFans_inputArry = document.querySelectorAll('#calculatorFans input,#calculatorFans select');
calculatorFans_inputArry.forEach((item)=>{
    item.addEventListener('change',()=>{
        count_calculatorFans();
    })
})
let calculatorFans_buttonArry = document.querySelectorAll('#calculatorFans button');
calculatorFans_buttonArry.forEach((item)=>{
    item.addEventListener('click',()=>{
        count_calculatorFans();
    })
})

count_calculatorFans();


//以文章流量計算
const calculatorTraffic_ans = document.getElementById('calculatorTraffic-ans');//答案
let count_calculatorTraffic = ()=>{
    let story = document.getElementById('calculatorTraffic-story').value;
    let traffic = document.getElementById('calculatorTraffic-traffic').value;
    let share = document.getElementById('calculatorTraffic-share gtm-engage-foodie-calculatorTraffic').value;
    let save = document.getElementById('calculatorTraffic-save');
    let approbate = document.getElementById('calculatorTraffic-approbate gtm-engage-foodie-calculatorTraffic').value;
    let consumeMonth = document.getElementById('calculatorTraffic-consumeMonth');
    let approbateMonth = document.getElementById('calculatorTraffic-approbateMonth').value;
    let consumeText = document.getElementById('calculatorTraffic-consumeText');
    let consumePrice = document.getElementById('calculatorTraffic-consumePrice gtm-engage-foodie-calculatorTraffic').value;

    let num_save = Math.round(story*traffic*share); //計算收藏數
    save.innerHTML = num_save;
    let num_consumeMonth = Math.round(num_save*approbate);
    consumeMonth.innerHTML = num_consumeMonth; //填入月認可次數
    consumeText.innerHTML = consumePrice; //填入客單價

    let num_ans = num_consumeMonth*approbateMonth*consumePrice*calculatorFans_percentage*12;
    calculatorTraffic_ans.innerHTML = num_ans.toLocaleString('en-US');
}
let calculatorTraffic_inputArry = document.querySelectorAll('#calculatorTraffic input,#calculatorTraffic select');
calculatorTraffic_inputArry.forEach((item)=>{
    item.addEventListener('change',()=>{
        count_calculatorTraffic();
    })
})
let calculatorTraffic_buttonArry = document.querySelectorAll('#calculatorTraffic button');
calculatorTraffic_buttonArry.forEach((item)=>{
    item.addEventListener('click',()=>{
        count_calculatorTraffic();
    })
})

count_calculatorTraffic();