import { useAtom } from "jotai";
import React from "react";
import { descriptionAtom, titleAtom } from "../store";

const PostForm = ({ onPostCreate }) => {
    const [title, setTitle] = useAtom(titleAtom);
    const [content, setContent] = useAtom(descriptionAtom);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onPostCreate({ title, content }); // Pass title and content to parent
            setTitle(""); // Clear title field
            setContent(""); // Clear content field
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            {/* Title Field */}
            <div className="mb-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            {/* Content Field */}
            <div className="mb-2">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full p-2 border rounded"
                    rows={3}
                    required></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                Post
            </button>
        </form>
    );
};

export default PostForm;
