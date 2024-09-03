


import { useState, useEffect } from 'react';

function Content() {
    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [posts, set] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(post => {
                set(post);
            }
            )
    }, []);
    console.log(type);
    return (
        <>
            <h1>Content</h1>
            {tabs.map((tab, index) => <button onClick={e=>setType(tabs[index])} style={{ padding: 20 }} key={index}>{tab}</button>)}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>

        </>
    )
}


export default Content;
