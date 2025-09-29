import React, { useState } from "react";

const Learning = () => {
    const [score, setScore] = useState(null);

    const quizQuestions = [
        {
            q: "Which insect is the most important pollinator worldwide?",
            options: ["Butterfly", "Bee", "Moth", "Beetle"],
            answer: "Bee",
        },
        {
            q: "What do pollinators mainly help plants with?",
            options: ["Growth", "Seed production", "Water absorption", "Photosynthesis"],
            answer: "Seed production",
        },
    ];

    const handleQuiz = (answer, correct) => {
        if (answer === correct) {
            setScore("✅ Correct! Great job 🌟");
        } else {
            setScore("❌ Oops! Try again.");
        }
    };

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold">📚 Learning Hub</h1>
            <p className="opacity-70">
                Discover the amazing world of pollinators through our library, stories, and fun activities.
            </p>

            {/* Pollinator Library */}
            <div className="card bg-base-200 shadow p-4">
                <h2 className="text-2xl font-semibold mb-4">🐝 Pollinator Library</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li><span className="font-bold">Bees</span> – Vital for crops like fruits and vegetables.</li>
                    <li><span className="font-bold">Butterflies</span> – Important for wildflower pollination.</li>
                    <li><span className="font-bold">Bats</span> – Help pollinate night-blooming plants like bananas.</li>
                    <li><span className="font-bold">Birds</span> – Hummingbirds are key pollinators for many flowers.</li>
                </ul>
            </div>

            {/* Mini Stories / Videos */}
            <div className="card bg-base-200 shadow p-4">
                <h2 className="text-2xl font-semibold mb-4">🎬 Mini Stories & Videos</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <iframe
                        className="w-full rounded-lg aspect-video"
                        src="https://www.youtube.com/embed/PhX3QyMRJ5k"
                        title="Pollinator Story"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="w-full rounded-lg aspect-video"
                        src="https://www.youtube.com/embed/ta154f5Rp5Y"
                        title="Bee Facts"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Quizzes / Games */}
            <div className="card bg-base-200 shadow p-4">
                <h2 className="text-2xl font-semibold mb-4">🎮 Quiz & Games</h2>
                {quizQuestions.map((q, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="font-bold">{q.q}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {q.options.map((opt, i) => (
                                <button
                                    key={i}
                                    className="btn btn-sm btn-outline"
                                    onClick={() => handleQuiz(opt, q.answer)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
                {score && <p className="mt-4 text-lg font-semibold">{score}</p>}
            </div>
        </div>
    );
};

export default Learning;
