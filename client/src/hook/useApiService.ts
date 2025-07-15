import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { apiService, ApiError } from '../lib/apiService';

interface UseApiServiceOptions<TResponseData, TError = ApiError> {
  queryKey?: QueryKey;
  queryParams?: Record<string, string | number | boolean | undefined>;
  tanstackQueryOptions?: Omit<UseQueryOptions<TResponseData, TError, TResponseData, QueryKey>, 'queryKey' | 'queryFn'>;
}

export function useApiQuery<TResponseData, TError = ApiError>(
  url: string,
  options: UseApiServiceOptions<TResponseData, TError> = {}
) {
  const { queryKey: explicitQueryKey, queryParams, tanstackQueryOptions } = options;
  const inferredQueryKey: QueryKey = [url, queryParams || {}];
  const finalQueryKey = explicitQueryKey || inferredQueryKey;

  return useQuery<TResponseData, TError, TResponseData, QueryKey>({
    queryKey: finalQueryKey,
    queryFn: () => apiService<TResponseData>(url, { method: 'GET', queryParams }),
    ...(tanstackQueryOptions || {}),
  });
}

export function useApiMutation<
  TResponseData = unknown,
  TRequestBody = unknown,
  TError = ApiError,
  TContext = unknown
>(
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'GET',
  url: string,
  mutationOptions?: Omit<UseMutationOptions<TResponseData, TError, TRequestBody, TContext>, 'mutationFn'>
): UseMutationResult<TResponseData, TError, TRequestBody, TContext> {

  return useMutation<TResponseData, TError, TRequestBody, TContext>({
    mutationFn: async (variables: TRequestBody) => {
      return apiService<TResponseData, TRequestBody>(url, {
        method,
        body: variables,
      });
    },
    ...(mutationOptions || {}),
  });
} 