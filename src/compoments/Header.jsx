import React from 'react';
import Logo from './Logo';
import { IoIosSearch } from 'react-icons/io';


const Header = () => {
    return ( 
        <>
            <header className="m-0 bg-white flex w-full h-192 items-center">
                
                <div className="items-center w-993 h-129 mt-34 ml-100">
                    <div className='flex'>
                        <div className='flex mr-27'>
                            <Logo />
                        </div>
                        <div> 
                            <div className="flex bg-light-gray-3 flex-grow w-559 h-60 rounded-lpr">
                                <input
                                    type="text"
                                    placeholder="Pesquisar produto..."
                                    className="w-166 flex absolute h-28 top-65 left-408 gap-0 opacity-60 font-inter text-16 font-normal leading-7 tracking-0.75 text-left bg-light-gray-3"
                                />
                                <div className='ml-903 mt-50'>
                                    <IoIosSearch className="hover:scale-125 text-light-gray-2" />
                                </div>
                            </div>
                        
                            <a href="/register" className="w-102 h-28 absolute top-65 left-991 font-inter text-16 leading-28 tracking-0.75 text-dark-gray-2 underline">Cadastre-se</a>
                        </div>  
                    </div>
                    <nav>
                        <a href="/" className="mr-4">Home</a>
                        <a href="/about" className="mr-4">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
                
            </header>
        </>
    );
}
export default Header;