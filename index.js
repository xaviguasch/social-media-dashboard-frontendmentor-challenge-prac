const checkBox = document.querySelector('.switch input')

const body = document.querySelector('body')

const changeMode = () => {
  if (!checkBox.checked) {
    body.classList.toggle('dark')
    console.log('dark mode')
  } else {
    body.classList.toggle('dark')

    console.log('light mode')
  }
}

checkBox.addEventListener('click', changeMode)
