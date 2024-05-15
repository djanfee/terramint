import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="max-w-[2000px] mx-auto border-2 border-blue-200 rounded-3xl bg-white dark:bg-black">
                <Home></Home>
            </div>
        </ThemeProvider>
    );
}

export default App;
