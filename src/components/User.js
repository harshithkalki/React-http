import { useState } from 'react';

export const User = input => {
    const [value, setValues] = useState(input);
    return [value, e => {
        setValues({ ...value, [e.target.name]: e.target.value });
    }];
};