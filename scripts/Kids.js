import { getChildren } from "./database.js"


//clickEvent: X has a wish of X
//CT B2 Click event using id added to the list items at bottom of module
document.addEventListener( //1. instatiate a click event that's triggered by clicking the target.
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

       if (itemClicked.id.startsWith("child")) { //2. on the <li> at the bottom of the module, assign an id "child--id#">
           const [,childId] = itemClicked.id.split("--") //3. Split the id from step 2 to make the string array ["child--", "id#"].  Instantiate a variable childId to reference the string "id#" created by the split.

            for (const child of children) { //4. Iterate through each object in the children array imported from database module
                if (child.id === parseInt(childId)) { //5.Check for condition: is the child object's id property value strictly equal to the value referenced by childId after the value is parsed from string into number type
                    window.alert(`${child.name} has a wish of ${child.wish}`) //6. If the step 5 condition is met, create a pop-up window for the user containing an interpolated string sentence.
                }
            }
           
        }
    }
)

const children = getChildren() //7. Reference the function getChildren() in a new variable children.

export const Kids = () => {//8. Instantiate a function Kids that will be available for import on other modules
    let html = "<ol>" //9. instantiate an ordered list referenced by variable html

    for (const child of children) { //10. Iterate through each object in the children array from database module
        html += `<li id="child--${child.id}">${child.name}</li>` //11. build up the ordered list with list items containing each object's name property value.  Each list item has an id to be used in the click event on this module.
    }//CT changed child,name -> child.name & added id="child--${child.id}"

    html += "</ol>" //12. Add the ordered list closing tag to the end of the data referenced by the variabl html
    return html //13. Return the data referenced by html (the ordered list with all list items)
}

