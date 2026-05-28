"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Eye, Users, Cpu, Award, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-[#030307] text-slate-200 relative overflow-hidden font-sans pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[400px] h-[400px] -top-20 -left-20 opacity-[0.15]" />
            <div className="aurora-orb aurora-purple w-[500px] h-[500px] bottom-10 right-[-100px] opacity-[0.15]" />

            <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-10 text-sm font-semibold group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Workspace
                </Link>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" /> Empowering the Future
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                        About <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Q-Academy</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We are an open-access platform committed to bridging the gap between classical computer science and the revolutionary paradigm of quantum information technology.
                    </p>
                </div>

                {/* Core Focus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00f2fe]/5 to-transparent rounded-bl-full" />
                        <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/25 flex items-center justify-center text-[#00f2fe] mb-6">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            To democratize quantum computer science education. We provide high-fidelity interactive curricula, step-by-step programming modules using actual quantum SDKs, and rigorously analyzed theory notes to enable developers and scientists to construct the quantum algorithms of tomorrow.
                        </p>
                    </div>

                    <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#7f00ff]/5 to-transparent rounded-bl-full" />
                        <div className="w-12 h-12 rounded-xl bg-[#7f00ff]/10 border border-[#7f00ff]/25 flex items-center justify-center text-[#e100ff] mb-6">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            We envision an active developer community capable of operating NISQ-era processors and preparing software abstractions for fault-tolerant quantum computing. Q-Academy aims to be the primary launchpad for developers migrating to quantum.
                        </p>
                    </div>
                </div>

                {/* Core Pillars */}
                <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-tight">Our Learning Pillars</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    <PillarItem
                        icon={Cpu}
                        title="Quantum Hardware Sandbox"
                        desc="Integrate theoretical algorithms directly with real quantum chips and simulators via Qiskit and Braket integrations."
                    />
                    <PillarItem
                        icon={Users}
                        title="Collaborative Research"
                        desc="Access summarized, breakdown editions of groundbreaking quantum research papers from physical sciences journals."
                    />
                    <PillarItem
                        icon={Award}
                        title="Accredited Pathways"
                        desc="Graduate through our structured syllabus from basic Hilbert spaces to advanced quantum error correction models."
                    />
                </div>

                {/* Team Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2">The Brain Trust</h2>
                    <p className="text-slate-400 text-sm">Leading researchers and educators powering the quantum transition</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TeamCard
                        name="Dr. Evelyn Stark"
                        role="Quantum Algorithm Design"
                        bio="Former researcher at CERN, specializing in quantum walks, topological qubits, and optimization algorithms."
                        initials="ES"
                    />
                    <TeamCard
                        name="Prof. Marcus Chen"
                        role="Theoretical Quantum Physics"
                        bio="Author of 'Vectors in Hilbert Space' and university professor with 15+ years lecturing quantum thermodynamics."
                        initials="MC"
                    />
                    <TeamCard
                        name="Dr. Sarah Jenkins"
                        role="Quantum Cryptography Lead"
                        bio="Postdoctoral fellow in quantum key distribution, post-quantum cybersecurity, and classical-quantum network protocols."
                        initials="SJ"
                    />
                </div>
            </div>
        </div>
    );
}

function PillarItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <div className="glass-panel rounded-xl p-6 border border-white/[0.04] hover:bg-white/[0.015] hover:border-white/[0.08] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-[#00f2fe] mb-4 shadow-[0_0_10px_rgba(0,242,254,0.05)]">
                <Icon className="w-5 h-5 text-slate-300" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function TeamCard({ name, role, bio, initials }: { name: string; role: string; bio: string; initials: string }) {
    return (
        <div className="glass-panel rounded-2xl p-6 border border-white/[0.04] text-left hover:border-slate-500/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00f2fe]/20 to-[#7f00ff]/20 border border-[#00f2fe]/30 flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                    {initials}
                </div>
                <div>
                    <h4 className="font-bold text-white text-base leading-snug">{name}</h4>
                    <p className="text-xs text-[#00f2fe] font-semibold">{role}</p>
                </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">{bio}</p>
        </div>
    );
}
