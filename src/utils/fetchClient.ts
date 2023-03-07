const BASE_URL = 'https://phone-catalog-api-production.up.railway.app/';

type RequestMethod = 'GET';

function request<T>(
  url: string,
  method: RequestMethod,
  data: any = null,
  ): Promise<T> {
    const options: RequestInit = { method };

    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      };
    }

    return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error()
      }

      return response.json()
    });
  }

  export const client = {
    get: <T>(url: string) =>request<T>(url),
  }