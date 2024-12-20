// Start Training Button
document.querySelector('.start-training').addEventListener('click', () => {
    alert('Connecting your brainlink dual device!');
});

// Personalization Popup
const personalizeButton = document.querySelector('.personalize-button');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close-popup');

personalizeButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Mood Buttons
const moodMeditations = {
    "Calm": ["Relaxing Breeze 🌬️", "Ocean Waves 🌊", "Calm Your Mind 🧘‍♀️"],
    "Sad": ["Healing Tunes 🎶", "Heart Soother 💖", "Mood Lifter 🌈"],
    "Tired": ["Recharge & Revive ⚡", "Quick Energy Boost 🌟", "Deep Rest 🌜"],
    "Anxious": ["Anxiety Relief 🌱", "Ground Yourself 🌳", "Soothing Serenity 🌅"],
    "Unsure": ["Mind Clarity 🔍", "Positive Energy 🌞", "Inner Focus 🎯"],
    "Panicked": ["Panic Calmer 🌬️", "Emergency Relaxation 🛑", "Feel Grounded 🌎"]
};

document.querySelectorAll('.mood').forEach((button) => {
    button.addEventListener('click', () => {
        const mood = button.textContent.trim().split(' ')[0];
        const recommendations = moodMeditations[mood] || [];
        
        const recommendationsSection = document.querySelector('.recommended-meditations');
        recommendationsSection.innerHTML = `
            <h2>${mood} Meditations</h2>
            <div class="slider">
                ${recommendations.map(med => `<div class="card">${med}</div>`).join('')}
            </div>
        `;
        popup.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".horizontal-cards .card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        window.location.href = "therapy.html";
      });
    });
  });