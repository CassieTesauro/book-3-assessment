import { getChildren, getCelebrities } from "./database.js"

const children = getChildren() //CT kids -> children
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = null //CT change variable celebrity -> celebrityMatch

    for (const celebrity of celebrityArray) {  
        if (celebrity.id === kidObject.celebrityId){
            celebrityMatch = celebrity 
        }//CT adding entire if statement
        
    }

    return celebrityMatch//was already here; CT fixed typo in word celebrity
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

