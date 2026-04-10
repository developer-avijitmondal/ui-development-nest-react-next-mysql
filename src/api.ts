export const API_URL = "http://localhost:3000/auth";

export async function registerUser(data: { email: string; password: string }) {
  const res = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  return {
    status: res.status,
    data: result,
  };
}

export async function loginUser(data: { email: string; password: string }) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function getProfile(token: string) {
    const res = await fetch(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
}
