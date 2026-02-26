const API_BASE_URL = 'https://api.franciscanos.app/v1';

/**
 * Helper para requests HTTP.
 * Substitua quando backend real estiver disponível.
 */
export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return response.json();
}

export { API_BASE_URL };
