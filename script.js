/*
 * AUDIT QUEST — editable question bank
 * Subject: ACCA Audit and Assurance | Topic: Audit Planning
 * Edit the questions array below to customise the lesson.
 * answer is the zero-based index of the correct option (0 = first option).
 */
const questions = [
  {
    category: "PURPOSE OF PLANNING", room: "The Planning Desk", objective: "Set the direction of the audit.",
    question: "What is the main purpose of planning an audit?",
    scenario: "You have just been assigned to audit Northstar Supplies Ltd. The team asks why a plan is needed before detailed testing begins.",
    options: ["To ensure the auditor tests every transaction", "To ensure the audit is performed effectively and efficiently", "To guarantee that the financial statements contain no errors", "To replace the need for professional judgement"], answer: 1,
    explanation: "Audit planning helps the auditor devote appropriate attention to important areas, identify potential problems, organise and manage the engagement, and select an effective audit team. It does not guarantee that every error will be found."
  },
  {
    category: "ENGAGEMENT STRATEGY", room: "The Strategy Vault", objective: "Choose the overall audit approach.",
    question: "Which document sets the overall scope, timing and direction of the audit?",
    scenario: "The audit manager is preparing the engagement before the detailed audit programme is written.",
    options: ["The overall audit strategy", "The sales ledger", "The management representation letter", "The final audit report"], answer: 0,
    explanation: "The overall audit strategy determines the scope, timing and direction of the audit and guides the development of the more detailed audit plan. The detailed plan describes the nature, timing and extent of planned procedures."
  },
  {
    category: "UNDERSTANDING THE ENTITY", room: "The Client Archive", objective: "Understand the client and its environment.",
    question: "Which action is most useful when developing an understanding of a new audit client?",
    scenario: "Northstar has recently expanded into online sales and started using a new inventory system.",
    options: ["Copy last year's audit plan without changes", "Only ask the finance director whether controls are effective", "Make enquiries, perform analytical procedures and understand the business and its environment", "Begin by selecting random invoices without learning about the business"], answer: 2,
    explanation: "The auditor obtains an understanding of the entity and its environment through procedures such as enquiries, analytical procedures, observation and inspection. This understanding helps identify and assess risks of material misstatement."
  },
  {
    category: "ANALYTICAL PROCEDURES", room: "The Numbers Lab", objective: "Spot unusual movements that may indicate risk.",
    question: "Revenue has risen by 35%, but customer orders and cash receipts have barely changed. What should the auditor do first?",
    scenario: "The movement is unusual compared with the prior year and the company's expectations.",
    options: ["Accept the increase because revenue is higher", "Investigate the unexpected relationship and consider the risk of material misstatement", "Immediately conclude that fraud has occurred", "Ignore the movement until after the audit report is signed"], answer: 1,
    explanation: "Analytical procedures can highlight unusual relationships or fluctuations. The auditor should investigate the difference, obtain corroborating evidence and assess whether it indicates a risk. An unusual movement is a warning sign, not proof of fraud."
  },
  {
    category: "MATERIALITY", room: "The Materiality Chamber", objective: "Set a suitable materiality threshold.",
    question: "Why does the auditor determine materiality during audit planning?",
    scenario: "The team needs to decide which misstatements could reasonably influence users' decisions.",
    options: ["To identify every error, however trivial", "To determine the exact amount of profit the company should earn", "To help assess risks and plan the nature, timing and extent of audit procedures", "To allow management to approve the auditor's findings"], answer: 2,
    explanation: "Materiality helps the auditor assess risks, determine the nature, timing and extent of further procedures, and evaluate misstatements found. It involves professional judgement and considers users' needs; it is not a promise to find every trivial error."
  },
  {
    category: "AUDIT RISK", room: "The Risk Observatory", objective: "Understand the components of audit risk.",
    question: "Which statement best describes inherent risk?",
    scenario: "Northstar sells high-value electronics with complex pricing and frequent product updates.",
    options: ["The risk that audit procedures fail to detect a misstatement", "The susceptibility of an assertion to a misstatement before considering related controls", "The risk that the auditor issues a report too late", "The risk that the client refuses to pay its supplier"], answer: 1,
    explanation: "Inherent risk is the susceptibility of an assertion about a transaction class, account balance or disclosure to a misstatement that could be material, individually or with other misstatements, before considering related controls. Complexity and estimation uncertainty may increase it."
  },
  {
    category: "RISK ASSESSMENT", room: "The Control Room", objective: "Respond to a weakness in internal control.",
    question: "During a walkthrough, the auditor finds that one employee can create suppliers and approve payments. What is the best planning response?",
    scenario: "The company has no documented independent review of new suppliers or payment approvals.",
    options: ["Assume the control is effective because the employee is experienced", "Remove all testing of expenses", "Assess the risk arising from the control weakness and plan appropriate further procedures", "Ask the employee to confirm that no fraud occurred and stop testing"], answer: 2,
    explanation: "Inadequate segregation of duties can increase the risk of error or fraud. The auditor should evaluate the implications for assessed risks and design appropriate responses, which may include more substantive procedures and testing relevant controls where appropriate."
  },
  {
    category: "AUDIT EVIDENCE", room: "The Evidence Store", objective: "Match audit procedures to the risk.",
    question: "The auditor is concerned that year-end inventory quantities may be overstated. Which procedure is most directly relevant?",
    scenario: "Inventory is material, and the company holds goods in a warehouse at the reporting date.",
    options: ["Attend the inventory count and perform test counts", "Read the board minutes only", "Recalculate employee holiday balances", "Send confirmations to the company's lawyers about litigation"], answer: 0,
    explanation: "Attending the physical inventory count and performing test counts can provide evidence about the existence and condition of inventory. Other procedures may be needed for valuation, rights and obligations, and completeness, depending on the assessed risks."
  },
  {
    category: "AUDIT DOCUMENTATION", room: "The Documentation Bridge", objective: "Record the audit plan clearly.",
    question: "What should the detailed audit plan normally describe?",
    scenario: "The audit senior is allocating work to team members for the inventory and revenue sections.",
    options: ["Only the final audit opinion", "The nature, timing and extent of planned risk assessment and further audit procedures", "A guarantee that the client will remain profitable", "Only the names of the directors"], answer: 1,
    explanation: "The audit plan describes the nature, timing and extent of planned risk assessment procedures and further audit procedures at the assertion level. It can be updated as the audit progresses and new information is obtained."
  },
  {
    category: "FINAL MISSION · NEW SCENARIO", room: "The Final Mission", objective: "Apply planning judgement to a new client example.",
    question: "A new client sells gift cards. Many cards were sold just before year-end, but the related goods will be delivered later. Which planning concern is most relevant?",
    scenario: "The finance team proposes recognising all gift-card sales as revenue when cash is received. Apply your audit-planning knowledge to this new example.",
    options: ["There can never be a revenue risk if cash has been received", "The auditor should ignore the issue because gift cards are prepaid", "Assess the risk that revenue is recognised before the performance obligation is satisfied, and plan procedures over the accounting treatment", "The only relevant risk is whether the cash is counterfeit"], answer: 2,
    explanation: "Cash receipt does not automatically mean revenue has been earned. Depending on the contract and applicable reporting framework, an unredeemed gift card may create a performance obligation or contract liability. The auditor should assess the risk of premature revenue recognition and plan procedures to test the accounting treatment. This new scenario checks whether you can apply planning principles beyond the earlier examples."
  }
];

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen", "instructionsScreen", "gameScreen", "pauseScreen", "completeScreen"];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let answersLog = [];
let answeredCurrent = false;
let firstAnswerRecorded = false;
let untimed = true;
let pausedFrom = "gameScreen";
let gameStarted = false;

