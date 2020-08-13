import Document,{Head,Main,NextScript} from 'next/document' 
function myDocument(){
   
    return(
        <html>
            <Head>
                <meta name="description" content="A site for my programing portfolio" />
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="veiwport" content="width=device-width" />
                <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                    
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            <style global jsx>{`
            body{
                font-family:'Roboto',sans-serif;
            }
            `}</style>
        </html>
    )
}
export default  Document