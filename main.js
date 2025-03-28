document.getElementById('time').innerHTML = new Date().toLocaleString()

function lightblue() {
  document.body.style.backgroundColor = '#dcedff'
}
function linen() {
  document.body.style.backgroundColor = 'linen'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.</b>'
}
function showcss() {
  document.getElementById('fig').src = 'img/css.svg'
  document.getElementById('desc').innerHTML =
    '<b>CSS3는 HTML문서의 스타일을 지정하기 위한 언어이다.</b>'
}
function showjs() {
  document.getElementById('fig').src = 'img/javascript.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.</b>'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
