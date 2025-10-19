// This is a placeholder NextAuth config to enable Google OAuth UI.
// Backend wiring will be completed in Phase 2.
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
    })
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
