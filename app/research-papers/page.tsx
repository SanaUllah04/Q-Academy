"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, ExternalLink, Calendar, User, FileText, Sparkles, Award } from 'lucide-react';

const papers = [
    {
        id: 1,
        title: "Algorithms for Quantum Computation: Discrete Logarithms and Factoring",
        author: "Peter W. Shor",
        year: 1994,
        journal: "IEEE FOCS",
        citations: "11,842",
        difficulty: "Hard",
        diffColor: "text-rose-400 border-rose-500/20 bg-rose-500/5",
        summary: "Peter Shor's seminal paper outlining polynomial-time quantum algorithms for prime factorization and discrete logarithms. This paper revolutionized modern cyber-security by demonstrating that a sufficiently large quantum computer could easily collapse RSA and Diffie-Hellman encryption schemes via quantum Fourier transforms.",
        keyTakeaway: "Unveiled that the security of public-key cryptography rests entirely on quantum-vulnerable assumptions."
    },
    {
        id: 2,
        title: "A Fast Quantum Mechanical Algorithm for Database Search",
        author: "Lov K. Grover",
        year: 1996,
        journal: "ACM STOC",
        citations: "6,943",
        difficulty: "Intermediate",
        diffColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
        summary: "Grover introduced a quantum searching method that achieves a quadratic speedup over any classical counterpart. By iteratively applying the diffusion operator (amplitude amplification), the target state in an unsorted database of size N is identified in O(√N) queries instead of classical O(N).",
        keyTakeaway: "Proved that unstructured databases can be searched quantum-mechanically in sub-linear time."
    },
    {
        id: 3,
        title: "Quantum Cryptography: Public Key Distribution and Coin Tossing",
        author: "Charles H. Bennett & Gilles Brassard",
        year: 1984,
        journal: "IEEE International Conference on Computers",
        citations: "15,204",
        difficulty: "Intermediate",
        diffColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
        summary: "The historical paper that birthed 'BB84'—the very first quantum key distribution (QKD) protocol. It details how Alice and Bob can securely establish an encrypted communication channel utilizing single polarized photons, making interception physically detectable.",
        keyTakeaway: "Established the concept of physical-law security (Quantum Cryptography) over mathematical difficulty."
    },
    {
        id: 4,
        title: "Can Quantum-Mechanical Description of Physical Reality be Considered Complete?",
        author: "Albert Einstein, Boris Podolsky, & Nathan Rosen",
        year: 1935,
        journal: "Physical Review",
        citations: "22,431",
        difficulty: "Hard",
        diffColor: "text-rose-400 border-rose-500/20 bg-rose-500/5",
        summary: "The legendary 'EPR Paradox' paper that questioned the foundations of Copenhagen quantum mechanics. It challenged the concept of local realism and suggested that particles contain hidden variables, which eventually laid the groundwork for modern entanglement physics.",
        keyTakeaway: "First to identify quantum entanglement, though it was proposed as an argument against quantum completeness."
    }
];

export default function ResearchPapers() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPapers = papers.filter(paper => 
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#030307] text-slate-200 relative overflow-hidden font-sans pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[500px] h-[500px] -top-80 -right-20 opacity-[0.15]" />
            <div className="aurora-orb aurora-purple w-[400px] h-[400px] bottom-[-200px] left-[-200px] opacity-[0.15]" />

            <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-10 text-sm font-semibold group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Workspace
                </Link>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-semibold uppercase tracking-wider mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> Academic Foundations
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Research <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Archive</span>
                        </h1>
                    </div>

                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search papers or authors..."
                            className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#00f2fe]/40 rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                        />
                    </div>
                </div>

                {/* Grid */}
                {filteredPapers.length > 0 ? (
                    <div className="space-y-6">
                        {filteredPapers.map((paper) => (
                            <div key={paper.id} className="glass-panel rounded-3xl p-6 md:p-8 border border-white/[0.06] hover:border-slate-500/20 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                                
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${paper.diffColor}`}>
                                                {paper.difficulty}
                                            </span>
                                            <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                                <Award className="w-3.5 h-3.5 text-slate-500" /> {paper.citations} Citations
                                            </span>
                                            <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5 text-slate-500" /> {paper.year}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#00f2fe] transition-colors">
                                            {paper.title}
                                        </h3>

                                        <p className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-[#00f2fe]" /> Written by {paper.author} | <span className="text-slate-500">{paper.journal}</span>
                                        </p>

                                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                                            {paper.summary}
                                        </p>

                                        <div className="p-3.5 bg-white/[0.015] border border-white/[0.04] rounded-xl">
                                            <p className="text-[11px] font-black text-[#00f2fe] uppercase tracking-wider">Key Takeaway</p>
                                            <p className="text-xs text-slate-300 mt-1 italic font-medium leading-relaxed">
                                                &quot;{paper.keyTakeaway}&quot;
                                            </p>
                                        </div>
                                    </div>

                                    <div className="lg:w-48 flex lg:flex-col gap-3 justify-end shrink-0 pt-4 lg:pt-0">
                                        <button className="flex-1 btn-premium px-4 py-3 rounded-xl font-bold text-xs text-black flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,242,254,0.1)]">
                                            <Download className="w-3.5 h-3.5" /> Download Summary
                                        </button>
                                        <button className="flex-1 btn-premium-outline px-4 py-3 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2">
                                            <ExternalLink className="w-3.5 h-3.5" /> View Original
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/[0.01] border border-white/[0.04] rounded-3xl">
                        <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No papers found</h3>
                        <p className="text-slate-400 text-sm">Try adjusting your search query.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
