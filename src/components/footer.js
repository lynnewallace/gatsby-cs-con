import React from 'react'
import Link from 'gatsby-link'
import { Container, Col, Row } from 'reactstrap'
import styles from './footer.module.css'

export default () => (
  <footer className={styles.footer}>
    <Container>
      <Row>
        <Col>
          <img src="https://www.caresourcer.com/wp-content/uploads/2017/11/bbc-news.png" />
        </Col>
        <Col>
          <img src="https://www.caresourcer.com/wp-content/uploads/2017/08/forbes.png" />
        </Col>
        <Col>
          <img src="https://www.caresourcer.com/wp-content/uploads/2017/08/scotsman.png" />
        </Col>
        <Col>
          <img src="https://www.caresourcer.com/wp-content/uploads/2018/01/nhs.png" />
        </Col>
      </Row>
    </Container>

    <hr />

    <div>
      <img
        className={styles.footerImageItem}
        src="https://www.caresourcer.com/wp-content/uploads/2017/08/logo-white.png"
      />
      <p>© 2018 Care Sourcer Ltd 38 Castle Terrace, Edinburgh, EH3 9DZ</p>
    </div>
    <div>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLinkItem}>
          <Link to="/terms-conditions/">Terms &amp; conditions</Link>
        </li>
        <li className={styles.footerLinkItem}>
          <Link to="/privacy-policy/">Privacy policy</Link>
        </li>
        <li className={styles.footerLinkItem}>
          <Link to="/cookie-policy/">Cookie policy</Link>
        </li>
      </ul>
    </div>
  </footer>
)
