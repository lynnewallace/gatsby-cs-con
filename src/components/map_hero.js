import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import styles from './map_hero.module.css'

export default () => (
  <div className={styles.footer}>
    <Card className={styles.cardMiddle}>
      <CardBody>
        <CardTitle>Start your care selection</CardTitle>
        <CardText>
          We’ll bring you a list of available care agencies in your area and
          their price for your specific care needs, whatever they may be.
        </CardText>
        <a
          className="btn btn-primary"
          href="https://www.caresourcer.com/care-at-home-east-london/clkg/https/you.caresourcer.com/care-requests/new/start-window?care_type=home_care&amp;"
          target="_self"
        >
          Get your care options
        </a>
      </CardBody>
    </Card>
  </div>
)
