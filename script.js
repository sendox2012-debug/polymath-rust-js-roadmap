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
        "Изменяемые и неизменяемые переменные",
        "Базовые типы данных (i32, String, bool)",
        "Создание функций и return",
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
        { name: "Rustlings", url: "https://github.com/rust-lang/rustlings" },
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
        "Концепция Ownership",
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
      description: "Сопоставление с образцом. match, if let, while let.",
      goals: [
        "Синтаксис match",
        "if let и while let",
        "Деструктуризация структур и enum",
        "Guard clauses",
      ],
      resources: [
        {
          name: "Rust Book - Глава 6",
          url: "https://doc.rust-lang.org/book/ch06-00-enums.html",
        },
        {
          name: "Patterns Guide",
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
        "Собственные типы данных. Методы, ассоциированные функции, enum.",
      goals: [
        "Определение структур",
        "Методы и impl блоки",
        "Enum с данными",
        "Option и Result",
      ],
      resources: [
        {
          name: "Rust Book - Глава 5-6",
          url: "https://doc.rust-lang.org/book/ch05-00-structs.html",
        },
        { name: "Standard Library", url: "https://doc.rust-lang.org/std/" },
      ],
      time: "4-6 дней",
    },
    {
      id: 5,
      number: "Этап 5",
      title: "Error Handling",
      description: "Обработка ошибок через Result и panic. Custom error types.",
      goals: [
        "Result<T, E> и обработка",
        "Оператор ?",
        "Custom error типы",
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
      description: "Абстракции и полиморфизм. Обобщённое программирование.",
      goals: [
        "Создание traits",
        "Trait bounds",
        "Generics в функциях/структурах",
        "Trait objects",
      ],
      resources: [
        {
          name: "Rust Book - Глава 10",
          url: "https://doc.rust-lang.org/book/ch10-00-generics.html",
        },
        {
          name: "Traits Guide",
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
      description:
        "Введение в WebAssembly. Архитектура и компиляция Rust в WASM.",
      goals: [
        "Архитектура WASM",
        "Компиляция Rust в WASM",
        "Базовые типы",
        "wasm-pack, cargo-generate",
      ],
      resources: [
        {
          name: "Rust & WebAssembly Book",
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
      description: "Мост между Rust и JS. Генерация биндингов.",
      goals: [
        "Настройка wasm-bindgen",
        "Экспорт Rust в JS",
        "Импорт JS в Rust",
        "Работа с DOM",
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
      description: "Практическая интеграция. Оптимизация JS через Rust.",
      goals: [
        "Передача JSON",
        "Асинхронные вызовы",
        "Профилирование",
        "Реальные кейсы",
      ],
      resources: [
        { name: "Yew Framework", url: "https://yew.rs/" },
        { name: "Trunk bundler", url: "https://trunkrs.dev/" },
      ],
      time: "6-8 дней",
    },
  ],
  left: [
    {
      id: 10,
      number: "Этап 10",
      title: "Tauri Setup",
      description: "Создание десктопных приложений с Tauri.",
      goals: [
        "Установка Tauri CLI",
        "Первое приложение",
        "tauri.conf.json",
        "Архитектура (Rust + JS)",
      ],
      resources: [
        { name: "Tauri Docs", url: "https://v2.tauri.app/" },
        { name: "Quick Start", url: "https://v2.tauri.app/start/quickstart/" },
        { name: "Tauri GitHub", url: "https://github.com/tauri-apps/tauri" },
      ],
      time: "3-5 дней",
    },
    {
      id: 11,
      number: "Этап 11",
      title: "Tauri IPC",
      description: "Межпроцессное взаимодействие. Команды и события.",
      goals: [
        "Rust commands",
        "Вызов из JS",
        "Events listen/emit",
        "Передача данных",
      ],
      resources: [
        {
          name: "IPC Guide",
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
      description: "Интеграция React/Vue с Tauri.",
      goals: [
        "Настройка React/Vue",
        "State management",
        "Системные API",
        "Сборка и деплой",
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
      description: "Асинхронное программирование. Tokio runtime.",
      goals: [
        "async/await",
        "Tokio runtime",
        "Futures и Streams",
        "Параллельные задачи",
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
      description: "Веб-серверы на Axum. Роутинг и middleware.",
      goals: ["Настройка Axum", "Роутинг", "Middleware", "JSON API"],
      resources: [
        { name: "Axum GitHub", url: "https://github.com/tokio-rs/axum" },
        {
          name: "Examples",
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
      description: "Работа с БД. SQLx, Diesel, SeaORM.",
      goals: ["Выбор ORM", "Миграции", "CRUD", "Connection pooling"],
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
      description: "Нативные модули для Node.js на Rust.",
      goals: [
        "N-API архитектура",
        "napi-rs",
        "npm пакеты с Rust",
        "Публикация",
      ],
      resources: [
        { name: "napi-rs", url: "https://napi.rs/" },
        { name: "Node-API Docs", url: "https://nodejs.org/api/n-api.html" },
        { name: "Neon", url: "https://neon-bindings.com/" },
      ],
      time: "6-8 дней",
    },
    {
      id: 17,
      number: "Этап 17",
      title: "Performance Optimization",
      description: "Профилирование и оптимизация Rust кода.",
      goals: [
        "cargo-bench",
        "perf/flamegraph",
        "Оптимизация памяти/CPU",
        "SIMD",
      ],
      resources: [
        {
          name: "Rust Performance Book",
          url: "https://nnethercote.github.io/perf-book/",
        },
        {
          name: "Criterion.rs",
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
      description: "Распределённые системы на Rust.",
      goals: ["gRPC с Tonic", "NATS/Kafka", "Service mesh", "Deployment"],
      resources: [
        { name: "Tonic", url: "https://github.com/hyperium/tonic" },
        { name: "NATS.io", url: "https://nats.io/" },
        {
          name: "Distributed Systems Concepts",
          url: "https://github.com/dreamingechoes/distributed-services-with-go",
        },
      ],
      time: "10-14 дней",
    },
  ],
};

const state = {
  rotation: { x: -15, y: 30 },
  completed: new Set(),
  user: null,
  currentStage: null,
};
const el = {
  cube: document.getElementById("cube"),
  login: document.getElementById("login-screen"),
  input: document.getElementById("username"),
  loginBtn: document.getElementById("login-btn"),
  modal: document.getElementById("modal-overlay"),
  close: document.getElementById("modal-close"),
  cancel: document.getElementById("modal-cancel"),
  complete: document.getElementById("modal-complete"),
  progress: document.getElementById("progress-fill"),
  percent: document.getElementById("progress-percent"),
  count: document.getElementById("completed-count"),
};

function init() {
  const savedUser = localStorage.getItem("polymath_user");
  if (savedUser) {
    state.user = savedUser;
    hideLogin();
  }
  loadState();
  renderStages();
  setupEvents();
  updateProgress();
}

function loadState() {
  const saved = localStorage.getItem("polymath_completed");
  if (saved) state.completed = new Set(JSON.parse(saved));
}
function saveState() {
  localStorage.setItem(
    "polymath_completed",
    JSON.stringify([...state.completed]),
  );
  if (state.user) localStorage.setItem("polymath_user", state.user);
}

function renderStages() {
  Object.keys(stagesData).forEach((face) => {
    const container = document.getElementById(`face-${face}-stages`);
    if (!container) return;
    container.innerHTML = "";
    stagesData[face].forEach((stage) =>
      container.appendChild(createCard(stage)),
    );
  });
}

function createCard(stage) {
  const card = document.createElement("div");
  card.className = `stage-card ${state.completed.has(stage.id) ? "completed" : ""}`;
  card.innerHTML = `<div class="stage-number">${stage.number}</div><div class="stage-title">${stage.title}</div><div class="stage-desc">${stage.description.substring(0, 80)}...</div><div class="stage-status">✓</div>`;
  card.addEventListener("click", () => openModal(stage));
  return card;
}

function rotate(dx, dy) {
  state.rotation.y += dx;
  state.rotation.x = Math.max(-90, Math.min(90, state.rotation.x + dy));
  updateTransform();
}

function updateTransform() {
  el.cube.style.transform = `rotateX(${state.rotation.x}deg) rotateY(${state.rotation.y}deg)`;
}

function openModal(stage) {
  state.currentStage = stage;
  document.getElementById("modal-stage-number").textContent = stage.number;
  document.getElementById("modal-title").textContent = stage.title;
  document.getElementById("modal-description").textContent = stage.description;
  document.getElementById("modal-time").textContent = `⏱️ ${stage.time}`;
  document.getElementById("modal-goals").innerHTML = stage.goals
    .map((g) => `<li>${g}</li>`)
    .join("");
  document.getElementById("modal-resources").innerHTML = stage.resources
    .map(
      (r) =>
        `<a href="${r.url}" target="_blank" class="resource-link">${r.name}</a>`,
    )
    .join("");
  el.complete.textContent = state.completed.has(stage.id)
    ? "✓ Уже выполнено"
    : "✓ Отметить как выполненное";
  el.complete.disabled = state.completed.has(stage.id);
  el.modal.classList.add("active");
}

function closeModal() {
  el.modal.classList.remove("active");
  state.currentStage = null;
}

function completeStage() {
  if (!state.currentStage || state.completed.has(state.currentStage.id)) return;
  state.completed.add(state.currentStage.id);
  saveState();
  renderStages();
  updateProgress();
  el.complete.textContent = "✓ Выполнено!";
  setTimeout(closeModal, 800);
}

function updateProgress() {
  const total = 18,
    done = state.completed.size;
  const pct = Math.round((done / total) * 100);
  el.progress.style.width = `${pct}%`;
  el.percent.textContent = `${pct}%`;
  el.count.textContent = `${done}/${total} выполнено`;
}

function handleLogin() {
  const name = el.input.value.trim();
  if (!name) {
    el.input.style.borderColor = "#ef4444";
    setTimeout(() => (el.input.style.borderColor = ""), 1000);
    return;
  }
  state.user = name;
  saveState();
  hideLogin();
}

function hideLogin() {
  el.login.classList.add("hidden");
}

function setupEvents() {
  el.loginBtn.addEventListener("click", handleLogin);
  el.input.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleLogin(),
  );
  el.close.addEventListener("click", closeModal);
  el.cancel.addEventListener("click", closeModal);
  el.complete.addEventListener("click", completeStage);
  el.modal.addEventListener(
    "click",
    (e) => e.target === el.modal && closeModal(),
  );

  document
    .getElementById("rotate-left")
    .addEventListener("click", () => rotate(-45, 0));
  document
    .getElementById("rotate-right")
    .addEventListener("click", () => rotate(45, 0));
  document
    .getElementById("rotate-up")
    .addEventListener("click", () => rotate(0, -45));
  document
    .getElementById("rotate-down")
    .addEventListener("click", () => rotate(0, 45));
  document.getElementById("reset-view").addEventListener("click", () => {
    state.rotation = { x: -15, y: 30 };
    updateTransform();
  });

  let isDragging = false,
    startX,
    startY;
  const startDrag = (x, y) => {
    if (x === null) return;
    isDragging = true;
    startX = x;
    startY = y;
    el.cube.style.transition = "none";
  };
  const moveDrag = (x, y) => {
    if (!isDragging) return;
    state.rotation.y += (x - startX) * 0.5;
    state.rotation.x -= (y - startY) * 0.5;
    startX = x;
    startY = y;
    updateTransform();
  };
  const endDrag = () => {
    if (isDragging) {
      isDragging = false;
      el.cube.style.transition =
        "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    }
  };

  document.addEventListener("mousedown", (e) => {
    if (
      !e.target.closest(".stage-card") &&
      !e.target.closest(".modal") &&
      !e.target.closest("input")
    )
      startDrag(e.clientX, e.clientY);
  });
  document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
  document.addEventListener("mouseup", endDrag);
  document.addEventListener(
    "touchstart",
    (e) => {
      if (
        !e.target.closest(".stage-card") &&
        !e.target.closest(".modal") &&
        !e.target.closest("input")
      )
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true },
  );
  document.addEventListener(
    "touchmove",
    (e) => moveDrag(e.touches[0].clientX, e.touches[0].clientY),
    { passive: true },
  );
  document.addEventListener("touchend", endDrag);

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input") || e.target.closest(".modal")) return;
    if (e.key === "ArrowLeft") rotate(-45, 0);
    else if (e.key === "ArrowRight") rotate(45, 0);
    else if (e.key === "ArrowUp") rotate(0, -45);
    else if (e.key === "ArrowDown") rotate(0, 45);
    else if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
