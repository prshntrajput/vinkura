'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import ChatBubble from './ChatBubble'
import ChatPopup from './ChatPopup'

const predefinedQuestions = [
  "Who are you?",
  "Who made you?",
  "What can you do?",
  "How does this work?",
]

const predefinedAnswers: Record<string, string> = {
  "Who are you?": "I'm an AI chatbot created to assist users on this website.",
  "Who made you?": "I was developed by the team at this company using advanced AI technology.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat()

  const toggleChat = () => setIsOpen(!isOpen)

  const handleQuestionSelect = (question: string) => {
    if (predefinedAnswers[question]) {
      const userMessage: Message = { 
        id: Date.now().toString(), 
        role: 'user',  // Correct type
        content: question 
      }

      const botMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant',  // Correct type
        content: predefinedAnswers[question] 
      }

      // You may need to update the state properly for this to reflect
      // in your component (assuming useChat handles state).
      messages.push(userMessage, botMessage)
    } else {
      setInput(question)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatBubble onClick={toggleChat} isOpen={isOpen} />
      <ChatPopup
        isOpen={isOpen}
        onClose={toggleChat}
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        predefinedQuestions={predefinedQuestions}
        onQuestionSelect={handleQuestionSelect}
      />
    </div>
  )
}
