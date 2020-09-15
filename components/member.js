import PropTypes from 'prop-types'
import Link from 'next/link'

export default function Member({member}) {
  return (
    <>
      <h3 className="font-bold text-2xl leading-tight mb-2">
        <Link as={`/members/${member.slug}`} href="/members/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{__html: member.title}}
          />
        </Link>
      </h3>
      <p>{member.acf_team_member_title.title}</p>
      <div className="max-w-2xl mx-auto mb-12">
        <div dangerouslySetInnerHTML={{__html: member.content}} />
      </div>
    </>
  )
}

Member.propTypes = {
  member: PropTypes.object
}
