import { useState } from "react";
import { BarChart3, Bell, BookOpen, BrainCircuit, ChevronDown, FlaskConical, GraduationCap, Home, Menu, PanelLeftClose, PanelLeftOpen, ScanLine, Sparkles, Target, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems, currentUser } from "../mockData";
import type { RouteKey } from "../types";

const icons: Record<RouteKey, typeof Home> = {
  dashboard: Home,
  learn: BookOpen,
  designer: ScanLine,
  simulator: FlaskConical,
  visualizer: BrainCircuit,
  assessments: Target,
  progress: BarChart3,
  instructor: GraduationCap,
};

export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const active = navItems.find((item) => item.path === location.pathname) ?? navItems[0];

  return (
    <div className="app-shell">
      <aside className={`sidebar ${collapsed ? "sidebar-collapsed" : ""} ${mobileOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="brand-row">
          <NavLink to="/" className="brand" onClick={() => setMobileOpen(false)}><span className="brand-mark">Q</span>{!collapsed && <span>Qubrix</span>}</NavLink>
          <button className="icon-button mobile-close" aria-label="Close navigation" onClick={() => setMobileOpen(false)}><X size={18} /></button>
        </div>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <span className="nav-section-label">{collapsed ? "" : "Workspace"}</span>
          {navItems.map((item) => {
            const Icon = icons[item.key];
            return <NavLink key={item.key} to={item.path} end={item.path === "/"} title={collapsed ? item.label : undefined} className={({ isActive }) => `nav-item ${isActive ? "nav-item-active" : ""}`} onClick={() => setMobileOpen(false)}><Icon className="nav-icon" size={18} aria-hidden="true" />{!collapsed && <span>{item.label}</span>}</NavLink>;
          })}
        </nav>
        <div className="sidebar-footer">
          {!collapsed && <div className="sidebar-tip"><Sparkles size={15} /><strong>Quantum tip</strong><span>Try an H gate to explore superposition.</span></div>}
          <button className="collapse-button" onClick={() => setCollapsed((v) => !v)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>{collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}{!collapsed && "Collapse"}</button>
        </div>
      </aside>
      {mobileOpen && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <div className="app-main">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
            <div className="breadcrumbs" aria-label="Breadcrumb"><span>Qubrix</span><span>/</span><strong>{active.label}</strong></div>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Notifications"><Bell size={19} /></button>
            <button className="profile-menu" aria-label="Open profile menu"><span className="avatar">{currentUser.initials}</span><span className="profile-copy"><strong>{currentUser.name}</strong><small>{currentUser.role}</small></span><ChevronDown size={15} /></button>
          </div>
        </header>
        <main className="content-container"><Outlet /></main>
      </div>
    </div>
  );
}