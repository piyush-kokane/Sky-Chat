import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "react-oidc-context";
import { ThemeProvider } from "@hooks/useTheme";
import { UserProvider } from "@/hooks/useUser.tsx";
import App from './App.tsx'
import './index.css'


const redirectUri = `${window.location.origin}/home`; // signin Redirect Uri

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_xiLlUkbyV",
  client_id: "1sel5r7k42ls80ubk82fsv5uel",
  redirect_uri: redirectUri,
  response_type: "code",
  scope: "openid email phone",
  automaticSilentSignin: false, // important: don't redirect automatically
  loadUserInfo: true,
};

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </AuthProvider>
  //</StrictMode>
)
