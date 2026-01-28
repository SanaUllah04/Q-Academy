"use client";

import { useState } from 'react';

export default function Theory() {
    const [activeTopic, setActiveTopic] = useState("SuperPosition");

    const topics = [
        { id: "SuperPosition", label: "SuperPosition" },
        { id: "Entanglement", label: "Quantum Entanglement" },
        { id: "Qubits", label: "Qubits & Gates" },
        { id: "Interference", label: "Quantum Interference" },
        { id: "Tunneling", label: "Quantum Tunneling" },
    ];

    return (
        <div className="flex min-h-screen bg-black text-white font-sans">
            {/* Sidebar */}
            <div className="w-72 border-r border-white/20 flex flex-col h-screen sticky top-0 overflow-y-auto bg-black">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-8 text-white tracking-wider">THEORY</h2>
                    <ul className="space-y-3">
                        {topics.map((topic) => (
                            <li key={topic.id}>
                                <button
                                    onClick={() => setActiveTopic(topic.id)}
                                    className={`text-left w-full py-3 px-4 rounded-lg transition-all duration-300 ${activeTopic === topic.id
                                            ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                            : "text-gray-400 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {topic.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-12 overflow-y-auto">
                {activeTopic === "SuperPosition" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Quantum Superposition
                            </h1>
                            <p className="text-2xl text-gray-300 font-light leading-relaxed">
                                The Foundation of Quantum Computing
                            </p>
                        </header>

                        <section className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-300">
                                One of the most remarkable features of quantum mechanics is the principle of <span className="text-white font-semibold">superposition</span>—the ability of a system to exist in multiple states simultaneously. This single concept is what gives quantum computers their extraordinary computational power, enabling them to process vast amounts of information far more efficiently than classical computers. To understand quantum superposition, we must first explore how classical physics viewed the world and how groundbreaking experiments revealed the wave nature of light.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">1. From Classical Physics to Quantum Reality</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Classical physics, developed through the work of scientists such as Isaac Newton, James Clerk Maxwell, and pioneers of thermodynamics, successfully described most physical phenomena for centuries. By the late 19th century, many physicists believed that science was nearly complete. Lord Kelvin famously remarked that nothing new remained to be discovered in physics—only more precise measurements.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                However, as experimental techniques improved, scientists began observing results that classical theories could not explain. Investigations into the nature of light and matter exposed fundamental gaps in classical understanding, paving the way for quantum mechanics, a theory that would radically transform our view of reality.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">2. The Wave Nature of Light</h2>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">2.1 Newton vs. Young: Particle or Wave?</h3>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    Isaac Newton proposed that light was composed of tiny particles, which he called <em className="italic">corpuscles</em>. This model explained reflection and refraction but struggled to account for more subtle optical phenomena.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    In 1801, Thomas Young conducted his famous double-slit experiment, demonstrating that light exhibits wave-like behavior. This experiment became a cornerstone of modern physics and introduced the principle of interference, which directly illustrates superposition.
                                </p>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">2.2 Young’s Double-Slit Experiment Explained</h3>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    In Young’s experiment, coherent light (such as laser light) passes through two closely spaced slits and forms a pattern on a screen behind them.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li>When only one slit is open, the screen shows a single blurred light band.</li>
                                    <li>When both slits are open, an alternating pattern of bright and dark fringes appears.</li>
                                </ul>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    This pattern arises because light waves from each slit overlap and interfere:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li><strong className="text-white">Constructive interference</strong> occurs when wave peaks align, producing bright fringes.</li>
                                    <li><strong className="text-white">Destructive interference</strong> occurs when peaks and troughs cancel out, creating dark regions.</li>
                                </ul>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    This phenomenon proves that light behaves as a wave, capable of existing in multiple paths simultaneously — a clear manifestation of superposition.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">3. Mathematical Insight into Interference</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The interference pattern can be described mathematically by examining how two waves combine. If the electric fields from the two slits are represented as complex wave functions, the total intensity on the screen becomes:
                            </p>
                            <div className="bg-white/5 p-6 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                I<sub>12</sub> ∝ |E<sub>1</sub> + E<sub>2</sub>|<sup>2</sup>
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Expanding this expression reveals an interference term, responsible for the oscillating bright and dark bands observed on the screen.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This mathematical formulation shows that the observed intensity is not simply the sum of the two waves, but also includes an additional term arising from their superposition — a key idea later adopted in quantum mechanics.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">4. From Light Waves to Quantum Superposition</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The wave nature of light inspired a profound idea: If light can exist as overlapping waves, could matter behave the same way?
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This question led to the discovery of wave-particle duality, where particles such as electrons exhibit both wave and particle behavior. In quantum mechanics, particles are described by wave functions, which encode probabilities rather than definite outcomes.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This directly leads to quantum superposition, where a quantum system can exist in multiple states at once until measured.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                For example, a quantum bit (qubit) can exist in a superposition of:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |0⟩ and |1⟩
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                simultaneously, unlike a classical bit that must be either 0 or 1. This allows quantum computers to evaluate many possibilities at once, resulting in exponential computational advantages.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">5. Why Superposition Matters for Quantum Computing</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Superposition enables quantum computers to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Perform massively parallel computations</li>
                                <li>Explore multiple solution paths simultaneously</li>
                                <li>Achieve breakthroughs in cryptography, optimization, chemistry, and machine learning</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                When combined with entanglement and quantum interference, superposition becomes the engine that drives quantum speedup.
                            </p>
                        </section>

                        <section className="py-8 border-t border-white/20 mt-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The principle of quantum superposition originates from early discoveries about the wave nature of light. Young’s double-slit experiment not only reshaped our understanding of optics but also laid the foundation for quantum mechanics. Today, superposition stands at the heart of quantum computing, enabling a new era of technological innovation.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300 mt-4">
                                As we continue to explore quantum systems, the strange yet beautiful idea that a particle can exist in many states at once continues to challenge and expand our understanding of reality.
                            </p>
                        </section>
                    </article>
                )}

                {activeTopic !== "SuperPosition" && (
                    <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-50">
                        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                            <span className="text-2xl">?</span>
                        </div>
                        <p className="text-2xl font-light text-gray-400">Content for <span className="text-white font-semibold">{activeTopic}</span> is coming soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
