// ═══════════════════════════════════════
// POLYMATH OS 3D - INTERACTIVE LEARNING
// ═══════════════════════════════════════

/* ═══════════════════════════════════════
   DATA: STAGES (18 stages across 6 faces)
   ═══════════════════════════════════════ */
const stagesData = {
  front: [
    {
      id: 1,
      number: "Этап 1",
      title: "Rust Basics",
      description:
        "Изучение основ синтаксиса Rust: переменные, типы данных, функции и базовые конструкции.",
      goals: [
        "Установка Rust и Cargo",
        "Понимание изменяемых и неизменяемых переменных",
        "Базовые типы данных (i32, String, bool)",
        "Создание функций и работа с return",
      ],
      resources: [
        {
          name: "The Rust Book - Глава 1-3",
          url: "https://doc.rust-lang.org/book/ch01-00-getting-started.html",
        },
        {
          name: "Rust By Example",
          url: "https://doc.rust-lang.org/rust-by-example/",
        },
        {
          name: "Rustlings (упражнения)",
          url: "https://github.com/rust-lang/rustlings",
        },
      ],
      time: "3-5 дней",
    },
    {
      id: 2,
      number: "Этап 2",
      title: "Ownership & Borrowing",
      description:
        "Философия владения памятью в Rust. Borrow checker, ссылки и время жизни.",
      goals: [
        "Понимание концепции Ownership",
        "Работа с Borrowing (& и &mut)",
        "Правила заимствования",
        "Slices и их применение",
      ],
      resources: [
        {
          name: "Rust Book - Глава 4",
          url: "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html",
        },
        {
          name: "Visual Guide to Rust",
          url: "https://qiita.com/tatsuya6502/items/3a2f0e5b5e5e5e5e5e5e",
        },
      ],
      time: "5-7 дней",
    },
    {
      id: 3,
      number: "Этап 3",
      title: "Pattern Matching",
      description:
        "Мощный инструмент сопоставления с образцом. match, if let, while let.",
      goals: [
        "Синтаксис match выражений",
        "if let и while let",
        "Деструктуризация структур и enum",
        "Guard clauses в match",
      ],
      resources: [
        {
          name: "Rust Book - Глава 6",
          url: "https://doc.rust-lang.org/book/ch06-00-enums.html",
        },
        {
          name: "Pattern Matching Guide",
          url: "https://doc.rust-lang.org/book/ch18-00-patterns.html",
        },
      ],
      time: "3-4 дня",
    },
  ],
  back: [
    {
      id: 4,
      number: "Этап 4",
      title: "Structs & Enums",
      description:
        "Создание собственных типов данных. Методы, ассоциированные функции, enum с данными.",
      goals: [
        "Определение структур",
        "Методы и impl блоки",
        "Enum с вариантами данных",
        "Option и Result типы",
      ],
      resources: [
        {
          name: "Rust Book - Глава 5-6",
          url: "https://doc.rust-lang.org/book/ch05-00-structs.html",
        },
        {
          name: "Rust Standard Library",
          url: "https://doc.rust-lang.org/std/",
        },
      ],
      time: "4-6 дней",
    },
    {
      id: 5,
      number: "Этап 5",
      title: "Error Handling",
      description:
        "Обработка ошибок через Result и panic. Создание собственных типов ошибок.",
      goals: [
        "Result<T, E> и обработка ошибок",
        "Оператор ? для propagation",
        "Создание custom error типов",
        "panic! vs Result",
      ],
      resources: [
        {
          name: "Rust Book - Глава 9",
          url: "https://doc.rust-lang.org/book/ch09-00-error-handling.html",
        },
        {
          name: "Thiserror crate",
          url: "https://github.com/dtolnay/thiserror",
        },
      ],
      time: "3-5 дней",
    },
    {
      id: 6,
      number: "Этап 6",
      title: "Traits & Generics",
      description:
        "Абстракции и полиморфизм. Обобщённое программирование в Rust.",
      goals: [
        "Создание и использование traits",
        "Trait bounds",
        "Generics в функциях и структурах",
        "Default methods и trait objects",
      ],
      resources: [
        {
          name: "Rust Book - Глава 10",
          url: "https://doc.rust-lang.org/book/ch10-00-generics.html",
        },
        {
          name: "Rust Traits Guide",
          url: "https://doc.rust-lang.org/book/ch10-02-traits.html",
        },
      ],
      time: "5-7 дней",
    },
  ],
  right: [
    {
      id: 7,
      number: "Этап 7",
      title: "WebAssembly Intro",
      description: "Введение в WebAssembly. Что такое WASM и зачем он нужен.",
      goals: [
        "Понимание архитектуры WASM",
        "Компиляция Rust в WebAssembly",
        "Базовые типы WASM",
        "Инструменты: wasm-pack, cargo-generate",
      ],
      resources: [
        {
          name: "Rust and WebAssembly Book",
          url: "https://rustwasm.github.io/docs/book/",
        },
        { name: "WebAssembly.org", url: "https://webassembly.org/" },
        { name: "wasm-pack", url: "https://rustwasm.github.io/wasm-pack/" },
      ],
      time: "4-6 дней",
    },
    {
      id: 8,
      number: "Этап 8",
      title: "wasm-bindgen",
      description:
        "Мост между Rust и JavaScript. Генерация биндингов для взаимодействия.",
      goals: [
        "Настройка wasm-bindgen",
        "Экспорт функций из Rust в JS",
        "Импорт JS функций в Rust",
        "Работа с DOM через wasm-bindgen",
      ],
      resources: [
        {
          name: "wasm-bindgen Guide",
          url: "https://rustwasm.github.io/wasm-bindgen/",
        },
        {
          name: "Examples",
          url: "https://rustwasm.github.io/wasm-bindgen/examples/hello-world.html",
        },
      ],
      time: "5-7 дней",
    },
    {
      id: 9,
      number: "Этап 9",
      title: "JS-Rust Integration",
      description:
        "Практическая интеграция. Оптимизация JavaScript кода через Rust.",
      goals: [
        "Передача сложных данных (JSON)",
        "Асинхронные вызовы",
        "Профилирование производительности",
        "Реальные кейсы оптимизации",
      ],
      resources: [
        { name: "Yew Framework", url: "https://yew.rs/" },
        { name: "Trunk (WASM bundler)", url: "https://trunkrs.dev/" },
      ],
      time: "6-8 дней",
    },
  ],
  left: [
    {
      id: 10,
      number: "Этап 10",
      title: "Tauri Setup",
      description:
        "Создание десктопных приложений с Tauri. Архитектура и настройка.",
      goals: [
        "Установка Tauri CLI",
        "Создание первого приложения",
        "Конфигурация tauri.conf.json",
        "Понимание архитектуры (Rust backend + JS frontend)",
      ],
      resources: [
        { name: "Tauri Official Docs", url: "https://v2.tauri.app/" },
        {
          name: "Tauri Quick Start",
          url: "https://v2.tauri.app/start/quickstart/",
        },
        { name: "Tauri GitHub", url: "https://github.com/tauri-apps/tauri" },
      ],
      time: "3-5 дней",
    },
    {
      id: 11,
      number: "Этап 11",
      title: "Tauri IPC",
      description:
        "Межпроцессное взаимодействие. Команды и события между frontend и backend.",
      goals: [
        "Создание Rust команд (commands)",
        "Вызов команд из JavaScript",
        "Events и listen/emit",
        "Передача сложных данных",
      ],
      resources: [
        {
          name: "Tauri IPC Guide",
          url: "https://v2.tauri.app/concept/inter-process-communication/",
        },
        {
          name: "Commands",
          url: "https://v2.tauri.app/guide/backend/commands/",
        },
      ],
      time: "5-7 дней",
    },
    {
      id: 12,
      number: "Этап 12",
      title: "Frontend Framework",
      description:
        "Интеграция React/Vue/Svelte с Tauri. Создание UI для десктопного приложения.",
      goals: [
        "Настройка React/Vue с Tauri",
        "Работа с state management",
        "Доступ к системным API через Tauri",
        "Сборка и деплой приложения",
      ],
      resources: [
        {
          name: "Tauri + React",
          url: "https://v2.tauri.app/start/frontend/react/",
        },
        {
          name: "Tauri + Vue",
          url: "https://v2.tauri.app/start/frontend/vue/",
        },
        { name: "Tauri Plugins", url: "https://v2.tauri.app/plugin/about/" },
      ],
      time: "7-10 дней",
    },
  ],
  top: [
    {
      id: 13,
      number: "Этап 13",
      title: "Async Rust - Tokio",
      description:
        "Асинхронное программирование. Рантайм Tokio и async/await синтаксис.",
      goals: [
        "Понимание async/await",
        "Tokio runtime и задачи",
        "Futures и Streams",
        "Параллельное выполнение задач",
      ],
      resources: [
        { name: "Tokio Tutorial", url: "https://tokio.rs/tokio/tutorial" },
        { name: "Async Book", url: "https://rust-lang.github.io/async-book/" },
        { name: "Tokio GitHub", url: "https://github.com/tokio-rs/tokio" },
      ],
      time: "6-8 дней",
    },
    {
      id: 14,
      number: "Этап 14",
      title: "Web Framework - Axum",
      description:
        "Создание веб-серверов на Axum. Роутинг, middleware, handlers.",
      goals: [
        "Настройка Axum сервера",
        "Роутинг и handlers",
        "Middleware и layers",
        "JSON API и сериализация",
      ],
      resources: [
        { name: "Axum GitHub", url: "https://github.com/tokio-rs/axum" },
        {
          name: "Axum Examples",
          url: "https://github.com/tokio-rs/axum/tree/main/examples",
        },
        { name: "Serde JSON", url: "https://serde.rs/" },
      ],
      time: "5-7 дней",
    },
    {
      id: 15,
      number: "Этап 15",
      title: "Database Integration",
      description: "Работа с базами данных. SQLx, Diesel или SeaORM для Rust.",
      goals: [
        "Выбор ORM (SQLx vs Diesel)",
        "Миграции базы данных",
        "CRUD операции",
        "Connection pooling",
      ],
      resources: [
        { name: "SQLx", url: "https://github.com/launchbadge/sqlx" },
        { name: "Diesel ORM", url: "https://diesel.rs/" },
        { name: "SeaORM", url: "https://www.sea-ql.org/SeaORM/" },
      ],
      time: "7-10 дней",
    },
  ],
  bottom: [
    {
      id: 16,
      number: "Этап 16",
      title: "N-API for Node.js",
      description: "Создание нативных модулей для Node.js на Rust через N-API.",
      goals: [
        "Понимание N-API архитектуры",
        "Настройка napi-rs",
        "Создание npm пакета с Rust кодом",
        "Публикация на npm",
      ],
      resources: [
        { name: "napi-rs", url: "https://napi.rs/" },
        { name: "Node-API Docs", url: "https://nodejs.org/api/n-api.html" },
        { name: "Neon (альтернатива)", url: "https://neon-bindings.com/" },
      ],
      time: "6-8 дней",
    },
    {
      id: 17,
      number: "Этап 17",
      title: "Performance Optimization",
      description:
        "Профилирование и оптимизация Rust кода. Бенчмарки и инструменты.",
      goals: [
        "Использование cargo-bench",
        "Профилирование с perf/flamegraph",
        "Оптимизация памяти и CPU",
        "SIMD инструкции",
      ],
      resources: [
        {
          name: "The Rust Performance Book",
          url: "https://nnethercote.github.io/perf-book/",
        },
        {
          name: "Criterion.rs (бенчмарки)",
          url: "https://bheisler.github.io/criterion.rs/book/",
        },
        {
          name: "Flamegraph",
          url: "https://github.com/flamegraph-rs/flamegraph",
        },
      ],
      time: "5-7 дней",
    },
    {
      id: 18,
      number: "Этап 18",
      title: "Distributed Systems",
      description:
        "Распределённые системы на Rust. gRPC, message queues, микросервисы.",
      goals: [
        "gRPC с Tonic",
        "Message queues (NATS, Kafka)",
        "Service mesh концепции",
        "Deployment и orchestration",
      ],
      resources: [
        { name: "Tonic (gRPC)", url: "https://github.com/hyperium/tonic" },
        { name: "NATS.io", url: "https://nats.io/" },
        {
          name: "Distributed Services with Go (концепции)",
          url: "https://github.com/dreamingechoes/distributed-services-with-go",
        },
      ],
      time: "10-14 дней",
    },
  ],
};

