import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    {
      id: 'zitadel',
      name: 'zitadel',
      type: 'oauth',
      version: '2',
      wellKnown: 'https://lobsome-mhjubc.zitadel.cloud/.well-known/openid-configuration',
      clientId: '211308437261320449@lobsome',
      authorization: {
        params: {
          scope: 'openid email profile',
        },
      },
      idToken: true,
      checks: ['pkce', 'state'],
      client: {
        token_endpoint_auth_method: 'none',
      },
      async profile(profile) {
        return {
          id: profile.sub,
          username: profile.preferred_username?.replace('@ost.zitadel.cloud', ''),
        };
      },
    },
  ],
  session: {
    maxAge: 12 * 60 * 60, // 12 hours
  },
});
