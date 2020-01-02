import React from 'react'
import { Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import ColumnStyles from '../styles/ColumnStyles'
import ButtonStyles from '../styles/ButtonStyles'
import TextStyles from '../styles/TextStyles'
import { device } from '../styles/device'

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
      font-size: 4.6rem;
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

const Advisor = () => {
  return (
    <MediaQueries>
      <ColumnStyles>
        <ButtonStyles>
          <TextStyles>
            <Col lg={12} className='col-lg-12 message-col'>
                <h4 style={{lineHeight: '150%'}}>
                  Just click to answer a few questions, get advice, and stay fit!
                </h4>
            </Col>

            <Col lg={12} className='col-lg-12 button-col'>
              <Button variant="main" href='/food_advisors/new'>
                  Get Food Advice
              </Button>
            </Col>

            <Col lg={12} className='col-lg-12 button-col' style={{paddingTop: '1rem'}}>
              <Button variant="main" href='/activity_advisors/new'>
                Get Activity Advice
              </Button>
            </Col>
          </TextStyles>
        </ButtonStyles>
      </ColumnStyles>
    </MediaQueries>
  )
}

export default Advisor