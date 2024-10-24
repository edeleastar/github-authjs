export const load = async ({ locals }) => {
  const session = await locals.getSession();
  console.log({ session });
  const loggedIn = !!session?.user;

  return {
    loggedIn
  };
};
