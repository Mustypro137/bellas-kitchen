// ---------- Mobile navigation ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function setNavOpen(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("open", open);
}

navToggle.addEventListener("click", () => {
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

// Close the mobile menu after picking a link or pressing Escape
navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) setNavOpen(false);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setNavOpen(false);
        navToggle.focus();
    }
});

// ---------- Smooth scrolling for in-page links ----------
// Done in JavaScript because browsers skip CSS smooth scrolling when the
// computer's animation effects are turned off.
const SCROLL_DURATION = 600;

function smoothScrollTo(targetY) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out
        window.scrollTo({ top: startY + distance * eased, behavior: "instant" });
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    event.preventDefault();
    const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - offset);
    history.pushState(null, "", link.hash);

    // Move keyboard focus to the section without a second jump
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
});

// ---------- Highlight the section currently on screen ----------
const linksById = {};
navLinks.querySelectorAll("a").forEach((link) => {
    linksById[link.hash.slice(1)] = link;
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        Object.values(linksById).forEach((link) => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        });
        const link = linksById[entry.target.id];
        link.classList.add("active");
        link.setAttribute("aria-current", "true");
    });
}, { rootMargin: "-45% 0px -50% 0px" });

Object.keys(linksById).forEach((id) => {
    sectionObserver.observe(document.getElementById(id));
});

// ---------- Contact form validation ----------
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
    name: (value) => (value ? "" : "Please enter your name."),
    email: (value) => {
        if (!value) return "Please enter your email address.";
        if (!EMAIL_PATTERN.test(value)) return "Please enter a valid email, like name@example.com.";
        return "";
    },
    message: (value) => {
        if (!value) return "Please write a message.";
        if (value.length < 10) return "Your message should be at least 10 characters.";
        return "";
    },
};

function validateField(field) {
    const error = rules[field.name](field.value.trim());
    document.getElementById(`${field.name}-error`).textContent = error;
    field.setAttribute("aria-invalid", String(Boolean(error)));
    return !error;
}

// Check a field when the user leaves it, and re-check while fixing an error
Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    field.addEventListener("blur", () => {
        if (field.value.trim()) validateField(field);
    });
    field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "";

    const fields = Object.keys(rules).map((name) => form.elements[name]);
    const invalid = fields.filter((field) => !validateField(field));

    if (invalid.length) {
        invalid[0].focus();
        return;
    }

    const name = form.elements.name.value.trim();
    successMessage.textContent = `Thank you, ${name}! Your message has been sent. We'll get back to you soon.`;
    form.reset();
    fields.forEach((field) => field.removeAttribute("aria-invalid"));
});
