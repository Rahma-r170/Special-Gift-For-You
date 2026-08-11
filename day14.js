let currentPasscode = "";
const correctPasscode = "284";

function addNumber(num) {
    if (currentPasscode.length < 4) {
        currentPasscode += num;
        updateInputs();
    }
}

function deleteNumber() {
    currentPasscode = currentPasscode.slice(0, -1);
    updateInputs();
}

function updateInputs() {
    for(let i = 1; i <= 4; i++) {
        document.getElementById('p' + i).value = currentPasscode[i-1] ? "•" : "";
    }

    if (currentPasscode === correctPasscode) {
        document.getElementById('passcode-screen').classList.remove('active');
        showPage1();
    }
}

function checkPasscode() {
    if (currentPasscode === correctPasscode) {
        document.getElementById('passcode-screen').classList.remove('active');
        showPage1();
    } else {
        currentPasscode = "";
        updateInputs();
    }
}

function showPage1() {
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <div class="gift-card active">
            <div class="circle-img"><img src="cat2.jpg"></div>
            <h1>I made something amazing for you!</h1>
            <p>Do you want to know what it is?</p>
            <button class="action-btn" onclick="showPage2()">yes</button>
        </div>
    `;
}

function showPage2() {
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <div class="gift-card active">
            <div class="circle-img"><img src="cat1.jpg"></div>
            <h2>Hello Bestie!</h2>
            <p>إلى صديقتي وأعز أصدقائي.. أتمنى أن تبقى ابتسامتك ترافق أيامك دائماً، وأن يرزقك الله من السعادة أكثر مما تتمنين. شكراً لأنك الشخص الذي يجعل كل لحظة أجمل بمجرد وجودك. أسأل الله أن يديم صداقتنا، ويكتب لنا ذكريات أجمل في كل مرة نلتقي فيها. أحبك كثيراً وأتمنى أن تبقى دائماً معي</p>
            <button class="action-btn" onclick="showPage3()">Next</button>
        </div>
    `;
}

function showPage3() {
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <div class="gift-card active">
            <h2>I love you so much!</h2>
            <div style="display:flex; justify-content:center; gap:10px; margin: 15px 0;">
                <img src="cat4.jpg" style="width:120px; height:120px; border-radius:50%; object-fit:cover;">
            </div>
            <button class="heart-btn" onclick="showHearts()">❤️</button>
            <p>28/4/2026</p>
        </div>
    `;
}

function showHearts() {
    for(let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}