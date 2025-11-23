<script lang="ts">
  const title = "El Pegaso Dorado de Ágappe";
  const subtitle = "Fuerza terrenal. Inspiración celestial. Tesoros con alma.";
</script>

<main class="about">
  <header class="about__hero" role="banner" aria-labelledby="about-title">
    <div class="about__copy">
      <p class="eyebrow">Acerca de la marca</p>
      <h1 id="about-title" class="about__title">{title}</h1>
      <p class="about__subtitle">{subtitle}</p>
      <p class="lead">
        Ágappe no vende cosas: comparte portales de energía. Aquí contamos por
        qué cada pieza existe —y qué significa el Pegaso dorado que guía nuestra
        mirada.
      </p>
    </div>

    <figure class="about__visual" aria-hidden="true">
      <img src="/images/agape.jpeg" alt="" class="pegaso" />
      <figcaption class="vis-caption">
        El Pegaso dorado — guardián, inspiración, movimiento.
      </figcaption>
    </figure>
  </header>

  <section class="content">
    <div class="grid-main">
      <article class="card">
        <h2 class="card__title">Esencia</h2>
        <p>
          Ágappe es un universo de tesoros con alma. Una marca que une energía,
          lujo y propósito a través de piezas que inspiran conexión, belleza y
          transformación. Cada producto cuenta una historia: joyas con intención,
          objetos curados, detalles decorativos y moda con energía. Ágappe no
          vende cosas: comparte portales de energía.
        </p>
      </article>

      <article class="card">
        <h2 class="card__title">Misión</h2>
        <p>
          Inspirar a cada persona —especialmente a las mujeres— a reconectarse
          con su esencia divina a través de objetos, texturas y experiencias que
          vibren con amor y propósito.
        </p>
      </article>

      <article class="card">
        <h2 class="card__title">Visión</h2>
        <p>
          Posicionar Ágappe como un referente de lujo consciente y espiritualidad
          moderna, donde cada detalle combine estética, energía y alma.
        </p>
      </article>

      <article class="card">
        <h2 class="card__title">Palabras clave</h2>
        <p class="keywords">
          Luz · Tesoro · Ritual · Propósito · Energía · Transformación · Belleza
          consciente · Divinidad cotidiana · Autenticidad
        </p>
      </article>

      <article class="card">
        <h2 class="card__title">Valores</h2>
        <ul class="values">
          <li><strong>Autenticidad:</strong> cada pieza vibra con su propia historia.</li>
          <li><strong>Energía:</strong> lo visible y lo invisible coexisten en armonía.</li>
          <li><strong>Transformación:</strong> lo que no se desecha, se transforma.</li>
          <li><strong>Amor:</strong> todo se elige y se crea desde el corazón.</li>
          <li>
            <strong>Belleza consciente:</strong> lujo que no grita, susurra energía
            divina.
          </li>
        </ul>
      </article>

      <article class="card pegaso-story">
        <h2 class="card__title">El Pegaso dorado</h2>

        <p>
          El Pegaso dorado que da vida a nuestro logo no es solo un símbolo: es
          el alma visual de la marca. Representa la unión entre la fuerza
          terrenal y la inspiración celestial —la misma conexión que existe en
          cada creación de Ágappe: lo tangible y lo divino, lo material y lo
          energético.
        </p>

        <p>
          Este ser alado se proyecta de lado, en movimiento, porque Ágappe no se
          detiene: fluye, evoluciona y se transforma constantemente, igual que la
          energía que hay detrás de cada pieza.
        </p>

        <p>
          El dorado mate, tipo foil, refleja la esencia del lujo consciente: no
          busca brillar con estridencia, sino irradiar luz propia, suave y serena
          —la luz del alma cuando está en equilibrio.
        </p>

        <p>
          El Pegaso no solo vuela: eleva la energía. Representa a la mujer libre,
          intuitiva y creadora; aquella que transforma la experiencia en belleza
          y la materia en luz. Es el guardián de nuestros tesoros y el símbolo de
          fuerza, propósito y divinidad en movimiento.
        </p>
      </article>
    </div>

    <aside class="card contact">
      <h3>¿Quieres colaborar?</h3>
      <p>
        Escríbenos a
        <a href="mailto:hola@agappe.example">hola@agappe.example</a> — contamos
        historias, comisionamos piezas y celebramos la creación consciente.
      </p>
      <a href="/colecciones" class="btn btn--gold">Explorar colecciones</a>
    </aside>
  </section>
</main>

<style>
  .about {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
  }

  .about__hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) 320px;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2.8rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
    color: var(--text-muted);
  }

  .about__title {
    font-family: var(--font-serif);
    font-size: 2.25rem;
    margin: 0 0 0.5rem;
    color: var(--text-main);
  }

  .about__subtitle {
    color: var(--text-muted);
    margin: 0 0 1rem;
    font-weight: 500;
  }

  .lead {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .about__visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    text-align: center;
  }

  .pegaso {
    width: 100%;
    height: auto;
    max-width: 320px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    object-fit: cover;
  }

  .vis-caption {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .content {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) 320px;
    gap: 2rem;
    align-items: flex-start;
  }

  .grid-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: var(--card-bg);
    border-radius: 14px;
    padding: 1.3rem 1.4rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    color: var(--text-main);
  }

  .card__title {
    font-family: var(--font-serif);
    font-size: 1.05rem;
    margin: 0 0 0.6rem;
    color: var(--text-main);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .keywords {
    color: var(--text-muted);
    font-weight: 600;
    letter-spacing: 0.6px;
  }

  .values {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--text-muted);
  }

  .values li {
    margin-bottom: 0.6rem;
  }

  .lines li {
    margin-bottom: 1rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .pegaso-story p {
    margin-bottom: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .contact .btn {
    align-self: flex-start;
  }

  .btn {
    padding: 0.6rem 1rem;
    border-radius: 999px;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
  }

  .btn--gold {
    background: linear-gradient(135deg, var(--primary), var(--primary-deep));
    color: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 980px) {
    .about__hero,
    .content {
      grid-template-columns: 1fr;
    }

    .about__visual {
      order: -1;
    }
  }
</style>
