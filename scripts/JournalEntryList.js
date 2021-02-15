import {getEntries, useJournalEntries, DeletePastEntry } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'


const eventHub = document.querySelector(".container")
const entryLog = document.querySelector("#entryLog")

// Entry List Component
export const EntryListComponent = () => {
    
    getEntries()

    .then(() => {
        
            const entries = useJournalEntries()
            let journalHTMLRepresentations = ""
            for (const entry of entries) {
                journalHTMLRepresentations += JournalEntryComponent(entry)
        
            }
        
            entryLog.innerHTML += ` 
                <section class="recordedEntries">
                    ${journalHTMLRepresentations}
                </section>
                `
        })
}

// Journal State Changed
eventHub.addEventListener("journalStateChanged", event => {
    
        EntryListComponent()
})

// Event listener that handles the delete button
eventHub.addEventListener("deleteClicked", clickEvent => {
    const entryId = clickEvent.detail.entryId
        // Find the entry id and replace notes calls with journal calls
        DeletePastEntry(entryId)
        .then(EntryListComponent)
            
        
})
