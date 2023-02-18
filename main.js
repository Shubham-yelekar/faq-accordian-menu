const accordion = document.getElementsByClassName('question-wrapper');
const questionBtn = document.querySelectorAll('lable')

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    console.log(questionBtn.classList)
    this.classList.toggle('active')
  })
}
