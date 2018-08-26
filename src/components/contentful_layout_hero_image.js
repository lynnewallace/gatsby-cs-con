import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import styles from './contentful_layout_hero_image.module.css'

export default ({ hero }) => (
  <div className={styles.footer} style={{backgroundImage: 'url(' + hero.backgroundImage.resize.src + ')'}}>
    <Card className={styles.cardMiddle}>
      <CardBody>
        <CardTitle>{hero.headline}</CardTitle>
        <CardText dangerouslySetInnerHTML={{
          __html: hero.copy.childMarkdownRemark.html,
        }}>
        </CardText>
        <a
          className="btn btn-primary"
          href="https://www.caresourcer.com/care-at-home-east-london/clkg/https/you.caresourcer.com/care-requests/new/start-window?care_type=home_care&amp;"
          target="_self"
        >
          {hero.ctaTitle}
        </a>
      </CardBody>
    </Card>
  </div>
)
