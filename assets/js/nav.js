document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'premiere-visite.html', label: 'Première visite' },
    { href: 'a-propos.html', label: 'À propos' },
    { href: 'messages.html', label: 'Messages' },
    { href: 'ministeres.html', label: 'Ministères' },
    { href: 'evenements.html', label: 'Événements' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const currentPath = window.location.pathname;

  function isActive(href) {
    if (href === 'index.html') {
      return currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/');
    }
    return currentPath.endsWith(href);
  }

  function buildNavLinks(mobile = false) {
    return pages.map(p => {
      const active = isActive(p.href);
      if (mobile) {
        return `<a href="${p.href}" style="display:block;padding:16px 24px;color:${active ? '#f9df7c' : '#ffffff'};font-family:'Poppins',sans-serif;font-weight:${active ? '600' : '400'};font-size:1rem;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.12);transition:color 0.2s;">${p.label}</a>`;
      }
      return `<a href="${p.href}" style="color:${active ? '#f9df7c' : '#ffffff'};font-family:'Poppins',sans-serif;font-weight:500;font-size:0.9rem;text-decoration:none;transition:color 0.2s;${active ? '' : ''}" onmouseover="this.style.color='#f9df7c'" onmouseout="this.style.color='${active ? '#f9df7c' : '#ffffff'}'">${p.label}</a>`;
    }).join('');
  }

  // ── HEADER ──
  const header = document.getElementById('main-header');
  if (header) {
    header.innerHTML = `
      <div style="background:#005fb5;position:sticky;top:0;z-index:50;box-shadow:0 2px 12px rgba(0,0,0,0.15);">
        <div style="max-width:1200px;margin:0 auto;padding:0 24px;height:70px;display:flex;align-items:center;justify-content:space-between;">

          <!-- Logo -->
          <a href="index.html" style="text-decoration:none;line-height:1.2;">
            <div style="font-family:'Poppins',sans-serif;font-weight:700;color:#f9df7c;font-size:1.1rem;letter-spacing:2px;">LA PUISSANCE</div>
            <div style="font-family:'Poppins',sans-serif;font-weight:300;color:#ffffff;font-size:0.8rem;">Belgique</div>
          </a>

          <!-- Nav desktop -->
          <nav style="display:flex;align-items:center;gap:28px;" class="desktop-nav">
            ${buildNavLinks(false)}
          </nav>

          <!-- CTA desktop + hamburger -->
          <div style="display:flex;align-items:center;gap:16px;">
            <a href="premiere-visite.html" class="desktop-cta" style="background:#f9df7c;color:#000000;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.85rem;padding:10px 20px;border-radius:6px;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#e8cc6a'" onmouseout="this.style.background='#f9df7c'">Participer ce dimanche</a>
            <button id="hamburger" aria-label="Menu" style="display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;">
              <span style="display:block;width:24px;height:2px;background:#ffffff;border-radius:2px;"></span>
              <span style="display:block;width:24px;height:2px;background:#ffffff;border-radius:2px;"></span>
              <span style="display:block;width:24px;height:2px;background:#ffffff;border-radius:2px;"></span>
            </button>
          </div>
        </div>

        <!-- Menu mobile -->
        <div id="mobile-menu" style="background:#005fb5;position:absolute;top:70px;left:0;width:100%;z-index:49;border-top:1px solid rgba(255,255,255,0.15);">
          ${buildNavLinks(true)}
          <div style="padding:16px 24px;">
            <a href="premiere-visite.html" style="display:block;text-align:center;background:#f9df7c;color:#000000;font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;padding:14px;border-radius:6px;text-decoration:none;">Participer ce dimanche</a>
          </div>
        </div>
      </div>

      <style>
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          #hamburger { display: flex !important; }
        }
        #mobile-menu { display: none; }
        #mobile-menu.open { display: block; }
      </style>
    `;
  }

  // ── FOOTER ──
  const footer = document.getElementById('main-footer');
  if (footer) {
    footer.innerHTML = `
      <div style="background:#000000;color:#ffffff;font-family:'Poppins',sans-serif;">

        <!-- Ligne 1 : 3 colonnes -->
        <div style="max-width:1200px;margin:0 auto;padding:60px 24px 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;">

          <!-- Col 1 : Logo + tagline -->
          <div>
            <div style="font-weight:700;color:#f9df7c;font-size:1.2rem;letter-spacing:2px;margin-bottom:4px;">LA PUISSANCE</div>
            <div style="font-weight:300;color:#ffffff;font-size:0.9rem;margin-bottom:16px;">Belgique</div>
            <p style="font-weight:300;color:rgba(255,255,255,0.75);font-size:0.9rem;line-height:1.6;">Une famille chrétienne au cœur de la Belgique.</p>
          </div>

          <!-- Col 2 : Navigation -->
          <div>
            <div style="font-weight:600;color:#f9df7c;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;">Navigation</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${pages.map(p => `<a href="${p.href}" style="color:rgba(255,255,255,0.75);font-size:0.9rem;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#f9df7c'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">${p.label}</a>`).join('')}
            </div>
          </div>

          <!-- Col 3 : Contact -->
          <div>
            <div style="font-weight:600;color:#f9df7c;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;">Nous rejoindre</div>
            <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
              <div style="color:rgba(255,255,255,0.75);font-size:0.9rem;">📍 Chaussée de Mons 244, 1070 Anderlecht</div>
              <div style="color:rgba(255,255,255,0.75);font-size:0.9rem;">📅 Culte : chaque dimanche de 10h00 à 12h30</div>
            </div>
            <a href="https://wa.me/32493942798" style="display:block;text-align:center;background:#25D366;color:#ffffff;font-weight:600;font-size:0.9rem;padding:12px;border-radius:6px;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#1da851'" onmouseout="this.style.background='#25D366'">
              <svg style="display:inline;vertical-align:middle;margin-right:6px;" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contacter sur WhatsApp
            </a>
          </div>
        </div>

        <!-- Ligne 2 : Réseaux sociaux -->
        <div style="border-top:1px solid #222222;padding:24px;display:flex;justify-content:center;gap:16px;">
          <!-- Facebook -->
          <a href="#" aria-label="Facebook" style="width:40px;height:40px;border-radius:50%;background:#005fb5;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='#f9df7c';this.querySelector('svg').style.fill='#000'" onmouseout="this.style.background='#005fb5';this.querySelector('svg').style.fill='#fff'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <!-- Instagram -->
          <a href="#" aria-label="Instagram" style="width:40px;height:40px;border-radius:50%;background:#005fb5;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='#f9df7c';this.querySelector('svg').style.fill='#000'" onmouseout="this.style.background='#005fb5';this.querySelector('svg').style.fill='#fff'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <!-- YouTube -->
          <a href="#" aria-label="YouTube" style="width:40px;height:40px;border-radius:50%;background:#005fb5;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='#f9df7c';this.querySelector('svg').style.fill='#000'" onmouseout="this.style.background='#005fb5';this.querySelector('svg').style.fill='#fff'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#005fb5"/></svg>
          </a>
          <!-- TikTok -->
          <a href="#" aria-label="TikTok" style="width:40px;height:40px;border-radius:50%;background:#005fb5;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='#f9df7c'" onmouseout="this.style.background='#005fb5'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
          </a>
        </div>

        <!-- Ligne 3 : Copyright -->
        <div style="border-top:1px solid #222222;padding:20px 24px;text-align:center;">
          <p style="color:#666666;font-size:0.8rem;">© 2026 Église la Puissance Belgique — Tous droits réservés</p>
        </div>
      </div>

      <style>
        @media (max-width: 768px) {
          #main-footer .footer-grid { grid-template-columns: 1fr !important; }
        }
      </style>
    `;

    // Responsive footer grid
    const footerGrid = footer.querySelector('div[style*="grid-template-columns:repeat(3"]');
    if (footerGrid) {
      footerGrid.classList.add('footer-grid');
      const style = document.createElement('style');
      style.textContent = '@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important;}}';
      document.head.appendChild(style);
    }
  }

  // Re-observe new .animate elements injected by nav
  if (typeof animateObserver !== 'undefined') {
    document.querySelectorAll('.animate').forEach(el => {
      if (!el.classList.contains('visible')) animateObserver.observe(el);
    });
  }
});
