import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Bell, Calendar, Filter } from 'lucide-react';

const routes = [
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Concepts', path: '/concepts' },
    { name: 'Learn', path: '/learn' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research Papers', path: '/research-papers' },
    { name: 'Theory', path: '/theory' },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-100 to-yellow-100">
            {/* Navigation */}
            <nav className="px-8 py-4">
                <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Q</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-800">Q-Academy</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition font-medium"
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/learn"
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition font-medium"
                    >
                        Start Learning
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-6 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Your quantum computing learning platform
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Welcome to<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Q-Academy</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore quantum computing through comprehensive articles, research papers, hands-on projects, and theoretical concepts. Your journey into quantum technology starts here.
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-12">
                        <Link
                            href="/learn"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition flex items-center gap-2 font-medium"
                        >
                            Start Learning <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-white/50 text-gray-700 rounded-xl hover:bg-white transition flex items-center gap-2 font-medium"
                        >
                            Learn More <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Link
                            href="/articles"
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition border border-gray-200 hover:border-blue-300 group"
                        >
                            <div className="text-3xl mb-2">📰</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Articles</h3>
                            <p className="text-sm text-gray-500 mt-1">Read latest insights</p>
                        </Link>

                        <Link
                            href="/concepts"
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition border border-gray-200 hover:border-blue-300 group"
                        >
                            <div className="text-3xl mb-2">💡</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Concepts</h3>
                            <p className="text-sm text-gray-500 mt-1">Core principles</p>
                        </Link>

                        <Link
                            href="/projects"
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition border border-gray-200 hover:border-blue-300 group"
                        >
                            <div className="text-3xl mb-2">🚀</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Projects</h3>
                            <p className="text-sm text-gray-500 mt-1">Hands-on work</p>
                        </Link>

                        <Link
                            href="/theory"
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition border border-gray-200 hover:border-blue-300 group"
                        >
                            <div className="text-3xl mb-2">📚</div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Theory</h3>
                            <p className="text-sm text-gray-500 mt-1">Deep dive</p>
                        </Link>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">Q</span>
                                </div>
                                <span className="font-semibold text-gray-800">Q-Academy</span>
                            </div>

                            <div className="space-y-1 mb-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        href={route.path}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white transition cursor-pointer text-gray-700 hover:text-blue-600"
                                    >
                                        <span className="text-lg">
                                            {route.name === 'About' && 'ℹ️'}
                                            {route.name === 'Articles' && '📰'}
                                            {route.name === 'Concepts' && '💡'}
                                            {route.name === 'Learn' && '📖'}
                                            {route.name === 'Projects' && '🚀'}
                                            {route.name === 'Research Papers' && '📄'}
                                            {route.name === 'Theory' && '📚'}
                                        </span>
                                        <span className="text-sm">{route.name}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-xs text-gray-500 mb-2">Quick Links</p>
                                <div className="space-y-1">
                                    <AppItem color="blue" label="Quantum Basics" count="12" />
                                    <AppItem color="indigo" label="Advanced Topics" count="8" />
                                    <AppItem color="purple" label="Research Hub" count="15" />
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                        Q
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Quantum Learner</h3>
                                        <p className="text-sm text-gray-500">Welcome to your learning dashboard 👋</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                        <Search className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                                        <Bell className="w-5 h-5 text-gray-600" />
                                        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                        <Calendar className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <Link
                                        href="/learn"
                                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition font-medium text-sm"
                                    >
                                        + New Course
                                    </Link>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {/* Learning Progress Card */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                            <span className="text-blue-500">📖</span> Learning Progress
                                        </h4>
                                        <Link href="/learn" className="text-sm text-gray-500 hover:text-blue-600">See All</Link>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Completed</span>
                                                <span className="text-gray-600">Total Courses</span>
                                            </div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-3xl font-bold text-blue-600">7</span>
                                                <span className="text-3xl font-bold text-gray-400">15</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '47%' }}></div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">47% courses completed</p>
                                        </div>

                                        <div className="space-y-2 pt-2">
                                            <CourseItem title="Quantum Mechanics Basics" status="In Progress" statusColor="blue" />
                                            <CourseItem title="Quantum Algorithms" status="Completed" statusColor="emerald" />
                                            <CourseItem title="Quantum Cryptography" status="Not Started" statusColor="gray" />
                                        </div>
                                    </div>
                                </div>

                                {/* Featured Content Card */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                            <span className="text-yellow-500">⭐</span> Featured Content
                                        </h4>
                                        <Link href="/articles" className="text-sm text-gray-500 hover:text-blue-600">See All</Link>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-gray-900">Latest Research Papers</span>
                                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">New</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-sm text-gray-500">Quantum Computing Advances</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                                <span>⭐⭐⭐⭐⭐</span>
                                                <span>5.0 rating</span>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-2">Published</div>
                                            <div className="text-sm text-gray-600 mb-3">January 15, 2026</div>
                                            <div className="text-xs text-gray-500 mb-2">Description</div>
                                            <p className="text-sm text-gray-600">Exploring the latest breakthroughs in quantum computing and their practical applications...</p>

                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <div className="text-xs text-gray-500 mb-2">Content Stats</div>
                                                <div className="grid grid-cols-3 gap-4 text-center">
                                                    <div>
                                                        <div className="text-2xl font-bold text-gray-900">32</div>
                                                        <div className="text-xs text-gray-500">Articles</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-gray-900">15</div>
                                                        <div className="text-xs text-gray-500">Papers</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-gray-900">8</div>
                                                        <div className="text-xs text-gray-500">Projects</div>
                                                    </div>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Study Schedule Card */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                            <span>📅</span> Study Schedule
                                        </h4>
                                        <button className="text-sm text-gray-500 hover:text-blue-600">See All</button>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">January 2026</span>
                                            <div className="flex gap-2">
                                                <button className="text-gray-400 hover:text-gray-600">‹</button>
                                                <button className="text-gray-400 hover:text-gray-600">›</button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                                            <div className="text-gray-500">Su</div>
                                            <div className="text-gray-500">Mo</div>
                                            <div className="text-gray-500">Tue</div>
                                            <div className="text-gray-500">Wed</div>
                                            <div className="text-gray-500">Thu</div>
                                            <div className="text-gray-500">Fri</div>
                                            <div className="text-gray-500">Sat</div>
                                            <div className="text-gray-400">12</div>
                                            <div className="text-gray-400">13</div>
                                            <div className="text-gray-400">14</div>
                                            <div className="text-gray-400">15</div>
                                            <div className="text-gray-400">16</div>
                                            <div className="text-gray-400">17</div>
                                            <div className="text-gray-900 font-medium bg-blue-500 text-white rounded-lg py-1">19</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-3">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="text-sm px-3 py-1 border border-gray-200 rounded-lg flex-1 mr-2"
                                        />
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <Filter className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>

                                    <div className="flex gap-2 mb-4 text-xs">
                                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-medium">Classes</button>
                                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg">Projects</button>
                                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg">Study</button>
                                    </div>

                                    <div className="space-y-3">
                                        <SessionItem
                                            title="Quantum Theory Session"
                                            time="2:00 - 3:30 PM (PKT)"
                                            status="Today"
                                        />
                                        <SessionItem
                                            title="Research Paper Review"
                                            time="4:00 - 5:00 PM (PKT)"
                                            status="Upcoming"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AppItem({ color, label, count }: { color: string; label: string; count: string }) {
    const colors = {
        blue: 'bg-blue-500',
        indigo: 'bg-indigo-500',
        purple: 'bg-purple-500'
    };

    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white transition cursor-pointer">
            <span className={`w-2 h-2 ${colors[color as keyof typeof colors]} rounded-full`}></span>
            <span className="text-sm text-gray-700 flex-1">{label}</span>
            <span className="text-xs text-gray-400">{count}</span>
        </div>
    );
}

function CourseItem({ title, status, statusColor }: { title: string; status: string; statusColor: string }) {
    const colors = {
        blue: 'bg-blue-100 text-blue-600',
        emerald: 'bg-emerald-100 text-emerald-600',
        gray: 'bg-gray-100 text-gray-600'
    };

    return (
        <div className="flex items-center justify-between text-xs">
            <div>
                <span className="text-blue-500">●</span>
                <span className="text-gray-700 ml-2 font-medium">{title}</span>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${colors[statusColor as keyof typeof colors]}`}>
                {status}
            </span>
        </div>
    );
}

function SessionItem({ title, time, status }: { title: string; time: string; status: string }) {
    return (
        <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-sm text-gray-900">{title}</h5>
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{status}</span>
            </div>
            <p className="text-xs text-gray-500">{time}</p>
        </div>
    );
}