<script lang="ts">
  import "../lib/styles/themes.css";
  import { page } from "$app/stores";

  type NavLink = { name: string; href: string };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Accessories", href: "/accessories" },
    { name: "Beauty", href: "/beauty" },
    { name: "Home Decor", href: "/home-decor" },
    { name: "Ágappe Curate", href: "/curate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
</script>

<div class="layout">
  <header class="header">
    <a href="/" class="logo">
      <img src="/images/agape.jpeg" alt="Ágappe logo" class="logo-img" />
      <span class="logo-text">ÁGAPPE</span>
    </a>

    <nav class="nav">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-link {($page.url.pathname === link.href) || ($page.url.pathname.startsWith(link.href) && link.href !== "/") ? "active" : ""}"
        >
          {link.name}
        </a>
      {/each}
    </nav>
  </header>

  <main class="page">
    <slot />
  </main>

  <footer class="footer footer-cream">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">ÁGAPPE</span>
        <p class="footer-tagline">Curated treasures with elegance.</p>
      </div>

      <div class="footer-columns">
        <div>
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/curate">Ágappe Curate</a>
        </div>
        <div>
          <h4>Brand</h4>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Follow</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </div>

    <p class="footer-copy">
      © {new Date().getFullYear()} Ágappe — Elegance with intention.
    </p>
  </footer>
</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* HEADER CREMA, EDITORIAL */
  .header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 2.75rem;
    background: linear-gradient(180deg, rgba(245, 238, 228, 0.98), rgba(237, 223, 207, 0.96));
    border-bottom: 1px solid rgba(88, 52, 33, 0.16);
    backdrop-filter: blur(18px);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    text-decoration: none;
  }

  .logo-img {
    width: 46px;
    height: 46px;
    border-radius: 999px;
    object-fit: cover;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(214, 176, 106, 0.9);
  }

  .logo-text {
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 1.32rem;
    letter-spacing: 0.18em;
    color: var(--color-emerald);
  }

  .nav {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  .nav-link {
    position: relative;
    font-size: 0.82rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    text-decoration: none;
    color: #2a1a11;
    padding-bottom: 0.15rem;
    transition: color 0.2s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0;
    background: linear-gradient(90deg, var(--color-gold), var(--color-emerald));
    transition: width 0.25s ease;
  }

  .nav-link:hover {
    color: var(--color-emerald);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link.active {
    color: var(--accent-ruby);
  }

  .nav-link.active::after {
    width: 100%;
  }

  .page {
    flex: 1;
    padding: 2.8rem 2.75rem 3.5rem;
  }

  /* FOOTER EDITORIAL PREMIUM */
  .footer {
    padding: 2.4rem 2.75rem 1.4rem;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 1.5rem;
  }

  .footer-logo {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    letter-spacing: 0.22em;
  }

  .footer-tagline {
    margin-top: 0.4rem;
    color: rgba(245, 232, 210, 0.8);
    font-size: 0.9rem;
  }

  .footer-columns {
    display: flex;
    gap: 3rem;
    font-size: 0.85rem;
  }

  .footer-columns h4 {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.75rem;
    margin-bottom: 0.8rem;
    color: rgba(245, 232, 210, 0.9);
  }

  .footer-columns a {
    display: block;
    text-decoration: none;
    color: rgba(245, 232, 210, 0.78);
    margin-bottom: 0.25rem;
  }

  .footer-columns a:hover {
    color: var(--color-gold-soft);
  }

  .footer-copy {
    margin: 0;
    font-size: 0.78rem;
    color: rgba(245, 232, 210, 0.7);
    text-align: center;
  }

  @media (max-width: 900px) {
    .header {
      padding-inline: 1.3rem;
      gap: 1rem;
    }

    .nav {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .page {
      padding-inline: 1.3rem;
    }

    .footer {
      padding-inline: 1.3rem;
    }

    .footer-inner {
      flex-direction: column;
      gap: 1.8rem;
    }
  }
</style>
