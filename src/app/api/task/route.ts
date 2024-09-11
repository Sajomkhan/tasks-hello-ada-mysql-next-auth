import { connectionDB } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

//---------------- GET ALL TASK ----------------//
export async function GET() {
  try {
    const db = await connectionDB();
    const q = "SELECT * FROM task";
    const [task] = await db.query(q);
    return NextResponse.json(task);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      console.log("An unknown error occurred.");
    }
  }
}

//------------------ CREATE TASK ------------------//
export async function POST(req: Request) {
  try {
    const db = await connectionDB();
    const { title, desc } = await req.json(); // Parse the request body

    const q = "INSERT INTO task (`title`, `desc`) VALUES (?)";
    const values = [title, desc];

    db.query(q, [values]);
    return NextResponse.json("Task has been created successfully");
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      console.log("An unknown error occurred.");
    }
  }
}

//------------------ UPDATE TASK ------------------//
export async function PUT(req: Request) {
  try {
    const db = await connectionDB();

    const url = new URL(req.url); // Parse the URL or query parameters for the task ID
    const taskId = url.searchParams.get("id");

    if (!taskId) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    const { title, desc } = await req.json(); // Parse the request body

    const q = "UPDATE task SET `title` = ?, `desc` = ? WHERE id = ?";
    const values = [title, desc];

    db.query(q, [...values, taskId]);
    return NextResponse.json("Task has been updated successfully");
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      console.log("An unknown error occurred.");
    }
  }
}

//-------------------- DELETE TASK --------------------//
export async function DELETE(req: Request) {
  try {
    const db = await connectionDB();

    const url = new URL(req.url); // Parse the URL or query parameters for the task ID
    const taskId = url.searchParams.get("id");

    if (!taskId) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    const q = "DELETE FROM task WHERE id = ?";

    // Await the query result
    await db.query(q, [taskId]);

    return NextResponse.json({ message: "Task has been deleted successfully" });
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.log("An unknown error occurred.");
    }
  }
}
