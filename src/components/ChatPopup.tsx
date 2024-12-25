import { FormEvent } from 'react'
import { Message } from 'ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Image from 'next/image'

interface ChatPopupProps {
  isOpen: boolean
  onClose: () => void
  messages: Message[]
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  predefinedQuestions: string[]
  onQuestionSelect: (question: string) => void
}

export default function ChatPopup({
  isOpen,
  onClose,
  messages,
  input,
  handleInputChange,
  handleSubmit,
  predefinedQuestions,
  onQuestionSelect,
}: ChatPopupProps) {
  return (
    <div
      className={`
        fixed bottom-20 right-4 w-96 bg-background rounded-lg shadow-lg flex flex-col
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
      `}
      style={{ height: 'calc(100vh - 6rem)', maxHeight: '600px' }}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <Image
                src="/logo.png"
                alt="Bot Avatar"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
            )}
            <div
              className={`inline-block p-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.content}
            </div>
            {message.role === 'user' && (
              <Image
                src="/user.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full ml-2"
              />
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        {messages.length === 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Choose a question:</h3>
            <div className="grid grid-cols-2 gap-2">
              {predefinedQuestions.map((question) => (
                <Button
                  key={question}
                  variant="outline"
                  onClick={() => onQuestionSelect(question)}
                  className="text-left"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}

