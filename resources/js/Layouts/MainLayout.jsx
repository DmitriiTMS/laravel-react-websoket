import { Link } from '@inertiajs/react'

export default function MainLayout({children}) {
    return (
        <div>
            <div className="bg-white border-b border-gray-300 py-4">
                <div className='w-1/2 mx-auto'>
                    <Link href={route('sections.index')}>Форум</Link>
                </div>
            </div>
            <div className='w-1/2 mx-auto py-4'>
                {children}
            </div>
        </div>
    );
}
