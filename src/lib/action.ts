"use server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { defaultSession, SessionData, sessionOptions } from "./authSession";
import { redirect } from "next/navigation";
import { connectionDB } from "./db";

// ---------------- GET SESSION ---------------- //
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

// ---------------- LOGIN ---------------- //
export const login = async (formData: FormData) => {
  const session = await getSession();

  const formEmail = formData.get("email");
  const formPassword = formData.get("password");

  try {
    const db = await connectionDB();
    // Check if the user already exists in the database
    const checkUserQuery = "SELECT * FROM user WHERE email = ?";
    const [existingUser] = await db.query(checkUserQuery, [formEmail]);

    if (formEmail !== existingUser[0].email) {
      return { error: "Wrong Credentials!" };
    }
    session.email = existingUser[0].email;
    session.isLoggedIn = true;
    await session.save();
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return console.log({ error: error.message });
    } else {
      console.log("An unknown error occurred.");
    }
  }
  redirect("/");
};

// ---------------- LOGOUT ---------------- //
export const logout = async () => {
  const session = await getSession();
  session.destroy();
};
