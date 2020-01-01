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
  }

  @media ${device.mobileM} {
    h4 {
      font-size: 2.2rem;
    }
    a.btn-main {
      font-size: 2rem;
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
      font-size: 2.8rem;
    }
    a.btn-main {
      font-size: 2.8rem;
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: 4rem;
    }
    a.btn-main {
      font-size: 3.6rem;
    }
  }

  @media ${device.desktop} {
    h4 {
      font-size: 4.6rem;
    }
    a.btn-main {
      font-size: 4rem;
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
                  Just click to get advice, answer a few questions, and stay fit!
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