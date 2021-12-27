// 버킷 스와이퍼

new Swiper('.container > .swiper', {

  // Optional parameters
  loop: false,
  spaceBetween: 10,
  // If we need pagination
  // Navigation arrows
  // And if we need scrollbar
  observer: true,
  observeParents: true,
  createElements:true,
});

// 버킷리스트 추가 이벤트
let bucketList =  document.querySelectorAll('.payout__bucket-list')
let modalAdd = document.querySelectorAll('.bucket-item__modal__add')
let bucketTitle = document.querySelector('.bucket-item__title')
let bucketTarget = document.querySelector('.bucket-item__target')
let 모달닫기 = document.querySelector('.bucket-item__modal')
modalAdd.forEach(function (e, i) {
  modalAdd[i].addEventListener('click', function () {
    let liEl = document.createElement('li')
    let divEl = document.createElement('div')
    let pEl1  = document.createElement('p')
    let pEl2  = document.createElement('p')

    // 돔 그리기 
    bucketList[i].append(liEl)
    liEl.classList.add('payout__bucket-item','swiper-slide')
    liEl.appendChild(divEl)
    divEl.appendChild(pEl1) //버킷 리스트 아이템내의 텍스트 제목
    divEl.appendChild(pEl2) // 버킷리스트 아이템 내의 텍스트 금액
    pEl1.innerHTML = bucketTitle.value
    pEl2.textContent = bucketTarget.value
    모달닫기.classList.remove('active')
  })
})

