export async function submitHighscore({ name, guesses, time }) {
    const res = await fetch("/api/highscore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, guesses, time }),
    });

    if (!res.ok) throw new Error("Failed to submit score");
}
