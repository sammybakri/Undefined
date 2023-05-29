
import Layout from '../components/layout';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

function myApp({Component,pageProps}){
    return (
    <AuthProvider>
    <Layout>
        <Component {...pageProps}/>
    </Layout>
    </AuthProvider>
        )


}

export default myApp;