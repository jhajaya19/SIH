import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import { Layout } from "../components/layout/Layout";

// Public pages
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

// Application pages
import { Dashboard } from "../pages/Dashboard";
import { RiskMapPage } from "../pages/RiskMapPage";
import { HabitationDetails } from "../pages/HabitationDetails";
import { RelocationPriorities } from "../pages/RelocationPriorities";
import { RelocationSites } from "../pages/RelocationSites";
import { CarryingCapacity } from "../pages/CarryingCapacity";
import { RelocationOptimizer } from "../pages/RelocationOptimizer";
import { LiveMonitoring } from "../pages/LiveMonitoring";
import { Analytics } from "../pages/Analytics";
import { Reports } from "../pages/Reports";

// Authentication store
import { useAuthStore } from "../store/authStore";

// Protected Route
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Application Routes
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* PROTECTED APPLICATION ROUTES */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* Default route */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Risk Map */}
        <Route path="map" element={<RiskMapPage />} />

        {/* Habitations */}
        <Route path="habitations" element={<RelocationPriorities />} />

        {/* Habitation Details */}
        <Route path="habitations/:id" element={<HabitationDetails />} />

        {/* Relocation Sites */}
        <Route path="sites" element={<RelocationSites />} />

        {/* Carrying Capacity */}
        <Route path="capacity" element={<CarryingCapacity />} />

        {/* Relocation Optimizer */}
        <Route path="optimizer" element={<RelocationOptimizer />} />

        {/* Live Monitoring */}
        <Route path="monitoring" element={<LiveMonitoring />} />

        {/* Analytics */}
        <Route path="analytics" element={<Analytics />} />

        {/* Reports */}
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* UNKNOWN ROUTE */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};