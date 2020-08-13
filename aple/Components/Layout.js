import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nprogress from 'nprogress';
Router.onRouteChangeStart=(url)=>{
    console.log(url);
    Nprogress.start()
}
Router.onRouteChangeComplete=()=>{
    Nprogress.done()
}
Router.onRouteChangeError=()=>{
    Nprogress.done()
}
const Layout = ({children,title}) => {
    return (
        <div className="root">
            <Head>NextPortFolio</Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            <header>
                <Link href="/"><a>Home</a></Link>
                <Link  href="/hireme"><a>Hireme</a></Link>
                <Link  href="/about"><a>About</a></Link>
                <Link  href="/blog"><a>Blog</a></Link>
            </header>
            <h3>{title}</h3>
            {children}
            <footer>&copy; {new Date().getFullYear()}</footer>
            <style jsx>{`
            .root{
                display:flex;
                justify-content:space-between;
                align-items:center;
                flex-direction:column;
            }
            header{
                width:100%;
                display:flex;
                justify-content:space-around;
                padding:1em;
                font-size:1.2em;
                background-color:indigo;
            }
            header a{
                color:darkgrey;
                text-decoration:none
            }
            header a:hover{
                font-weight:bold;
                color:lightgrey;
            }
            footer{
                padding:1em
            }
            `}</style>
            <style global jsx>{`
            body{
                margin:0;
                padding:0;
                background-color:#f0f0f0;
                box-sizing:border-box;
                overflow-x:hidden
            }`}</style>
        </div>
    )
}

export default Layout
