import styled from 'styled-components'

const TextStyles = styled.div`

  a {
    color: navy;
  }

  li {
    list-style: none;
  }

  .coral-text {
    color: #f88379;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    }
  }

  h3 {
    font-size: 1.8rem;
  }
  
  h4 {
    font-size: 1.6rem;
  }
  
  h5 {
    font-size: 1.2rem;
    padding: 0;
  }

  label.form-label {
    font-size: 1.2rem;
    line-height: 135%;
  }

  input[type='radio'] { 
    transform: scale(.8);
  }

  label.form-check-label {
    font-size: 1rem;
  }
`

export default TextStyles