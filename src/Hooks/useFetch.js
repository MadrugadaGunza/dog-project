import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = React.useCallback(async (url, options) => {
        let response;
        let result;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            result = await response.json();
            if (response.ok === false) throw new Error(result.message);
        } catch (error) {
            result = null;
            setError(error.message);
        } finally {
            setLoading(false);
            setData(result);
            return { response, result }
        }
    }, [])

    return { data, loading, error, request }
}

export default useFetch