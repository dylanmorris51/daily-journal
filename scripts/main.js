import { useJournalEntries, getEntries, saveJournalEntry } from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntryList.js'
import { JournalForm } from './JournalForm.js'
import { getMoods } from './MoodProvider.js'


// const allTheEntries = useJournalEntries()
// console.log("The Entries:", allTheEntries)

EntryListComponent()


// getEntries()
JournalForm()

getMoods()