import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";
import { getAuthUserId } from "@convex-dev/auth/server";

// Write your Convex functions in any file inside this directory (`convex`).
// See https://docs.convex.dev/functions for more.

// You can read data from the database via a query:
export const listNumbers = query({
  // Validators for arguments.
  args: {
    count: v.number(),
  },

  // Query implementation.
  handler: async (ctx, args) => {
    //// Read the database as many times as you need here.
    //// See https://docs.convex.dev/database/reading-data.
    const numbers = await ctx.db
      .query("numbers")
      // Ordered by _creationTime, return most recent
      .order("desc")
      .take(args.count);
    const userId = await getAuthUserId(ctx);
    const user = userId === null ? null : await ctx.db.get(userId);
    return {
      viewer: user?.email ?? null,
      numbers: numbers.reverse().map((number) => number.value),
    };
  },
});

// You can write data to the database via a mutation:
export const addNumber = mutation({
  // Validators for arguments.
  args: {
    value: v.number(),
  },

  // Mutation implementation.
  handler: async (ctx, args) => {
    //// Insert or modify documents in the database here.
    //// Mutations can also read from the database like queries.
    //// See https://docs.convex.dev/database/writing-data.

    const id = await ctx.db.insert("numbers", { value: args.value });

    console.log("Added new document with id:", id);
    // Optionally, return a value from your mutation.
    // return id;
  },
});

export const additionalUserInfo = mutation({
  args: { 
    username: v.string(), 
    location: v.string(), 
    profile_bio: v.string(), 
    profile_picture: v.string(), 
    rating: v.number() 
  },
  handler: async (ctx, args) => {
    // Get the current user's ID
    const userId = await getAuthUserId(ctx);
    
    if (!userId) {
      throw new Error("User must be authenticated to update profile");
    }

    // Check if user already has a profile
    const existingUser = await ctx.db.get(userId);
    
    if (existingUser) {
      // Update existing user
      await ctx.db.patch(userId, {
        username: args.username,
        location: args.location,
        profile_bio: args.profile_bio,
        profile_picture: args.profile_picture,
        rating: args.rating
      });
    } else {
      // Create new user profile (this shouldn't normally happen due to auth flow)
      await ctx.db.insert("users", {
        username: args.username,
        location: args.location,
        profile_bio: args.profile_bio,
        profile_picture: args.profile_picture,
        rating: args.rating,
        // The user's ID will be automatically associated with the document
        // by Convex's authentication system
      });
    }
  },
});

// You can fetch data from and send data to third-party APIs via an action:
export const myAction = action({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Action implementation.
  handler: async (ctx, args) => {
    //// Use the browser-like `fetch` API to send HTTP requests.
    //// See https://docs.convex.dev/functions/actions#calling-third-party-apis-and-using-npm-packages.
    // const response = await ctx.fetch("https://api.thirdpartyservice.com");
    // const data = await response.json();

    //// Query data by running Convex queries.
    const data = await ctx.runQuery(api.myFunctions.listNumbers, {
      count: 10,
    });
    console.log(data);

    //// Write data by running Convex mutations.
    await ctx.runMutation(api.myFunctions.addNumber, {
      value: args.first,
    });
  },
});
