import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectionDB } from "@/lib/db";


//----------------- USER REGISTER ------------------//
export async function POST(req: Request) {
  try {
    const db = await connectionDB();

    // Parse the request body
    const { email, password, passwordRepeat } = await req.json();

    // Check if passwords match
    if (password !== passwordRepeat) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    // Check if the user already exists in the database
    const checkUserQuery = "SELECT * FROM user WHERE email = ?";
    const [existingUser] = await db.query(checkUserQuery, [email]);

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    const insertUserQuery = "INSERT INTO user (`email`, `password`) VALUES (?, ?)";
    const values = [email, hashedPassword];

    await db.query(insertUserQuery, values);

    // Return success response
    return NextResponse.json({ message: "User has been created successfully" });

  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.log("An unknown error occurred.");
    }
  }
}
