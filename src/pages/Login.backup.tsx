import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Lock, ArrowRight, Radio } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { mockUsers } from '../services/mockData';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [selectedUser, setSelectedUser] = useState(mockUsers[0].id);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(selectedUser);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center p-3 sm:p-4 relative overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-8 relative z-10 backdrop-blur-xl my-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-rose-600 via-amber-500 to-indigo-600 p-0.5 mx-auto mb-3 sm:mb-4 shadow-xl shadow-rose-900/40">
            <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500" />
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            RESettle<span className="text-rose-500">AI</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium mt-1">
            State Disaster Management Authority (SDMA) Platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Select Official Role & User Profile
            </label>
            <div className="space-y-2.5">
              {mockUsers.map((u) => (
                <div
                  key={u.id}
                  onClick={() => setSelectedUser(u.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedUser === u.id
                      ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={u.avatar}
                      alt={u.name}
                      className="w-9 h-9 rounded-full border border-slate-700 object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{u.name}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{u.district}</div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                    u.role === 'SDMA_OFFICER' ? 'bg-rose-900/60 text-rose-300 border border-rose-700/50' :
                    u.role === 'GIS_ANALYST' ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/50' :
                    'bg-amber-900/60 text-amber-300 border border-amber-700/50'
                  }`}>
                    {u.role.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/30 hover:opacity-95 transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4 text-indigo-300" />
            <span>Authenticate SDMA Command Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Smart India Hackathon • Disaster Management Intelligence System</span>
          </div>
        </div>
      </div>
    </div>
  );
};
