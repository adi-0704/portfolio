/* Renders the page from data.js. No framework, no build step. */
(function () {
  "use strict";

  var D = window.DATA;
  var $ = function (id) { return document.getElementById(id); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ── hero ────────────────────────────────────────────────── */

  var parts = D.name.split(" ");
  $("name-a").textContent = parts[0];
  $("name-b").textContent = parts.slice(1).join(" ") + ".";
  $("availability").textContent = D.availability;
  $("tagline").textContent = D.tagline;
  $("intro").textContent = D.intro;
  $("hero-tag").textContent = D.role.toUpperCase();
  $("portrait").alt = "Illustrated portrait of " + D.name;
  $("year").textContent = new Date().getFullYear();

  ["cta-gh", "c-gh"].forEach(function (id) { $(id).href = D.links.github; });
  ["cta-li", "c-li"].forEach(function (id) { $(id).href = D.links.linkedin; });

  $("contact-line").textContent =
    "I'm an " + D.role + " at " + D.company + ", based in " + D.location +
    ", and I'm open to new work. If you're building something with agents, " +
    "retrieval or automation, I'd like to hear about it.";

  $("stats").innerHTML = D.stats.map(function (s) {
    return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
  }).join("");

  /* ── role cycler ─────────────────────────────────────────── */

  var cycle = $("rolecycle");
  var roles = D.roles;
  cycle.innerHTML = roles[0];
  if (!reduced && roles.length > 1) {
    var i = 0;
    setInterval(function () {
      cycle.style.transition = "opacity .3s ease, transform .3s ease";
      cycle.style.opacity = "0";
      cycle.style.transform = "translateY(-6px)";
      setTimeout(function () {
        i = (i + 1) % roles.length;
        cycle.innerHTML = roles[i];
        cycle.style.transform = "translateY(6px)";
        requestAnimationFrame(function () {
          cycle.style.opacity = "1";
          cycle.style.transform = "none";
        });
      }, 300);
    }, 3000);
  }

  /* ── projects ────────────────────────────────────────────── */

  $("projects").innerHTML = D.projects.map(function (p) {
    var links = '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
      'Code <span class="arrow">&rarr;</span></a>';
    if (p.demo) {
      links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener">' +
        'Live demo <span class="arrow">&rarr;</span></a>';
    }
    return '' +
      '<article class="card reveal' + (p.featured ? " is-featured" : "") + '">' +
      '<div class="card-top">' +
        "<h3>" + esc(p.name) + "</h3>" +
        '<span class="card-period">' + esc(p.period) + "</span>" +
      "</div>" +
      "<p>" + esc(p.blurb) + "</p>" +
      '<div class="tags">' + p.tags.map(function (t) {
        return '<span class="tag-chip">' + esc(t) + "</span>";
      }).join("") + "</div>" +
      '<div class="card-links">' + links + "</div>" +
      "</article>";
  }).join("");

  /* ── timeline ────────────────────────────────────────────── */

  $("timeline").innerHTML = D.experience.map(function (e) {
    return '' +
      '<li class="tl-item reveal' + (e.current ? " now" : "") + '">' +
        '<div class="tl-head">' +
          '<p class="tl-title">' + esc(e.title) +
            ' <span class="tl-org">· ' + esc(e.org) + "</span></p>" +
          '<span class="tl-period">' + esc(e.period) + "</span>" +
        "</div>" +
        '<p class="tl-kind">' + esc(e.kind) + "</p>" +
        '<p class="tl-note">' + esc(e.note) + "</p>" +
        '<div class="tags">' + e.skills.map(function (s) {
          return '<span class="tag-chip">' + esc(s) + "</span>";
        }).join("") + "</div>" +
      "</li>";
  }).join("");

  var ed = D.education;
  $("education").innerHTML =
    '<span class="edu-label">EDUCATION</span>' +
    "<h3>" + esc(ed.title) + "</h3>" +
    '<span class="tl-period">' + esc(ed.org) + " · " + esc(ed.period) + "</span>" +
    "<p>" + esc(ed.note) + "</p>";

  /* ── skills ──────────────────────────────────────────────── */

  $("skills").innerHTML = D.skillGroups.map(function (g) {
    return '<div class="stack-col reveal"><h3>' + esc(g.label) + "</h3><ul>" +
      g.items.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
      "</ul></div>";
  }).join("");

  /* ── reveal on scroll ────────────────────────────────────── */

  var items = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var sibs = Array.prototype.slice.call(
          en.target.parentNode.querySelectorAll(":scope > .reveal")
        );
        en.target.style.transitionDelay = Math.min(sibs.indexOf(en.target), 6) * 70 + "ms";
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── nav state + cursor spotlight ────────────────────────── */

  var nav = document.querySelector(".nav");
  var onScroll = function () { nav.classList.toggle("stuck", window.scrollY > 24); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!reduced && window.matchMedia("(pointer: fine)").matches) {
    var spot = $("spot");
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    window.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(follow);
    }, { passive: true });
    function follow() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      spot.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)";
      raf = Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5
        ? requestAnimationFrame(follow) : null;
    }
  } else {
    $("spot").style.display = "none";
  }
})();
