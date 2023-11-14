import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("Request Data:", request.body);

    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Post Error",
        error,
      },
      { status: 500 }
    );
  }
};
export const GET = async (request) => {
  try {
    const allProducts = await prisma.post.findMany();
    return NextResponse.json(allProducts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error retrieving products",
        error,
      },
      { status: 500 }
    );
  }
};
