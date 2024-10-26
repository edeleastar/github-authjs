export const load = async ({ locals }) => {
  // const session = await locals.getSession();
  const loggedIn = false; //!!session?.user;

  const user = null; //session?.user;

  return {
    loggedIn,
    user
  };
};
