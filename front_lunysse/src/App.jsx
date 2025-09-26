// App.jsx
// Componente principal que envolve a aplicação com AuthProvider e Router

import { AuthProvider } from "./context/AuthContext";

import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>

        <AppRoutes />

    </AuthProvider>
  );
}

export default App;
