import Section from "../compoments/Section";
import Layout from "./layout";
import ProductListing from "../compoments/ProductListing";


const HomePage = () => {
    const link = {
        text: 'Show More',
        href: 'https://redirect.link',
    };

    const products = [
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            priceDiscount: 100,
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            priceDiscount: 100,
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
        {
            image: '../img1.png',
            categoria: 'Tênis',
            name: 'K-Swiss V8 - Masculino',
            price: 200,
            
        },
    ];

    return (
        <>
            
            <Layout>
                <Section title="Coleção em Destaque" titleAlign="left">
                
                </Section>
                <Section title="Produtos em Alta" titleAlign="left">
                    <ProductListing products={products} />
                </Section>
            </Layout>
        </>
    );
}
 
export default HomePage;