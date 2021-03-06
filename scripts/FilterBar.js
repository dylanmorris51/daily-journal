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
    console.log("event flag", event)
    if (event.target.name === "moodButton") {
        const [prefix, suffix] = event.target.id.split("--")
        console.log('suffix: ', suffix);
        
        const customEvent = new CustomEvent("moodChosen", {
            detail: {
                moodChosen: suffix
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log('Mood Filter Click Event Dispatched: ', customEvent);

    }
})