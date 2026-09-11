import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import { RiskMapPage } from '../pages/RiskMapPage';
import { HabitationDetails } from '../pages/HabitationDetails';
import { RelocationPriorities } from '../pages/RelocationPriorities';
import { RelocationSites } from '../pages/RelocationSites';
import { CarryingCapacity } from '../pages/CarryingCapacity';
import { RelocationOptimizer } from '../pages/RelocationOptimizer';
import { LiveMonitoring } from '../pages/LiveMonitoring';
import { Analytics } from '../pages/Analytics';
import { Reports } from '../pages/Reports';
import { useAuthStore } from '../store/authStore';
import { AboutPage } from '../pages/AboutPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }
      >
        {/* <Route index element={<HomePage />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="map" element={<RiskMapPage />} />
        <Route path="habitations" element={<RelocationPriorities />} />
        <Route path="habitations/:id" element={<HabitationDetails />} />
        <Route path="sites" element={<RelocationSites />} />
        <Route path="capacity" element={<CarryingCapacity />} />
        <Route path="optimizer" element={<RelocationOptimizer />} />
        <Route path="monitoring" element={<LiveMonitoring />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
