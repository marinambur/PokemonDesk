import {useEffect, useState} from "react";
import config from "../config";
import req from "../utils/request";

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(()=> {
        const getData = async(): Promise<void> => {
            setIsLoading(true);
            const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
            console.log('URL', url)
            try {
                const result = await req<T>(endpoint, query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, deps);
    return {
        data,
        isLoading,
        isError
    }
}

export default useData;