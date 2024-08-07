import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';


const Header = () => {
    return ( 
        <>
            <header className="header">
                
                <div className="header-principal">    
                    
                    <div className='logo'>
                            <Logo />
                    </div>
                    <div className='div-search-cadastro'>
                        
                        <div> 
                            <div className="search">
                                <form>
                                    <input
                                        type="search"
                                        placeholder="Pesquisar produto..."
                                        className="input-search"
                                    />
                                </form>
                                <div className='icon-search'>
                                    <IoIosSearch className="ioiosearch" />
                                </div>
                            </div>
                        
                            <a href="/register" className="button-cadastro">Cadastre-se</a>
                        </div>  
                    </div>
                    <div className='menu'>
                        {/*
                        <nav>
                        <NavLink to="/" exact className="home" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/" className="produto" activeClassName="active-link">Produtos</NavLink>
                        <NavLink to="/" className="categoria" activeClassName="active-link">Categorias</NavLink>
                        <NavLink to="/" className="pedidos" activeClassName="active-link">Meus Pedidos</NavLink>
                        </nav>
                        */}
                        <nav>
                            <a href="/" className="home">Home</a>
                            <a href="/produtos" className="produto">Produtos</a>
                            <a href="/contact" className='categoria'>Categorias</a>
                            <a href="/meus-pedidos" className='pedidos'>Meus Pedidos</a>
                        </nav>
                    </div>
                </div>
                
                <div className='div-primary-button'>
                    <button type="button" className="primary-button">Entrar</button>
                </div>

                <div className='group53'>
                    <div className='carrinho'>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.42233 17.8203C5.84433 17.8203 6.18733 18.1633 6.18733 18.5853C6.18733 19.0073 5.84433 19.3493 5.42233 19.3493C5.00033 19.3493 4.65833 19.0073 4.65833 18.5853C4.65833 18.1633 5.00033 17.8203 5.42233 17.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6747 17.8203C17.0967 17.8203 17.4397 18.1633 17.4397 18.5853C17.4397 19.0073 17.0967 19.3493 16.6747 19.3493C16.2527 19.3493 15.9097 19.0073 15.9097 18.5853C15.9097 18.1633 16.2527 17.8203 16.6747 17.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M0.749878 1.25L2.82988 1.61L3.79288 13.083C3.87088 14.018 4.65188 14.736 5.58988 14.736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099 17.9089 5.099H3.16388" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1254 8.79504H14.8984" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='elipse'>
                        2
                    </div>
                </div>
                
            </header>
        </>
    );
}
export default Header;