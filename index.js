function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  renderList(name, age)

  colorItem.appendChild(renderColor(favoriteColor))

  list.appendChild(colorItem)

  const stats = document.querySelector('#stats')
  stats.appendChild(list)
}

function renderColor(favoriteColor) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(list, name, age) {
  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
}

function renderList(name, age) {
    list = document.createElement('ul')
    renderListItem(list, name, age)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
