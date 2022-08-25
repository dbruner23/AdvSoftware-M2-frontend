export const removePunctuation = (text) => {
    return (text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, " "));
}