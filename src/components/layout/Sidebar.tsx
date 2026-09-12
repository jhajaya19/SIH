import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  LayoutDashboard,
  Map,
  Building2,
  Cpu,
  Activity,
  BarChart3,
  FileText,
  Users,
  Layers,
  LogOut,
  Radio,
  X,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  onClose,
}) => {
  const { user, logout } = useAuthStore();

  const navItems = [
    {
      path: '/dashboard',
      label: 'Command Overview',
      icon: LayoutDashboard,
    },
    {
      path: '/map',
      label: 'Multi-Hazard GIS Map',
      icon: Map,
      badge: 'LIVE',
    },
    {
      path: '/habitations',
      label: 'Vulnerable Habitations',
      icon: Users,
      count: 10,
    },
    {
      path: '/sites',
      label: 'Relocation Sites',
      icon: Building2,
      count: 7,
    },
    {
      path: '/capacity',
      label: 'Carrying Capacity',
      icon: Layers,
    },
    {
      path: '/optimizer',
      label: 'AI Relocation Solver',
      icon: Cpu,
      highlight: true,
    },
    {
      path: '/monitoring',
      label: 'Live Telemetry & Alerts',
      icon: Activity,
      badge: '4 Alerts',
    },
    {
      path: '/analytics',
      label: 'Risk Analytics',
      icon: BarChart3,
    },
    {
      path: '/reports',
      label: 'SDMA Briefing Reports',
      icon: FileText,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-200 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-slate-700/60 bg-[#0B172A] text-slate-300 shadow-2xl shadow-slate-950/30 transition-transform duration-300 ease-in-out lg:z-30 ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="border-b border-slate-700/60 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              {/* New Logo */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-600 to-indigo-700 p-[2px] shadow-lg shadow-blue-950/50">
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0B172A]">
                  <ShieldCheck
                    className="h-6 w-6 text-cyan-300"
                    strokeWidth={2.2}
                  />
                </div>

                {/* AI Status Dot */}
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0B172A] bg-emerald-400" />
              </div>

              {/* Brand Name */}
              <div className="min-w-0">
                <h1 className="flex items-center gap-1 text-xl font-extrabold tracking-tight text-white">
                  RE
                  <span className="text-cyan-400">settle</span>
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    AI
                  </span>
                </h1>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Intelligent Disaster
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Relocation Platform
                </p>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
              title="Close Menu"
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* System Status */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Command System
            </span>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          <div className="px-3 pb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Core Operations
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group relative flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-950/40'
                      : item.highlight
                      ? 'border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white'
                      : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-100'
                  }`
                }
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Icon
                    className="h-[18px] w-[18px] shrink-0 text-slate-400 transition-colors group-hover:text-cyan-200"
                    strokeWidth={2}
                  />

                  <span className="truncate">{item.label}</span>
                </div>

                {/* Live or Alert Badge */}
                {item.badge && (
                  <span
                    className={`ml-2 shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide ${
                      item.badge === 'LIVE'
                        ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-300'
                        : 'border-amber-300/30 bg-amber-300/10 text-amber-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Count Badge */}
                {item.count !== undefined && (
                  <span className="ml-2 shrink-0 rounded-md border border-slate-600/40 bg-slate-800/90 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                    {item.count}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Telemetry Status Card */}
        <div className="mx-3 mb-3 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#102A43] to-[#0D1B2E] p-4">
          <div className="mb-2 flex items-center gap-2">
            <Radio
              className="h-4 w-4 animate-pulse text-cyan-400"
              strokeWidth={2}
            />

            <span className="text-xs font-bold text-slate-200">
              Telemetry Feeds Active
            </span>
          </div>

          <p className="text-[11px] leading-relaxed text-slate-400">
            5 Automatic Weather Stations reporting real-time soil moisture
            and slope metrics.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700">
              <span className="block h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </span>

            <span className="text-[10px] font-bold text-cyan-300">
              82%
            </span>
          </div>
        </div>

        {/* User Profile Footer */}
        <div className="flex items-center justify-between border-t border-slate-700/60 bg-[#08111F] px-4 py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={
                user?.avatar ||
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'
              }
              alt={user?.name || 'User profile'}
              className="h-9 w-9 shrink-0 rounded-full border border-cyan-400/30 object-cover"
            />

            <div className="min-w-0">
              <div className="truncate text-xs font-bold text-white">
                {user?.name || 'SDMA Officer'}
              </div>

              <div className="truncate text-[10px] font-medium uppercase tracking-wide text-cyan-300">
                {user?.role?.replace('_', ' ') || 'Authorized User'}
              </div>
            </div>
          </div>

          <button
            onClick={logout}
            title="Sign Out"
            aria-label="Sign Out"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  );
};