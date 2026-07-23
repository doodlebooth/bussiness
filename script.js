/* ══════════════════════════════════════════════
   SnapBooth Studio — Website JavaScript
   ══════════════════════════════════════════════ */

/**
 * showPage(id, linkEl)
 * Hides all .page-section elements and shows the one with the given id.
 * Also updates the active state on nav links.
 *
 * @param {string} id      - The id of the section to show (e.g. 'home', 'terms')
 * @param {Element} linkEl - The clicked <a> element (optional)
 */
function showPage(id, linkEl) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(function(s) {
    s.classList.remove('visible');
  });

  // Show the target section
  var target = document.getElementById(id);
  if (target) {
    target.classList.add('visible');
  }

  // Remove active class from all nav & mobile links
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function(a) {
    a.classList.remove('active');
  });

  // Set active on the clicked link (if provided)
  if (linkEl) {
    linkEl.classList.add('active');
  } else {
    // Fallback: match links by onclick attribute
    document.querySelectorAll('[onclick*="\'' + id + '\'"]').forEach(function(a) {
      a.classList.add('active');
    });
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return false;
}

/**
 * toggleMenu()
 * Opens/closes the mobile hamburger menu.
 */
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

/**
 * Prevent default anchor navigation for all href="#" links.
 */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
});
