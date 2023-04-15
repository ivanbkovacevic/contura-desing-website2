import {useEffect} from 'react';

const useClickOutside = (ref: any, clickOutside: any, buttonId?: any) => {
    const handleClickOutside = (e: any) => {
        if (ref.current) {
            if (e.target.id === buttonId) {
                return;
            }

            if (ref.current.contains && !ref.current.contains(e.target)) {
                clickOutside();
            }
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export default useClickOutside;