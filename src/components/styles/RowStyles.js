import styled from 'styled-components'

const RowStyles = styled.div`

  div.row.centered-row {
    justify-content: center;
  }

  div.row.centered-row-form {
    justify-content: center;
    padding-top: 6.5rem;
    margin-left: 2.5rem;
    width: 80%;
  }

  div.row.left-justified-row {
    justify-content: left;
    padding-left: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
  }

  div.row.left-justified-row-form {
    justify-content: left;
    padding-top: 6.5rem;
    margin-left: .5rem;
    width: 95%;
  }

  div.row.centered-row-advice {
    justify-content: center;
    padding-top: 6.5rem;
    margin-left: .5rem;
    width: 100%;
  }

  div.advice-container {
    margins: 0;
    padding-bottom: 2em;
  }
`

export default RowStyles