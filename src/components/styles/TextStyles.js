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
    font-size: 3rem;
    padding: 0;
  }

  label.form-label {
    font-size: 2.4rem;
    line-height: 125%;
  }

  input[type='radio'] { 
    position: absolute;
    top: 20%;
    transform: scale(1.4);
  }
  
  label.form-check-label {
    font-size: 2rem;
  }

  textarea {
    margin-top: 2rem;
    height: 10rem;
    font-size: 2.6rem;
  }

  small.form-text {
    font-size: 1.8rem;
  }
`

export default TextStyles