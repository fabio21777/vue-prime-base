import { useFetch, type UseFetchReturn } from '@vueuse/core'

interface FetchOptions {
  [key: string]: any;
}

export const useFetchInterceptors = (url: string, options: FetchOptions = {}): UseFetchReturn<any> => {
  const fetchReturn: UseFetchReturn<any> = useFetch(url, {
    ...options,
    beforeFetch({ url, options }) {
      console.log('Interceptando antes de enviar a request:', url, options);
      options.headers = {
        ...options.headers,
        'Authorization': 'Bearer my-token',
      };

      return { options };
    },
    afterFetch(ctx) {
      console.log('Interceptando a resposta:', ctx);
      if (ctx.response.status === 401) {
        console.error('Usuário não autorizado!');
      }

      return ctx;
    },
    onFetchError(ctx) {
      console.error('Erro ao fazer a request:', ctx);
      return ctx;
    },
  });

  return fetchReturn;
}
