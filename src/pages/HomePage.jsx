import Section from "../compoments/Section";
import Layout from "./layout";


const HomePage = () => {
    const link = {
        text: 'Show More',
        href: 'https://redirect.link',
    };

    return (
        <>
            
            <Layout>
                <Section title="Coleção em Destaque" titleAlign="left">
                    <p>Produto 1</p>
                    <p>Produto 2</p>
                    <p>Produto 3</p>
                </Section>
                <Section title="Categorias" titleAlign="center">
                    <ul>
                    <li>Categoria 1</li>
                    <li>Categoria 2</li>
                    <li>Categoria 3</li>
                    </ul>
                </Section>
            </Layout>
        </>
    );
}
 
export default HomePage;