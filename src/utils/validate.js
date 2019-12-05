export const required = (values) => (
     values || typeof values === 'number' ? undefined : "Field is required"
);

export const maxLength = (maxValue) => (value) => (
    value && value.length > maxValue ? `Symbols are more than ${maxValue}, write less` : undefined
);

export const minLength = (minValue) => {
    return (value) => {
        return (
            value && value.length < minValue ? `Symbols are less than ${minValue}, write more.` : undefined
        )
    }
};