const form = document.forms.namedItem('signup')
const inps = form.querySelectorAll('.must')

form.onsubmit = (event) => {
    event.preventDefault()

    let isError = false

    inps.forEach(inp => {
        if(inp.value.length === 0) {
            inp.style.border = "2px solid #EE0004"
            isError = true
        } 
    })

    if (isError === false) {
        submit(event.target)
        return
    }
}

function submit(form) {}
