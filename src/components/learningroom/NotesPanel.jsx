import React, { useState } from "react";

function NotesPanel() {
  const [notes, setNotes] = useState("");

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-2">Session Notes</h3>

      <textarea
        className="w-full border p-2 rounded"
        rows="6"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}

export default NotesPanel;