import { Bot, X, Send, BotMessageSquare } from "lucide-react";
import { Badge } from "antd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRef, useEffect, useState } from "react";
import ava from "../assets/images/av.png";

interface message {
  sender: string;
  content: string;
  timestamps: Date;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "90%",
    md: 500,
  },
  height: {
    xs: "80%",
    sm: "500px",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  outline: 0,
};

export default function ChatBot() {
  const [chatBot, setChatBot] = useState(true);
  const [openChatbot, setOpenChatbot] = useState(false);

  const [messages, setMessages] = useState<message[]>([
    {
      sender: "bot",
      content: "Hello, how can I help you?",
      timestamps: new Date(),
    },
  ]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [question, setQuestion] = useState("");
  const [formData, setFormData] = useState("");

  const [sendingMessage, setSendingMessage] = useState(false);

  const renderMessages = (messages: message[]) => {
    return messages.map((message, idx) => {
      const isBot = message.sender === "bot";
      return (
        <div
          key={idx}
          className={`flex items-start gap-3 mb-4 ${
            isBot ? "justify-start" : "justify-end"
          }`}
        >
          {isBot && (
            <div className="bg-white rounded-full p-2 shadow-md">
              <Bot className="text-red-700 w-6 h-6" />
            </div>
          )}

          <div>
            <div
              className={`${
                isBot
                  ? "bg-red-700 text-white"
                  : "bg-zinc-100 shadow-xs text-red-600"
              }  text-sm p-3 rounded-xl max-w-[400px] break-words`}
            >
              {message.content}
            </div>
            <div
              className={`text-zinc-400 text-xs mt-1 ${
                isBot ? "text-start" : "text-end"
              } `}
            >
              {message.timestamps.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>

          {!isBot && <img src={ava} className="w-10 h-10 rounded-full" />}
        </div>
      );
    });
  };

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollTo({
      top: messagesEndRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const API_URL = "https://quick-eat-be.onrender.com/api";

  const handleSendMessage = async (e: React.FormEvent) => {
    setSendingMessage(true);
    setFormData("");

    e.preventDefault();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        content: question,
        timestamps: new Date(),
      },
    ]);

    const response = await fetch(`${API_URL}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: question }),
    });

    setQuestion("");
    const data = await response.json();

    if (data.success) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: data.message,
          timestamps: new Date(),
        },
      ]);
    }

    setSendingMessage(false);
  };

  return (
    <div className={`${chatBot ? "fixed bottom-30 right-5" : "hidden"}`}>
      <div className="relative w-full h-full">
        <div className=" absolute  left-10 -top-2">
          <Badge
            count={
              <X className="w-5 h-5 p-1 cursor-pointer bg-zinc-600 rounded-full text-white" />
            }
            onClick={() => {
              setChatBot(false);
            }}
          />
        </div>
        <div
          onClick={() => {
            setOpenChatbot(true);
          }}
          className="bg-white p-4 rounded-full z-30 cursor-pointer shadow-xl"
        >
          <Bot className="text-red-600 w-7 h-7" />{" "}
        </div>

        <Modal
          open={openChatbot}
          onClose={() => setOpenChatbot(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style, borderRadius: "20px" }}>
            <div className="font-poppins w-full h-full rounded-[20px]">
              <div className="bg-white w-full h-full  rounded-[20px] flex justify-center items-center">
                <div className="w-full h-full bg-white rounded-[20px] text-white flex flex-col justify-between">
                  <div className="flex flex-row px-5 py-4 gap-4 w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-t-[20px] items-center">
                    <div>
                      <BotMessageSquare className="w-8 h-8" />
                    </div>
                    <div className="font-semibold text-[22px]">
                      AI Assistant
                    </div>
                  </div>

                  <div
                    className="flex-1 h-full py-7 px-5 overflow-y-auto no-scrollbar"
                    ref={messagesEndRef}
                  >
                    {renderMessages(messages)}
                    {sendingMessage && (
                      <div className="flex flex-row justify-start gap-3">
                        <div className="bg-white rounded-full p-2 shadow-md">
                          <Bot className="text-red-700 w-6 h-6" />
                        </div>
                        <div className="bg-red-700 text-white text-sm p-3 rounded-xl max-w-[300px] break-words flex justify-center items-center">
                          <div className="w-full gap-x-2 flex justify-center items-center">
                            <div className="w-2 bg-zinc-100 animate-pulse h-2 rounded-full animate-bounce flex justify-center items-center"></div>
                            <div className="w-2 animate-pulse h-2 bg-zinc-200 rounded-full animate-bounce flex justify-center items-center"></div>
                            <div className="w-2 h-2 animate-pulse bg-zinc-300  rounded-full animate-bounce flex justify-center items-center"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-zinc-500 bg-zinc-100 shadow-xl rounded-b-[15px]">
                    <form className="px-4 py-3 flex flex-row gap-3">
                      <input
                        className=" text-[13px] bg-white border border-zinc-500 text-red-700 rounded-[15px] w-full px-2 py-3 focus:outline-red-600"
                        type="text"
                        value={formData}
                        placeholder="Type your message..."
                        onChange={(e) => {
                          setQuestion(e.target.value);
                          setFormData(e.target.value);
                        }}
                      />

                      <button
                        type="submit"
                        className={`bg-red-600 rounded-[15px] hover:bg-primary transtion-all duration-300 ${
                          question.length === 0
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={handleSendMessage}
                        disabled={question.length === 0}
                      >
                        <div className="px-5 py-2 ">
                          <Send className="w-6 h-6 " />
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
