


import { useState, useEffect } from 'react';

function Content() {
    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [data, setData] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, [type]);
    return (
        <>
            <h1>Content</h1>
            {tabs.map((tab, index) =>
                <button
                    onClick={e => setType(tabs[index])}
                    style={{ padding: 20, backgroundColor: type === tab ? 'red' : '' }}
                    key={index}
                >{tab}
                </button>)}

            <ul>
                {data.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>

        </>
    )
}


export default Content;
