import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services'
import  innoLogo  from '../public/innologo.svg'
import Image from 'next/image';


const Header = () => {
    const [categories, setCategories] = useState([]);
    console.log(innoLogo);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl blogTitle">
                            <Image src={innoLogo.src} width={100} height={500} className="h-30" alt="InnoBlog" />
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-transform: uppercase text-white ml-4 font-semibold cursor-pointer transition-all duration-300 ease-in-out customLink">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header