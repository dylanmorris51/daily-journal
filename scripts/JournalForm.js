import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from './MoodProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newJournal")



const render = (moods) => {


    contentTarget.innerHTML = `
    <h2>Daily Journal</h2>
    <section class="journalFormInput">
    <form action="">
    <!-- <fieldset> -->
    <!-- <fieldset> -->
        <label for="journalDate">Date of Entry:</label>
        <input type="date" name="journalDate" id="journalDate">
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalConcepts">Concepts:</label>
        <input type="text" name="journalConcepts" id="journalConcepts">
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalEntry">Journal Entry:</label>
        <textarea rows="4" name="journalEntry" id="journalEntry"></textarea>
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalMood">Mood:</label>
        <select type="journalMood" name="journalMood" id="journalMood">
            ${moods.map(mood => {
                return `<option id="mood--${mood.id}" value="${mood.id}">${mood.label}</option>`
            })}
        </select>
    <!-- </fieldset> -->
    <!-- </fieldset> -->
    
    <div id="submitButton">
        <input type="submit" value="Record Journal Entry" name="journalButton" id="journalButton">
    </div>
    
    <fieldset>
        <legend>Filter by Mood</legend>
        ${moods.map(mood => { return `
            <input type="radio" name="moodButton" value="${mood.label}" id="radio--${mood.id}">
            <label for="radio--${mood.id}">${mood.label}</label>
        `}).join("")}    
    </fieldset>
</form>
    </section>
    `
}

export const JournalForm = () => {
    getMoods()
        .then(useMoods)
        .then(() => {
            const moodsArray = useMoods()
            

            render(moodsArray)
        })
}

// Mood select listener
let suffix
eventHub.addEventListener("change", changeEvent => {
    
    if(changeEvent.target.id === "journalMood"){
        suffix = changeEvent.target.value

        const customEvent = new CustomEvent("moodSelected", {
            detail: {
                selectedMood: suffix
            }
        })
        console.log('customEvent: ', suffix);
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", event => {
    event.preventDefault()
    
    if (event.target.id === "journalButton") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#journalConcepts").value
        const entry = document.querySelector("#journalEntry").value
        // const mood = document.querySelector("#journalMood").value
        const mood = suffix
        console.log('mood post suffix: ', mood);

        
        const newEntry = {
                "date": date,
                "concept": concept,
                "entry": entry,
                "moodId": mood,
            }
            saveJournalEntry(newEntry)
    }
    

})