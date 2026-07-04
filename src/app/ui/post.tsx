import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export default async function Posts() {
    const posts = await getPosts()

    return (
        <ul>
            {posts.map((post) => {
                <li key={post.slug}>
                    <Link href={'/blog/${post.slug}'}>{post.title}</Link>
                </li>
            })}
        </ul>
    )
}