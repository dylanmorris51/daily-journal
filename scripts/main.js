import { useJournalEntries, getEntries, saveJournalEntry } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntryList.js'
import { JournalForm } from './JournalForm.js'


const allTheEntries = useJournalEntries()
console.log("The Entries:", allTheEntries)

const seeList = EntryListComponent()
console.log("See The List:", seeList)

getEntries()
JournalForm()