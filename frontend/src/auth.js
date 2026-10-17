const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
const TOKEN_KEY = "freshmart_token";
const USER_KEY = "freshmart_user";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function saveSession(data) {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify({ email: data.email, name: data.name }));
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

function extractMessage(data) {
  if (data.detail) return data.detail;
  const firstKey = Object.keys(data)[0];
  if (firstKey) {
    const value = data[firstKey];
    return Array.isArray(value) ? value[0] : String(value);
  }
  return "Something went wrong. Please try again.";
}

async function postJson(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));

  console.log("Login response:", response.status, data);

  if (!response.ok) {
    throw new Error(extractMessage(data));
  }
  return data;
}


export async function registerUser({ name, email, password }) {
  const data = await postJson("/auth/register/", {
    username: name,
    email,
    password,
  });
  saveSession(data);
  return data;
}

export async function loginUser({ email, password }) {
  const data = await postJson("/auth/login/", { username: name, email, password });
  saveSession(data);
  return data;
}