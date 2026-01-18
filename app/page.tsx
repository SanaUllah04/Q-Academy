import Link from 'next/link';

const routes = [
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Concepts', path: '/concepts' },
    { name: 'Learn', path: '/learn' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research Papers', path: '/research-papers' },
    { name: 'Theory', path: '/theory' },
];

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-900 font-sans">
            <main className="max-w-4xl w-full text-center">
                <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Welcome to Q-Academy
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Your quantum computing learning platform
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-blue-100 flex flex-col items-center justify-center text-center"
                        >
                            <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {route.name}
                            </span>
                            <div className="absolute inset-0 rounded-xl bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
