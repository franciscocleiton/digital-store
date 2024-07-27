import React from 'react';
import Logo from './Logo';
import { IoIosSearch } from 'react-icons/io';


const Header = () => {
    return ( 
        <>
            <header className="relative m-0 bg-white flex w-full h-192 items-center">
                
                <div className="flex w-993 h-129 mt-34 ml-100 mr-32">    
                    
                    <div className='flex ml-4 mr-23'>
                            <Logo />
                        </div>
                    <div className='flex w-709'>
                        
                        <div> 
                            <div className="flex bg-light-gray-3 flex-grow w-559 h-60 rounded-lpr">
                                <input
                                    type="text"
                                    placeholder="Pesquisar produto..."
                                    className="w-166 flex absolute h-28 top-65 left-408 gap-0 opacity-60 font-inter text-16 font-normal leading-7 tracking-0.75 text-left bg-light-gray-3"
                                />
                                <div className='ml-903 mt-23'>
                                    <IoIosSearch className="hover:scale-125 text-light-gray-2" />
                                </div>
                            </div>
                        
                            <a href="/register" className="w-102 h-28 absolute top-65 left-991 font-inter text-16 leading-28 tracking-0.75 text-dark-gray-2 underline">Cadastre-se</a>
                        </div>  
                    </div>
                    <div className='absolute mt-134'>
                    <nav>
                        <a href="/" className="mr-4">Home</a>
                        <a href="/about" className="mr-4">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    </div>
                </div>
                
                <div className='mt-33 w-114 h-40 bg-primary flex items-center justify-center'>
                    <button type="button" className="">Entrar</button>
                </div>
                
            </header>
        </>
    );
}
export default Header;