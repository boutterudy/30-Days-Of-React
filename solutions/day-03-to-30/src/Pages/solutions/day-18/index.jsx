import CatsParadise from "../../../Components/CatsParadise";
import QuestionsAnswers from "../../../Components/QuestionsAnswers";

const Day18 = () => {
    // Level 1 questions and answers
    const level1 = [
        {
            question: "What is HTTP request?",
            answer: "HTTP request is a request which using HTTP protocol to do some actions (GET/POST/PUT/DELETE) on a resource identified by a given Request-URL.",
        },
        {
            question: "What are the most common HTTP requests?",
            answer: "GET / POST / PUT / PATCH / DELETE",
        },
        {
            question: "What is fetch?",
            answer: "Fetch method is used to fetch a ressource from the network, for example getting some data from an external API.",
        },
        {
            question: "What is axios?",
            answer: "Axios is a third party package which is allowing us to make HTTP requests with better browsers support than fetch method.",
        },
        {
            question: "What is the difference between fetch and axios?",
            answer: "Fetch is supported by ~95% of browers, where axios is providing a better browser support.",
        },
        {
            question: "Do you prefer fetch to axios for make HTTP requests?",
            answer: "Axios is better for making HTTP requests because of a better browsers support, so I prefer Axios.",
        },
    ];

    return (
        <div>
            <QuestionsAnswers list={level1} />
            <CatsParadise />
        </div>
    );
};

export default Day18;
