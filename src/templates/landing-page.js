import React from 'react'
import get from 'lodash/get'
import Headering from '../components/headering'
import Regulators from '../components/regulators'
import CareSteps from '../components/care_steps'
import HeroImage from '../components/contentful_layout_hero_image'
import Footer from '../components/footer'
import MapHero from '../components/map_hero'

class landingPageTemplate extends React.Component {
  render() {
    const layoutContent = get(this.props, 'data.contentfulLayout')
    const blocks = layoutContent.contentModules
    return (
      <div>
        {blocks.map(block => {
          return <HeroImage hero={block}/>
        })}
      </div>
    )
  }
}

export default landingPageTemplate

export const pageQuery = graphql`
  query LandingPageBySlug($slug: String!) {
    contentfulLayout(slug: { eq: $slug }) {
      slug
      contentModules {
        internal {
          type
        }
        ... on ContentfulLayoutHeroImage {
          title
          headline
          copy {
            childMarkdownRemark {
              html
            }
          }
          ctaTitle
          backgroundImage {
            resize(width: 1000) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`
