/* ==========================================================================
   NEHA LATHEESH - DATA ANALYST PORTFOLIO JAVASCRIPT
   Clean, vanilla, beginner-friendly JavaScript code
   Includes:
   - Animated typewriter role switching
   - Sticky navbar scroll detection & mobile auto-close
   - Project interactive category filtering
   - Case study detail modal population
   - Client-side contact form validation & simulated submission
   - Scroll-to-top floating button handler
   - Dynamic footer copyright year
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ------------------------------------------------------------------------
  // 1. DYNAMIC TYPEWRITER EFFECT (HERO SECTION)
  // Cycles through relevant roles and analytical specialties
  // ------------------------------------------------------------------------
  const typingElement = document.getElementById("typing-text");
  const roles = [
    "DATA ANALYST",
    "SQL & PYTHON SPECIALIST",
    "POWER BI DEVELOPER",
    "INSIGHT STORYTELLER",
    "PREDICTIVE MODELER"
  ];

  let currentRoleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1800;

  function typeRoleEffect() {
    if (!typingElement) return;

    const currentText = roles[currentRoleIndex];

    if (isDeleting) {
      // Remove characters
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add characters
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Word completed typing
    if (!isDeleting && charIndex === currentText.length) {
      delay = pauseBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Word fully cleared
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(typeRoleEffect, delay);
  }

  // Initialize typing effect
  typeRoleEffect();

  // ------------------------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT & MOBILE MENU AUTO-CLOSE
  // ------------------------------------------------------------------------
  const navbar = document.getElementById("mainNavbar");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarResponsive");

  // Add frosted background enhancement when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Automatically close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Use Bootstrap Collapse API to hide menu
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 3. PROJECT CATEGORY FILTERING (ALL, ML, BI, WEB)
  // ------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active state on buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "block";
          // Add a subtle entrance animation
          item.classList.add("animate-fade-in");
        } else {
          item.style.display = "none";
          item.classList.remove("animate-fade-in");
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 4. PROJECT MODAL CASE STUDY DETAILS POPULATION
  // ------------------------------------------------------------------------
  const modalButtons = document.querySelectorAll(".btn-open-modal");
  const projectModalElement = document.getElementById("projectModal");
  let projectModalInstance = null;

  if (projectModalElement && typeof bootstrap !== "undefined") {
    projectModalInstance = new bootstrap.Modal(projectModalElement);
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const title = this.getAttribute("data-title") || "Project Case Study";
      const desc = this.getAttribute("data-desc") || "";
      const tech = this.getAttribute("data-tech") || "";
      const metrics = this.getAttribute("data-metrics") || "";

      // Populate modal DOM elements
      const headingEl = document.getElementById("modalProjectHeading");
      const descEl = document.getElementById("modalProjectDescription");
      const techEl = document.getElementById("modalProjectTech");
      const metricsEl = document.getElementById("modalProjectMetrics");

      if (headingEl) headingEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (techEl) techEl.textContent = tech;
      if (metricsEl) metricsEl.textContent = metrics;

      if (projectModalInstance) {
        projectModalInstance.show();
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. CONTACT FORM VALIDATION & SIMULATED SUBMISSION
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("btn-submit-form");
  const btnText = document.getElementById("btn-text");
  const btnIcon = document.getElementById("btn-icon");
  const btnSpinner = document.getElementById("btn-spinner");
  const successAlert = document.getElementById("form-success-alert");
  const displayNameSpan = document.getElementById("sender-display-name");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const subjectInput = document.getElementById("contactSubject");
      const messageInput = document.getElementById("contactMessage");

      let isValid = true;

      // Validation 1: Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        isValid = false;
      } else {
        nameInput.classList.remove("is-invalid");
      }

      // Validation 2: Email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      } else {
        emailInput.classList.remove("is-invalid");
      }

      // Validation 3: Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add("is-invalid");
        isValid = false;
      } else {
        subjectInput.classList.remove("is-invalid");
      }

      // Validation 4: Message length
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add("is-invalid");
        isValid = false;
      } else {
        messageInput.classList.remove("is-invalid");
      }

      if (!isValid) {
        return; // Stop if invalid
      }

      // If valid: simulate sending state
      const userName = nameInput.value.trim();

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = "Sending...";
      if (btnIcon) btnIcon.classList.add("d-none");
      if (btnSpinner) btnSpinner.classList.remove("d-none");

      // Simulate a network dispatch (1.2 seconds)
      setTimeout(() => {
        // Reset button UI
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Send Message";
        if (btnIcon) btnIcon.classList.remove("d-none");
        if (btnSpinner) btnSpinner.classList.add("d-none");

        // Show success alert
        if (displayNameSpan) displayNameSpan.textContent = userName;
        if (successAlert) {
          successAlert.classList.remove("d-none");
          successAlert.classList.add("d-flex");
        }

        // Reset form input values
        contactForm.reset();

        // Auto-hide alert after 7 seconds
        setTimeout(() => {
          if (successAlert) {
            successAlert.classList.add("d-none");
            successAlert.classList.remove("d-flex");
          }
        }, 7000);
      }, 1200);
    });

    // Real-time error removal on input typing
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (this.classList.contains("is-invalid")) {
          this.classList.remove("is-invalid");
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. FLOATING BACK-TO-TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn?.classList.remove("d-none");
    } else {
      backToTopBtn?.classList.add("d-none");
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ------------------------------------------------------------------------
  // 7. DYNAMIC COPYRIGHT YEAR
  // ------------------------------------------------------------------------
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
