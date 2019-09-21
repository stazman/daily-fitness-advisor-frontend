export function fetchJournalEntries() {
	return (dispatch) => {
		fetch('http://localhost:3001/api/v1/journals')
    .then( resp => resp.json() )
    .then( journalEntries => dispatch({
			type: 'FETCH_JOURNAL_ENTRIES',
			payload: journalEntries
		}));
	};
}

