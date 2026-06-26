
// ============================================
// 1. HAMBURGER MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// close nav when any link is clicked
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
  });
});


// ============================================
// 2. DARK MODE TOGGLE
// ============================================

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


// ============================================
// 3. HERO TYPING ANIMATION
// ============================================

const typedEl   = document.getElementById('typed-text');
const phrases   = ['Feel Every Goal.', 'Own Every Wicket.', 'Follow Your Club.', 'Love The Sport.'];
let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

function typeEffect() {
  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      // wait then start deleting
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

typeEffect();


// ============================================
// 4. SEARCH + FILTER TABS
// ============================================

const searchInput  = document.getElementById('js-search');
const searchClear  = document.getElementById('searchClear');
const noResults    = document.getElementById('no-results');
const allCards     = document.querySelectorAll('#cricket-cards .card, #football-cards .card');
const tabBtns      = document.querySelectorAll('.tab-btn');

const cricketSection  = document.getElementById('cricket-section');
const footballSection = document.getElementById('football-section');

let currentFilter = 'all'; // keeps track of active tab

// search input
searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase().trim();

  // show/hide clear button
  searchClear.classList.toggle('hidden', searchText === '');

  filterAndSearch(searchText, currentFilter);
});

// clear button
searchClear.addEventListener('click', function() {
  searchInput.value = '';
  searchClear.classList.add('hidden');
  filterAndSearch('', currentFilter);
  searchInput.focus();
});

// tab buttons
tabBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // update active tab style
    tabBtns.forEach(function(b) { b.classList.remove('is-active'); });
    btn.classList.add('is-active');

    currentFilter = btn.getAttribute('data-filter');
    filterAndSearch(searchInput.value.toLowerCase().trim(), currentFilter);
  });
});

// main filter function — handles both search and tab together
function filterAndSearch(searchText, filter) {
  let visibleCount = 0;

  // show or hide whole cricket/football sections based on tab
  if (filter === 'cricket') {
    cricketSection.style.display  = 'block';
    footballSection.style.display = 'none';
  } else if (filter === 'football') {
    cricketSection.style.display  = 'none';
    footballSection.style.display = 'block';
  } else {
    cricketSection.style.display  = 'block';
    footballSection.style.display = 'block';
  }

  // now apply search text on visible cards
  allCards.forEach(function(card) {
    const sport     = card.getAttribute('data-sport');
    const name      = card.getAttribute('data-name');
    const matchTab  = filter === 'all' || sport === filter;
    const matchSearch = name.includes(searchText);

    if (matchTab && matchSearch) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // show no-results if nothing matched
  noResults.classList.toggle('hidden', !(visibleCount === 0 && searchText !== ''));
}


// ============================================
// 5. LIKE BUTTONS
// ============================================

document.querySelectorAll('.js-like').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const countSpan  = btn.querySelector('.like-count');
    let count        = parseInt(countSpan.textContent);

    if (btn.classList.contains('is-liked')) {
      btn.classList.remove('is-liked');
      countSpan.textContent = count - 1;
    } else {
      btn.classList.add('is-liked');
      countSpan.textContent = count + 1;
    }
  });
});


// ============================================
// 6. ANIMATED STAT COUNTERS
// ============================================

const counters = document.querySelectorAll('.js-counter');

const counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

counters.forEach(function(counter) {
  counterObserver.observe(counter);
});

