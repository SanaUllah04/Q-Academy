"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Bell, Calendar, Filter, BookOpen, Lightbulb, Rocket, FileText, Info, Star, GraduationCap, Newspaper, BarChart, Clock, Sparkles } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const routes: { name: string; path: string; icon: LucideIcon }[] = [
    { name: 'About', path: '/about', icon: Info },
    { name: 'Articles', path: '/articles', icon: Newspaper },
    { name: 'Code', path: '/code', icon: GraduationCap },
    { name: 'Projects', path: '/projects', icon: Rocket },
    { name: 'Research Papers', path: '/research-papers', icon: FileText },
    { name: 'Theory', path: '/theory', icon: BookOpen },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-[#030307] text-slate-100 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[500px] h-[500px] -top-40 -left-40 opacity-[0.18]" />
            <div className="aurora-orb aurora-purple w-[600px] h-[600px] top-[20%] right-[-200px] opacity-[0.18]" />
            <div className="aurora-orb aurora-pink w-[400px] h-[400px] bottom-[-100px] left-[10%] opacity-[0.12]" />

            {/* Navigation */}
            <nav className="px-6 py-6 relative z-10 max-w-7xl mx-auto">
                <div className="backdrop-blur-md bg-white/[0.01] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-9 h-9 bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-transform duration-300 group-hover:rotate-12">
                            <span className="text-white font-black text-xl tracking-wider">Q</span>
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Academy</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="px-4 py-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.04] transition-all duration-300 font-medium text-sm flex items-center gap-2"
                            >
                                <route.icon className="w-4 h-4 opacity-75" />
                                {route.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/auth"
                        className="btn-premium px-6 py-2.5 text-black font-semibold text-sm rounded-xl shadow-[0_4px_20px_rgba(0,242,254,0.15)] flex items-center gap-2"
                    >
                        Start Learning
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                        <Sparkles className="w-3.5 h-3.5" /> Unleash Quantum Potential
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.08] tracking-tight">
                        Welcome to<br />
                        <span className="bg-gradient-to-r from-[#00f2fe] via-[#7f00ff] to-[#e100ff] bg-clip-text text-transparent text-glow-cyan">Q-Academy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Explore quantum computing through interactive courses, research papers, hands-on algorithms, and theoretical concepts. Your journey into quantum technology starts here.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/auth"
                            className="btn-premium w-full sm:w-auto px-8 py-4 text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(0,242,254,0.25)] transition-all"
                        >
                            Start Learning <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="btn-premium-outline w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
                        >
                            Learn More <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link
                            href="/articles"
                            className="glass-panel-cyan rounded-2xl p-6 transition-all duration-300 group text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00f2fe]/10 to-transparent rounded-bl-full pointer-events-none" />
                            <div className="mb-5 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#00f2fe] group-hover:scale-110 transition-transform duration-300">
                                <Newspaper className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#00f2fe] transition-colors flex items-center gap-1.5">
                                Articles <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-sm text-slate-400 mt-2">Read the latest breakthroughs and quantum insights from active researchers.</p>
                        </Link>

                        <Link
                            href="/projects"
                            className="glass-panel rounded-2xl p-6 transition-all duration-300 group text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                            <div className="mb-5 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#7f00ff] transition-colors flex items-center gap-1.5">
                                Projects <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-sm text-slate-400 mt-2">Hands-on tutorials on programming real quantum computers via Qiskit.</p>
                        </Link>

                        <Link
                            href="/theory"
                            className="glass-panel-purple rounded-2xl p-6 transition-all duration-300 group text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#7f00ff]/10 to-transparent rounded-bl-full pointer-events-none" />
                            <div className="mb-5 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#e100ff] group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#e100ff] transition-colors flex items-center gap-1.5">
                                Theory <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-sm text-slate-400 mt-2">Deep dive into vectors, wavefunctions, superposition, and entanglement math.</p>
                        </Link>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="glass-panel rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.06]">
                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar */}
                        <div className="w-full lg:w-64 bg-black/40 border-b lg:border-b-0 lg:border-r border-white/[0.06] p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2.5 mb-8">
                                    <div className="w-7 h-7 bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(0,242,254,0.2)]">
                                        <span className="text-white font-extrabold text-sm">Q</span>
                                    </div>
                                    <span className="font-bold text-white tracking-tight text-md">Q-Academy Hub</span>
                                </div>

                                <div className="space-y-1 mb-8">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.path}
                                            href={route.path}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-all duration-300 cursor-pointer text-slate-400 hover:text-white group border border-transparent hover:border-white/[0.03]"
                                        >
                                            <route.icon className="w-4.5 h-4.5 text-slate-500 group-hover:text-[#00f2fe] transition-colors" />
                                            <span className="text-sm font-medium">{route.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/[0.08]">
                                <p className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-3">Quick Links</p>
                                <div className="space-y-1.5">
                                    <AppItem color="cyan" label="Quantum Basics" count="12" />
                                    <AppItem color="purple" label="Advanced Topics" count="8" />
                                    <AppItem color="pink" label="Research Hub" count="15" />
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 md:p-8 bg-white/[0.005]">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 bg-gradient-to-tr from-[#00f2fe]/20 to-[#7f00ff]/20 border border-[#00f2fe]/30 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                                        Q
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white flex items-center gap-2 text-lg">
                                            Quantum Learner
                                        </h3>
                                        <p className="text-xs text-slate-400">Welcome to your learning dashboard</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-end md:self-auto">
                                    <button className="p-2.5 hover:bg-white/[0.04] rounded-xl border border-transparent hover:border-white/[0.05] transition-all">
                                        <Search className="w-4.5 h-4.5 text-slate-400 hover:text-white transition-colors" />
                                    </button>
                                    <button className="p-2.5 hover:bg-white/[0.04] rounded-xl border border-transparent hover:border-white/[0.05] transition-all relative">
                                        <Bell className="w-4.5 h-4.5 text-slate-400 hover:text-white transition-colors" />
                                        <span className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                                    </button>
                                    <button className="p-2.5 hover:bg-white/[0.04] rounded-xl border border-transparent hover:border-white/[0.05] transition-all">
                                        <Calendar className="w-4.5 h-4.5 text-slate-400 hover:text-white transition-colors" />
                                    </button>
                                    <Link
                                        href="/code"
                                        className="ml-2 px-4 py-2 bg-gradient-to-r from-[#00f2fe] to-[#0072ff] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] text-black rounded-xl font-bold text-xs transition-all duration-300"
                                    >
                                        + New Course
                                    </Link>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Learning Progress Card */}
                                <div className="glass-panel rounded-2xl p-5 border border-white/[0.05]">
                                    <div className="flex items-center justify-between mb-5">
                                        <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                                            <BarChart className="w-4 h-4 text-[#00f2fe]" /> Progress Tracker
                                        </h4>
                                        <Link href="/code" className="text-xs text-slate-400 hover:text-[#00f2fe] transition-colors">See All</Link>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-slate-400 font-medium">Completed Courses</span>
                                                <span className="text-[#00f2fe] font-bold">47%</span>
                                            </div>
                                            <div className="flex justify-between items-end mb-2.5">
                                                <span className="text-3xl font-black text-white">7</span>
                                                <span className="text-sm font-semibold text-slate-400">of 15 modules</span>
                                            </div>
                                            <div className="w-full bg-white/[0.05] rounded-full h-2 border border-white/[0.02] p-[1px]">
                                                <div className="bg-gradient-to-r from-[#00f2fe] to-[#0072ff] h-1.5 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.4)]" style={{ width: '47%' }}></div>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
                                            <CourseItem title="Quantum Mechanics Basics" status="In Progress" statusColor="cyan" />
                                            <CourseItem title="Quantum Algorithms" status="Completed" statusColor="green" />
                                            <CourseItem title="Quantum Cryptography" status="Not Started" statusColor="gray" />
                                        </div>
                                    </div>
                                </div>

                                {/* Featured Content Card */}
                                <div className="glass-panel rounded-2xl p-5 border border-white/[0.05]">
                                    <div className="flex items-center justify-between mb-5">
                                        <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                                            <Sparkles className="w-4 h-4 text-[#e100ff]" /> Spotlights
                                        </h4>
                                        <Link href="/articles" className="text-xs text-slate-400 hover:text-[#e100ff] transition-colors">See All</Link>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="font-bold text-white text-sm truncate">Recent Publications</span>
                                                <span className="text-[10px] bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(127,0,255,0.3)]">New</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs text-slate-400 truncate">Quantum Computing Breakthroughs</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                                                <div className="flex text-[#e100ff]">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <Star key={i} className="w-3.5 h-3.5 fill-current text-[#e100ff]" />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-bold text-slate-300">5.0 Rating</span>
                                            </div>
                                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                                Exploring the latest physical systems in quantum computers and their ultimate computational limits.
                                            </p>
                                        </div>

                                        <div className="pt-2 border-t border-white/[0.06]">
                                            <div className="grid grid-cols-3 gap-2 text-center">
                                                <div className="p-1.5 bg-white/[0.01] rounded-lg border border-white/[0.03]">
                                                    <div className="text-lg font-black text-white">32</div>
                                                    <div className="text-[10px] text-slate-500 font-medium">Articles</div>
                                                </div>
                                                <div className="p-1.5 bg-white/[0.01] rounded-lg border border-white/[0.03]">
                                                    <div className="text-lg font-black text-white">15</div>
                                                    <div className="text-[10px] text-slate-500 font-medium">Papers</div>
                                                </div>
                                                <div className="p-1.5 bg-white/[0.01] rounded-lg border border-white/[0.03]">
                                                    <div className="text-lg font-black text-white">8</div>
                                                    <div className="text-[10px] text-slate-500 font-medium">Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Study Schedule Card */}
                                <div className="glass-panel rounded-2xl p-5 border border-white/[0.05] lg:col-span-1 md:col-span-2">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                                            <Calendar className="w-4 h-4 text-[#7f00ff]" /> Study Calendar
                                        </h4>
                                        <span className="text-xs text-slate-400 font-bold">Jan 2026</span>
                                    </div>

                                    <div className="mb-4 bg-white/[0.01] p-3 rounded-xl border border-white/[0.04]">
                                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-500 mb-2">
                                            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                            <div className="py-1 text-slate-600">12</div>
                                            <div className="py-1 text-slate-600">13</div>
                                            <div className="py-1 text-slate-600">14</div>
                                            <div className="py-1 text-slate-600">15</div>
                                            <div className="py-1 text-slate-600">16</div>
                                            <div className="py-1 text-slate-600">17</div>
                                            <div className="py-1 text-black font-extrabold bg-gradient-to-tr from-[#00f2fe] to-[#0072ff] rounded-lg shadow-[0_0_10px_rgba(0,242,254,0.3)]">19</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Search schedule..."
                                            className="text-xs px-3 py-2 border border-white/[0.06] bg-black/40 text-white placeholder-slate-500 rounded-xl flex-1 focus:outline-none focus:border-[#00f2fe]/40 transition"
                                        />
                                        <button className="p-2 hover:bg-white/[0.05] border border-white/[0.06] rounded-xl">
                                            <Filter className="w-3.5 h-3.5 text-slate-400" />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        <SessionItem
                                            title="Quantum Theory Session"
                                            time="2:00 - 3:30 PM (PKT)"
                                            status="Today"
                                            color="cyan"
                                        />
                                        <SessionItem
                                            title="Research Paper Review"
                                            time="4:00 - 5:00 PM (PKT)"
                                            status="Upcoming"
                                            color="purple"
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

