
const mark = document.querySelector('.mark');
const notiValue = document.querySelector('.noti-value');
const jsChange = document.querySelectorAll('.js-change');

function handleClick() {
    jsChange.forEach((div) => {
        div.classList.remove('no-read');
        div.classList.add('read')
    })
    notiValue.innerText = '0';
}
mark.addEventListener('click', handleClick);



function updateNotiValue() {
    const noReadValue = Array.from(jsChange).filter((div) => {
        return div.classList.contains('no-read')
    }).length;
    notiValue.innerText = noReadValue;
}

function markNoti(element, index) {
    jsChange[index].classList.remove('no-read');
    jsChange[index].classList.add('read');


    updateNotiValue()
}


jsChange.forEach((div, index) => {
    div.addEventListener('click', function () {
        markNoti(div, index);
    })
})







