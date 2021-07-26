import { getChildren } from "./database.js"


//clickEvent: X has a wish of X
//CT B2 Click event using id added to the list items at bottom of module
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

       if (itemClicked.id.startsWith("child")) {
           const [,childId] = itemClicked.id.split("--")

            for (const child of children) {
                if (child.id === parseInt(childId)) {
                    window.alert(`${child.name} has a wish of ${child.wish}`)
                }
            }
           
        }
    }
)

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>` //CT B1 changed child,name -> child.name
    }//CT B2 added id="child--${child.id}"

    html += "</ol>"
    return html
}

