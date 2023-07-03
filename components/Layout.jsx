import React from 'react'
import { Header } from './'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <script
                    async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5696486179190111"
                    crossorigin="anonymous">
                </script>
            </Head>
            <div>
                <>
                    <Header />
                    {children}
                </>
            </div>
        </>
    )
}

export default Layout