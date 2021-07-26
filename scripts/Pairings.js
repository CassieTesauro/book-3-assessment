import { getChildren, getCelebrities } from "./database.js"

const children = getChildren() //CT change kids -> children
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = null //CT change celebrity -> celebrityMatch

    for (const celebrity of celebrityArray) {  
        if (celebrity.id === kidObject.celebrityId){
            celebrityMatch = celebrity 
        }//CT add entire if statement
        
    }

    return celebrityMatch//CT fix typo in word celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const child of children) { //CT all kid changed to child
        const kidsStar = findCelebrityMatch(child, celebrities)
        html += `
            <li>
                ${child.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${child.wish}
            </li>
            
        `
    }

    html += "</ul>"

    return html
}

