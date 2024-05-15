import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/home",
        index: true,
        element: <Home />,
    },
]);

export default router;
