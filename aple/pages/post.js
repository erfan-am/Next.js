import Layout from "../Components/Layout";
import { withRouter } from "next/router";

const  Post=({router})=>{
    return(
        <Layout title={router.query.title}>
            <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the
             1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
             book. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged.
            </p>
        </Layout>
    )
}

export default withRouter(Post)
