import { SvelteKitAuth } from "@auth/sveltekit";
import {
  PRIVATE_AUTH_GITHUB_SECRET,
  PRIVATE_AUTH_GITHUB_ID,
  PRIVATE_AUTH_SECRET
} from "$env/static/private";
import GithubProvider from "@auth/core/providers/github";

const auth = SvelteKitAuth({
  bastPath: "/auth",
  providers: [
    // @ts-ignore
    GithubProvider({
      clientId: PRIVATE_AUTH_GITHUB_ID,
      clientSecret: PRIVATE_AUTH_GITHUB_SECRET
    })
  ],
  session: {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    // maxAge: 30 * 24 * 60 * 60, // 1 month

    strategy: "jwt"
  },

  secret: PRIVATE_AUTH_SECRET,
  trustHost: true
});

export const handle = auth;
