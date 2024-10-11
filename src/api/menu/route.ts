export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

// export async function POST(request: Request) {
//   const res = await fetch("https://data.mongodb-api.com/...", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: request.json(),
//   });

//   const data = await res.json();

//   return Response.json(data);
// }
