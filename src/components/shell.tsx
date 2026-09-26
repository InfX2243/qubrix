import { useState } from "react";
import { Bell, ChevronDown, Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems, currentUser } from "../mockData";
import type { RouteKey } from "../types";

const icons: Record<RouteKey, string> = {
  dashboard: "⌂",
  learn: "◈",
  designer: "◇",
  simulator: "▷",
  visualizer: "◉",
  assessments: "✓",
  progress: "↗",
  instructor: "▥",
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
          <NavLink to="/" className="brand" onClick={() => setMobileOpen(false)}>
            <span className="brand-mark">Q</span>
            {!collapsed && <span>Qubrix</span>}
          </NavLink>
          <IconButton label="Close navigation" className="mobile-close" onClick={() => setMobileOpen(false)}><X size={18} /></IconButton>
        </div>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <span className="nav-section-label">{collapsed ? "" : "Workspace"}</span>
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} title={collapsed ? item.label : undefined} className={({ isActive }) => `nav-item ${isActive ? "nav-item-active" : ""}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" aria-hidden="true">{icons[item.key]}</span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          {!collapsed && <div className="sidebar-tip"><strong>Quantum tip</strong><span>Try an H gate to explore superposition.</span></div>}
          <button className="collapse-button" onClick={() => setCollapsed((v) => !v)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>

      {mobileOpen && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}

      <div className="app-main">
        <header className="topbar">
          <div className="topbar-left">
            <IconButton label="Open navigation" className="mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={20} /></IconButton>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <span>Qubrix</span><span>/</span><strong>{active.label}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <IconButton label="Notifications"><Bell size={19} /></IconButton>
            <button className="profile-menu" aria-label="Open profile menu">
              <span className="avatar">{currentUser.initials}</span>
              <span className="profile-copy"><strong>{currentUser.name}</strong><small>{currentUser.role}</small></span>
              <ChevronDown size={15} />
            </button>
          </div>
        </header>
        <main className="content-container"><Outlet /></main>
      </div>
    </div>
  );
}