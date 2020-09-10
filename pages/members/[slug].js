import PropTypes from 'prop-types'
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Header from '@/components/header'
import Layout from '@/components/layout'
import {getAllMembersWithSlug, getMember} from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import {CMS_NAME} from '@/lib/config'

export default function Member({member}) {
  const router = useRouter()

  if (!router.isFallback && !member?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {member.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
              <PostTitle>{member.title}</PostTitle>
              <h2 className="text-3xl font-medium">
                {member.acf_team_member_title.title}
              </h2>
              <PostBody content={member.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

Member.propTypes = {
  member: PropTypes.object
}

export async function getStaticProps({params}) {
  const data = await getMember(params.slug)

  return {
    props: {
      member: data
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const allMembers = await getAllMembersWithSlug()

  return {
    paths: allMembers.edges.map(({node}) => `/members/${node.slug}`) || [],
    fallback: true
  }
}
