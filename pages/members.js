import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import {CMS_NAME} from '@/lib/config'
import {getAllTeamMembers} from '@/lib/api'
import PropTypes from 'prop-types'

export default function Members({allMembers: {edges}}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {edges.map(({node}, index) => {
            return (
              <div key={index}>
                <h3>
                  <Link as={`/members/${node.slug}`} href="/members/[slug]">
                    <a
                      className="hover:underline"
                      dangerouslySetInnerHTML={{__html: node.title}}
                    />
                  </Link>
                </h3>
                <div dangerouslySetInnerHTML={{__html: node.content}} />
                <p>{node.acf_team_member_title.title}</p>
              </div>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}

Members.propTypes = {
  allMembers: PropTypes.object
}

export async function getStaticProps() {
  const allMembers = await getAllTeamMembers()

  return {
    props: {allMembers},
    revalidate: 60
  }
}
