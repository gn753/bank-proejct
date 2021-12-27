fetch(
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211223T102152Z&X-Amz-Expires=86400&X-Amz-Signature=7c7a98ce242cd7c5bb5fd3b35efc9443c0f458fa160ccf904214074e22b476ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject'
)
.then(res => res.json())
.then(function (data) {
  console.log(data);
})
.then(obj => {
  start(obj)
})




function start(data) {
const ulElem = document.createElement('ul')
document.querySelector('#app').appendChild(ulElem)
const dateArr = [] // 날짜 데이터
for (let i = 0; i < pay.bankList.length; i++) {
  dateArr.push(data.bankList[i].date);
  const sapnEl = document.createElement('span')
  const labelEl = document.createElement('label')
  const liEl = document.createElement('li')
  // const imgElem = document.createElement('img')
  const pEl = document.createElement('p')
  pElem.textContent = data.bankList[i].history;
  liElem.appendChild(pEl)
  ulElem.appendChild(liEl)
}
const liElem = document.createElement('li')
const imgElem = document.createElement('img')
}
//1.날짜 date 
//2 history
//3 가격 price 

// sum 계산하는법
// 날짜 추출하는 법 


// 자바스크립트 중복제거 

const set = new Set(dateArr) // 중복제거 함수 Set을 변수 set에 넣는다
const newDateArr = [...set] // 중복제거한 날짜를 뽑아서 넣는다.



