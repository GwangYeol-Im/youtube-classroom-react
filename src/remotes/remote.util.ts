const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response;
};

interface Request {
  [key: string]: typeof fetch;
}

export const request: Request = {
  get: async (input, init) => {
    return await checkedFetch(input, { method: 'GET', ...init });
  },
};
