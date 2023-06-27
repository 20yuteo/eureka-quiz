import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import QuestionList from "../pages/QuestionList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/question_list",
        element: <QuestionList />
    }
]);

export default router;