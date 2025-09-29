import React, { useState } from "react";

const CitizenScience = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: "Ali",
            content: "Found a beautiful Neem tree 🌳",
            media: null,
            aiResult: "Neem Tree (Healthy)",
        },
        {
            id: 2,
            user: "Sumi",
            content: "Tulsi plant flowering in my garden 🌼",
            media: null,
            aiResult: "Tulsi Plant (Flowering)",
        },
    ]);

    const [newPost, setNewPost] = useState("");
    const [media, setMedia] = useState(null);
    const [aiResult, setAiResult] = useState("");

    // Simulate AI recognition
    const fakeAIRecognition = (file) => {
        if (!file) return "No plant detected";
        const keywords = ["tree", "leaf", "flower"];
        const random = keywords[Math.floor(Math.random() * keywords.length)];
        return `AI thinks this is a ${random} 🌱 (Confidence: ${Math.floor(Math.random() * 30) + 70}%)`;
    };

    const handleMedia = (e) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setMedia(preview);
            setAiResult(fakeAIRecognition(file));
        }
    };

    const handlePost = () => {
        if (newPost.trim() === "" && !media) return;
        const newEntry = {
            id: posts.length + 1,
            user: "You",
            content: newPost,
            media,
            aiResult,
        };
        setPosts([newEntry, ...posts]);
        setNewPost("");
        setMedia(null);
        setAiResult("");
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">🌍 Citizen Science</h1>
            <p className="opacity-70">
                Share your plant observations with the community. Upload a photo or video,
                write a post, and let our AI help identify the plant.
            </p>

            {/* Upload + Write Post */}
            <div className="card bg-base-200 shadow p-4">
                <h2 className="text-xl font-semibold mb-3">Create a Post</h2>

                <textarea
                    className="textarea textarea-bordered w-full mb-3"
                    placeholder="Write your observation..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />

                <input
                    type="file"
                    accept="image/*,video/*"
                    className="file-input file-input-bordered w-full mb-3"
                    onChange={handleMedia}
                />

                {media && (
                    <div className="mb-3">
                        {media.endsWith(".mp4") ? (
                            <video controls src={media} className="rounded-lg max-h-64"></video>
                        ) : (
                            <img src={media} alt="upload" className="rounded-lg max-h-64" />
                        )}
                        {aiResult && (
                            <p className="mt-2 p-2 bg-success text-success-content rounded">
                                🤖 AI Recognition: {aiResult}
                            </p>
                        )}
                    </div>
                )}

                <button className="btn btn-primary w-full" onClick={handlePost}>
                    Post
                </button>
            </div>

            {/* Community Feed */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">📰 Community Feed</h2>
                <div className="space-y-4">
                    {posts.map((p) => (
                        <div key={p.id} className="card bg-base-200 shadow p-4">
                            <h3 className="font-bold">{p.user}</h3>
                            <p>{p.content}</p>
                            {p.media && (
                                <img
                                    src={p.media}
                                    alt="post media"
                                    className="rounded-lg mt-2 max-h-64"
                                />
                            )}
                            {p.aiResult && (
                                <p className="mt-2 text-sm text-success">🤖 {p.aiResult}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CitizenScience;
