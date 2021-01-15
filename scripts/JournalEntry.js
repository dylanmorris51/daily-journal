export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <hr>
            <div class="entry__date">${entry.date}</div>
            <div class="entry__concepts">${entry.concept}</div>
            <div class="entry__entry">${entry.entry}</div>
            <div class="entry__mood>${entry.mood}</div>
            <div class="entry__actions">
                <input type="submit" value="Edit" class="entry__edit">
                <input type="submit" value="Delete" class="entry__delete">
            </div>
            <hr>
        </section>    
        `
}