import Container from '@/components/atoms/Container'
import Layout from '@/components/common/Layout'
import { signIn, useSession } from 'next-auth/client'

/**
 *
 */
export default function Login() {
    const [session] = useSession()
    return (
        <Layout>
            <Container>
                {session ? (
                    <p>Signed in</p>
                ) : (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => signIn()}
                        >
                            Login
                        </button>
                    )}
            </Container>
        </Layout>
    )
}
