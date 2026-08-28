import { NextResponse } from "next/server";

export async function GET(type: 'visitors' | 'current-visitors') {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const token = process.env.VERCEL_TOKEN;

  if (!projectId || !token) {
    return NextResponse.json(
      { error: "Missing Vercel environment variables" },
      { status: 500 }
    );
  }

  const url = new URL(
    "https://api.vercel.com/v1/query/web-analytics/visits/count"
  );

  url.searchParams.set("projectId", projectId);

  // Filter visits for your homepage
  if(type === 'visitors'){
    url.searchParams.set("filter", "requestPath eq '/'");
  } else if(type === 'current-visitors'){
    url.searchParams.set("since", new Date().toISOString().split('T')[0]);
  }

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    const error = await res.text();

    return NextResponse.json(
      {
        error: "Failed to fetch analytics",
        details: error,
      },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}