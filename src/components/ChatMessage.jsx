/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Markdown from "react-markdown";

// eslint-disable-next-line react/prop-types
export default function ChatMessage({ message, query }) {
  return (
    <div className="container chat-message-cstm">
      {/* ini adalah user Question */}
      <div className="d-flex justify-content-end chat-message-cstm mb-3">
        <div className="p-3 border shadow-sm rounded-cstm bg-primary-subtle cstm ">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question :</strong> {query}
        </div>
      </div>
      {/* ini adalah AI Answer */}

      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm rounded-ai bg-primary-subtle">
          <i className="bi bi-robot me-2"></i>
          <strong>Answer :</strong> {message}
          <div>
            <Markdown>{message}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
