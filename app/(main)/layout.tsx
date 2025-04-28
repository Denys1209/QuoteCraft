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
        <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl  bg-background px-6 flex-grow">
                <div className=" min-h-screen dark:bg-dark-background text-foreground dark:text-dark-foreground">
                        {children}

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default layout