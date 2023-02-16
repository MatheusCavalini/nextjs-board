import NextAuth, {Session, User} from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ],
    callbacks: {
        async session({ session, token}: { session: Session, token: JWT }) {
            return { ...session, id: token.sub}
        },
        async signIn({user} : {user: User}) {
            return true
        }
    }
})