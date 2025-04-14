export async function submitHighscore({ name, guesses, time, word }) {
    const res = await fetch("/highscores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, guesses, time, word }),
    });

    if (!res.ok) throw new Error("Failed to submit score");
}
