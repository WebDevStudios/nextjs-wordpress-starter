import Container from '@/components/container'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Head from 'next/head'
import {CMS_NAME} from '@/lib/config'
import {getAllTeamMembers} from '@/lib/api'
import PropTypes from 'prop-types'
import Member from '@/components/member'

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
          return <Member key={index} member={node} />
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
