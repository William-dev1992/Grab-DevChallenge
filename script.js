const emailInput = document.querySelector('#container div.login div:nth-child(2) input:nth-child(1)');

const span = document.querySelector('#container div.login div:nth-child(2) span.hide') 

const icon = document.querySelector('#container div.login div:nth-child(2) span:nth-child(2)')

let teste = () => {
  if(2 != 3){
    console.log("s");
    return false
  }
}

function checkEmail() {
  if(
      emailInput.value.includes('@') && 
      emailInput.value.includes('.')
    ){
    console.log('teste');
  } else {
    emailInput.classList.add('denied');
    span.classList.add('show');
    icon.classList.add('red')

    setTimeout(() => {
      emailInput.classList.remove('denied');
      span.classList.remove('show');
      icon.classList.remove('red')
    }, 5000)
  }
}