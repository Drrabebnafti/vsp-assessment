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
