import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ChatBubbleProps {
  onClick: () => void
  isOpen: boolean
}

export default function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  return (
    <Button
      className="rounded-full w-14 h-14 shadow-lg transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <MessageCircle className="w-6 h-6" />
      )}
    </Button>
  )
}

