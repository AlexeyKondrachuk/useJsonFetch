import React from 'react';
import  useJsonFetch   from '../components/hooks/useJsonFetch';

export const DataComponent = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data')
    return (
        <>
            <div>DATA</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
        </>
    );
};