function animateCounter(el) {
  const target   = parseInt(el.getAttribute('data-target'));
  const duration = 1500;
  const step     = target / (duration / 16);
  let current    = 0;

  const timer = setInterval(function() {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}


// ============================================
// 7. SPORTS QUIZ
// ============================================

const questions = [
  {
    q: 'Who holds the record for the most international centuries in cricket?',
    options: ['Ricky Ponting', 'Virat Kohli', 'Sachin Tendulkar', 'Brian Lara'],
    answer: 2
  },
  {
    q: 'Which country has won the most FIFA World Cups?',
    options: ['Germany', 'Argentina', 'France', 'Brazil'],
    answer: 3
  },
  {
    q: 'How many Ballon d\'Or awards has Lionel Messi won?',
    options: ['6', '7', '8', '5'],
    answer: 2
  },
  {
    q: 'Which Indian cricketer is known as "Captain Cool"?',
    options: ['Virat Kohli', 'Rohit Sharma', 'MS Dhoni', 'Sourav Ganguly'],
    answer: 2
  },
  {
    q: 'In which year did India win the Cricket World Cup under MS Dhoni?',
    options: ['2007', '2011', '2013', '2015'],
    answer: 1
  }
];

let currentQ  = 0;
let score     = 0;
let answered  = false;

const quizBox      = document.getElementById('quiz-box');
const quizResult   = document.getElementById('quiz-result');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions  = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNext     = document.getElementById('quiz-next');
const quizCount    = document.getElementById('quiz-count');
const quizProgress = document.getElementById('quiz-progress');
const quizRestart  = document.getElementById('quiz-restart');
const resultEmoji  = document.getElementById('result-emoji');
const resultTitle  = document.getElementById('result-title');
const resultScore  = document.getElementById('result-score');

function loadQuestion() {
  answered = false;
  const q  = questions[currentQ];

  quizCount.textContent     = 'Question ' + (currentQ + 1) + ' of ' + questions.length;
  quizQuestion.textContent  = q.q;
  quizProgress.style.width  = ((currentQ + 1) / questions.length * 100) + '%';
  quizFeedback.classList.add('hidden');
  quizFeedback.className    = 'quiz-feedback hidden';
  quizNext.classList.add('hidden');
  quizOptions.innerHTML     = '';

  q.options.forEach(function(option, i) {
    const btn = document.createElement('button');
    btn.className   = 'quiz-option-btn';
    btn.textContent = option;
    btn.addEventListener('click', function() { selectAnswer(i, btn); });
    quizOptions.appendChild(btn);
  });
}

function selectAnswer(selected, btnEl) {
  if (answered) return;
  answered = true;

  const correct = questions[currentQ].answer;
  const allOpts = quizOptions.querySelectorAll('.quiz-option-btn');

  // disable all buttons
  allOpts.forEach(function(b) { b.disabled = true; });

  // highlight correct and wrong
  allOpts[correct].classList.add('correct');

  if (selected === correct) {
    score++;
    quizFeedback.textContent  = '✅ Correct! Well done!';
    quizFeedback.className    = 'quiz-feedback correct-msg';
  } else {
    btnEl.classList.add('wrong');
    quizFeedback.textContent  = '❌ Not quite! The correct answer was: ' + questions[currentQ].options[correct];
    quizFeedback.className    = 'quiz-feedback wrong-msg';
  }

  quizFeedback.classList.remove('hidden');
  quizNext.classList.remove('hidden');

  // if last question change button text
  if (currentQ === questions.length - 1) {
    quizNext.textContent = 'See Results 🏆';
  } else {
    quizNext.textContent = 'Next Question →';
  }
}

quizNext.addEventListener('click', function() {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add('hidden');
  quizResult.classList.remove('hidden');

  resultScore.textContent = 'You scored ' + score + ' out of ' + questions.length;

  if (score === 5) {
    resultEmoji.textContent = '🏆';
    resultTitle.textContent = 'Perfect Score! Legend!';
  } else if (score >= 3) {
    resultEmoji.textContent = '⭐';
    resultTitle.textContent = 'Great Job! Sports Fan!';
  } else {
    resultEmoji.textContent = '📚';
    resultTitle.textContent = 'Keep Learning! You\'ll get there!';
  }
}

quizRestart.addEventListener('click', function() {
  currentQ = 0;
  score    = 0;
  quizResult.classList.add('hidden');
  quizBox.classList.remove('hidden');
  loadQuestion();
});

// start quiz on page load
loadQuestion();


// ============================================
// 8. CONTACT FORM
// ============================================

const sendBtn    = document.getElementById('sendBtn');
const nameInput  = document.getElementById('js-name');
const emailInput = document.getElementById('js-email');
const msgInput   = document.getElementById('js-msg');
const successMsg = document.getElementById('msg-success');

sendBtn.addEventListener('click', function() {
  const name  = nameInput.value.trim();
  const email = emailInput.value.trim();
  const msg   = msgInput.value.trim();

  if (name === '' || msg === '') {
    alert('Please fill in your name and message!');
    return;
  }

  successMsg.classList.remove('hidden');
  nameInput.value  = '';
  emailInput.value = '';
  msgInput.value   = '';

  setTimeout(function() {
    successMsg.classList.add('hidden');
  }, 4000);
});


// ============================================
// 9. SCROLL FADE-IN
// ============================================

const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(function(el) { fadeObserver.observe(el); });


// ============================================
// 10. BACK TO TOP BUTTON
// ============================================

const backTop = document.getElementById('backTop');

window.addEventListener('scroll', function() {
  backTop.classList.toggle('hidden', window.scrollY < 300);
});

backTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});