import React, { useState, useEffect } from "react";

function CommentSection({ videoId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://tokopedia-play.hop.sh/comments/${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [videoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://tokopedia-play.hop.sh/comments/${videoId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newComment, username: newUsername }),
    });

    if (response.ok) {
      setComments([
        ...comments,
        { comment: newComment, username: newUsername },
      ]);
      setNewComment("");
      setNewUsername("");
    }
  };

  return (
    <div>
      <ul className="text-white">
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.username}: </strong>
            {comment.comment}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white text-black my-[18px] px-2 rounded mt-[10px]"
      >
        add new comment
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Leave a Comment</h2>
            <input
              className="mb-2 rounded-lg shadow bg-gray-100 text-black focus:shadow-outline focus:outline-none py-1 px-2 w-full"
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <textarea
              className="mb-2 rounded-lg shadow bg-gray-100 text-black focus:shadow-outline focus:outline-none py-1 px-2 w-full"
              placeholder="Leave a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded ml-2"
                onClick={handleSubmit}
              >
                Submit Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentSection;
