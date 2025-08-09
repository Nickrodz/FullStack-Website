export async function handleSubmit(input: string, input2: string) {
  const res = await fetch("http://localhost:5050/sub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: input, password: input2 }),
  });

  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  const data = await res.json();
  return data;
}
