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
                return `<option value="${mood.id}">${mood.label}</option>`
            })}
        </select>
    <!-- </fieldset> -->
    <!-- </fieldset> -->
    
    <div id="submitButton">
        <input type="submit" value="Record Journal Entry" name="journalButton" id="journalButton">
    </div>
    
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

eventHub.addEventListener("click", event => {
    event.preventDefault()
    
    if (event.target.id === "journalButton") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#journalConcepts").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#journalMood").value
        
        const newEntry = {
                "date": date,
                "concept": concept,
                "entry": entry,
                "mood": mood,
            }
            saveJournalEntry(newEntry)
    }
    

})