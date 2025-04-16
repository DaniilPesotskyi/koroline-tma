import {useEffect, useState} from "react";

export function useDelayedUnmount<T>(value: T, delay: number = 300): T {
    const [node, setNode] = useState(value);

    useEffect(() => {
        if (value) {
            setNode(value);
        } else {
            const timeout = setTimeout(() => setNode(value), delay);
            return () => clearTimeout(timeout);
        }
    }, [value]);

    return node;
}