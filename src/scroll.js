document.addEventListener("click", function (e) {
    const element = e.target
    e.preventDefault()
    document.querySelector(element.hash).scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
})