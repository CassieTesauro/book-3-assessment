import { getCelebrities, getChildren } from "./database.js"

//clickevent: X is a X
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("celebrity")) {
            const [,celebrityIdNum] = itemClicked.id.split("--")

            for (const celebrity of celebrities) {
                if (celebrity.id === parseInt(celebrityIdNum)) {
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
            }
        }
    }
)

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) { //CT changed object variable from star to celebrity
        html += `<li id="celebrity--${celebrity.id}">${celebrity.name}</li>` //CT changed id="star--  ->  id="celebrity--
    }

    html += "</ol>"
    return html
}
