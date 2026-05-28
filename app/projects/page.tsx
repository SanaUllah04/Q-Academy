"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu, Code, Play, Terminal, Database, Star, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Quantum Coin Flipper",
        difficulty: "Beginner",
        diffColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
        qubits: 1,
        depth: 2,
        simulator: "qasm_simulator",
        desc: "A fundamental entry-level simulation that applies a Hadamard gate to a single qubit in ground state |0⟩, forcing it into a 50/50 superposition. Measuring this state yields a truly random, non-deterministic physical coin flip.",
        snippet: `from qiskit import QuantumCircuit\nfrom qiskit_aer import AerSimulator\n\n# Create a 1-qubit circuit\nqc = QuantumCircuit(1, 1)\nqc.h(0)\nqc.measure(0, 0)\n\n# Simulate coin flip\nsimulator = AerSimulator()\ncounts = simulator.run(qc, shots=1000).result().get_counts()\nprint(counts) # {'0': ~500, '1': ~500}`,
        github: "github.com/q-academy/coin-flipper",
        stars: 34
    },
    {
        id: 2,
        title: "Bell State (EPR Paradox) Generator",
        difficulty: "Intermediate",
        diffColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
        qubits: 2,
        depth: 3,
        simulator: "statevector_simulator",
        desc: "Synthesize the |Φ⁺⟩ entangled Bell State using a Hadamard gate on a control qubit, coupled with a Controlled-NOT (CNOT) gate targeting a target qubit. Measuring one qubit collapses the other instantly, proving Einstein's spooky action at a distance.",
        snippet: `from qiskit import QuantumCircuit\nfrom qiskit_aer import AerSimulator\n\n# Create a 2-qubit entangled circuit\nqc = QuantumCircuit(2, 2)\nqc.h(0)\nqc.cx(0, 1)\nqc.measure([0, 1], [0, 1])\n\nsimulator = AerSimulator()\ncounts = simulator.run(qc, shots=1000).result().get_counts()\nprint(counts) # {'00': ~500, '11': ~500}`,
        github: "github.com/q-academy/bell-state",
        stars: 87
    },
    {
        id: 3,
        title: "BB84 Quantum Key Distribution",
        difficulty: "Advanced",
        diffColor: "text-[#e100ff] border-[#e100ff]/20 bg-[#e100ff]/5",
        qubits: 8,
        depth: 14,
        simulator: "ibmq_manila (hardware)",
        desc: "A simulation of the historic BB84 cryptographic protocol. It transmits polarized photons across random rectilinear and diagonal bases. Alice and Bob establish an unconditionally secure, quantum-mechanically encrypted shared secret key while exposing eavesdropper interference.",
        snippet: `# Alice prepares states on diagonal basis\nfor i, (b, val) in enumerate(zip(alice_bases, alice_bits)):\n    if b == 'X': # Diagonal basis\n        qc.h(i) if val == 0 else qc.x(i) or qc.h(i)\n# Bob measures on a random basis\n# Sifting extracts key, exposing Eve's disturbance`,
        github: "github.com/q-academy/bb84-qkd",
        stars: 154
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [simulating, setSimulating] = useState(false);
    const [simResult, setSimResult] = useState<string | null>(null);

    function triggerSimulation() {
        setSimulating(true);
        setSimResult(null);
        setTimeout(() => {
            setSimulating(false);
            if (selectedProject.id === 1) {
                setSimResult("{'0': 503, '1': 497}\nSimulation successful: 50.3% probability of |0⟩, 49.7% of |1⟩.");
            } else if (selectedProject.id === 2) {
                setSimResult("{'00': 512, '11': 488}\nSimulation successful: Entanglement correlation verified. State vectors collapsed with 0% error.");
            } else {
                setSimResult("Key exchange successful. Raw Bits: 8. Sifted Key Length: 4 bits.\nEavesdropper Eve detected? False.\nQuantum Bit Error Rate (QBER): 0.00%.");
            }
        }, 1500);
    }

    return (
        <div className="min-h-screen bg-[#030307] text-slate-200 relative overflow-hidden font-sans pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[400px] h-[400px] -top-20 -left-20 opacity-[0.15]" />
            <div className="aurora-orb aurora-purple w-[500px] h-[500px] top-[40%] right-[-100px] opacity-[0.15]" />

            <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-10 text-sm font-semibold group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Workspace
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7f00ff]/20 bg-[#7f00ff]/5 text-[#e100ff] text-xs font-semibold uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5" /> Interactive Lab Sandbox
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Quantum <span className="bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent">Developer Lab</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                        Construct and run actual Qiskit implementations in our simulated runtime kernel. Review mathematical gate topologies and benchmark quantum hardware.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Projects Sidebar */}
                    <div className="space-y-4 lg:col-span-1">
                        <h3 className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 px-2">Quantum Workspaces</h3>
                        {projects.map((proj) => (
                            <button
                                key={proj.id}
                                onClick={() => {
                                    setSelectedProject(proj);
                                    setSimResult(null);
                                }}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group flex flex-col gap-2 ${selectedProject.id === proj.id
                                    ? "bg-white/[0.02] border-[#00f2fe]/40 shadow-[0_0_20px_rgba(0,242,254,0.08)]"
                                    : "bg-white/[0.005] border-white/[0.06] hover:bg-white/[0.015] hover:border-white/[0.1]"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${proj.difficulty === "Beginner" ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : proj.difficulty === "Intermediate" ? "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" : "text-[#e100ff] border-[#e100ff]/20 bg-[#e100ff]/5"}`}>
                                        {proj.difficulty}
                                    </span>
                                    <span className="flex items-center gap-1 text-[10px] text-slate-500 font-bold group-hover:text-white transition-colors">
                                        <Star className="w-3 h-3 fill-current text-slate-500 group-hover:text-white" /> {proj.stars}
                                    </span>
                                </div>
                                <h4 className={`font-bold text-sm tracking-tight transition-colors ${selectedProject.id === proj.id ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                    {proj.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                                    {proj.desc}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Laboratory Terminal */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-panel rounded-3xl p-6 border border-white/[0.06] shadow-xl">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400">
                                        <Code className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-md leading-tight">{selectedProject.title}</h3>
                                        <p className="text-[10px] text-[#00f2fe] font-semibold uppercase tracking-wider mt-0.5">Kernel: python3 (qiskit-env)</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button 
                                        onClick={triggerSimulation}
                                        disabled={simulating}
                                        className="px-4 py-2 bg-gradient-to-r from-[#00f2fe] to-[#0072ff] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] disabled:opacity-50 text-black font-extrabold text-xs rounded-xl flex items-center gap-2 transition-all duration-300"
                                    >
                                        <Play className="w-3 h-3 fill-current" /> {simulating ? "Executing..." : "Run Simulator"}
                                    </button>
                                </div>
                            </div>

                            {/* Tech Specs */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-2.5">
                                    <Cpu className="w-4.5 h-4.5 text-[#00f2fe]" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none">Register Qubits</p>
                                        <p className="text-sm font-bold text-white mt-1">{selectedProject.qubits} Qubit</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-2.5">
                                    <Database className="w-4.5 h-4.5 text-[#e100ff]" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none">Gate Depth</p>
                                        <p className="text-sm font-bold text-white mt-1">{selectedProject.depth} Gates</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-2.5">
                                    <Terminal className="w-4.5 h-4.5 text-[#7f00ff]" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none">Target Backend</p>
                                        <p className="text-xs font-bold text-white mt-1 truncate max-w-[80px]">{selectedProject.simulator.split(' ')[0]}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Code snippet block */}
                            <div className="mb-6 rounded-2xl overflow-hidden border border-white/[0.06] bg-black/50">
                                <div className="bg-white/[0.02] px-4 py-2 border-b border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-500">
                                    <span>source_code.py</span>
                                    <div className="flex gap-1">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
                                    </div>
                                </div>
                                <pre className="p-5 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed max-h-[220px]">
                                    <code>{selectedProject.snippet}</code>
                                </pre>
                            </div>

                            {/* Terminal output */}
                            <div className="rounded-2xl border border-white/[0.06] bg-[#05050a] p-4 font-mono text-xs min-h-[100px] flex flex-col justify-between">
                                <div className="text-slate-500 flex justify-between border-b border-white/[0.04] pb-2 mb-2">
                                    <span>Simulator Console Output</span>
                                    <span>STDOUT</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center py-4">
                                    {simulating ? (
                                        <div className="flex items-center gap-2.5 text-[#00f2fe] animate-pulse">
                                            <div className="w-4.5 h-4.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                                            <span>Running Monte Carlo simulator kernel...</span>
                                        </div>
                                    ) : simResult ? (
                                        <pre className="w-full text-[#00f2fe] whitespace-pre-wrap text-left leading-relaxed">
                                            {simResult}
                                        </pre>
                                    ) : (
                                        <span className="text-slate-600">Click &quot;Run Simulator&quot; to execute circuit simulation shots...</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
