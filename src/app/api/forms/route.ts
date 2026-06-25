import { handleFormSubmission } from "@/lib/forms/handle-submission";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleFormSubmission(request);
}
