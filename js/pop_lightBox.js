$(document).ready(function() {
    
    // 當打開pop禁止滾動
    function openPop(){
        event.preventDefault();
        $('html,body').addClass('noScroll');
    }
    // 當按下關閉pop,lightBox
    function advisoryClose(){
        event.preventDefault();
        $('.pop').removeClass('popOpen');
        $('.overray').removeClass('lightBoxOpen');
        $('html,body').removeClass('noScroll');
     }

    // 打開Pop
    $('.openPop').click(function(event){
        openPop();
        let popName=event.target.dataset.pop;
        if(popName == 'advisory'||popName=='getnews'){ //諮詢表單
            $(`section[data-pop="${popName}"]`).addClass('popOpen');
            return; 
        }
        $(`section[data-pop="${popName}"]`).addClass('lightBoxOpen');
        
    });

    // // 打開確認地區
    // $('.openPop_comfirmOpen').click(function(event){
    //     openPop();
    //     let popName=event.target.dataset.pop;
    //     $(`section[data-pop="${popName}"]`).addClass('lightBoxOpen');
    // });

    // // 打開諮詢專人
    // $('.openPop_advisory').click(function(event){
    //     openPop();
    //     $('section[data-pop="advisory"]').addClass('popOpen');
    // });

    // 打開搶先通知
    $('.openPop_getnews').click(function(event){
        openPop();
        $('.pop').removeClass('areaComfirmOpen');
        $('section[data-pop="getnews"]').addClass('popOpen');
    });

    // 按下關閉諮詢專人＋搶先通知
    $('.advisoryClose').click(function(event){
        advisoryClose();
    })



//---------表單驗證---------

    const getnewsRequired = document.querySelectorAll('.getnewsRequired');
    const advisoryRequired = document.querySelectorAll('.advisoryRequired');

    // 檢查必填 顯示紅字
    let showRequired =(ary)=>{
        ary.forEach(item => {
                let itemName = item.id;
                let requiredSpan = document.querySelector(`.advisoryForm__box--required[data-required="${itemName}"]`);
                if(item.value == ''||item.value==undefined){
                    requiredSpan.style.display = 'block';
                }else{
                    requiredSpan.style.display = 'none';
                }
            })
    }
    // 當鼠標移開input觸發
    let blurRequired = (ary)=>{
        ary.forEach(item => {
            item.addEventListener('blur',()=>{
                let itemName = item.id;
                let requiredSpan = document.querySelector(`.advisoryForm__box--required[data-required="${itemName}"]`);
                if(item.value == ''||item.value==undefined){
                    requiredSpan.style.display = 'block';
                }else{
                    requiredSpan.style.display = 'none';
                }
            })
        });
    }
    blurRequired(getnewsRequired);
    blurRequired(advisoryRequired);

    // 計算是否必填都完成了
    let boolen_required = false;
    let checkRequired =(ary)=>{
        boolen_required = false;
        let num_required = ary.length;
        let num_value=0;
        ary.forEach(item=>{
            if(item.value == ''||item.value==undefined){
                
            }else{
                num_value+=1;
            }
        })
        if(num_value==num_required){
            boolen_required = true;
        }else{
            showRequired(ary);
        }
    }


//---------取得表單的值---------
    // 取得專人聯繫物件
let getFormValue=inputAry=>{
    formName =inputAry[0].value;
    formRestaurant_name = inputAry[1].value;
    formPhone_number=inputAry[2].value;
    formContact_time = inputAry[3].value;
    formMemo = inputAry[4].value;
}

//---------點擊搶先通知---------
const getnewsInput = document.querySelectorAll('.getnewsInput');
let getnewsSubmit = document.getElementById('getnewsSubmit')
getnewsSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    checkRequired(getnewsRequired);
    if (boolen_required){
        let formName =getnewsInput[0].value;
        let formRestaurant_name = getnewsInput[1].value;
        let formPhone_number=getnewsInput[2].value;
        let formArea = getnewsInput[3].value;
        let formMemo = getnewsInput[4].value;
        let apiUrl = `https://api.foodmarco.com/api/v1/contact/early-bird?name=${formName}&restaurant_name=${formRestaurant_name}&phone_number=${formPhone_number}&area=${formArea}&memo=${formMemo}`;
        console.log(apiUrl);
        axios
            .post(apiUrl)
            .then((response) => {
                console.log(response);
                document.getElementById("getnewsForm").reset();
                alert('已收到您的訊息，會盡快與您聯絡！');
                advisoryClose(event);
            })
            .catch((error) => {
                console.log(error);
                alert('資料傳送失敗，請確認您的網路狀態或直接撥打專人電話。');
            });
    }else{
        alert('請檢查是否資料都填寫完成');
    }
})
// });


//---------點擊專人諮詢---------
    const advisoryInput = document.querySelectorAll('.advisoryInput');
    let advisorySubmit = document.getElementById('advisorySubmit')
    advisorySubmit.addEventListener('click',(event)=>{
        event.preventDefault();
        checkRequired(advisoryRequired);
        if (boolen_required){
            let formName =advisoryInput[0].value;
            let formRestaurant_name = advisoryInput[1].value;
            let formPhone_number=advisoryInput[2].value;
            let formContact_time = advisoryInput[3].value;
            let formMemo = advisoryInput[4].value;
            let apiUrl = `https://api.foodmarco.com/api/v1/contact/business?name=${formName}&restaurant_name=${formRestaurant_name}&phone_number=${formPhone_number}&contact_time=${formContact_time}&memo=${formMemo}`;

            console.log(apiUrl);
            axios
                .post(apiUrl)
                .then((response) => {
                    console.log(response);
                    document.getElementById("advisoryForm").reset();
                    alert('已收到您的訊息，會盡快與您聯絡！');
                    advisoryClose(event);
                })
                .catch((error) => {
                    console.log(error);
                    alert('資料傳送失敗，請確認您的網路狀態或直接撥打專人電話。');
                });
        }else{
            alert('請檢查是否資料都填寫完成');
        }
    })

});



