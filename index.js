function update(ev) {
    ev.preventDefault()
    const f = event.target
    const name = f.name.value
    const color = f.color.value
    const heading = document.querySelector('h1')
    heading.innerHTML = name
    const divPara = document.querySelector('#divCont')
    divPara.innerHTML = name + " " + color 
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', update)
