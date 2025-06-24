import { useEffect, useState } from "react";
import { Note } from "../types";
import { getNotes, logout } from "../utils";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <div className="mb-4">
        <Link to="/create" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded">Create Note</Link>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => <NoteCard key={note.id} note={note} />)}
      </div>
    </div>
  );
}