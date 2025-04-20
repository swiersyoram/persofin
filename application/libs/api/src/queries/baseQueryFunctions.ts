export const baseQueryFunction =
  <T>(endpoint: string) =>
  (): Promise<T> =>
    fetch(endpoint).then((res) => res.json());

export const baseMutationFunction =
  <T>(endpoint: string) =>
  (data: T) => {
    return fetch(endpoint, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

export const baseUpdateFunction =
  <T>(endpoint: string) =>
  (data: T) => {
    return fetch(endpoint, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

export const baseDeleteFunction = (endpoint: string) => {
  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
