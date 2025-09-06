import React, { useState } from "react";

const ApplicationForm = ({ name: initialName, lastSave: initialLastSave }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [name, setName] = useState(initialName);
  const [lastSave, setLastSave] = useState(initialLastSave);

  const questions = [];

  const handleQuestionClick = (index) => setSelectedQuestion(index);

  const handleSubmit = () => {
    console.log("Submitted:", { inputValue, name, lastSave });
  };

  return (
    <div className="min-h-screen text-white bg-black flex flex-col font-mono">
      {/* Header */}

      <div className="flex justify-between items-center border-b-4 border-foreground px-6 py-8">
        <div className="flex items-center">
          <div className="text-green text-sm font-orbitron font-bold flex flex-col items-start gap-0">
            <span className="-mb-2">IEEE</span>
            <span className="-mb-2">COMPUTER</span>
            <span className="-mb-2">SOCIETY</span>
            <span className="">VITC</span>
          </div>

          <div className="ml-40 flex items-center gap-2">
            <img src="formHeaderGraphic.svg" className="h-10 w-10" />
            <span className="font-orbitron text-gray-400">[ {name} ]</span>
          </div>
        </div>

        <div className="font-orbitron text-l text-gray-400">
          LAST SAVE: <span className="text-2xl text-white">{lastSave}</span>
        </div>
      </div>
      {/* Main Layout */}
      <div className="flex flex-auto">
        {/* Left Sidebar */}
        <div className="w-110 border-r-3 border-foreground flex">
          <div className="flex items-center border-r-3 border-foreground justify-center px-6 py-4">
            <span className="font-orbitron text-7xl font-bold tracking-widest rotate-180 [writing-mode:vertical-rl] [text-orientation:mixed]">
              QUESTIONS
            </span>
          </div>

          <div className="grid grid-cols-2 flex-1">
            {questions.map((q, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(index)}
                className={`flex items-center justify-center text-8xl font-orbitron font-bold border-3
                  ${selectedQuestion === index
                    ? "bg-green text-white"
                    : "bg-black text-white border-white hover:bg-white hover:text-black"
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <div className="flex items-center justify-center font-orbitron text-8xl font-bold border-3">
              ?
            </div>
          </div>
        </div>

        {/* Middle Q&A Area */}
        <div className="flex-1 flex font-orbitron flex-col border-r-3 border-foreground">
          <div className="flex-1 px-12 py-8 flex flex-col">
            <h1 className="text-2xl font-bold uppercase tracking-[0.4em] mb-2">
              {questions[selectedQuestion]}
            </h1>
            <p className="text-gray-400 tracking-widest mb-6">
              More description of what is exactly expected in the answer...
            </p>

            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your reason"
              className="w-full h-100 bg-black border-3 border-foreground p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-light-green"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-64 flex flex-col items-center justify-center bg-black relative">
          <img src="formGraphic.svg" className="object-cover h-full" />
          <button
            onClick={handleSubmit}
            className="bg-dark-green border-t-3 border-foreground w-full font-orbitron text-white text-3xl px-8 py-3 font-bold cursor-pointer hover:bg-green transition"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
