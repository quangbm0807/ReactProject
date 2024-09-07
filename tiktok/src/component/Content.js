


import { useState, useEffect } from 'react';

function Content() {
    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [data, setData] = useState([]);
    const [type, setType] = useState('posts');
    const [gotoTop, showGotoTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, [type]);


    useEffect(() => {
        const handleScroll = () => {
            showGotoTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(
        () => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }
    )
    return (
        <>
            <h1>Content</h1>
            <h1>{width}</h1>
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
            {gotoTop &&
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        padding: 20
                    }}
                    onClick={
                        () =>
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                    }>Go to top
                </button>}

        </>
    )
}


export default Content;
