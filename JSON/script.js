const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// convert to JSON string to send to a server
const str = JSON.stringify(post);

// cant console.log into a specific object
console.log(str.id)

// stringify to save to local storage

// parse JSON back to javascript object
const obj = JSON.parse(str);

// have to pares it back to pick out a specific object
console.log(obj.id);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the body'
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);