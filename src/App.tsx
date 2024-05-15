import "./App.css";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="max-w-[2000px] mx-auto border-2 border-blue-200 rounded-3xl bg-white dark:bg-black">
                <RouterProvider router={router}></RouterProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
