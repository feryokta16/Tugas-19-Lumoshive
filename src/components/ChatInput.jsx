/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function ChatInput({ onSubmit, loading, onChange }) {
  return (
    <form
      onSubmit={onSubmit}
      className="fixed-bottom p-3 bg-primary-subtle border-top shadow"
    >
      <div className="input-group container">
        <input
          type="text"
          placeholder="Message Lumoshive AI"
          onChange={onChange}
          className="form-control border-primary"
          disabled={loading}
        />
        <button disabled={loading} type="submit" className="btn btn-primary">
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
}
