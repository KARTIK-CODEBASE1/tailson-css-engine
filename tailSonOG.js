//Understanding the logic with this Old code.
const page = document.querySelectorAll('*') // Selecting all elements in the DOM using the universal selector ('*')

page.forEach((element) => {
    // making a copy of classList (son-xyz-xyz)
    const classListCopy = Array.from(element.classList)

    classListCopy.forEach((className) => {

        if (className.startsWith('son-')) {

            const tokens = className.split('-')
            if (tokens[1] === 'bg') {
                element.style.backgroundColor = tokens[2]
            }
            if (tokens[1] === 'p') {
                element.style.padding = tokens[2] + 'px'
            }
            if (tokens[1] === 'text') {
                element.style.textAlign = tokens[2]
            }
            if (tokens[1] === 'br') {
                element.style.border = `${tokens[2]}px ${tokens[3]} ${tokens[4]}`
            }
            if (tokens[1] === 'rd') {
                element.style.borderRadius = tokens[2] + 'px'
            }
            if (tokens[1] === 'mar') {
                element.style.margin = tokens[2] + 'px'
            }
            if (tokens[1] === 'fsize') {
                element.style.fontSize = tokens[2] + 'px'
            }

            // removing the (son-xyz-xyz) after the style is applied.
            element.classList.remove(className)
        }
    })
})
