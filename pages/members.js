import Container from '@/components/container'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Head from 'next/head'
import Link from 'next/link'
import {CMS_NAME} from '@/lib/config'
import {getAllTeamMembers} from '@/lib/api'
import PropTypes from 'prop-types'

export default function Members({allMembers: {edges}}) {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Header />
        <h3 className="text-5xl font-bold tracking-tighter leading-tight mb-12">
          Members
        </h3>
        {edges.map(({node}, index) => {
          return (
            <div key={index}>
              <h3 className="font-bold text-2xl leading-tight mb-2">
                <Link as={`/members/${node.slug}`} href="/members/[slug]">
                  <a
                    className="hover:underline"
                    dangerouslySetInnerHTML={{__html: node.title}}
                  />
                </Link>
              </h3>
              <p>{node.acf_team_member_title.title}</p>
              <div className="max-w-2xl mx-auto mb-12">
                <div dangerouslySetInnerHTML={{__html: node.content}} />
              </div>
            </div>
          )
        })}
      </Container>
    </Layout>
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
