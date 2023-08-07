import axios, { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, UseMutationOptions } from '@tanstack/react-query';

type PostDataPayload = { /* Define your payload data type here */ };
type PostDataResponse = { /* Define your response data type here */ };

async function postData(endpoint: string, payload: PostDataPayload): Promise<AxiosResponse<PostDataResponse>> {
  return axios.post<PostDataResponse>(endpoint, payload);
}

function usePostData(
  endpoint: string,
  options?: UseMutationOptions<AxiosResponse<PostDataResponse>, unknown, PostDataPayload, unknown>
): UseMutationResult<AxiosResponse<PostDataResponse>, unknown, PostDataPayload, unknown> {
  return useMutation((payload: PostDataPayload) => postData(endpoint, payload), options);
}

export default usePostData;