function AppItem({ color, label, count }: { color: 'cyan' | 'purple' | 'pink'; label: string; count: string }) {
    const glowColors = {
        cyan: 'bg-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.6)]',
        purple: 'bg-[#7f00ff] shadow-[0_0_8px_rgba(127,0,255,0.6)]',
        pink: 'bg-[#e100ff] shadow-[0_0_8px_rgba(225,0,255,0.6)]'
    };

    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.03] transition-all cursor-pointer">
            <span className={`w-2 h-2 rounded-full ${glowColors[color]}`}></span>
            <span className="text-xs text-slate-300 font-medium flex-1">{label}</span>
            <span className="text-[10px] text-slate-500 font-bold bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.05]">{count}</span>
        </div>
    );
}

function CourseItem({ title, status, statusColor }: { title: string; status: string; statusColor: 'cyan' | 'green' | 'gray' }) {
    const statusStyles = {
        cyan: 'bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20',
        green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        gray: 'bg-white/[0.03] text-slate-400 border border-white/[0.06]'
    };

    const bulletStyles = {
        cyan: 'text-[#00f2fe]',
        green: 'text-emerald-400',
        gray: 'text-slate-500'
    };

    return (
        <div className="flex items-center justify-between text-xs p-2 hover:bg-white/[0.02] border border-transparent hover:border-white/[0.03] rounded-lg transition-all">
            <div className="flex items-center gap-2 truncate pr-2">
                <span className={`font-black ${bulletStyles[statusColor]}`}>●</span>
                <span className="text-slate-300 font-semibold truncate">{title}</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${statusStyles[statusColor]}`}>
                {status}
            </span>
        </div>
    );
}

function SessionItem({ title, time, status, color }: { title: string; time: string; status: string; color: 'cyan' | 'purple' }) {
    const styles = {
        cyan: {
            border: 'border-[#00f2fe]/20 hover:border-[#00f2fe]/30 bg-[#00f2fe]/[0.01]',
            badge: 'bg-[#00f2fe] text-black shadow-[0_0_8px_rgba(0,242,254,0.3)]',
            iconColor: 'text-[#00f2fe]'
        },
        purple: {
            border: 'border-[#7f00ff]/20 hover:border-[#7f00ff]/30 bg-[#7f00ff]/[0.01]',
            badge: 'bg-[#7f00ff] text-white shadow-[0_0_8px_rgba(127,0,255,0.3)]',
            iconColor: 'text-[#7f00ff]'
        }
    };

    return (
        <div className={`border rounded-xl p-3.5 transition-all duration-300 ${styles[color].border}`}>
            <div className="flex items-start justify-between gap-2 mb-2">
                <h5 className="font-bold text-xs text-white leading-tight">{title}</h5>
                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${styles[color].badge}`}>{status}</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{time}</p>
        </div>
    );
}