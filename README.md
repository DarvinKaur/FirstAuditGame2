# Audit Quest: The Planning Mission

A self-contained, browser-based learning game for **ACCA Audit and Assurance — Audit Planning**. It uses plain HTML, CSS and JavaScript and is designed for GitHub Pages. No backend, database, API key, installation or build step is needed.

## Learning assumptions

- **Subject:** ACCA Audit and Assurance
- **Topic:** Audit Planning
- **Level:** ACCA Applied Skills / Audit and Assurance learners
- **Learning outcome:** Explain the purpose of audit planning; understand the entity and environment; apply materiality and risk assessment; and select appropriate audit responses.
- **Question count:** 10, including a final question using a new gift-card revenue scenario
- **Language:** English
- **Game type:** Adventure / escape-room-style sequence of audit rooms
- **Gameplay:** Read a client scenario, choose one of four answers, read feedback, then continue to the next room
- **Difficulty:** Introductory to intermediate
- **Duration:** Approximately 8–12 minutes, self-paced

## Files

```text
audit-quest/
├── index.html   # All page sections and accessible controls
├── style.css    # Layout, colour, room illustrations and responsive styling
├── script.js    # Gameplay logic and editable question bank
└── README.md    # Setup, publishing and editing guide
```

## Run locally

1. Download or clone this folder.
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge or Safari).
3. Click **Start mission**, review the instructions, and select **Enter first room**.
4. Test answer selection, feedback, Continue, pause, restart, final report and Play again.

The game is untimed by design; speed never affects the score. The Google Fonts import is optional styling; if it cannot load, the page falls back to local system fonts. The game itself runs without a network connection.

## Publish with GitHub Pages

1. Sign in to GitHub and create a repository, for example `audit-quest`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository's **root** (not inside an extra nested folder).
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then save.
7. Wait for GitHub Pages to finish publishing. Open the URL shown in Settings → Pages; it usually looks like `https://YOUR-USERNAME.github.io/audit-quest/`.

## Edit the question bank

Open `script.js` and edit the `questions` array near the top. Each question uses this shape:

```js
{
  category: "MATERIALITY",
  room: "The Materiality Chamber",
  objective: "Set a suitable materiality threshold.",
  question: "Write the question here.",
  scenario: "Optional context for the learner.",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1, // zero-based index: 0 = A, 1 = B, 2 = C, 3 = D
  explanation: "Explain why the answer is correct."
}
```

Keep four options per question for the current keyboard controls. Every question is worth 10 points when answered correctly on the first attempt; incorrect answers receive 0 points. Speed is never scored. To change the question count, add or remove question objects—the progress display and final score adapt automatically. Review explanations are included in the completion report.

## Manual test checklist

- [ ] Homepage Play button opens instructions.
- [ ] Back and Home controls return to the home screen.
- [ ] The game has no countdown timer and speed does not affect the score.
- [ ] Enter first room displays the first question and progress.
- [ ] Clicking/tapping an answer or pressing `1`–`4` selects one answer.
- [ ] Correct and incorrect feedback shows the explanation and correct answer where needed.
- [ ] Repeated clicks do not score a question more than once.
- [ ] Continue is the only way to move past the feedback.
- [ ] Pause and Resume work; Restart asks for confirmation.
- [ ] Final report shows score, correct answers, accuracy and explanations.
- [ ] Play again resets the score and question progress.
- [ ] Test at desktop width and a narrow mobile viewport; no horizontal scrolling should be needed.

## Teaching note

The questions are original study prompts designed for learning, not official ACCA exam questions. Please review them against your current syllabus, local teaching plan and applicable auditing standards before classroom use.
