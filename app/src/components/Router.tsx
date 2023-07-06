import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import QuestionList from "../pages/QuestionList";
import Question from "../pages/Question";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/question_list",
        element: <QuestionList />
    },
    {
        path: "/question/:question_id",
        element: <Question />
    }
]);

export default router;