'use client'

import { useState } from 'react'

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        Give Feedback
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 max-w-2xl w-full shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              ✕
            </button>

            {/* Iframe */}
            <iframe
              src="https://feedbackgrove.com/feedback/codesmart?theme=dark&template=standard"
              width="100%"
              height="400"
              style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }}
              title="FeedbackGrove Widget"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default FeedbackPopup
