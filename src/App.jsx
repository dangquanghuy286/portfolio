import AllRoute from "./components/AllRoute";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <ThemeProvider storageKey="theme" defaultTheme="light">
      <AllRoute />
    </ThemeProvider>
  );
}

export default App;
