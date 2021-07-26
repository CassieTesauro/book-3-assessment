import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) { //CT changed object variable from star to celebrity
        html += `<li id="celebrity--${celebrity.id}">${celebrity.name}</li>` //CT changed id="star--  ->  id="celebrity--
    }

    html += "</ol>"
    return html
}
