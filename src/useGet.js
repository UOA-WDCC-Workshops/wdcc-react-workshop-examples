import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

export default function useGet(url, initialData = []) {

    // Tracks the data returned by the API
    const [data, setData] = useState(initialData);

    // Tracks whether we're currently loading data
    const [isLoading, setLoading] = useState(false);

    // Tracks whether there's an error
    const [error, setError] = useState(null);

    // Allows us to force reload from the API.
    const [refreshToggle, setRefreshToggle] = useState(false);

    // Will run once whenever the url changes, or whenever
    // we call refresh().
    useEffect(() => {

        setLoading(true);
        setError(null);

        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });

    }, [url, refreshToggle]);

    const refresh = () => setRefreshToggle(!refreshToggle);

    return { data, isLoading, error, refresh };

}