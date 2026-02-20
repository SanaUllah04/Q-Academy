"use client";

import { useState } from 'react';

export default function Theory() {
    const [activeTopic, setActiveTopic] = useState("SuperPosition");

    const topics = [
        { id: "SuperPosition", label: "SuperPosition" },
        { id: "Quantization", label: "Quantization" },
        { id: "Vectors", label: "Vectors & Vector Spaces" },
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

                {activeTopic === "Quantization" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Quantization: The Quantum Rulebook of Nature
                            </h1>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In classical computing, information is represented using bits — 0 and 1 — stored as electrical signals. In quantum computing, information is stored using quantum states, which rely on fundamental principles of quantum mechanics. One of the most important of these principles is <span className="text-white font-semibold">quantization</span>—the idea that physical quantities such as energy, momentum, and angular momentum exist only in discrete amounts.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300 mt-4">
                                This chapter explores how quantization emerges from quantum mechanics, how particles are described using wavefunctions, and why this concept is essential for understanding modern quantum technologies.
                            </p>
                        </header>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">1. Probability Amplitude and the Birth of Quantum Uncertainty</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Unlike classical physics, which is deterministic, quantum mechanics is inherently probabilistic. Instead of predicting exact particle positions and trajectories, quantum theory predicts probability distributions.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                At the heart of this description lies the wavefunction, denoted by:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                ψ(x,t)
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The wavefunction contains all the measurable information about a quantum system. However, it is not directly observable. What we actually measure is the probability density:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |ψ(x,t)|²
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This tells us the likelihood of finding a particle at a particular position and time.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This interpretation, known as the Born rule, was introduced by physicist Max Born and represents a fundamental departure from classical thinking. In the quantum world, uncertainty is not due to limited measurement accuracy—it is a fundamental feature of nature itself.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">2. The Schrödinger Equation: The Engine of Quantum Motion</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                If particles behave like waves, they must obey a wave equation. This role is fulfilled by the time-dependent Schrödinger equation, developed by Erwin Schrödinger:
                            </p>
                            <div className="bg-white/5 p-6 rounded-lg font-mono text-center text-xl text-white border border-white/10 overflow-x-auto">
                                iℏ ∂ψ(x,t)/∂t = [ -ℏ²/(2m) ∂²/∂x² + V(x,t) ] ψ(x,t)
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This equation governs how quantum states evolve over time. It is the quantum analogue of Newton’s laws of motion and forms the backbone of non-relativistic quantum mechanics.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Once the Schrödinger equation is known, the behavior of nearly any quantum system can, in principle, be predicted.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">3. Free Particles and Wave Solutions</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                For a free particle, where no external forces act and the potential energy V(x,t) = 0, the Schrödinger equation simplifies significantly. Its solutions take the form of traveling waves, confirming that particles like electrons exhibit wave-like behavior.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                These solutions reveal a direct connection between momentum and wavelength, and between energy and frequency, reinforcing the idea of wave-particle duality.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">4. The Hamiltonian: Total Energy Operator</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum mechanics describes physical quantities using operators. The operator corresponding to total energy is called the Hamiltonian, denoted Ĥ.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The Schrödinger equation can be compactly written as:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                Ĥψ = iℏ ∂ψ/∂t
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The Hamiltonian contains both kinetic and potential energy terms and fully describes the dynamics of a quantum system. Determining the Hamiltonian is typically the first step in solving any quantum problem.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">5. Stationary States and the Time-Independent Schrödinger Equation</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                If the potential energy does not depend on time, the Schrödinger equation can be separated into spatial and temporal parts. This leads to the time-independent Schrödinger equation:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                Ĥψ = Eψ
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This is an eigenvalue equation, where the allowed energies of the system appear as discrete eigenvalues. Each solution corresponds to a stationary state, meaning the probability distribution does not change with time.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">6. The Particle in a Box: A Window into Quantization</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                One of the most illuminating examples of quantization is the infinite quantum well, often called the particle in a box.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Here, a particle is trapped inside a region of width L with infinitely high potential walls. Solving the Schrödinger equation under these boundary conditions yields:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Discrete wavefunctions</li>
                                <li>Discrete momentum values</li>
                                <li>Discrete energy levels</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The allowed energy values are:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                E_n = (n²π²ℏ²) / (2mL²) , for n = 1, 2, 3, …
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This means the particle cannot possess arbitrary energy — only specific, quantized energy levels are permitted.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">7. Why Quantization Is Invisible in Everyday Life</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                For macroscopic objects, the spacing between energy levels is extremely small, making energy appear continuous. However, at atomic scales — especially for electrons confined to nanometer-scale regions — energy separations become large enough to measure.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This explains:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Atomic emission spectra</li>
                                <li>Laser operation</li>
                                <li>Semiconductor band structures</li>
                                <li>Quantum dot technologies</li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">8. Orthonormal States: The Mathematical Backbone of Quantum Computing</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The allowed quantum states form an orthonormal basis, meaning:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Each state is normalized (total probability equals 1).</li>
                                <li>Different states are mutually orthogonal (completely distinct).</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This mathematical structure is essential for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Quantum measurement theory</li>
                                <li>Qubit representation</li>
                                <li>Quantum algorithms</li>
                                <li>Quantum error correction</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In quantum computing, these discrete energy states serve as logical basis states — the foundation of qubits.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">9. Why Quantization Matters for Quantum Computing</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantization enables us to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Represent bits using energy levels</li>
                                <li>Manipulate quantum states precisely</li>
                                <li>Engineer artificial atoms such as quantum dots, superconducting circuits, and trapped ions</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                These systems form the hardware of modern quantum processors.
                            </p>
                        </section>

                        <section className="py-8 border-t border-white/20 mt-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantization is one of the defining features of quantum mechanics, revealing that nature operates in discrete steps rather than smooth continuums. From atomic energy levels to qubit states, quantization underpins nearly every quantum technology in use today.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300 mt-4">
                                Understanding quantization is not just a theoretical exercise — it is the gateway to mastering quantum computing, nanotechnology, and next-generation electronics.
                            </p>
                        </section>
                    </article>
                )}

                {activeTopic === "Vectors" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Vectors & Vector Spaces
                            </h1>
                            <p className="text-2xl text-gray-300 font-light leading-relaxed">
                                The Foundation of Quantum State Description
                            </p>
                        </header>

                        <section className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-300">
                                At its core, quantum computing is nothing more than the manipulation of vectors. Every quantum state is a vector, every quantum gate is an operation on vectors, and every computation is a carefully designed sequence of vector transformations in a high-dimensional space.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                If this sounds abstract, don&apos;t worry — the mathematics behind quantum computing builds directly on ideas you already understand from basic vector algebra.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">1. Vectors as Quantum States</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In classical physics and computing, we deal with numbers. In quantum mechanics, we deal with vectors. A quantum state is represented as a vector in a vector space, often called a state space or Hilbert space.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                For example, on a two-dimensional plane, a vector can be described using its components along the x- and y-axes. A vector with x-component 3 and y-component 2 can be written as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>A geometric arrow</li>
                                <li>A linear combination of basis vectors</li>
                                <li>A column vector</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                All of these representations describe the same vector. The choice of notation is simply a matter of convenience.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In quantum mechanics, this vector is written using Dirac&apos;s bra–ket notation:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |v⟩ = 3|x⟩ + 2|y⟩
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Here, the vector is expressed as a superposition of basis states — a concept that should now feel familiar from quantum superposition.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">2. Basis Vectors: Choosing a Coordinate System</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                A basis is a set of vectors that allows us to describe every vector in a given space as a linear combination of those basis vectors.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In two dimensions, the familiar basis vectors are:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li><strong className="text-white">x̂</strong>: unit vector along the x-axis</li>
                                <li><strong className="text-white">ŷ</strong>: unit vector along the y-axis</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                However, the choice of basis is not unique.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                If we choose new basis vectors that are half the length of the original ones, the same physical vector will have different numerical components, even though the vector itself has not changed.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This highlights an important lesson for quantum computing: <span className="text-white font-semibold">Numbers alone do not define a quantum state — the basis matters.</span>
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This is exactly like counting eggs: &ldquo;1 dozen eggs&rdquo; and &ldquo;12 individual eggs&rdquo; are different numbers describing the same quantity — just different bases.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">3. Quantum States as Superpositions</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Once a basis is chosen, any quantum state can be written as a superposition of basis states.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                For example, consider a quantum system whose basis states are |spin up⟩ and |spin down⟩.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Even without knowing the physical meaning of spin, we can still work mathematically. A general state can be written as:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |ψ⟩ = 3|spin up⟩ + 2|spin down⟩
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This is exactly how qubits are represented:
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |ψ⟩ = α|0⟩ + β|1⟩
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum computing relies on this vector-based description, not on classical intuition.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">4. Vector Spaces: Living in the Same Universe</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                A vector space is the collection of all vectors that can be formed from a given set of basis vectors.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>The x–y plane forms one vector space</li>
                                <li>Spin states form another</li>
                                <li>Qubit states form yet another</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Vectors from different spaces cannot be mixed unless a common basis is defined.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This explains why:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>Eggs cannot be counted using apples</li>
                                <li>Japanese books cannot be written using only English letters</li>
                                <li>Spin states cannot be described using x–y coordinates</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In everyday language, when people say &ldquo;we&apos;re not on the same page&rdquo;, they are unknowingly describing different vector spaces.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">5. Same Numbers, Different Spaces</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                An important subtlety in quantum mechanics is that identical numerical vectors can represent completely different physical states if they belong to different vector spaces.
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                [3, 2]ᵀ
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This column could represent:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li>A spatial vector</li>
                                <li>A spin state</li>
                                <li>A qubit state</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The numbers are meaningless without knowing the basis and vector space they belong to.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">6. Why This Matters in Quantum Computing</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum gates are nothing more than linear transformations applied to vectors.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                <li><strong className="text-white">Preparing a qubit</strong> → choosing an initial vector</li>
                                <li><strong className="text-white">Applying a quantum gate</strong> → rotating the vector</li>
                                <li><strong className="text-white">Measuring</strong> → projecting the vector onto a basis</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum algorithms succeed because they carefully manipulate vectors in high-dimensional spaces to amplify correct answers and suppress incorrect ones.
                            </p>
                        </section>

                        <section className="py-8 border-t border-white/20 mt-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Vectors are the fundamental language of quantum computing. Once you understand that quantum states are vectors, bases define meaning, and quantum gates are transformations, the subject becomes far less mysterious.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300 mt-4">
                                Quantum mechanics may challenge our intuition, but its mathematics is beautifully consistent — built on the same vector concepts we already know, just extended into richer and higher-dimensional spaces.
                            </p>
                        </section>
                    </article>
                )}

                {activeTopic === "Entanglement" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Quantum Entanglement
                            </h1>
                            <p className="text-2xl text-gray-300 font-light leading-relaxed">
                                The &quot;Spooky Action at a Distance&quot;
                            </p>
                        </header>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">1. What is Entanglement?</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the quantum state of each particle cannot be described independently of the state of the others, even when the particles are separated by a large distance.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In simpler terms, if two particles are entangled, measuring the state of one instantly determines the state of the other, no matter how far apart they are. Einstein famously called this <span className="text-white font-semibold">&quot;spooky action at a distance.&quot;</span>
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">2. The EPR Paradox and Bell&apos;s Theorem</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper questioning the completeness of quantum mechanics. They argued that if particles could be entangled, there must be some &quot;hidden variables&quot; that determine the outcome of experiments before they are even performed.
                            </p>
                            <div className="bg-white/5 p-6 rounded-lg space-y-4 border border-white/10">
                                <h3 className="text-xl font-semibold text-white">Bell&apos;s Discovery</h3>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    Decades later, physicist John Bell proposed a way to test this. He showed that no theory of &quot;local hidden variables&quot; could reproduce all the predictions of quantum mechanics. Subsequent experiments have consistently proven Bell right and Einstein wrong: entanglement is real, and the universe is fundamentally non-local.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">3. Mathematical Representation</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The most famous entangled state is the <span className="text-white font-semibold">Bell State</span>. For two qubits, it can be represented as:
                            </p>
                            <div className="bg-white/5 p-6 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                |Φ⁺⟩ = (1/√2) (|00⟩ + |11⟩)
                            </div>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This equation tells us that the system is in a superposition of both qubits being 0 and both qubits being 1. If you measure one qubit and find it to be 0, the other qubit <em className="italic">must</em> also be 0, instantly.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">4. Applications in Quantum Computing</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Entanglement is not just a curiosity; it is a resource that powers quantum technologies:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-300">
                                <li>
                                    <strong className="text-white">Quantum Teleportation:</strong> Transferring the quantum state of a particle to another distant particle using entanglement and classical communication.
                                </li>
                                <li>
                                    <strong className="text-white">Superdense Coding:</strong> Sending two classical bits of information by transmitting only one entangled qubit.
                                </li>
                                <li>
                                    <strong className="text-white">Quantum Cryptography:</strong> Using entanglement to create unbreakable encryption keys (E91 protocol).
                                </li>
                            </ul>
                        </section>

                        <section className="py-8 border-t border-white/20 mt-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum entanglement challenges our deepest intuitions about space and time. It shows us that the universe is interconnected in ways that classical physics cannot explain. As we learn to harness this mysterious connection, we unlock the doors to a new era of communication and computation.
                            </p>
                        </section>
                    </article>
                )}

                {activeTopic !== "SuperPosition" && activeTopic !== "Quantization" && activeTopic !== "Vectors" && activeTopic !== "Entanglement" && (
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
