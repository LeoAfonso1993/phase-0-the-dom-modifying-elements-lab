const mainTag = window.document.querySelector('#main')
mainTag.remove()

const newHeader = window.document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "Leo is the champion"
document.write(newHeader.innerText)

