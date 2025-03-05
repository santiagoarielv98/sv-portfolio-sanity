import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");

    if (!tag) {
      return NextResponse.json(
        { message: "Missing tag parameter" },
        { status: 400 },
      );
    }

    // Revalidate the tag
    revalidateTag(tag);

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      cache: "no-store",
      tag,
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return NextResponse.json(
      { message: "Error revalidating", error },
      { status: 500 },
    );
  }
}
