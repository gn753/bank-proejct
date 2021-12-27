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
const test = document.querySelector('.payout__scroll-btn')
function onClick() {
  test.classList.add('.active')
  document.querySelector('.payout').classList.toggle('active')
  console.log("실행")
};
test.addEventListener("click",onClick)