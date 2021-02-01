import {getEntries, useJournalEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
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
}

eventHub.addEventListener("journalStateChanged", event => {
    getEntries()
        .then(EntryListComponent)
})