type useFetchApiType = typeof useFetch

export const useFetchApi:useFetchApiType  = (path, opts = {}) => {
    const config = useRuntimeConfig()

    opts.baseURL = config.public.API
    
    return useFetch(path, opts)
}