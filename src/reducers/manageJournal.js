function manageJournal(state = {
  journalEntries: []
}, action) {
  switch (action.type) {
    case 'ADD_JOURNAL_ENTRY':
      return { journalEntries: state.journalEntries.concat(action.payload.text) };
    
      default:
        return state;
  }
}

export default manageJournal;