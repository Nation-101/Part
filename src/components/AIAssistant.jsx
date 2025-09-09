import { useState } from "react";
import { Bot } from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything 🎤" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: "🤖 (AI reply placeholder)" }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white p-3 flex justify-between">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`mb-2 ${m.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${m.sender === "user" ? "bg-indigo-100" : "bg-gray-200"}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2"
              placeholder="Ask something..."
            />
            <button onClick={handleSend} className="bg-indigo-600 text-white px-3 rounded">Send</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white p-4 rounded-full shadow-lg">
          <Bot className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
