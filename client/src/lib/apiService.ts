
interface ApiServiceOptions<TRequestBody> {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  queryParams?: Record<string, string | number | boolean | undefined>;
  body?: TRequestBody;
  headers?: Record<string, string>;
  // No explicit endpoint prop here, url is the first argument
}

export class ApiError extends Error {
  status: number;
  errorData?: any;

  constructor(message: string, status: number, errorData?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errorData = errorData;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export async function apiService<TResponseData, TRequestBody = unknown>(
  url: string, // e.g., '/accommodations'
  options: ApiServiceOptions<TRequestBody> = {}
): Promise<TResponseData> {
  const { method = 'GET', queryParams, body, headers = {} } = options;

  let fullUrl = `/api/v1${url}`;

  if (queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value));
      }
    });
    if (params.toString()) {
      fullUrl += `?${params.toString()}`;
    }
  }

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(fullUrl, config);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        // If response is not JSON or empty
        errorData = { message: response.statusText };
      }
      throw new ApiError(
        errorData?.message || `API request failed with status ${response.status}`,
        response.status,
        errorData
      );
    }

    // Handle cases like 204 No Content for DELETE, where response.json() would fail
    if (response.status === 204 || response.headers.get("content-length") === "0") {
        return undefined as TResponseData;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    console.error('Network or unexpected error in apiService:', error);
    throw new ApiError(error instanceof Error ? error.message : 'An unknown network error occurred', 0, error);
  }
} 