/* ═══════════════════════════════════════
   STATE
   ═══════════════════════════════════════ */
let state = {
  currentRotation: { x: -15, y: 30 },
  completedStages: new Set(),
  currentUser: null,
  currentModalStage: null,
};

/* ═══════════════════════════════════════
   DOM ELEMENTS
   ═══════════════════════════════════════ */
const elements = {
  cube: document.getElementById("cube"),
  loginScreen: document.getElementById("login-screen"),
  usernameInput: document.getElementById("username"),
  loginBtn: document.getElementById("login-btn"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.getElementById("modal"),
  modalClose: document.getElementById("modal-close"),
  modalCancel: document.getElementById("modal-cancel"),
  modalComplete: document.getElementById("modal-complete"),
  progressFill: document.getElementById("progress-fill"),
  progressPercent: document.getElementById("progress-percent"),
  completedCount: document.getElementById("completed-count"),
};

/* ═══════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════ */
function init() {
  loadState();
  renderStages();
  setupEventListeners();
  updateProgress();

  // Check if user already logged in
  const savedUser = localStorage.getItem("polymath_user");
  if (savedUser) {
    state.currentUser = savedUser;
    hideLoginScreen();
  }
}

function loadState() {
  const saved = localStorage.getItem("polymath_completed");
  if (saved) {
    state.completedStages = new Set(JSON.parse(saved));
  }
}

function saveState() {
  localStorage.setItem(
    "polymath_completed",
    JSON.stringify([...state.completedStages]),
  );
  if (state.currentUser) {
    localStorage.setItem("polymath_user", state.currentUser);
  }
}

/* ═══════════════════════════════════════
   RENDER STAGES
   ═══════════════════════════════════════ */
function renderStages() {
  Object.keys(stagesData).forEach((face) => {
    const container = document.getElementById(`face-${face}-stages`);
    if (!container) return;

    container.innerHTML = "";
    stagesData[face].forEach((stage) => {
      const card = createStageCard(stage);
      container.appendChild(card);
    });
  });
}

function createStageCard(stage) {
  const card = document.createElement("div");
  card.className = "stage-card";
  if (state.completedStages.has(stage.id)) {
    card.classList.add("completed");
  }

  card.innerHTML = `
        <div class="stage-number">${stage.number}</div>
        <div class="stage-title">${stage.title}</div>
        <div class="stage-desc">${stage.description.substring(0, 80)}...</div>
        <div class="stage-status">✓</div>
    `;

  card.addEventListener("click", () => openModal(stage));

  return card;
}

/* ═══════════════════════════════════════
   3D ROTATION
   ═══════════════════════════════════════ */
function rotateCube(dx, dy) {
  state.currentRotation.y += dx;
  state.currentRotation.x += dy;

  // Limit vertical rotation
  state.currentRotation.x = Math.max(
    -90,
    Math.min(90, state.currentRotation.x),
  );

  updateCubeTransform();
}

function updateCubeTransform() {
  elements.cube.style.transform = `rotateX(${state.currentRotation.x}deg) rotateY(${state.currentRotation.y}deg)`;
}

/* ═══════════════════════════════════════
   MODAL
   ═══════════════════════════════════════ */
function openModal(stage) {
  state.currentModalStage = stage;

  document.getElementById("modal-stage-number").textContent = stage.number;
  document.getElementById("modal-title").textContent = stage.title;
  document.getElementById("modal-description").textContent = stage.description;
  document.getElementById("modal-time").textContent = `⏱️ ${stage.time}`;

  // Render goals
  const goalsList = document.getElementById("modal-goals");
  goalsList.innerHTML = stage.goals.map((goal) => `<li>${goal}</li>`).join("");

  // Render resources
  const resourcesContainer = document.getElementById("modal-resources");
  resourcesContainer.innerHTML = stage.resources
    .map(
      (res) => `
        <a href="${res.url}" target="_blank" class="resource-link">
            ${res.name}
        </a>
    `,
    )
    .join("");

  // Update complete button
  const isCompleted = state.completedStages.has(stage.id);
  elements.modalComplete.textContent = isCompleted
    ? "✓ Уже выполнено"
    : "✓ Отметить как выполненное";
  elements.modalComplete.disabled = isCompleted;

  elements.modalOverlay.classList.add("active");
}

function closeModal() {
  elements.modalOverlay.classList.remove("active");
  state.currentModalStage = null;
}

function completeStage() {
  if (!state.currentModalStage) return;

  const stageId = state.currentModalStage.id;
  if (!state.completedStages.has(stageId)) {
    state.completedStages.add(stageId);
    saveState();
    renderStages();
    updateProgress();

    // Show success animation
    elements.modalComplete.textContent = "✓ Выполнено!";
    setTimeout(() => {
      closeModal();
    }, 1000);
  }
}

/* ═══════════════════════════════════════
   PROGRESS
   ═══════════════════════════════════════ */
function updateProgress() {
  const total = 18;
  const completed = state.completedStages.size;
  const percent = Math.round((completed / total) * 100);

  elements.progressFill.style.width = `${percent}%`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.completedCount.textContent = `${completed}/${total} выполнено`;
}

/* ═══════════════════════════════════════
   LOGIN
   ═══════════════════════════════════════ */
function handleLogin() {
  const username = elements.usernameInput.value.trim();
  if (!username) {
    elements.usernameInput.style.borderColor = "#ef4444";
    setTimeout(() => {
      elements.usernameInput.style.borderColor = "";
    }, 1000);
    return;
  }

  state.currentUser = username;
  saveState();
  hideLoginScreen();
}

function hideLoginScreen() {
  elements.loginScreen.classList.add("hidden");
}

/* ═══════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════ */
function setupEventListeners() {
  // Login
  elements.loginBtn.addEventListener("click", handleLogin);
  elements.usernameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleLogin();
  });

  // Modal
  elements.modalClose.addEventListener("click", closeModal);
  elements.modalCancel.addEventListener("click", closeModal);
  elements.modalComplete.addEventListener("click", completeStage);
  elements.modalOverlay.addEventListener("click", (e) => {
    if (e.target === elements.modalOverlay) closeModal();
  });

  // Rotation controls
  document
    .getElementById("rotate-left")
    .addEventListener("click", () => rotateCube(-45, 0));
  document
    .getElementById("rotate-right")
    .addEventListener("click", () => rotateCube(45, 0));
  document
    .getElementById("rotate-up")
    .addEventListener("click", () => rotateCube(0, -45));
  document
    .getElementById("rotate-down")
    .addEventListener("click", () => rotateCube(0, 45));
  document.getElementById("reset-view").addEventListener("click", () => {
    state.currentRotation = { x: -15, y: 30 };
    updateCubeTransform();
  });

  // Mouse drag rotation
  let isDragging = false;
  let startX, startY;

  document.addEventListener("mousedown", (e) => {
    if (e.target.closest(".stage-card") || e.target.closest(".modal")) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    elements.cube.style.transition = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    state.currentRotation.y += deltaX * 0.5;
    state.currentRotation.x -= deltaY * 0.5;

    startX = e.clientX;
    startY = e.clientY;

    updateCubeTransform();
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      elements.cube.style.transition =
        "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    }
  });

  // Touch support
  document.addEventListener("touchstart", (e) => {
    if (e.target.closest(".stage-card") || e.target.closest(".modal")) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    elements.cube.style.transition = "none";
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    state.currentRotation.y += deltaX * 0.5;
    state.currentRotation.x -= deltaY * 0.5;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    updateCubeTransform();
  });

  document.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
      elements.cube.style.transition =
        "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        rotateCube(-45, 0);
        break;
      case "ArrowRight":
        rotateCube(45, 0);
        break;
      case "ArrowUp":
        rotateCube(0, -45);
        break;
      case "ArrowDown":
        rotateCube(0, 45);
        break;
      case "Escape":
        closeModal();
        break;
    }
  });
}

/* ═══════════════════════════════════════
   START
   ═══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", init);
