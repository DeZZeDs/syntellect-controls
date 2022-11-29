import React, {useEffect, useRef} from "react";

const useOutsideClick = (
    ref: React.RefObject<HTMLElement | null>,
    callback: (event: Event) => void,
    ) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler: EventListener = (event) => {
            const { current: target } = ref;

            if (target && !target.contains(event.target as HTMLElement)) {
                callbackRef.current(event);
            }
        }

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, [ref]);
}

export default useOutsideClick;