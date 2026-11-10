import { useState } from 'react'
import './ChatBot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const text = message.trim()

    if (!text) return

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        sender: 'user',
        text,
      },
    ])

    setMessage('')

    // Resposta temporária do bot
    setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now(),
          sender: 'bot',
          text: 'Recebi sua mensagem!',
        },
      ])
    }, 500)
  }

  return (
    <div className="chatbot">
      {isOpen && (
        <section className="chatbot-panel" aria-label="Conversa com o AvaliaBot">
          <header className="chatbot-header">
            <div className="chatbot-header__text">
              <h2>AvaliaBot <span>-</span></h2>
              <p>eu avalio a probabilidade dos seus cursos darem certo!</p>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar AvaliaBot"
            >
              ×
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`chatbot-message-row chatbot-message-row--${item.sender}`}
              >
                {item.sender === 'bot' && (
                  <span className="chatbot-avatar" aria-hidden="true">
                    <img src="/images/chatbot-icon.png" alt="" />
                  </span>
                )}

                <p className={`chatbot-message chatbot-message--${item.sender}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <span className="chatbot-avatar" aria-hidden="true">
              <img src="/images/chatbot-icon.png" alt="" />
            </span>

            <input
              type="text"
              placeholder="Como posso te ajudar?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </form>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir AvaliaBot"
        >
          <img src="/images/chatbot-icon.png" alt="" />
        </button>
      )}
    </div>
  )
}

export default Chatbot
