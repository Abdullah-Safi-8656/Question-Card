import { useState } from "react";


const questions = [
  {
    id: 1,
    category: "React Basics",
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build interactive user interfaces using reusable components.",
  },
  {
    id: 2,
    category: "React Basics",
    question: "What is a React component?",
    answer:
      "A component is a reusable piece of UI. It is usually defined as a JavaScript function that returns JSX.",
  },
  {
    id: 3,
    category: "React Basics",
    question: "What is JSX?",
    answer:
      "JSX is a JavaScript syntax extension that allows developers to write HTML-like markup inside JavaScript.",
  },
  {
    id: 4,
    category: "React Basics",
    question: "What is the Virtual DOM?",
    answer:
      "It is React's in-memory representation of the UI, which React uses to calculate and apply necessary DOM updates.",
  },
  {
    id: 5,
    category: "React Basics",
    question: "What is the difference between React and JavaScript?",
    answer:
      "JavaScript is a programming language, while React is a JavaScript library for building user interfaces.",
  },
  {
    id: 6,
    category: "React Basics",
    question: "What is declarative programming in React?",
    answer:
      "Declarative programming means describing what the UI should look like, while React handles updating the DOM.",
  },
  {
    id: 7,
    category: "React Basics",
    question: "What is a single-page application (SPA)?",
    answer:
      "An SPA is a web application that updates its content dynamically without reloading the entire page.",
  },
  {
    id: 8,
    category: "React Basics",
    question: "What is ReactDOM?",
    answer:
      "ReactDOM is a package that allows React to render and manage components in the browser DOM.",
  },
  {
    id: 9,
    category: "React Basics",
    question: "What is the purpose of createRoot()?",
    answer:
      "createRoot() creates a React root that allows React to render components inside a DOM element.",
  },
  {
    id: 10,
    category: "React Basics",
    question: "Why must React component names start with a capital letter?",
    answer:
      "Capitalization tells JSX to treat the name as a custom React component instead of a built-in HTML element.",
  },

  {
    id: 11,
    category: "JSX",
    question: "What is the difference between JSX and HTML?",
    answer:
      "JSX is JavaScript syntax with rules such as className instead of class and camelCase event handlers.",
  },
  {
    id: 12,
    category: "JSX",
    question: "How do you insert JavaScript expressions inside JSX?",
    answer:
      "Use curly braces {} to evaluate JavaScript expressions inside JSX.",
  },
  {
    id: 13,
    category: "JSX",
    question: "Why do React components return one parent element?",
    answer:
      "JSX requires one root element. You can use a Fragment to group multiple elements without adding an extra DOM node.",
  },
  {
    id: 14,
    category: "JSX",
    question: "What is a React Fragment?",
    answer:
      "A Fragment groups multiple JSX elements without creating an additional DOM element.",
  },
  {
    id: 15,
    category: "JSX",
    question: "How do you render a list in React?",
    answer:
      "Use the JavaScript map() method to transform an array into an array of JSX elements.",
  },
  {
    id: 16,
    category: "JSX",
    question: "Why do we use keys when rendering lists?",
    answer:
      "Keys help React identify elements between renders so it can correctly track insertions, deletions, and changes.",
  },
  {
    id: 17,
    category: "JSX",
    question: "What is conditional rendering?",
    answer:
      "Conditional rendering means displaying different UI elements based on a condition using techniques like ternaries or &&.",
  },
  {
    id: 18,
    category: "JSX",
    question: "How do you apply CSS classes in React?",
    answer:
      "Use the className attribute instead of the HTML class attribute.",
  },

  {
    id: 19,
    category: "Props",
    question: "What are props in React?",
    answer:
      "Props are read-only values passed from a parent component to a child component.",
  },
  {
    id: 20,
    category: "Props",
    question: "Are props mutable?",
    answer:
      "No. Props are read-only and should not be modified by the component receiving them.",
  },
  {
    id: 21,
    category: "Props",
    question: "What is prop drilling?",
    answer:
      "Prop drilling is passing data through multiple intermediate components to reach a deeply nested component.",
  },
  {
    id: 22,
    category: "Props",
    question: "What is the children prop?",
    answer:
      "The children prop contains the JSX or content placed between a component's opening and closing tags.",
  },
  {
    id: 23,
    category: "Props",
    question: "How do you pass a function as a prop?",
    answer:
      "Pass the function reference as a prop, then receive and call it inside the child component.",
  },

  {
    id: 24,
    category: "State",
    question: "What is state in React?",
    answer:
      "State is data managed by a component that React remembers and uses to determine what should be rendered.",
  },
  {
    id: 25,
    category: "State",
    question: "What is the useState hook?",
    answer:
      "useState is a React hook that allows functional components to add and manage state.",
  },
  {
    id: 26,
    category: "State",
    question: "Why should we not directly modify state?",
    answer:
      "Direct mutation does not properly notify React of changes. Use the state setter to request an update.",
  },
  {
    id: 27,
    category: "State",
    question: "What is the difference between state and props?",
    answer:
      "Props are passed from parent components, while state is managed by the component itself.",
  },
  {
    id: 28,
    category: "State",
    question: "What is a functional state update?",
    answer:
      "It passes a function to the state setter, receiving the previous state and returning the next state.",
  },
  {
    id: 29,
    category: "State",
    question: "What is state batching in React?",
    answer:
      "Batching means React groups multiple state updates together to reduce unnecessary rendering work.",
  },
  {
    id: 30,
    category: "State",
    question: "What is a controlled component?",
    answer:
      "A controlled component is a form element whose value is controlled by React state.",
  },

  {
    id: 31,
    category: "Hooks",
    question: "What are React Hooks?",
    answer:
      "Hooks are functions that allow functional components to use React features such as state and effects.",
  },
  {
    id: 32,
    category: "Hooks",
    question: "What is useEffect?",
    answer:
      "useEffect synchronizes a component with external systems, such as APIs, subscriptions, or browser APIs.",
  },
  {
    id: 33,
    category: "Hooks",
    question: "What does an empty dependency array mean in useEffect?",
    answer:
      "An empty dependency array means the effect does not re-run because of changes to reactive dependencies after mounting.",
  },
  {
    id: 34,
    category: "Hooks",
    question: "What happens when you omit the dependency array in useEffect?",
    answer:
      "The effect runs after every committed render.",
  },
  {
    id: 35,
    category: "Hooks",
    question: "What is the cleanup function in useEffect?",
    answer:
      "A cleanup function runs before an effect re-runs and when its component is removed from the UI.",
  },
  {
    id: 36,
    category: "Hooks",
    question: "What are the Rules of Hooks?",
    answer:
      "Call Hooks only at the top level of React components or custom Hooks, never inside loops, conditions, or nested functions.",
  },
  {
    id: 37,
    category: "Hooks",
    question: "What is useMemo?",
    answer:
      "useMemo caches the result of a calculation between renders until its dependencies change.",
  },
  {
    id: 38,
    category: "Hooks",
    question: "What is useRef?",
    answer:
      "useRef stores a mutable value between renders without causing a re-render when that value changes.",
  },
  {
    id: 39,
    category: "Hooks",
    question: "What is useContext?",
    answer:
      "useContext allows components to read values from a React context without passing props through every level.",
  },
  {
    id: 40,
    category: "React Advanced",
    question: "What is React StrictMode?",
    answer:
      "StrictMode is a development tool that helps identify potential problems by running additional checks.",
  },
];


