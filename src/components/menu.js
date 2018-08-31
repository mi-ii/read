import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const MenuDebugBlock = styled.div`
  background: forestgreen;
  height: 100%;
  width: 100%;
`

// const ReadMenuItem = () => (
//   <StaticQuery
//     query={graphql`
//       query ReadMenuItemImage {
//         file(relativePath: { eq: "readmi_logo_static.png" }) {
//           childImageSharp {
//             resolutions(width: 220, height: 220) {
//               ...GatsbyImageSharpResolutions_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Img resolutions={data.file.childImageSharp.resolutions} />
//       </>
//     )}
//   />
// )

// const MiMenuItem = () => (
//   <StaticQuery
//     query={graphql`
//       query MiMenuItemImage {
//         file(relativePath: { eq: "misquared_logo_static.png" }) {
//           childImageSharp {
//             resolutions(width: 220, height: 220) {
//               ...GatsbyImageSharpResolutions_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Img resolutions={data.file.childImageSharp.resolutions} />
//       </>
//     )}
//   />
// )

// const Menu = () => (
//   <MenuWrapper>
//     <ReadMenuItem />
//     <MiMenuItem />
//   </MenuWrapper>
// )

const Menu = () => (
  <MenuWrapper>
    <StaticQuery
      query={graphql`
        query MenuIcons {
          read: file(relativePath: { eq: "readmi_logo_static.png" }) {
            childImageSharp {
              resolutions(width: 220, height: 220) {
                ...GatsbyImageSharpResolutions_tracedSVG
              }
            }
          }
          mi: file(relativePath: { eq: "misquared_logo_static.png" }) {
            childImageSharp {
              resolutions(width: 220, height: 220) {
                ...GatsbyImageSharpResolutions_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Img resolutions={data.read.childImageSharp.resolutions} />
          <Img resolutions={data.mi.childImageSharp.resolutions} />
        </>
      )}
    />
  </MenuWrapper>
)

export default Menu
