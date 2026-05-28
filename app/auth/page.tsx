'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User, Loader2, Sparkles } from 'lucide-react';
import { login, register } from '../lib/auth-logic';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const result = isLogin ? await login(formData) : await register(formData);

        setLoading(false);
        if (result.success) {
            setMessage({ type: 'success', text: result.message });
            if (!isLogin) {
                // Determine next steps after registration, for now maybe stay or switch to login
                setTimeout(() => setIsLogin(true), 1500);
            }
        } else {
            setMessage({ type: 'error', text: result.message });
        }
    }

    return (
        <div className="min-h-screen bg-[#030307] text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 cyber-grid pointer-events-none z-[1]" />
            <div className="aurora-orb aurora-cyan w-[450px] h-[450px] -top-40 -left-40 opacity-[0.18]" />
            <div className="aurora-orb aurora-purple w-[450px] h-[450px] bottom-[-200px] right-[-200px] opacity-[0.18]" />

            <div className="w-full max-w-md relative z-10">
                <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition gap-2 group text-sm font-semibold">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="glass-panel rounded-3xl p-8 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                            <span className="text-white font-black text-xl">Q</span>
                        </div>
                        <h1 className="text-3xl font-black mb-2 text-white tracking-tight">
                            {isLogin ? 'Welcome Back' : 'Join Q-Academy'}
                        </h1>
                        <p className="text-slate-400 text-xs">
                            {isLogin
                                ? 'Enter your credentials to access your quantum account'
                                : 'Start your quantum computing journey today'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#00f2fe]/40 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#00f2fe]/40 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full bg-white/[0.01] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#00f2fe]/40 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {message && (
                            <div className={`p-3.5 rounded-xl text-xs font-medium leading-relaxed ${message.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.05)]'}`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-premium font-bold text-sm text-black rounded-xl py-3.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(0,242,254,0.15)]"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin text-black" /> : <Sparkles className="w-4.5 h-4.5 text-black" />}
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-slate-400">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setMessage(null);
                                }}
                                className="text-white hover:text-[#00f2fe] font-bold hover:underline transition-colors ml-1"
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
