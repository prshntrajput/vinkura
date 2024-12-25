import { FormEvent } from 'react'
import { Message } from 'ai'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ChatPanelProps {
  isOpen: boolean
  onClose: () => void
  messages: Message[]
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export default function ChatPanel({
  isOpen,
  onClose,
  messages,
  input,
  handleInputChange,
  handleSubmit,
}: ChatPanelProps) {
  if (!isOpen) return null

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-background shadow-lg flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

