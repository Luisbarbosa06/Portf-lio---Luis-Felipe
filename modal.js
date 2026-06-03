/* ============================================
   MODAL DE PROJETO
   Dados dos projetos + abertura/fechamento
   Funciona apenas com HTML, CSS e JS puro.
   ============================================ */
(function () {
  'use strict';

  /* ---------------------------------------------
     DADOS DOS PROJETOS
     A ordem segue a ordem dos cards no carrossel.
     O campo "id" deve ser igual ao data-project
     do card correspondente no index.html.
     --------------------------------------------- */
  const projects = [
    {
      id: "igor-dados",
      name: "Portfólio Igor Souza",
      subtitle: "Consultor & Especialista em Dados",
      badge: "Projeto online",
      cover: "Portfolio_igor.png",
      description: [
        "Portfólio profissional de Igor Souza, Consultor & Especialista em Dados com mais de 6 anos de experiência.",
        "Voltado para áreas de Comercial, Estoque e Operações que precisam decidir com base em fatos, transformando dados em informação clara para a tomada de decisão."
      ],
      features: [
        "Apresentação da trajetória e especialidades em dados aplicados ao negócio",
        "Foco em decisões orientadas por dados nas áreas Comercial, Estoque e Operações",
        "Layout moderno e responsivo, hospedado na Vercel",
        "Vitrine de projetos e resultados em análise de dados"
      ],
      liveUrl: "https://portfolioigorsouza.vercel.app/",
      githubUrl: "",
      stack: ["Análise de Dados", "Power BI", "SQL", "Dashboards"]
    },
    {
      id: "enterbras",
      name: "Enterbras Enterprise Inc.",
      subtitle: "Plataforma de E-commerce de Armas de Fogo — EUA",
      badge: "Em produção",
      cover: "enterbras.jpeg",
      gallery: ["enterbras.jpeg", "enterbras2.png"],
      description: [
        "Sistema full stack desenvolvido para a Enterbras Enterprise Inc., empresa americana do setor de armas de fogo, cobrindo todo o fluxo de venda online com conformidade legal nos 50 estados dos EUA.",
        "A plataforma une validação de dealers licenciados, cálculo de frete em tempo real, pagamentos, geração automática de documentos fiscais e um painel administrativo completo para a gestão da operação."
      ],
      features: [
        "Integração com API FFL (Federal Firearms License) para validação automática de dealers licenciados como destino obrigatório de envio",
        "Cálculo de frete em tempo real com FedEx, UPS e USPS, com geração automática de etiquetas e rastreamento por pedido",
        "Pagamento via Zelle com fluxo completo de confirmação e histórico de transações",
        "Geração automática de invoice e comprovante de pagamento em PDF, com envio por e-mail ao comprador e ao dealer FFL",
        "Regras de conformidade por estado: restrições de produto, cálculo de sales tax e verificação de idade no checkout",
        "Painel administrativo completo para gestão de pedidos, estoque, transportadoras e documentos fiscais"
      ],
      liveUrl: "https://enterbras.com",
      githubUrl: "",
      stack: ["React", "TypeScript", "JavaScript", "Node.js", "PHP", "API REST"]
    },
    {
      id: "farmausa",
      name: "Rastreamento FarmaUSA",
      subtitle: "Sistema de rastreamento de envios de medicamentos",
      badge: "Em produção",
      cover: "rastreio.png",
      description: [
        "Sistema web para rastreamento de envios de medicamentos importados, com timeline em tempo real e notificações automáticas.",
        "Desenvolvido para acompanhar cada etapa da entrega e manter o cliente informado de forma transparente."
      ],
      features: [
        "Rastreamento em tempo real via API de transportadoras",
        "Timeline visual de status do pedido",
        "Notificações automáticas por e-mail",
        "Dashboard administrativo para gestão de envios"
      ],
      liveUrl: "",
      githubUrl: "",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "API REST"]
    },
    {
      id: "financas",
      name: "Dashboard de Finanças",
      subtitle: "Aplicação de controle financeiro pessoal",
      badge: "Projeto online",
      cover: "projeto4.jpeg",
      description: [
        "Aplicação para controle financeiro pessoal com gráficos interativos e relatórios detalhados.",
        "Permite acompanhar receitas, despesas e a evolução do saldo de forma visual e organizada."
      ],
      features: [
        "Autenticação de usuários e dados na nuvem com Supabase",
        "Gráficos interativos de receitas e despesas",
        "Relatórios financeiros detalhados",
        "Interface responsiva construída com React e TypeScript"
      ],
      liveUrl: "https://minhacarteira-finan.vercel.app/login",
      githubUrl: "",
      stack: ["React", "TypeScript", "Supabase", "Vite"]
    },
    {
      id: "sorvete",
      name: "Sorvete Artesanal",
      subtitle: "Site institucional para sorveteria artesanal",
      badge: "Projeto concluído",
      cover: "Layout-inicial1.png",
      description: [
        "Site institucional desenvolvido para uma sorveteria artesanal, com foco em experiência do usuário e design responsivo.",
        "O projeto apresenta os produtos da marca com um layout moderno e navegação fluida em qualquer dispositivo."
      ],
      features: [
        "Interface desenvolvida com React e componentização",
        "Navegação entre páginas com App Router",
        "Layout totalmente responsivo para mobile e desktop"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Luisbarbosa06/Projeto---Sorveteria",
      stack: ["React", "App Router", "JavaScript", "CSS3"]
    },
    {
      id: "cafeteria",
      name: "Cafeteria Manhattan",
      subtitle: "Site institucional para cafeteria",
      badge: "Projeto concluído",
      cover: "Cafeteria2.jpeg",
      description: [
        "Site institucional para uma cafeteria com alma nova-iorquina.",
        "Layout moderno e experiência acolhedora, com foco em transmitir a atmosfera da marca."
      ],
      features: [
        "Layout moderno com identidade visual própria",
        "Design totalmente responsivo",
        "Estrutura semântica em HTML5 e CSS3"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Luisbarbosa06/Cafeteria-Manhattan",
      stack: ["HTML5", "CSS3", "Responsivo"]
    }
  ];

  /* --------------------------------------------- */

  const modal = document.getElementById('modalProjeto');
  if (!modal) return;

  const panel       = modal.querySelector('.modal-conteudo');
  const capaImg     = document.getElementById('modalCapa');
  const galeria     = document.getElementById('modalGaleria');
  const badgeEl     = document.getElementById('modalBadge');
  const tituloEl    = document.getElementById('modalTitulo');
  const subtituloEl = document.getElementById('modalSubtitulo');
  const descricaoEl = document.getElementById('modalDescricao');
  const secaoFeat   = document.getElementById('modalSecaoFeatures');
  const featuresEl  = document.getElementById('modalFeatures');
  const stackEl     = document.getElementById('modalStack');
  const linksEl     = document.getElementById('modalLinks');
  const linkLive    = document.getElementById('modalLinkLive');
  const linkGithub  = document.getElementById('modalLinkGithub');
  const btnFechar   = document.getElementById('modalFechar');

  let ultimoFoco = null;
  let imagensProjetoAtual = [];

  const ICONE_CHECK =
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  const ICONE_X =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const ICONE_SETA_ESQ =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
  const ICONE_SETA_DIR =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  const ICONE_ZOOM =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';

  /* ---------- Lightbox: visualização ampliada das imagens ---------- */
  let lbImagens = [];
  let lbIndice = 0;

  const lightbox = document.createElement('div');
  lightbox.className = 'modal-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Imagem ampliada do projeto');
  lightbox.innerHTML =
    '<button type="button" class="modal-lightbox-fechar" aria-label="Fechar imagem">' + ICONE_X + '</button>' +
    '<button type="button" class="modal-lightbox-nav modal-lightbox-prev" aria-label="Imagem anterior">' + ICONE_SETA_ESQ + '</button>' +
    '<button type="button" class="modal-lightbox-nav modal-lightbox-next" aria-label="Próxima imagem">' + ICONE_SETA_DIR + '</button>' +
    '<img class="modal-lightbox-img" alt="">' +
    '<span class="modal-lightbox-contador"></span>';
  document.body.appendChild(lightbox);

  const lbImg      = lightbox.querySelector('.modal-lightbox-img');
  const lbFechar   = lightbox.querySelector('.modal-lightbox-fechar');
  const lbPrev     = lightbox.querySelector('.modal-lightbox-prev');
  const lbNext     = lightbox.querySelector('.modal-lightbox-next');
  const lbContador = lightbox.querySelector('.modal-lightbox-contador');

  function renderLightbox() {
    lbImg.src = lbImagens[lbIndice];
    lbImg.alt = 'Imagem ' + (lbIndice + 1) + ' do projeto (ampliada)';
    const temVarias = lbImagens.length > 1;
    lbPrev.style.display = temVarias ? 'flex' : 'none';
    lbNext.style.display = temVarias ? 'flex' : 'none';
    lbContador.style.display = temVarias ? 'block' : 'none';
    lbContador.textContent = (lbIndice + 1) + ' / ' + lbImagens.length;
    lightbox.scrollTop = 0;
  }

  function abrirLightbox(imagens, indice) {
    lbImagens = imagens || [];
    if (!lbImagens.length) return;
    lbIndice = indice || 0;
    renderLightbox();
    lightbox.classList.add('is-open');
    window.requestAnimationFrame(function () { lbFechar.focus(); });
  }

  function fecharLightbox() {
    lightbox.classList.remove('is-open');
    if (btnFechar) btnFechar.focus();
  }

  function navegarLightbox(delta) {
    if (lbImagens.length < 2) return;
    lbIndice = (lbIndice + delta + lbImagens.length) % lbImagens.length;
    renderLightbox();
  }

  lbFechar.addEventListener('click', fecharLightbox);
  lbPrev.addEventListener('click', function () { navegarLightbox(-1); });
  lbNext.addEventListener('click', function () { navegarLightbox(1); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) fecharLightbox();
  });

  /* A capa do modal também abre a imagem ampliada */
  const capaWrap = modal.querySelector('.modal-capa');
  if (capaWrap) {
    const zoomHint = document.createElement('span');
    zoomHint.className = 'modal-capa-zoom';
    zoomHint.innerHTML = ICONE_ZOOM + ' Ampliar';
    capaWrap.appendChild(zoomHint);
    capaWrap.addEventListener('click', function () {
      if (imagensProjetoAtual.length) abrirLightbox(imagensProjetoAtual, 0);
    });
  }

  /* ---------- Helpers ---------- */
  function getProjeto(id) {
    return projects.find(function (p) { return String(p.id) === String(id); });
  }

  function ehStatusLive(texto) {
    return /produ|online|ao vivo|live/i.test(texto || '');
  }

  /* ---------- Preenche o modal com os dados ---------- */
  function preencherModal(p) {
    // imagens / galeria
    const imagens = (p.gallery && p.gallery.length) ? p.gallery : [p.cover];
    imagensProjetoAtual = imagens;
    capaImg.src = imagens[0];
    capaImg.alt = 'Captura de tela do projeto ' + p.name;

    galeria.innerHTML = '';
    if (imagens.length > 1) {
      imagens.forEach(function (src, i) {
        const thumb = document.createElement('button');
        thumb.type = 'button';
        thumb.className = 'modal-galeria-thumb';
        thumb.setAttribute('aria-label', 'Ampliar imagem ' + (i + 1) + ' do projeto ' + p.name);
        thumb.innerHTML = '<img src="' + src + '" alt="Imagem ' + (i + 1) + ' do projeto ' + p.name + '">';
        thumb.addEventListener('click', function () {
          abrirLightbox(imagens, i);
        });
        galeria.appendChild(thumb);
      });
      galeria.style.display = 'flex';
    } else {
      galeria.style.display = 'none';
    }

    // badge de status
    badgeEl.textContent = p.badge || '';
    badgeEl.style.display = p.badge ? 'inline-flex' : 'none';
    badgeEl.classList.toggle('modal-badge--live', ehStatusLive(p.badge));

    // título / subtítulo
    tituloEl.textContent = p.name;
    if (p.subtitle) {
      subtituloEl.textContent = p.subtitle;
      subtituloEl.style.display = 'block';
    } else {
      subtituloEl.style.display = 'none';
    }

    // descrição (aceita string ou array de parágrafos)
    descricaoEl.innerHTML = '';
    const paragrafos = Array.isArray(p.description) ? p.description : [p.description];
    paragrafos.forEach(function (txt) {
      const par = document.createElement('p');
      par.textContent = txt;
      descricaoEl.appendChild(par);
    });

    // "O que foi construído"
    featuresEl.innerHTML = '';
    if (p.features && p.features.length) {
      p.features.forEach(function (f) {
        const li = document.createElement('li');
        li.innerHTML =
          '<span class="modal-feature-check">' + ICONE_CHECK + '</span><span></span>';
        li.lastChild.textContent = f;
        featuresEl.appendChild(li);
      });
      secaoFeat.style.display = 'block';
    } else {
      secaoFeat.style.display = 'none';
    }

    // tecnologias
    stackEl.innerHTML = '';
    (p.stack || []).forEach(function (tec) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = tec;
      stackEl.appendChild(tag);
    });

    // links
    if (p.liveUrl) {
      linkLive.href = p.liveUrl;
      linkLive.style.display = 'inline-flex';
    } else {
      linkLive.style.display = 'none';
    }

    if (p.githubUrl) {
      linkGithub.href = p.githubUrl;
      linkGithub.style.display = 'inline-flex';
    } else {
      linkGithub.style.display = 'none';
    }

    linksEl.style.display = (p.liveUrl || p.githubUrl) ? 'flex' : 'none';

    panel.scrollTop = 0;
  }

  /* ---------- Abrir / Fechar ---------- */
  function abrirModal(id, origem) {
    const p = getProjeto(id);
    if (!p) return;
    ultimoFoco = origem || document.activeElement;
    preencherModal(p);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-aberto');
    window.requestAnimationFrame(function () { btnFechar.focus(); });
  }

  function fecharModal() {
    if (!modal.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-aberto');
    if (ultimoFoco && typeof ultimoFoco.focus === 'function') {
      ultimoFoco.focus();
    }
  }

  /* ---------- Abrir pelos cards (delegação de eventos:
       funciona também para os clones do carrossel) ---------- */
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.projetos-card');
    if (!card) return;
    if (e.target.closest('a')) return; // deixa links reais funcionarem
    const id = card.getAttribute('data-project');
    if (id) abrirModal(id, card);
  });

  // abertura por teclado (Enter / Espaço) nos cards
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest && e.target.closest('.projetos-card');
    if (!card) return;
    e.preventDefault();
    const id = card.getAttribute('data-project');
    if (id) abrirModal(id, card);
  });

  /* ---------- Fechar: botão X, clique fora e ESC ---------- */
  btnFechar.addEventListener('click', fecharModal);

  modal.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-modal-close')) fecharModal();
  });

  document.addEventListener('keydown', function (e) {
    // o lightbox tem prioridade sobre o modal
    if (lightbox.classList.contains('is-open')) {
      if (e.key === 'Escape') fecharLightbox();
      else if (e.key === 'ArrowLeft') navegarLightbox(-1);
      else if (e.key === 'ArrowRight') navegarLightbox(1);
      return;
    }
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      fecharModal();
    }
  });

  /* ---------- Mantém o foco dentro do modal (acessibilidade) ---------- */
  modal.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;
    const focaveis = modal.querySelectorAll(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const visiveis = Array.prototype.filter.call(focaveis, function (el) {
      return el.offsetParent !== null;
    });
    if (!visiveis.length) return;
    const primeiro = visiveis[0];
    const ultimo = visiveis[visiveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  });

})();
