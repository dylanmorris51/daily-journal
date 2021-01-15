import {useJournalEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

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