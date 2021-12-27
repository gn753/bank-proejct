function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

// 지출내역 버튼 클릭 시 헤더까지 올라가기 
var btnQsc = document.querySelectorAll('.payout__scroll-btn')
var payQsc = document.querySelectorAll('.payout')
var payInQsc = document.querySelectorAll('.payout__inner')

btnQsc.forEach(function(btnQc, i) {
  function onClick() {
    btnQsc[i].classList.toggle('active')
    payQsc[i].classList.toggle('active')
    payInQsc[i].classList.toggle('active')
    console.log("실행")
  };
  
  btnQc.addEventListener("click",onClick)
  }
)
console.log(btnQsc[0])



// 버킷리스트 버튼 클릭시 입력창 모달
let bucketItemAdd = document.querySelectorAll('.bucket-item-add')
let bucketItem = document.createElement('li')
let modal = document.querySelector('.bucket-item__modal')
// let bucketList =  document.querySelectorAll('.payout__bucket-list')
bucketItemAdd.forEach(function(element,i) {
  function inputModal(){
    bucketItemAdd[i].classList.toggle('active')
    modal.classList.toggle('active')
    // 모달 = modal.classList.contains('active')
    console.log('클릭')
  }
  element.addEventListener('click',inputModal)
})



