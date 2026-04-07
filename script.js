// 1. Auto-Changing Hero Background
const hero = document.querySelector('.hero');
const bgImages = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', // Paris
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c', // Dubai
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb'  // Canyon
];
let bgIndex = 0;

setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    hero.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
}, 5000);

// 2. Auto-Changing Reviews
const reviews = [
    { text: "Best visa consultancy in Tikamgarh! Got my Italy visa in 20 days.", author: "- Amit Yadav" },
    { text: "Very professional team and fast processing for work permits.", author: "- Suman Singh" },
    { text: "100% genuine work. Highly recommended for AAZ Visa Export.", author: "- Vikram Rathore" }
];
let reviewIndex = 0;

setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    document.getElementById('review-text').innerText = `"${reviews[reviewIndex].text}"`;
    document.getElementById('review-author').innerText = reviews[reviewIndex].author;
}, 4000);

// 3. Form Submission
document.getElementById('visaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Success! Your data has been sent to info.aazvisa@gmail.com. Downloading your receipt...");
    // Yahan Receipt Download ka code add kiya ja sakta hai
});

function checkAdmin() {
    const pass = document.getElementById('adminPass').value;
    const correctPass = "AAZ@2026"; // Aap ise badal sakte hain

    if (pass === correctPass) {
        document.getElementById('admin-auth').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        alert("Welcome Back, Sir!");
    } else {
        alert("Wrong Password! Access Denied.");
    }
}

// Password Security
const SECRET_PASS = "Abhishek@AAZ"; // Apna password yahan set karein

function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function validateLogin() {
    const input = document.getElementById('adminPassword').value;
    if (input === SECRET_PASS) {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'flex';
        // Live counter start
        startLiveStats();
    } else {
        alert("Invalid Password!");
    }
}

function logout() {
    document.getElementById('adminPanel').style.display = 'none';
}

// Tab Switching
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById('tab-' + tabName).style.display = 'block';
}

// Demo Live Stats System
function startLiveStats() {
    // Ye real data ki jagah abhi random numbers dikhayega
    setInterval(() => {
        let randomLive = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        document.getElementById('liveNow').innerText = randomLive;
    }, 3000);
}
