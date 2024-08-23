const programme = {
    1: {
        "Lundi": "EF 50-60 min avec 6 x 100m en côte.",
        "Mardi": "Fractionné court : 12 x 200m à allure 3k avec 200m de récupération trottée + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire (30 min).",
        "Jeudi": "Fractionné long : 4 x 1200m à allure 10k avec 2'30'' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (75-85 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    2: {
        "Lundi": "EF 50-60 min.",
        "Mardi": "Fractionné court : 8 x 600m à allure 5k avec 1'30'' de récupération + Natation.",
        "Mercredi": "EF 45-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 5 x 1000m à allure 10k avec 2-3' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (80-90 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    3: {
        "Lundi": "EF 50-60 min avec 8 x 100m en côte.",
        "Mardi": "Fractionné court : 10 x 400m à allure 3k avec 1'30'' de récupération + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 3 x 2000m à allure 10k avec 3-4' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (85-95 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    4: {
        "Lundi": "EF 50-60 min.",
        "Mardi": "Fractionné court : 12 x 300m à allure 3k avec 100m de récupération marchée + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 6 x 800m à allure 5k avec 2' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (70-80 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    5: {
        "Lundi": "EF 45-50 min avec 6 x 100m en côte.",
        "Mardi": "Fractionné court : 8 x 500m à allure 5k avec 90'' de récupération + Natation.",
        "Mercredi": "EF 45-50 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 4 x 1000m à allure 5k avec 2-3' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Test 5 km en moins de 15 minutes.",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    6: {
        "Lundi": "EF 50-60 min avec 8 x 100m en côte.",
        "Mardi": "Fractionné court : 10 x 300m à allure 3k avec 100m de récupération + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 3 x 2000m à allure 10k avec 3-4' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (75-85 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    7: {
        "Lundi": "EF 50-60 min.",
        "Mardi": "Fractionné court : 12 x 200m à allure 3k avec 200m de récupération trottée + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 5 x 1000m à allure 10k avec 2-3' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (80-90 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    8: {
        "Lundi": "EF 50-60 min avec 6 x 100m en côte.",
        "Mardi": "Fractionné court : 8 x 600m à allure 5k avec 1'30'' de récupération + Natation.",
        "Mercredi": "EF 50-60 min + Renforcement musculaire.",
        "Jeudi": "Fractionné long : 4 x 1600m à allure 10k avec 3' de récupération.",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue (85-95 min).",
        "Dimanche": "EF ou footing de récupération (45-60 min)."
    },
    9: {
        "Lundi": "EF 45-50 min avec 6 x 100m en côte.",
        "Mardi": "Vitesse : 8 x 200m à allure 5k avec récupération complète + Natation légère.",
        "Mercredi": "EF 45-50 min + Renforcement musculaire léger.",
        "Jeudi": "Tempo run léger (15-20 min à allure 10k).",
        "Vendredi": "Repos ou natation légère.",
        "Samedi": "Sortie longue légère (60-70 min avec quelques accélérations).",
        "Dimanche": "EF 45 min."
    },
    10: {
        "Lundi": "EF 40-50 min avec 5-6 x 100m à allure 10k.",
        "Mardi": "Vitesse légère : 4 x 200m à allure 5k avec récupération complète.",
        "Mercredi": "EF 30-40 min + quelques lignes droites (100m rapides).",
        "Jeudi": "Repos ou natation légère.",
        "Vendredi": "EF 30 min très léger.",
        "Samedi": "Repos complet ou léger footing de 20 min.",
        "Dimanche": "Course de 10 km."
    }
};

let currentWeek = 1;
let currentDayIndex = 0;
const days = Object.keys(programme[currentWeek]);
let seancesDone = 0;

function renderSeance() {
    const seanceContainer = document.getElementById('seance-container');
    seanceContainer.innerHTML = ''; // Clear previous content

    const day = days[currentDayIndex];
    const seance = programme[currentWeek][day];

    const seanceCard = document.createElement('div');
    seanceCard.classList.add('seance-card');
    seanceCard.innerHTML = `<h3>${day}</h3><p>${seance}</p>`;
    seanceContainer.appendChild(seanceCard);

    // Handle swipe
    let startX;
    seanceCard.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    seanceCard.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (diffX > 50) {
            markSeance('done');
        } else if (diffX < -50) {
            markSeance('skipped');
        }
    });
}

function markSeance(status) {
    const seanceCard = document.querySelector('.seance-card');
    seanceCard.setAttribute('data-status', status);
    seancesDone++;
    document.getElementById('seances-done').value = seancesDone;

    setTimeout(() => {
        currentDayIndex = (currentDayIndex + 1) % days.length;
        renderSeance();
    }, 1000);
}

function updateWeekProgramme() {
    const weekSelect = document.getElementById('week-select');
    currentWeek = parseInt(weekSelect.value);
    const weekProgrammeDiv = document.getElementById('week-programme');

    weekProgrammeDiv.innerHTML = '';
    for (const [day, seance] of Object.entries(programme[currentWeek])) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${day}:</strong> ${seance}`;
        weekProgrammeDiv.appendChild(p);
    }
}

document.getElementById('week-select').addEventListener('change', updateWeekProgramme);

function populateWeekSelect() {
    const weekSelect = document.getElementById('week-select');
    for (const week in programme) {
        const option = document.createElement('option');
        option.value = week;
        option.text = `Semaine ${week}`;
        weekSelect.appendChild(option);
    }
}

populateWeekSelect();
updateWeekProgramme();

document.getElementById('seance-view-btn').addEventListener('click', () => {
    document.getElementById('seance-container').style.display = 'flex';
    document.getElementById('list-container').style.display = 'none';
    document.getElementById('profile-container').style.display = 'none';
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    document.getElementById('seance-container').style.display = 'none';
    document.getElementById('list-container').style.display = 'block';
    document.getElementById('profile-container').style.display = 'none';
});

document.getElementById('profile-view-btn').addEventListener('click', () => {
    document.getElementById('seance-container').style.display = 'none';
    document.getElementById('list-container').style.display = 'none';
    document.getElementById('profile-container').style.display = 'block';
});

renderSeance();
