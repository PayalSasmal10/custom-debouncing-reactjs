
export const getAPISuggestions = (word) => {
    let api = fetch(`https://jsonplaceholder.typicode.com/users/${word}`)
    .then((res) => {
        return res.json();
    }).then((result) =>  result);

    return api;
};