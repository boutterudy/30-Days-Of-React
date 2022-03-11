import QuestionsAnswers from "../../../Components/QuestionsAnswers";

const Day17 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            question: "What package do you use to implement routing in react?",
            answer: "To implement routing in React we can use react-router-dom package.",
        },
        {
            question: "What is the default export in react-router-dom?",
            answer: "MemoryRouter, Navigate, Outlet, Route, Router, Routes, createRoutesFromChildren, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, useHref, useInRouterContext, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, BrowserRouter, HashRouter, Link, NavLink, createSearchParams, useLinkClickHandler & useSearchParams",
        },
        {
            question:
                "What is the use of the following Components: Route, NavLink, Switch, Redirect & Prompt?",
            answer:
                "Route is used to associate a path to a component, which means if the path is matching it will render the associated component." +
                " NavLink is used to create a Link which will be stylized when matching to the current path." +
                " Switch is used to Renders the first child <Route> or <Redirect> that matches the location." +
                " Redirect is used to redirecting user to a specific path." +
                " Prompt is used to prompt the user before navigating away from a page.",
        },
    ];

    return (
        <div>
            <QuestionsAnswers list={level1} />
        </div>
    );
};

export default Day17;
