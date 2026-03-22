<<<<<<< HEAD
// Selecting all the elements in the DOM 
const page = document.querySelectorAll('*')

// Clean maping with utility hadler replacing the if-else ladder
const handlers = {
    bg: (el, val) => el.style.backgroundColor = val,
    p: (el, val) => el.style.padding = val + 'px',
    text: (el, val) => el.style.textAlign = val,
    br: (el, val, t) => el.style.border = `${val}px ${t[3]} ${t[4]}`,
    rd: (el, val) => el.style.borderRadius = val + 'px',
    mar: (el, val) => el.style.margin = val + 'px',
    fsize: (el, val) => el.style.fontSize = val + 'px',
    tcolor: (el, val) => el.style.color = val,
    fntwht: (el, val) => el.style.fontWeight = val,
    wdth: (el, val) => el.style.width = val + 'px',
    shadow: (el) => el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)',
    hgt:(el, val) => el.style.height = val + 'px'
}

page.forEach((element) => {
    // Copying classList to avoid mutation issues
    const classListCopy = Array.from(element.classList)

    classListCopy.forEach((className) => {

        if (!className.startsWith('son-')) return

        const tokens = className.split('-')
        const type = tokens[1]

        if (handlers[type]) {
            handlers[type](element, tokens[2], tokens)
        }

        // Removing processed class
        element.classList.remove(className)
    })
})
=======
// Selecting all the elements in the DOM 
const page = document.querySelectorAll('*')

// Clean maping with utility hadler replacing the if-else ladder
const handlers = {
    bg: (el, val) => el.style.backgroundColor = val,
    p: (el, val) => el.style.padding = val + 'px',
    text: (el, val) => el.style.textAlign = val,
    br: (el, val, t) => el.style.border = `${val}px ${t[3]} ${t[4]}`,
    rd: (el, val) => el.style.borderRadius = val + 'px',
    mar: (el, val) => el.style.margin = val + 'px',
    fsize: (el, val) => el.style.fontSize = val + 'px',
    tcolor: (el, val) => el.style.color = val,
    fntwht: (el, val) => el.style.fontWeight = val,
    wdth: (el, val) => el.style.width = val + 'px',
    shadow: (el) => el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'
}

page.forEach((element) => {
    // Copy classList to avoid mutation issues
    const classListCopy = Array.from(element.classList)

    classListCopy.forEach((className) => {

        if (!className.startsWith('son-')) return

        const tokens = className.split('-')
        const type = tokens[1]

        if (handlers[type]) {
            handlers[type](element, tokens[2], tokens)
        }

        // Removing processed class
        element.classList.remove(className)
    })
})
>>>>>>> 801017ae3ad55fe8656496fcb665758ed4c8b783
