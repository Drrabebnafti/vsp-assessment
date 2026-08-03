// =============================
// VSP Assessment Questions
// =============================

const values = [

{
trait:"Integrity",
question:"I always act with honesty, even when no one is watching."
},

{
trait:"Service",
question:"Helping others gives meaning to my life."
},

{
trait:"Learning",
question:"I actively seek new knowledge and enjoy learning throughout my life."
},

{
trait:"Excellence",
question:"I always strive to produce work of the highest quality."
},

{
trait:"Responsibility",
question:"I take ownership of my actions and decisions."
},

{
trait:"Innovation",
question:"I enjoy creating new ideas and improving existing solutions."
},

{
trait:"Respect",
question:"I treat every person with respect regardless of their background."
},

{
trait:"Collaboration",
question:"I enjoy working with others toward a common goal."
},

{
trait:"Perseverance",
question:"I continue working toward my goals even when facing challenges."
},

{
trait:"Growth",
question:"I continuously look for opportunities to improve myself."
}

];

const strengths = [

{
trait:"Analytical Thinking",
question:"I enjoy solving complex problems."
},

{
trait:"Leadership",
question:"People often ask me for advice or guidance."
},

{
trait:"Creativity",
question:"I generate new ideas easily."
},

{
trait:"Communication",
question:"I express my ideas clearly."
},

{
trait:"Organization",
question:"I keep my work organized and structured."
},

{
trait:"Attention to Detail",
question:"I notice small details that others often miss."
},

{
trait:"Learning Agility",
question:"I learn new skills quickly."
},

{
trait:"Perseverance",
question:"I always finish what I start."
},

{
trait:"Teamwork",
question:"I enjoy collaborating with other people."
},

{
trait:"Decision Making",
question:"I make decisions confidently."
}

];

const passions = [

{
trait:"Teaching",
question:"I enjoy teaching other people."
},

{
trait:"Technology",
question:"I enjoy learning about technology."
},

{
trait:"Research",
question:"I enjoy scientific research."
},

{
trait:"Entrepreneurship",
question:"I enjoy building businesses or projects."
},

{
trait:"Writing",
question:"I enjoy writing articles or content."
},

{
trait:"Helping Others",
question:"Helping people motivates me."
},

{
trait:"Public Speaking",
question:"I enjoy speaking in front of an audience."
},

{
trait:"Content Creation",
question:"I enjoy creating digital content."
},

{
trait:"Reading",
question:"Reading inspires me."
},

{
trait:"Innovation",
question:"I enjoy creating innovative solutions."
}

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

        let html=`<p>${index+1}. ${question.question}</p>`;

        for(let i=1;i<=5;i++){

            html += `
            <label>
            
            <input
            type="radio"
            name="${prefix}${index}"
            value="${i}"
            required>
            
            <span>${i}</span>
            
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
            name: question.trait,
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
            name: question.trait,
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
            name: question.trait,
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
