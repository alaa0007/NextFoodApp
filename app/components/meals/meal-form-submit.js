'use client';

import { useFormStatus } from 'react-dom';
 
const MealFormSubmit = ({ children }) => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending}>
            {pending ? 'Submitting...' : children}
        </button>
    )
}

export default MealFormSubmit;
