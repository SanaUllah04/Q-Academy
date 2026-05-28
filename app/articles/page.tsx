"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Clock, BookOpen, Sparkles, Filter, Bookmark, Heart } from 'lucide-react';

const categories = ["All", "Algorithms", "Hardware", "Cryptography", "Theory"];

const initialArticles = [
    {
        id: 1,
        title: "Shor's Algorithm: Breaking Classical Cryptography",
        excerpt: "An in-depth analysis of how quantum computers utilize modular arithmetic and quantum Fourier transforms to factor integers in polynomial time.",
        category: "Algorithms",
        readTime: "8 min read",
        date: "May 24, 2026",
        author: "Dr. Sarah Jenkins",
        featured: true,
        likes: 142
    },
    {
        id: 2,
        title: "Understanding Topological Qubits and Majoranas",
        excerpt: "Exploring Microsoft's hardware pursuit: how braiding non-Abelian anyons in 2D systems offers topological protection against environmental noise.",
        category: "Hardware",
        readTime: "12 min read",
        date: "May 18, 2026",
        author: "Dr. Evelyn Stark",
        featured: false,
        likes: 98
    },
    {
        id: 3,
        title: "Post-Quantum Cryptography: NIST Standards for 2026",
        excerpt: "With the dawn of quantum supremacy, classical encryption must evolve. We look at lattice-based cryptography standards being finalized today.",
        category: "Cryptography",
        readTime: "6 min read",
        date: "May 12, 2026",
        author: "Dr. Sarah Jenkins",
        featured: false,
        likes: 85
    },
    {
        id: 4,
        title: "The NISQ Era: Coping with Quantum Noise",
        excerpt: "How Noisy Intermediate-Scale Quantum systems use error mitigation instead of error correction to run early quantum chemistry models.",
        category: "Theory",
        readTime: "9 min read",
        date: "May 02, 2026",
        author: "Prof. Marcus Chen",
        featured: false,
        likes: 114
    },
    {
        id: 5,
        title: "Introduction to Quantum Fourier Transform",
        excerpt: "The mathematical backbone of many quantum algorithms. Learn the discrete Fourier transform analogue acting on state amplitudes.",
        category: "Theory",
        readTime: "7 min read",
        date: "Apr 28, 2026",
        author: "Prof. Marcus Chen",
        featured: false,
        likes: 73
    },
    {
        id: 6,
        title: "Grover's Algorithm: Quadratic Search Speedups",
        excerpt: "How to search an unsorted database of N items in O(√N) evaluations using amplitude amplification and phase inversion gates.",
        category: "Algorithms",
        readTime: "10 min read",
        date: "Apr 15, 2026",
        author: "Dr. Evelyn Stark",
        featured: false,
        likes: 131
    }
];

export default function Articles() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredArticles = initialArticles.filter(art => {
        const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              art.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || art.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredArticle = initialArticles.find(art => art.featured && (activeCategory === "All" || art.category === activeCategory));

    return (
        <div className="min-h-screen bg-[#030307] text-slate-200 relative overflow-hidden font-sans pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[500px] h-[500px] -top-80 -right-20 opacity-[0.15]" />
            <div className="aurora-orb aurora-purple w-[400px] h-[400px] top-[40%] -left-80 opacity-[0.12]" />

            <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-10 text-sm font-semibold group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Workspace
                </Link>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-semibold uppercase tracking-wider mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> Peer-Reviewed & Curated
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Quantum <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Insights</span>
                        </h1>
                    </div>

                    {/* Search and Filters */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles or authors..."
                            className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#00f2fe]/40 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                        />
                    </div>
                </div>

                {/* Category selectors */}
                <div className="flex gap-2 overflow-x-auto pb-6 mb-10 border-b border-white/[0.05] scrollbar-none">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 border duration-300 ${activeCategory === cat
                                ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                                : "text-slate-400 bg-white/[0.01] border-white/[0.06] hover:text-white hover:bg-white/[0.03]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Hero Featured Article (Only if visible and matches category) */}
                {featuredArticle && !searchQuery && (
                    <div className="glass-panel-cyan rounded-3xl p-6 md:p-10 mb-12 relative overflow-hidden group hover:border-[#00f2fe]/40 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00f2fe]/10 to-transparent rounded-bl-full pointer-events-none" />
                        <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs bg-[#00f2fe] text-black px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,242,254,0.3)]">
                                        Cover Story
                                    </span>
                                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight group-hover:text-[#00f2fe] transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00f2fe]/20 to-[#7f00ff]/20 border border-[#00f2fe]/30 flex items-center justify-center text-white font-bold text-xs">
                                            {featuredArticle.author.split(' ').map(n=>n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white leading-none">{featuredArticle.author}</p>
                                            <p className="text-[10px] text-slate-500 mt-1">{featuredArticle.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                        <button className="flex items-center gap-1.5 hover:text-[#00f2fe] transition-colors">
                                            <Heart className="w-4 h-4 fill-current text-slate-500 hover:text-[#00f2fe]" /> {featuredArticle.likes}
                                        </button>
                                        <button className="hover:text-[#00f2fe] transition-colors">
                                            <Bookmark className="w-4 h-4 text-slate-500 hover:text-[#00f2fe]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid of Articles */}
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.filter(art => !art.featured || searchQuery).map((art) => (
                            <article key={art.id} className="glass-panel rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-slate-500/20">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] bg-white/[0.04] text-slate-300 px-2.5 py-1 border border-white/[0.06] rounded-full font-bold uppercase tracking-wider">
                                            {art.category}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {art.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#00f2fe] transition-colors line-clamp-2">
                                        {art.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-3">
                                        {art.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.06] text-xs">
                                    <span className="text-[11px] font-semibold text-slate-400 truncate pr-2">By {art.author}</span>
                                    <div className="flex items-center gap-3 text-slate-500 shrink-0">
                                        <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                                            <Heart className="w-3.5 h-3.5" /> {art.likes}
                                        </button>
                                        <button className="hover:text-[#00f2fe] transition-colors">
                                            <Bookmark className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/[0.01] border border-white/[0.04] rounded-3xl">
                        <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-slate-400 text-sm">Try adjusting your keywords or category filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
