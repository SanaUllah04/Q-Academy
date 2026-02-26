"use client";

import { useState } from 'react';

export default function Code() {
    const [activeModule, setActiveModule] = useState("GetStarted");

    const modules = [
        { id: "GetStarted", label: "Get Started" },
        { id: "HelloWorld", label: "Hello World" },
        { id: "Superposition", label: "Superposition" },
        { id: "Entanglement", label: "Entanglement" },
    ];

    return (
        <div className="flex min-h-screen bg-black text-white font-sans">
            {/* Sidebar */}
            <div className="w-72 border-r border-white/20 flex flex-col h-screen sticky top-0 overflow-y-auto bg-black">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-8 text-white tracking-wider">CODE</h2>
                    <ul className="space-y-3">
                        {modules.map((module) => (
                            <li key={module.id}>
                                <button
                                    onClick={() => setActiveModule(module.id)}
                                    className={`text-left w-full py-3 px-4 rounded-lg transition-all duration-300 ${activeModule === module.id
                                        ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {module.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-12 overflow-y-auto">
                {activeModule === "GetStarted" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Get Started
                            </h1>
                            <p className="text-2xl text-gray-300 font-light leading-relaxed">
                                Your First Steps in Quantum Programming
                            </p>
                        </header>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Environment Setup</h2>

                            <p className="text-lg leading-relaxed text-gray-300">
                                Quantum programming uses Python. Make sure you have <strong>Python&nbsp;3.9+</strong> installed and
                                create an isolated environment so libraries don't conflict. For example:
                            </p>

                            <div className="bg-white/5 p-6 rounded-lg font-mono text-white border border-white/10">
                                <code>python -m venv qiskit-env   # create env</code><br/>
                                <code>qiskit-env\Scripts\activate  # Windows</code><br/>
                                <code>source qiskit-env/bin/activate  # macOS/Linux</code>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-300">
                                <strong>Installing Qiskit and Related Quantum Computing Packages</strong>
                            </p>

                            <div className="bg-white/5 p-6 rounded-lg font-mono text-white border border-white/10">
                                <code>pip install qiskit qiskit-aer qiskit-ibmq-provider</code>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-300">
                                You can verify that everything is working by running:</p>
                            <div className="bg-white/5 p-6 rounded-lg font-mono text-white border border-white/10">
                                <code>python -c "import qiskit; print(qiskit.__qiskit_version__)"</code>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-300">
                                It should print a dictionary containing versions for Terra, Aer, Ignis, etc. If you see an
                                error, double‑check that your virtual environment is activated.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-300">
                                Optionally, create a free IBM Quantum account at&nbsp;
                                <a href="https://quantum-computing.ibm.com" className="text-blue-400 underline" target="_blank" rel="noreferrer">
                                    quantum-computing.ibm.com
                                </a>&nbsp;and run <code>from qiskit_ibmq import IBMQ; IBMQ.save_account('TOKEN')</code> to store your API key.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-300">
                                Now you’re ready to write your first circuit. Use the "Hello World" section on the left,
                                or open a Python REPL, import <code>qiskit</code>, and experiment with <code>QuantumCircuit</code>.
                            </p>
                        </section>
                    </article>
                )}

                {activeModule === "HelloWorld" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Hello World: Your First Quantum Circuit
                            </h1>
                        </header>
                        <section className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-300">
                                In quantum computing, “Hello World” is creating a single qubit, leaving it in its default state |0⟩, and measuring it.
                            </p>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">The Code:</h3>
                                <div className="bg-white/5 p-6 rounded-lg font-mono text-sm text-white border border-white/10 overflow-x-auto">
                                    <pre>{`from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# 1. Create a circuit with 1 qubit and 1 classical bit
qc = QuantumCircuit(1, 1)

# 2. Measure the qubit (index 0) into the classical bit (index 0)
qc.measure(0, 0)

# 3. Simulate the circuit
simulator = AerSimulator()
job = simulator.run(qc, shots=1000)
result = job.result()

# 4. Get the counts
counts = result.get_counts()
print(f"Results: {counts}")`}</pre>
                                </div>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Explanation:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li><strong className="text-white">QuantumCircuit(1, 1)</strong>: Defines the hardware. Qubits store quantum data; classical bits store the result after measurement.</li>
                                    <li><strong className="text-white">Result</strong>: You will see <code className="bg-white/10 px-2 py-1 rounded">{'{"0": 1000}'}</code>. Since we did nothing to the qubit, it stayed in the ground state |0⟩ with 100% probability.</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                )}

                {activeModule === "Superposition" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Superposition: The Hadamard Gate
                            </h1>
                        </header>
                        <section className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-300">
                                To put a qubit into superposition (where it is both 0 and 1 simultaneously), we use the Hadamard (H) gate.
                            </p>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">The Math:</h3>
                                <div className="bg-white/5 p-4 rounded-lg font-mono text-center text-xl text-white border border-white/10">
                                    H|0⟩ = 1/√2 (|0⟩ + |1⟩)
                                </div>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">The Code:</h3>
                                <div className="bg-white/5 p-6 rounded-lg font-mono text-sm text-white border border-white/10 overflow-x-auto">
                                    <pre>{`qc_super = QuantumCircuit(1, 1)

# Apply Hadamard gate to qubit 0
qc_super.h(0)

# Measure
qc_super.measure(0, 0)

# Run simulation
counts_super = simulator.run(qc_super, shots=1000).result().get_counts()
print(f"Superposition Results: {counts_super}")`}</pre>
                                </div>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Explanation:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li><strong className="text-white">qc.h(0)</strong>: This rotates the qubit&apos;s state.</li>
                                    <li><strong className="text-white">Result</strong>: You will see roughly <code className="bg-white/10 px-2 py-1 rounded">{'{"0": 500, "1": 500}'}</code>. The qubit is now a “fair coin flip,” representing a true random distribution.</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                )}

                {activeModule === "Entanglement" && (
                    <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <header className="border-b border-white/20 pb-8 break-words">
                            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Entanglement: The Bell State
                            </h1>
                        </header>
                        <section className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-300">
                                Entanglement is a correlation where the state of one qubit depends on another, regardless of distance. We create this using a Hadamard gate and a CNOT (Controlled-NOT) gate.
                            </p>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">The Logic:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li>Put Qubit 0 into superposition (H gate).</li>
                                    <li>Use Qubit 0 as a “control” to flip Qubit 1 (CNOT gate).</li>
                                </ul>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">The Code:</h3>
                                <div className="bg-white/5 p-6 rounded-lg font-mono text-sm text-white border border-white/10 overflow-x-auto">
                                    <pre>{`# Create a circuit with 2 qubits and 2 classical bits
qc_entangled = QuantumCircuit(2, 2)

# 1. Put qubit 0 in superposition
qc_entangled.h(0)

# 2. Entangle qubit 1 with qubit 0
# If qubit 0 is 1, flip qubit 1. If 0, do nothing.
qc_entangled.cx(0, 1)

# 3. Measure both
qc_entangled.measure([0, 1], [0, 1])

# Run simulation
counts_entangled = simulator.run(qc_entangled, shots=1000).result().get_counts()
print(f"Entanglement Results: {counts_entangled}")`}</pre>
                                </div>
                            </div>

                            <div className="pl-6 border-l-2 border-white/20 space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Explanation:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                                    <li><strong className="text-white">Result</strong>: You will see approximately <code className="bg-white/10 px-2 py-1 rounded">{'{"00": 500, "11": 500}'}</code>.</li>
                                    <li>Notice that you almost never see 01 or 10. This means if you measure the first qubit and find it is 0, you instantly know the second qubit is also 0, even before measuring it.</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                )}
            </div>
        </div>
    );
}