function App() {
  const [curIndex, setCurIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleNext() {
    setCurIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0,
    );

    setIsFlipped(false);
  }

  function handlePrev() {
    setCurIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1,
    );
    setIsFlipped(false)
  }

  function handleReset() {
    setCurIndex(0);
    setIsFlipped(false)
  }

  return (
    <div className="card">
      <Card
        onNext={handleNext}
        onPrev={handlePrev}
        onReset={handleReset}
        currentIndex={curIndex}
        setIsFlipped={setIsFlipped}
        isFlipped={isFlipped}

      />
    </div>
  );
}

function Button({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Card({ onNext, currentIndex, setIsFlipped, isFlipped, onPrev, onReset }) {
  const currentQuestion = questions[currentIndex];

  function handleIsFlipped() {
    setIsFlipped((IsFlipped) => !IsFlipped);
    console.log(isFlipped);
  }

  return (
    <div className="flash-head">
      <p>🧠 Quiz Card</p>
      <p>Q.{currentQuestion.id}</p>
      <div className="question-card" onClick={handleIsFlipped}>
        <p>{!isFlipped ? '🤔' : '💡'}</p>
        <h2 className={isFlipped ? "answer" : ""}>
          {isFlipped ? currentQuestion.answer : currentQuestion.question}
        </h2>
        <p>{!isFlipped ? "Click here to revale the answer" : ""}</p>
      </div>
      <div className="btns">
        <Button className="prev-btn" onClick={onPrev}>
          Previous
        </Button>

        <Button className="next-btn" onClick={onNext}>
          Next
        </Button>

        <Button className="reset-btn" onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
