import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { device } from '../styles/device'
import RowStyles from '../styles/RowStyles'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    h4 {
      font-size: 2rem;
    }
    a.btn-main {
      font-size: 1.6rem;
    }
    div.col-lg-12.button-col {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  @media ${device.mobileM} {
    h4 {
      font-size: 2.3rem;
    }
    a.btn-main {
      font-size: 2rem;
    }
    div.col-lg-12.button-col {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  @media ${device.mobileL} {
    h4 {
      font-size: 2.4rem;
  }

  @media ${device.tabletS} {
    h4 {
      font-size: 2.6rem;
    }
    a.btn-main {
      font-size: 2.6rem;
    }
  }

  @media ${device.tabletL} {
    h4 {
      font-size: 3rem;
    }
    a.btn-main {
      font-size: 2.8rem;
    }
    div.col-lg-12.button-col {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: 4rem;
    }
    a.btn-main {
      font-size: 3.6rem;
    }
    div.col-lg-12.button-col {
      padding-bottom: 7rem;
    }
  }

  @media ${device.laptopL} {
    div.col-lg-12.button-col {
      padding-top: 7rem;
      padding-bottom: 8rem;
  }

  @media ${device.desktop} {
    h4 {
      font-size: 5.5rem;
    }
    a.btn-main {
      font-size: 4rem;
    }
    div.col-lg-12.button-col {
      padding-top: 8.5rem;
      padding-bottom: 10rem;
    }
    div.sc-bxivhb.icWcwL {
      width: 120%;
      margin-left: -16rem;
    } 
  }
`

const JournalHome = () => {
  return (
    <>
      <MediaQueries>
        <RowStyles>
          <ColumnStyles>
            <ButtonStyles>
              <TextStyles>

                  <Row className='centered-row'>
                    <Col lg={12} className='col-lg-12 message-col'>
                      <h4>
                        Your Journal
                      </h4>
                    </Col>

                    <Col lg={12} className='col-lg-12 button-col'>
                      <Button variant="main" href='/journals/new'>
                        Add a New Entry
                      </Button>
                    </Col>

                    <Col lg={12} className='col-lg-12 button-col'>
                    <Button variant="main" href='/journals'>
                      View All Entries
                    </Button>
                    </Col>
                  </Row>
                
                </TextStyles>    
            </ButtonStyles>
          </ColumnStyles>
        </RowStyles>
      </MediaQueries>
    </>
  )
}
 
export default JournalHome