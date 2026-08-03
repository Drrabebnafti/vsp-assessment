// =============================
// VSP Assessment Questions
// =============================

const values = [
  "I always act with honesty, even when no one is watching.",
  "Helping others gives meaning to my life.",
  "I enjoy learning new things every day.",
  "I always try to do my best.",
  "I take responsibility for my actions.",
  "I enjoy creating new ideas.",
  "I respect everyone regardless of their background.",
  "I enjoy working with others.",
  "I never give up when facing difficulties.",
  "I always look for opportunities to grow."
];

const strengths = [
  "I enjoy solving complex problems.",
  "People often ask me for advice.",
  "I generate creative ideas easily.",
  "I communicate my ideas clearly.",
  "I stay organized in my work.",
  "I pay attention to small details.",
  "I learn new skills quickly.",
  "I always finish what I start.",
  "I enjoy working in teams.",
  "I make decisions confidently."
];

const passions = [
  "I enjoy teaching others.",
  "I love learning about technology.",
  "I enjoy scientific research.",
  "I like creating businesses or projects.",
  "I enjoy writing articles or content.",
  "Helping people motivates me.",
  "I enjoy speaking in front of people.",
  "I like creating digital content.",
  "Reading inspires me.",
  "I enjoy building innovative solutions."
];

// =============================
// Generate Questions
// =============================

const container = document.getElementById("questions");

createSection("💎 Values", values, "value");
createSection("💪 Strengths", strengths, "strength");
createSection("❤️ Passions", passions, "passion");

function createSection(title, questions, prefix){

    const section = document.createElement("div");

    section.className = "section";

    section.innerHTML = `<h2>${title}</h2>`;

    questions.forEach((question,index)=>{

        const div=document.createElement("div");

        div.className="question";

        let html=`<p>${index+1}. ${question}</p>`;

        for(let i=1;i<=5;i++){

            html+=`
            <label>

            <input
            type="radio"
            name="${prefix}${index}"
            value="${i}"
            required>

            ${i}

            </label>
            `;

        }

        div.innerHTML=html;

        section.appendChild(div);

    });

    container.appendChild(section);

}

// Calculate Results

document.getElementById("calculate").addEventListener("click", function () {

    let valueScores = [];
    let strengthScores = [];
    let passionScores = [];

    // Values
    values.forEach((question, index) => {
        const selected = document.querySelector(`input[name="value${index}"]:checked`);

        if (!selected) {
            alert("Please answer all the Values questions.");
            return;
        }

        valueScores.push({
            name: question,
            score: parseInt(selected.value)
        });
    });

    // Strengths
    strengths.forEach((question, index) => {
        const selected = document.querySelector(`input[name="strength${index}"]:checked`);

        if (!selected) {
            alert("Please answer all the Strengths questions.");
            return;
        }

        strengthScores.push({
            name: question,
            score: parseInt(selected.value)
        });
    });

    // Passions
    passions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="passion${index}"]:checked`);

        if (!selected) {
            alert("Please answer all the Passions questions.");
            return;
        }

        passionScores.push({
            name: question,
            score: parseInt(selected.value)
        });
    });

    // Sort descending
    valueScores.sort((a,b)=>b.score-a.score);
    strengthScores.sort((a,b)=>b.score-a.score);
    passionScores.sort((a,b)=>b.score-a.score);

    // Top 5
    const topValues = valueScores.slice(0,5);
    const topStrengths = strengthScores.slice(0,5);
    const topPassions = passionScores.slice(0,5);

    // Display Results
    document.getElementById("results").innerHTML = `

        <h2>Your Results</h2>

        <h3>💎 Top 5 Values</h3>

        <ul>
            ${topValues.map(v=>`<li>${v.name}</li>`).join("")}
        </ul>

        <h3>💪 Top 5 Strengths</h3>

        <ul>
            ${topStrengths.map(v=>`<li>${v.name}</li>`).join("")}
        </ul>

        <h3>❤️ Top 5 Passions</h3>

        <ul>
            ${topPassions.map(v=>`<li>${v.name}</li>`).join("")}
        </ul>

    `;

});
