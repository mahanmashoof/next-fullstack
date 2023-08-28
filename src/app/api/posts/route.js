import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  //fetch from mongo db
  try {
    await connect();
    //if there's a username, search for it, else, fetch all the data
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("connection to db failed", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  //post to mongo db
  try {
    await connect();
    await newPost.save();
    return new NextResponse("post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("connection to db failed", { status: 500 });
  }
};
