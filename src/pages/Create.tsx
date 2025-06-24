import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { getNotes, saveNotes } from "../utils";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  title: z.string().max(50),
  content: z.string().max(200)
});

type FormData = z.infer<typeof schema>;

export default function Create() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const newNote = { ...data, id: uuidv4(), createdAt: new Date().toISOString() };
    const updated = [...getNotes(), newNote];
    saveNotes(updated);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Note</h1>
      <input placeholder="Title" {...register("title")} className="border w-full p-2 mb-2" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <textarea placeholder="Content" {...register("content")} className="border w-full p-2 mb-2" />
      {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}