function showScreen(id) {
  screens.forEach((screenId) => $(screenId).classList.toggle("hidden", screenId !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function startBriefing() {
  showScreen("instructionsScreen");
}
function beginMission() {
  untimed = true;
  currentIndex = 0; score = 0; correctCount = 0; answersLog = []; answeredCurrent = false; gameStarted = true;
  showScreen("gameScreen");
  renderQuestion();
}
function renderQuestion() {
  const q = questions[currentIndex];
  answeredCurrent = false;
  firstAnswerRecorded = false;
  $("roomLabel").textContent = `ROOM ${String(currentIndex + 1).padStart(2, "0")} / ${questions.length}`;
  $("progressText").textContent = `${Math.round(currentIndex / questions.length * 100)}% complete`;
  $("progressBar").style.width = `${currentIndex / questions.length * 100}%`;
  $("scoreValue").textContent = score;
  $("correctValue").textContent = correctCount;
  $("paceLabel").textContent = untimed ? "Untimed mode" : "Self-paced mode";
  $("roomNumberArt").textContent = String(currentIndex + 1).padStart(2, "0");
  $("roomTitle").textContent = q.room;
  $("roomDescription").textContent = q.objective;
  $("checklistText").textContent = "▢ Resolve the planning challenge";
  $("categoryTag").textContent = q.category;
  $("questionCount").textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  $("questionText").textContent = q.question;
  $("scenarioText").textContent = q.scenario;
  const answers = $("answers"); answers.replaceChildren();
  q.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.type = "button"; button.className = "answer-option"; button.dataset.index = String(i);
    const key = document.createElement("span"); key.className = "answer-key"; key.textContent = String(i + 1);
    const text = document.createElement("span"); text.textContent = option;
    button.append(key, text); button.addEventListener("click", () => chooseAnswer(i)); answers.append(button);
  });
  $("feedbackPanel").classList.add("hidden");
  $("feedbackPanel").classList.remove("incorrect-feedback");
  $("retryNote").classList.add("hidden");
  $("retryButton").classList.add("hidden");
}
function chooseAnswer(choice) {
  if (answeredCurrent) return;
  answeredCurrent = true;
  const q = questions[currentIndex];
  const isCorrect = choice === q.answer;
  const isFirstAttempt = !firstAnswerRecorded;
  const points = isCorrect && isFirstAttempt ? 10 : 0;
  if (isFirstAttempt) {
    firstAnswerRecorded = true;
    if (isCorrect) { score += points; correctCount += 1; }
    answersLog.push({ questionIndex: currentIndex, choice, correct: isCorrect });
  }
  [...$("answers").querySelectorAll("button")].forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add("correct");
    if (i === choice && !isCorrect) button.classList.add("incorrect");
  });
  $("scoreValue").textContent = score;
  $("correctValue").textContent = correctCount;
  $("checklistText").textContent = isCorrect ? "✓ Challenge resolved" : "↻ Review the lesson point";
  $("feedbackPanel").classList.remove("hidden");
  $("feedbackPanel").classList.toggle("incorrect-feedback", !isCorrect);
  $("feedbackIcon").textContent = isCorrect ? "✓" : "×";
  $("feedbackTitle").textContent = isCorrect ? (isFirstAttempt ? "Correct decision!" : "Correct on retry!") : "Not quite — learn from it";
  $("pointsEarned").textContent = isFirstAttempt ? (isCorrect ? `+${points} points` : "+0 points") : "Retry · no extra points";
  $("feedbackExplanation").textContent = q.explanation;
  $("retryNote").textContent = isCorrect ? "" : `Correct answer: ${q.options[q.answer]}`;
  $("retryNote").classList.toggle("hidden", isCorrect);
  $("retryButton").classList.toggle("hidden", isCorrect);
  $("continueButton").textContent = currentIndex === questions.length - 1 ? "View mission report →" : "Continue →";
  $("feedbackPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function retryQuestion() {
  if (!answeredCurrent) return;
  answeredCurrent = false;
  $("feedbackPanel").classList.add("hidden");
  [...$("answers").querySelectorAll("button")].forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
}
function continueMission() {
  if (!answeredCurrent) return;
  if (currentIndex < questions.length - 1) { currentIndex += 1; renderQuestion(); }
  else finishMission();
}
function finishMission() {
  const total = questions.length * 10;
  const accuracy = Math.round(correctCount / questions.length * 100);
  $("progressBar").style.width = "100%";
  $("completionTitle").textContent = accuracy >= 80 ? "Mission accomplished!" : "Mission complete!";
  $("completionLead").textContent = accuracy >= 80 ? "Strong work. You have shown a solid understanding of audit planning." : "You completed the mission. Review the debrief to strengthen your audit-planning judgement.";
  $("finalScore").textContent = `${score} / ${total}`;
  $("finalCorrect").textContent = `${correctCount} / ${questions.length}`;
  $("finalAccuracy").textContent = `${accuracy}%`;
  const review = $("reviewList"); review.replaceChildren();
  questions.forEach((q, i) => {
    const log = answersLog.find((entry) => entry.questionIndex === i);
    const details = document.createElement("details"); details.className = `review-item${log && !log.correct ? " missed" : ""}`;
    if (i === questions.length - 1 || (log && !log.correct)) details.open = true;
    const summary = document.createElement("summary"); summary.textContent = `${String(i + 1).padStart(2, "0")} · ${q.question}`;
    const status = document.createElement("p"); status.className = "review-status"; status.textContent = log && log.correct ? "CORRECT FIRST ANSWER" : "REVIEW THIS CONCEPT";
    const explanation = document.createElement("p"); explanation.textContent = `${q.explanation} Correct answer: ${q.options[q.answer]}`;
    details.append(summary, status, explanation); review.append(details);
  });
  showScreen("completeScreen");
}
function askRestart() {
  if (typeof $("restartDialog").showModal === "function") $("restartDialog").showModal();
  else if (window.confirm("Restart the mission? Your current score and progress will be reset.")) beginMission();
}
function restartNow() {
  $("restartDialog").close();
  if (!gameStarted) { startBriefing(); return; }
  beginMission();
}
function pauseMission() { pausedFrom = "gameScreen"; showScreen("pauseScreen"); }
function resumeMission() { showScreen(pausedFrom); }

$("playButton").addEventListener("click", startBriefing);
$("headerHome").addEventListener("click", () => showScreen("homeScreen"));
$("backHomeButton").addEventListener("click", () => showScreen("homeScreen"));
$("beginButton").addEventListener("click", beginMission);
$("continueButton").addEventListener("click", continueMission);
$("retryButton").addEventListener("click", retryQuestion);
$("pauseButton").addEventListener("click", pauseMission);
$("resumeButton").addEventListener("click", resumeMission);
$("restartButton").addEventListener("click", askRestart);
$("pauseRestartButton").addEventListener("click", askRestart);
$("cancelRestart").addEventListener("click", () => $("restartDialog").close());
$("confirmRestart").addEventListener("click", restartNow);
$("homeFromResults").addEventListener("click", () => showScreen("homeScreen"));
$("playAgainButton").addEventListener("click", beginMission);
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
  if (!$ ("gameScreen").classList.contains("hidden") && !answeredCurrent && /^[1-4]$/.test(event.key)) {
    const button = $("answers").querySelectorAll("button")[Number(event.key) - 1]; if (button) button.click();
  }
  if (!$ ("gameScreen").classList.contains("hidden") && answeredCurrent && event.key === "Enter") $("continueButton").click();
});
