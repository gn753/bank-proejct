fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211227T035242Z&X-Amz-Expires=86400&X-Amz-Signature=27256ecfbb15bff279ed0f8efe61b8dc17b90df8e8f5d843e0abf0a844df11be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject')

.then(res => res.json())
.then(obj => { start(obj) })





function start(bank) {
  let payoutLi = document.querySelectorAll('.payout__list');
    payoutLi.forEach(function (e, i) {
    const ulElem = document.createElement('ul');
    payoutLi[i].appendChild(ulElem).classList.add('payout__list__contents')

    //반복문
    for (let i = 0; i < 5; i++) {
      const liElem = document.createElement('li');
      const spanElem = document.createElement('span');
      const pElem = document.createElement('p')
      spanElem.textContent = bank.bankList[i].history;
      pElem.textContent = bank.bankList[i].price;
      ulElem.appendChild(liElem)
      liElem.appendChild(spanElem);
      liElem.appendChild(pElem);
    }
  })
}