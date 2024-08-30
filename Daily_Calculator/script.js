const numA = document.querySelector("#numx")
const numB = document.querySelector("#numy")
const result = document.querySelector(".calculate")
const operator = document.querySelector(".radio-buttons")
const computed = document.querySelector("#result")

const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const product = document.querySelector("#product")
const divide = document.querySelector("#divide")
const remainder = document.querySelector("#remainder")
const power = document.querySelector("#power")


numA.addEventListener("input", (event) => {
    const userInputA = numA.value
    console.log(userInputA);
})

numB.addEventListener("input", (event) => {
    const userInputB = numB.value
    console.log(userInputB);
})

result.addEventListener(("click"), () => {
    if (add.checked === true)
    {
        computed.value = (numA.value + numB.value)
    }
    else if (subtract.checked === true)
    {
        computed.value = (numA.value - numB.value)
    }
    else if (product.checked === true)
    {
        computed.value = (numA.value * numB.value)
    }
    else if (divide.checked === true)
    {
        computed.value = (numA.value / numB.value)
    }
    else if (remainder.checked === true)
    {
        computed.value = (numA.value % numB.value)
    }
    else if (power.checked === true)
    {
        computed.value = (numA.value ** num.value)
    }
})

