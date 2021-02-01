import { useJournalEntries, getEntries } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntryList.js'


const allTheEntries = useJournalEntries()
console.log("The Entries:", allTheEntries)

const seeList = EntryListComponent()
console.log("See The List:", seeList)

getEntries()