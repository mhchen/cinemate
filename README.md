# [Live link](https://cinemate-lilac.vercel.app/)

<img width="1695" alt="image" src="https://github.com/user-attachments/assets/37321a4f-d342-4b83-bc20-59f333cd29d2" />

# Highlight something in your project that you thought was especially interesting or significant to your overall implementation.

I decided to try using the full power of Next.js server navigation/server actions as much as possible. I also wanted to use GraphQL, but I've never used the latter without Apollo. Leveraging server-side rendering to the fullest always makes things somewhat tricky though, which can be seen in having to split up elements like the search page and the genres select into server/client-specific functionality.

Actions-wise, everything was pretty straightforward to set up with `graphql-request` though, and I feel the final implementation of separate genre fetching from the main search results fetching, as well as the loading states, suspense boundaries, and caching between requests, ended up pretty clean and performant.

**Note**: I ran into a long-standing Next.js issue with loading states, where [search params updates do not trigger loading states as expected](https://github.com/vercel/next.js/issues/53543). This also led to an issue with the animations implementation, where movies that are already loaded will move around in the grid to their final location, and it does not look good because there are usually only a few movies lasting between search results. I believe if the loading functionality were working properly, the search results grid would unmount and the loading state would show, avoiding this issue.

I wanted to call out a few practices that are certainly overkill for a project this size:

1. **The beginnings of a design system.** Tailwind would probably not be my choice for creating a design system from scratch, but I separated some of the lower-level components into the `src/components` directory so you could how I might think about creating a reusable design system.
2. **Codegen for GraphQL types.** I feel end-to-end typing makes me a lot faster, so it was nice to be able to hook into a GraphQL endpoint to generate types for my project.

# Tell us what you are most pleased or proud of with your implementation.

I was excited to get a chance to try some interesting animations, which I've done with the way the movie grid items pop up into a modal/dialog version of the movie with some more details. It probably took half the overall time of implementation, and I am still intermediate with Motion for React, but it's hopefully a compelling result.

# Given more time, what next feature or improvement would you like to add to your project?

- Progressive image loading. The grid is very image-heavy and the giant, slow-loading images are very jarring.
- Filtering by multiple genres
- More robust design system
- Dark mode
