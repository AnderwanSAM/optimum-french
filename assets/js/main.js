/* Optimum French — shared header/footer, language switch, menu, animations, contact form. */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ------------------------------------------------------------------
     CONTACT FORM
     Create a free form at https://formspree.io, then paste its ID here
     (the part after /f/ in the endpoint, e.g. "xyzabcd").
     Until then, the form opens the visitor's email app instead.
     ------------------------------------------------------------------ */
  var FORMSPREE_ID = "";
  var CONTACT_EMAIL = "info@optimumfrench.com";

  var page = document.body.getAttribute("data-page") || "home";

  /* ---------- Shared header ---------- */
  var nav = [
    { id: "home", href: "index.html", key: "nav.home" },
    { id: "training", href: "training.html", key: "nav.training" },
    { id: "about", href: "about.html", key: "nav.about" },
    { id: "government", href: "government.html", key: "nav.government" },
    { id: "contact", href: "#contact", key: "nav.contact" }
  ];

  var headerHTML =
    '<a class="skip-link" href="#main" data-i18n="a11y.skip">Skip to content</a>' +
    '<div class="wrap header-inner">' +
    '<a class="brand" href="index.html" aria-label="Optimum French">' +
    '<img src="assets/img/maple-leaf.svg" alt="" width="34" height="34">' +
    '<span class="brand-text">Optimum French<small data-i18n="brand.tag">Language Center</small></span>' +
    "</a>" +
    '<nav class="nav" id="site-nav" aria-label="Main">' +
    nav
      .map(function (n) {
        var current = n.id === page ? ' aria-current="page"' : "";
        return '<a href="' + n.href + '"' + current + ' data-i18n="' + n.key + '"></a>';
      })
      .join("") +
    "</nav>" +
    '<div class="header-actions">' +
    '<div class="lang-toggle" role="group" aria-label="Language / Langue">' +
    '<button type="button" data-lang="en" aria-pressed="false">EN</button>' +
    '<button type="button" data-lang="fr" aria-pressed="false">FR</button>' +
    "</div>" +
    '<button class="menu-btn" type="button" aria-controls="site-nav" aria-expanded="false" data-i18n-attr="aria-label:a11y.menu"><span></span></button>' +
    "</div>" +
    "</div>";

  var year = new Date().getFullYear();

  // Contact block + form: shown at the bottom of every page, like the original site.
  var emails = [
    ["contact.info", "info@optimumfrench.com"],
    ["contact.sales", "sales@optimumfrench.com"],
    ["contact.support", "support@optimumfrench.com"],
    ["contact.teacher", "teacher@optimumfrench.com"]
  ];
  var interests = ["form.opt.conv", "form.opt.gov", "form.opt.kids", "form.opt.corp"];

  var contactHTML =
    '<section class="section section-cream" id="contact">' +
    '<div class="wrap contact-grid">' +
    '<div class="reveal">' +
    '<h2 data-i18n="contact.title">Contact</h2>' +
    '<p><strong data-i18n="contact.office">Head Office</strong><br>Ottawa, Ontario, Canada</p>' +
    '<ul class="contact-list">' +
    emails
      .map(function (e) {
        return (
          '<li><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>' +
          '<div><small data-i18n="' + e[0] + '"></small><a href="mailto:' + e[1] + '">' + e[1] + "</a></div></li>"
        );
      })
      .join("") +
    "</ul>" +
    "</div>" +
    '<form class="form reveal" id="contact-form" novalidate>' +
    '<input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
    '<div class="row">' +
    '<label><span data-i18n="form.first"></span><input name="first_name" type="text" autocomplete="given-name" required></label>' +
    '<label><span data-i18n="form.last"></span><input name="last_name" type="text" autocomplete="family-name"></label>' +
    "</div>" +
    '<div class="row">' +
    '<label><span data-i18n="form.email"></span><input name="email" type="email" autocomplete="email" required></label>' +
    '<label><span data-i18n="form.phone"></span><input name="phone" type="tel" autocomplete="tel"></label>' +
    "</div>" +
    '<label><span data-i18n="form.message"></span><textarea name="message"></textarea></label>' +
    '<fieldset class="interests"><legend data-i18n="form.interest"></legend>' +
    interests
      .map(function (k) {
        return '<label class="check"><input type="checkbox" name="interest" data-i18n-attr="value:' + k + '"><span data-i18n="' + k + '"></span></label>';
      })
      .join("") +
    "</fieldset>" +
    '<button class="btn btn-red" type="submit"><span data-i18n="form.send">Send</span></button>' +
    '<p class="form-status" role="status" aria-live="polite"></p>' +
    "</form>" +
    "</div>" +
    "</section>";

  var footerHTML =
    '<div class="wrap">' +
    '<div class="footer-grid">' +
    "<div>" +
    '<a class="brand" href="index.html"><img src="assets/img/maple-leaf.svg" alt="" width="34" height="34">' +
    '<span class="brand-text">Optimum French<small data-i18n="brand.tag">Language Center</small></span></a>' +
    "</div>" +
    "<div>" +
    '<h4 data-i18n="footer.services"></h4>' +
    "<ul>" +
    '<li><a href="index.html" data-i18n="nav.home"></a></li>' +
    '<li><a href="index.html#tutoring" data-i18n="svc.tutoring.title"></a></li>' +
    '<li><a href="index.html#corporate" data-i18n="svc.corporate.title"></a></li>' +
    '<li><a href="government.html" data-i18n="nav.government"></a></li>' +
    '<li><a href="training.html" data-i18n="footer.tef"></a></li>' +
    '<li><a href="#contact" data-i18n="nav.contact"></a></li>' +
    "</ul>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom"><span>© ' + year + ' Optimum French. <span data-i18n="footer.rights"></span></span></div>' +
    "</div>";

  var header = document.querySelector(".site-header");
  var footer = document.querySelector(".site-footer");
  if (header) header.innerHTML = headerHTML;
  if (footer) {
    footer.insertAdjacentHTML("beforebegin", contactHTML);
    footer.innerHTML = footerHTML;
  }

  /* ---------- Language ---------- */
  var dict = window.OF_I18N || { en: {}, fr: {} };

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
    try {
      var saved = localStorage.getItem("of-lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }

  function t(lang, key) {
    var table = dict[lang] || {};
    if (key in table) return table[key];
    return (dict.en || {})[key];
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "fr" ? "fr-CA" : "en-CA";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n"));
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var value = t(lang, parts[1]);
        if (value != null) el.setAttribute(parts[0].trim(), value);
      });
    });

    var titleKey = document.body.getAttribute("data-title");
    if (titleKey && t(lang, titleKey)) document.title = t(lang, titleKey);
    var desc = document.querySelector('meta[name="description"]');
    var descKey = document.body.getAttribute("data-description");
    if (desc && descKey && t(lang, descKey)) desc.setAttribute("content", t(lang, descKey));

    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem("of-lang", lang); } catch (e) {}
    currentLang = lang;
  }

  var currentLang = detectLang();
  applyLang(currentLang);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-toggle button");
    if (btn) applyLang(btn.getAttribute("data-lang"));
  });

  /* ---------- Header behaviour ---------- */
  var menuBtn = header && header.querySelector(".menu-btn");
  function setMenu(open) {
    header.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!header.classList.contains("is-open"));
    });
    header.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  function onScroll() {
    if (header) header.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Contact form ---------- */
  var form = document.querySelector("#contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.querySelector(".hp").value) return; // bot trap

      var data = new FormData(form);

      if (!FORMSPREE_ID) {
        var name = (data.get("first_name") + " " + data.get("last_name")).trim();
        var picked = data.getAll("interest").join(", ");
        var subject = "[Optimum French] " + name + (picked ? " — " + picked : "");
        var body =
          data.get("message") + "\n\n" + name + "\n" + data.get("email") +
          (data.get("phone") ? "\n" + data.get("phone") : "");
        location.href =
          "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        return;
      }

      var submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      status.className = "form-status";
      status.textContent = t(currentLang, "form.sending");

      fetch("https://formspree.io/f/" + FORMSPREE_ID, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          status.className = "form-status ok";
          status.textContent = t(currentLang, "form.ok");
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = t(currentLang, "form.err");
        })
        .then(function () { submit.disabled = false; });
    });
  }
})();
