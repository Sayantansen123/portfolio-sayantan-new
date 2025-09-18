import React, { useState } from 'react';
import Terminal, {
    ColorMode,
    TerminalOutput,
    TerminalInput,
} from 'react-terminal-ui';
import { motion } from "framer-motion";

const MyTerminal = ({ show, setShow }) => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput key="welcome">Welcome to Sayantan's React Terminal!</TerminalOutput>,
        <TerminalOutput key="help">Type 'help' to see available commands.</TerminalOutput>,
    ]);

    const handleInput = (terminalInput) => {
        // Add user input to terminal
        setTerminalLineData((prev) => [
            ...prev,
            <TerminalInput key={`in-${prev.length}`}>{terminalInput}</TerminalInput>,
        ]);

        let response = '';

        const trimmedInput = terminalInput.trim();

        switch (true) {
            // Custom commands
            case trimmedInput === 'whoami':
                response = "sayantan sen";
                break;
            case trimmedInput === 'skill':
            case trimmedInput === 'skill':
                response = `{
  "frontend": {
    "React.js": "professional",
    "Tailwind CSS": "intermediate"
  },
  "backend": {
    "Node.js": "professional",
    "Express": "professional",
    "Go": "beginner",
    "GraphQL": "beginner"
  },
  "database": {
    "MongoDB": "professional"
  },
  "other": {
    "Docker": "beginner",
    "System Design": "learning"
  }
}`;
                break;
            case trimmedInput === 'project':
                response = "Auraverse, Real Estate App, Chat App, Resume Builder, Video Streaming Platform, News & Trends Analysis API.";
                break;

            // Fun Linux-like commands
            case trimmedInput === 'pwd':
                response = "/home/sayantan";
                break;
            case trimmedInput === 'ls':
                response = "projects  skills.txt  about-me.txt  auraverse  resume.pdf";
                break;
            case trimmedInput.startsWith('echo '):
                response = trimmedInput.slice(5); // print after "echo "
                break;
            case trimmedInput === 'date':
                response = new Date().toString();
                break;
            case trimmedInput === 'clear':
                setTerminalLineData([]);
                return;
            case trimmedInput === 'help':
                response =
                    "Available commands: whoami, skill, project, pwd, ls, echo <text>, date, clear, help";
                break;

            default:
                response = `Unknown command: ${terminalInput}`;
        }

        // Add response to terminal
        setTerminalLineData((prev) => [
            ...prev,
            <TerminalOutput key={`out-${prev.length}`}>{response}</TerminalOutput>,
        ]);
    };

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-15 fixed w-[100vw] h-[100vh] backdrop-blur bg-white/40 top-[5px] left-0 max-md:pb-0 max-md:overflow-x-hidden px-[10%] max-md:px-[5%] z-[150]">
            <button
                onClick={() => setShow(false)}
                className="mb-2 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
                Close Terminal
            </button>
            <Terminal
                name="Sayantan@Terminal"
                colorMode={ColorMode.Dark}
                onInput={handleInput}
                height="400px"
            >
                {terminalLineData}
            </Terminal>
        </motion.div>
    );
};

export default MyTerminal;
