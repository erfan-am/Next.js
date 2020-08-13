import Layout from "../Components/Layout";
import Link from "next/link";


const PostLink=({title,slug})=>(
    <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>
            {title}
        </a>
    </Link> 
 </li>)
    

const Blog= ()=>{
    return(
        <Layout title="My Blog">
            <ul>
            <PostLink slug="react-post" title="react" />
            <PostLink title="angular" slug="angular-post" />
            <PostLink title="python" slug="python-post" />
            </ul>
        </Layout>
    )
}

export default Blog
