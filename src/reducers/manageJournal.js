function manageJournal(state = {journalEntries: []}, action) {
  switch (action.type) {
    case 'FETCH_JOURNAL_ENTRIES':
      return {
        journalEntries: action.payload
      };
    case 'ADD_JOURNAL_ENTRY':
      return {
        ...state, journalEntries: [...state.journalEntries, action.payload]
      }
    default:
      return state;
  }
}

export default manageJournal;