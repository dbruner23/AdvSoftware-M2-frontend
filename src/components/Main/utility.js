export const removePunctuation = (text) => {
    return (text.replace(/[^\w\s\']|_/g, " "));
}