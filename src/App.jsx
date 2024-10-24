import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { inject } from "@vercel/analytics";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthContext } from "./context/AuthContext";

import "./styles/App.scss";
import "./styles/LoginRegister.scss";
import "./styles/HomePage.scss";

inject();

const App = () => {
  
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="login" />;
    }
    return children;
  };

  return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/">
							<Route
								index
								element={
									<ProtectedRoute>
										<HomePage />
									</ProtectedRoute>
								}
							/>
							<Route path="login" element={<LoginPage />} />
							<Route path="register" element={<RegisterPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<SpeedInsights />
				<Analytics />
			</div>
		</>
	);
};

export default App;
