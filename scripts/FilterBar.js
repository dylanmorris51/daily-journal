import { MoodFilter } from './MoodFilter.js'
import { getMoods, useMoods } from './MoodProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters")



const render = (allMoods) => {
    contentTarget.innerHTML = MoodFilter(allMoods)
    
}

export const FilterBar = () => {
    getMoods()
        .then(() => {
            let allMoods = useMoods()
            
            
        
            render(allMoods)
        })

}

eventHub.addEventListener("click", event => {
    
    if (event.target.name === "moodButton") {
        const [prefix, suffix] = event.target.id.split("--")
        
        
        const customEvent = new CustomEvent("moodChosen", {
            detail: {
                moodChosen: suffix
            }
        })
        eventHub.dispatchEvent(customEvent)
        

    }
})