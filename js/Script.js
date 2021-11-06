const name = document.getElementById(`Textform`)
const form = document.getElementById(`form`)
const errorElement = document.getElementById(`error`)

form.addEventListener(`submit`, (e) => {
    let messages = []
    if (name.value === ``  name.value == null) {
        messages.push("The text areas should have at least 50 charakters to be valid.")

    }
    e.preventDefault()
    })