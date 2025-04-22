import Footer from '@/components/shared/footer';
import { Navbar } from '@/components/shared/navbar';
import { Link } from '@heroui/link';
import React from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default layout