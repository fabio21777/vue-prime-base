import { useFetch, type UseFetchReturn } from '@vueuse/core'
import environment from '../environment/local';
import router from '@/router';


const BASE_URL =  environment.api;


// Interceptor beforeFetch
async function beforeFetchInterceptor({ url, options, cancel }) {
  const myToken = "myToken"
  if (!myToken) {
    cancel()
    router.push({ name: 'login' })
  }
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${myToken}`,
  }

  return {
    options,
  }
}

// Interceptor afterFetch
function afterFetchInterceptor(ctx) {
  console.log('afterFetch')
  // Implementar lógica de modificação dos dados da resposta se necessário
  return ctx
}

// Interceptor onFetchError
function onFetchErrorInterceptor(ctx) {
  console.log('onFetchError')
  // Implementar lógica de modificação dos dados e erro em caso de erro
  return ctx
}

// Função para uso de fetch com interceptores
export function useCustomFetch(url: string) {
  url = `${BASE_URL}${url}`
  return useFetch(url, {
    beforeFetch: beforeFetchInterceptor,
    afterFetch: afterFetchInterceptor,
    updateDataOnError: true,
    onFetchError: onFetchErrorInterceptor,
  })
}