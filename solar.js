const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(currentPlanet => {
    const planetEl = document.getElementById("planets").innerHTML += `<li>${currentPlanet}</li>`
})

const capitalPlanets = planets.map(planet => {
    // return `${planet}`.toUpperCase().slice(0)
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})
console.log(capitalPlanets)

const filterPlanets = planets.filter(planets => {
return `${planets}`.split("").includes("e")? true:false
})

console.log(filterPlanets)
// console.log(planets.includes(filterPlanets))

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/