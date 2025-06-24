import { Link } from "react-router-dom";
import { Note } from "../types";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="text-sm text-gray-500">{new Date(note.createdAt).toLocaleString()}</p>
      <Link to={`/edit/${note.id}`} className="text-blue-500 mt-2 inline-block">Edit</Link>
    </div>
  );
}