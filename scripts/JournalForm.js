import { saveJournalEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newJournal")


const render = () => {
    contentTarget.innerHTML = `
    <h2>Daily Journal</h2>
    <section class="journalFormInput">
    <form action="">
    <!-- <fieldset> -->
    <!-- <fieldset> -->
        <label for="journalDate">Date of Entry:</label>
        <input type="date" name="journalDate" id="journalDate">
    <!-- </fieldset> -->
    <!-- <fieldset>   -->
        <label for="journalTitle">Title:</label>
        <input type="text" name="journalTitle" id="journalTitle">
    <!-- </fieldset>   -->
    <!-- <fieldset> -->
        <label for="journalConcepts">Concepts:</label>
        <input type="text" name="journalConcepts" id="journalConcepts">
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalEntry">Journal Entry:</label>
        <textarea rows="4" name="jorunalEntry" id="jorunalEntry"></textarea>
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalMood">Mood:</label>
        <select type="journalMood" name="journalMood" id="journalMood">
            <option value="Fine">Fine</option>
            <option value="Excited">Excited</option>
            <option value="Proud">Proud</option>
            <option value="Determined">Determined</option>
            <option value="Overwhelmed">Overwhelmed</option>
            <option value="Frusturated">Frusturated</option>
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
    render()
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