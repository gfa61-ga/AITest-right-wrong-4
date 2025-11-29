const chapters = [
  {num:1, title:"Εισαγωγή στην ΤΝ"},
  {num:2, title:"Τεχνολογίες 4ης Βιομηχανικής"},
  {num:3, title:"Δεδομένα και ΤΝ"},
  {num:4, title:"Θεωρητικά Θεμέλια"},
  {num:5, title:"Μηχανική Μάθηση"},
  {num:6, title:"Βαθιά Μάθηση"},
  {num:7, title:"Φυσική Γλώσσα"},
  {num:8, title:"Ενισχυτική Μάθηση"},
  {num:9, title:"Ρομποτική"},
  {num:10, title:"Ηθική και Ευθύνη"},
  {num:11, title:"Big Data"},
  {num:12, title:"Υπολογιστική Όραση"},
  {num:13, title:"Διαλογική ΤΝ"},
  {num:14, title:"Μέλλον ΤΝ"},
  {num:15, title:"Υλοποίηση Συστημάτων"}
];

window.onload = () => {
  const container = document.getElementById('chapters-container');
  chapters.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.onclick = () => startQuiz(ch.num);
    card.innerHTML = `
      <div class="chapter-number">Κεφάλαιο ${ch.num}</div>
      <div class="chapter-title">${ch.title}</div>
      <div class="chapter-info">
        <span>📝 Όλες οι ερωτήσεις</span>
      </div>
    `;
    container.appendChild(card);
  });

  initializeChapterSelector();
};

function initializeChapterSelector() {
  const grid = document.getElementById('chapter-selector-grid');
  grid.innerHTML = '';
  chapters.forEach(ch => {
    const item = document.createElement('div');
    item.className = 'chapter-selector-item';
    item.onclick = () => selectChapterFor20(ch.num, item);
    item.innerHTML = `
      <div class="chapter-selector-num">${ch.num}</div>
      <div class="chapter-selector-title">${ch.title}</div>
    `;
    grid.appendChild(item);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
  document.getElementById(tabName + '-tab').classList.add('active');
  event.target.classList.add('active');
}

function startQuiz(num) {
  window.location = `quiz.html?chapter=${num}`;
}

function startRandomQuiz(count) {
  window.location = `quiz.html?random=${count}`;
}

function show20QuestionSelector() {
  document.getElementById('chapter-selector-modal').classList.remove('hidden');
}

function closeChapterSelector() {
  document.getElementById('chapter-selector-modal').classList.add('hidden');
  document.querySelectorAll('.chapter-selector-item').forEach(item => {
    item.classList.remove('selected');
  });
}

function selectChapterFor20(chapterNum, element) {
  document.querySelectorAll('.chapter-selector-item').forEach(item => {
    item.classList.remove('selected');
  });
  element.classList.add('selected');

  setTimeout(() => {
    closeChapterSelector();
    window.location = `quiz.html?random20=${chapterNum}`;
  }, 300);
}
