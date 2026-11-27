// =====================================
// LINKS PARA EDITAR
// Contatos extraídos da referência enviada.
// Troque somente os valores abaixo.
// =====================================
const LINKS = {
  whatsappMorumbi: 'https://wa.me/5511965950143?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Emp%C3%B3rio%20dos%20Bichos%20e%20gostaria%20de%20ser%20atendido%2C%20por%20favor.',
  // Sócrates / Jardim Marajoara: número corrigido conforme o contato escrito.
  whatsappMarajoara: 'https://wa.me/5511966018786?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Emp%C3%B3rio%20dos%20Bichos%20e%20gostaria%20de%20ser%20atendido%2C%20por%20favor.',
  telefoneMorumbi: 'tel:+551135077434',
  telefoneMarajoara: 'tel:+551156864393',
  mapaMorumbi: 'https://www.google.com/maps/search/?api=1&query=Emp%C3%B3rio%20dos%20Bichos%20Rua%20Correggio%2025D%20S%C3%A3o%20Paulo',
  mapaMarajoara: 'https://www.google.com/maps/search/?api=1&query=Emp%C3%B3rio%20dos%20Bichos%20Rua%20S%C3%B3crates%20450%20S%C3%A3o%20Paulo',
  instagram: 'https://www.instagram.com/empdosbichos/',
  facebook: 'https://www.facebook.com/emp.dosbichos'
};

// =====================================
// FOTOS DA SEÇÃO "POR QUE ESCOLHER"
// Para adicionar fotos reais: coloque os arquivos em assets/images e troque
// imagem e textoAlternativo abaixo. Use ajuste: 'cover' para fotografias
// e ajuste: 'contain' para os recortes ilustrativos atuais.
// Posicao controla o enquadramento (ex.: 'center 35%').
// =====================================
const DIFERENCIAIS = [
  {
    imagem: 'assets/images/historia-emporio.jpeg',
    textoAlternativo: 'Registro de comemoração do Empório dos Bichos, com o mascote e duas integrantes da equipe.',
    ajuste: 'cover', posicao: 'center 52%',
    etiqueta: '25 anos de história', titulo: 'Experiência que acolhe.',
    descricao: 'São 25 anos de experiência e dedicação ao cuidado de cães e gatos. Uma história construída com atenção, vínculos e o carinho de quem sabe o quanto seu pet é importante para você.'
  },
  {
    imagem: 'assets/images/pet-meg.webp',
    textoAlternativo: 'Pet de pelagem dourada com laço, em foto publicada pelo Empório dos Bichos.',
    ajuste: 'cover', posicao: 'center 42%',
    etiqueta: '+33 mil pets atendidos', titulo: 'Carinho em cada detalhe.',
    descricao: 'Mais de 33 mil pets já passaram pela nossa história. Cada um com seu jeitinho, suas necessidades e um lugar especial no nosso cuidado. Aqui, o bem-estar está nos pequenos detalhes.'
  },
  {
    imagem: 'assets/images/equipe-emporio.jpeg',
    textoAlternativo: 'Equipe do Empório dos Bichos reunida na loja com os pets.',
    ajuste: 'cover', posicao: 'center 57%',
    etiqueta: 'Gente que ama pets', titulo: 'Quem cuida também ama.',
    descricao: 'Nossa equipe reúne qualificação e paixão pelo cuidado com os animais. Do primeiro contato à hora de voltar para casa, queremos que você e seu melhor amigo se sintam acolhidos.'
  },
  {
    imagem: 'assets/images/pet-mel.webp',
    textoAlternativo: 'Pet com laço lilás e peitoral rosa, em foto publicada pelo Empório dos Bichos.',
    ajuste: 'cover', posicao: 'center 60%',
    etiqueta: 'Saúde, beleza e bem-estar', titulo: 'Cuidado por inteiro.',
    descricao: 'Estética pet, clínica veterinária, fisioterapia e loja especializada para cuidar de cães e gatos por inteiro. Nas unidades Morumbi e Jardim Marajoara, um mundo de cuidado espera pela sua família.'
  }
];

document.querySelectorAll('[data-link]').forEach(link => {
  const url = LINKS[link.dataset.link];
  if (url && /^(https:\/\/|tel:)/.test(url)) link.href = url;
});

let originalTrigger = null;
const CARE_DETAILS = {
  banho: ['Banho & bem-estar', 'Limpeza e carinho para deixar seu pet confortável, cheiroso e pronto para ganhar muitos abraços. Cada banho recebe a atenção que o seu melhor amigo merece.'],
  tosa: ['Tosa & estética', 'Cuidado com a pelagem e um visual que respeita o jeitinho do seu pet. Nossa equipe ajuda você a escolher a tosa mais adequada para ele.'],
  clinica: ['Clínica veterinária', 'Atenção à saúde de cães e gatos em cada fase da vida, com atendimento dedicado e cuidado com o bem-estar. Converse com a equipe sobre as necessidades do seu pet.'],
  fisio: ['Fisioterapia', 'Cuidado voltado à mobilidade, ao conforto e à qualidade de vida. A equipe orienta sobre a avaliação e as possibilidades de acompanhamento para cada pet.'],
  loja: ['Loja especializada', 'Uma seleção de produtos para trazer conforto, segurança e diversão à rotina de cães e gatos. Fale com a unidade para consultar os produtos disponíveis.']
};
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.dialog);
    if (!target) return;
    if (button.dataset.service && CARE_DETAILS[button.dataset.service]) {
      const [title, description] = CARE_DETAILS[button.dataset.service];
      document.getElementById('care-title').textContent = title;
      document.getElementById('care-description').textContent = description;
    }
    if (button.dataset.reasonOpen !== undefined) renderDiferencial(Number(button.dataset.reasonOpen));
    const existing = document.querySelector('dialog[open]');
    if (!existing) originalTrigger = button;
    if (existing) existing.close('switch');
    target.showModal();
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) {
      document.body.style.overflow = '';
      originalTrigger?.focus();
    }
  });
});

const whyGallery = document.querySelector('.why-gallery');
const whyPanels = [...whyGallery.querySelectorAll('.why-panel')];
const galleryDialog = document.getElementById('gallery-dialog');
let selectedReason = 0;

whyPanels.forEach((panel, index) => {
  const item = DIFERENCIAIS[index];
  const img = panel.querySelector('img');
  img.src = item.imagem;
  img.alt = item.textoAlternativo;
  img.style.objectFit = item.ajuste;
  img.style.objectPosition = item.posicao;
  panel.classList.toggle('is-photo', item.ajuste === 'cover');
  panel.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') activatePanel(index);
  });
  panel.addEventListener('focusin', () => activatePanel(index));
});
function activatePanel(index) {
  whyGallery.classList.toggle('has-active', index !== null);
  whyPanels.forEach((panel, i) => panel.classList.toggle('is-active', i === index));
}
whyGallery.addEventListener('pointerleave', () => {
  const focused = whyPanels.findIndex(panel => panel.contains(document.activeElement));
  activatePanel(focused === -1 ? null : focused);
});
whyGallery.addEventListener('focusout', event => {
  if (!whyGallery.contains(event.relatedTarget)) activatePanel(null);
});

function renderDiferencial(index) {
  selectedReason = (index + DIFERENCIAIS.length) % DIFERENCIAIS.length;
  const item = DIFERENCIAIS[selectedReason];
  const img = document.getElementById('gallery-image');
  img.src = item.imagem;
  img.alt = item.textoAlternativo;
  img.style.objectFit = 'contain';
  img.style.objectPosition = 'center';
  galleryDialog.dataset.current = String(selectedReason);
  document.getElementById('gallery-title').textContent = item.titulo;
  document.getElementById('gallery-tag').textContent = item.etiqueta;
  document.getElementById('gallery-description').textContent = item.descricao;
  document.getElementById('gallery-counter').textContent = `${selectedReason + 1} / ${DIFERENCIAIS.length}`;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    img.animate([{ opacity: .35, transform: 'scale(.97)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 260, easing: 'ease-out' });
  }
}
document.getElementById('gallery-prev').addEventListener('click', () => renderDiferencial(selectedReason - 1));
document.getElementById('gallery-next').addEventListener('click', () => renderDiferencial(selectedReason + 1));
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    renderDiferencial(selectedReason + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

let swipeStart = null;
const galleryMedia = document.querySelector('.gallery-lightbox-media');
galleryMedia.addEventListener('pointerdown', event => {
  if (event.pointerType === 'touch') swipeStart = {x: event.clientX, y: event.clientY};
});
galleryMedia.addEventListener('pointerup', event => {
  if (!swipeStart) return;
  const dx = event.clientX - swipeStart.x;
  const dy = event.clientY - swipeStart.y;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) renderDiferencial(selectedReason + (dx < 0 ? 1 : -1));
  swipeStart = null;
});
galleryMedia.addEventListener('pointercancel', () => { swipeStart = null; });

// Escolha explícita da unidade antes de abrir uma conversa.
const CONTACT_UNITS = {
  morumbi: { nome: 'Morumbi', telefone: '(11) 96595-0143', link: 'whatsappMorumbi' },
  marajoara: { nome: 'Sócrates', telefone: '(11) 96601-8786', link: 'whatsappMarajoara' }
};
const contactLink = document.getElementById('contact-whatsapp');
function updateContactUnit() {
  const value = document.querySelector('input[name="contact-unit"]:checked')?.value;
  const unit = CONTACT_UNITS[value];
  if (!unit) return;
  contactLink.href = LINKS[unit.link];
  contactLink.removeAttribute('aria-disabled');
  contactLink.removeAttribute('tabindex');
  document.getElementById('contact-button-label').textContent = `Conversar com a unidade ${unit.nome}`;
  document.getElementById('contact-selection-note').textContent = `WhatsApp ${unit.nome} · ${unit.telefone}`;
}
document.querySelectorAll('input[name="contact-unit"]').forEach(input => input.addEventListener('change', updateContactUnit));
contactLink.addEventListener('click', event => {
  if (contactLink.getAttribute('aria-disabled') === 'true') event.preventDefault();
});
updateContactUnit();

// Preenche os cartões com conteúdo real quando o arquivo depoimentos.js é editado.
function setReviewPhoto(card, photo, name) {
  const img = card.querySelector('.review-avatar img');
  const avatar = card.querySelector('.review-avatar svg');
  const show = () => { img.hidden = false; avatar.style.display = 'none'; };
  const fallback = () => { img.hidden = true; avatar.style.display = ''; };
  img.alt = `Foto de ${name}`;
  img.loading = 'eager';
  img.addEventListener('load', show, { once: true });
  img.addEventListener('error', fallback, { once: true });
  if (img.getAttribute('src') !== photo) img.src = photo;
  if (img.complete && img.naturalWidth > 0) show();
}
let completedReviews = 0;
const reviewCards = [...document.querySelectorAll('[data-review]')];
reviewCards.forEach(card => {
  const item = DEPOIMENTOS[Number(card.dataset.review)];
  if (!item) return;
  const complete = Boolean(item.nome.trim() && item.texto.trim());
  card.classList.toggle('is-placeholder', !complete);
  const stars = Math.max(1, Math.min(5, Number(item.estrelas) || 5));
  const starElement = card.querySelector('.review-stars');
  starElement.textContent = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  starElement.setAttribute('aria-label', `${complete ? 'Avaliação' : 'Modelo de avaliação'} com ${stars} de 5 estrelas`);
  card.querySelector('.review-unit').textContent = item.unidade;
  if (!complete) return;
  completedReviews++;
  card.querySelector('.review-name').textContent = item.nome;
  card.querySelector('.review-text').textContent = item.texto;
  card.querySelector('.review-status').hidden = true;
  if (item.foto.trim()) setReviewPhoto(card, item.foto, item.nome);
});
document.getElementById('reviews-status').hidden = reviewCards.length > 0 && completedReviews === reviewCards.length;

// Um item do FAQ aberto por vez, inclusive em navegadores sem suporte a details[name].
const faqItems = [...document.querySelectorAll('.faq-list details')];
faqItems.forEach(item => item.addEventListener('toggle', () => {
  if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
}));

// Faixa contínua de seis depoimentos. Cópias visuais ficam fora da navegação acessível.
(() => {
  const carousel = document.querySelector('.reviews-carousel');
  if (!carousel) return;
  const viewport = carousel.querySelector('.reviews-viewport');
  const group = carousel.querySelector('.reviews-group');
  const originals = [...group.querySelectorAll('[data-review]')];
  if (originals.length < 2) return;
  const duplicate = group.cloneNode(true);
  duplicate.removeAttribute('role');
  duplicate.removeAttribute('aria-label');
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.setAttribute('inert', '');
  duplicate.querySelectorAll('[data-review]').forEach(card => {
    const item = DEPOIMENTOS[Number(card.dataset.review)];
    card.removeAttribute('data-review');
    card.removeAttribute('tabindex');
    card.removeAttribute('role');
    card.removeAttribute('aria-label');
    if (item?.nome.trim() && item?.texto.trim() && item?.foto.trim()) setReviewPhoto(card, item.foto, item.nome);
  });
  group.after(duplicate);

  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let interactionPaused = false;
  let resumeTimer = 0;
  let hovered = false;
  let focused = false;
  let visible = false;
  let frame = 0;
  let lastTime = 0;
  let position = 0;
  let repeatWidth = 0;
  let manualIndex = null;
  const normalize = value => repeatWidth ? (value % repeatWidth + repeatWidth) % repeatWidth : 0;
  const canMove = () => visible && !document.hidden && !motionPreference.matches && !interactionPaused && !hovered && !focused && repeatWidth > viewport.clientWidth;

  function animate(time) {
    frame = 0;
    if (!canMove()) return;
    if (lastTime) {
      // Mantém a velocidade em pixels/segundo, inclusive em telas com alta frequência.
      position = normalize(position + 26 * Math.min(time - lastTime, 64) / 1000);
      viewport.scrollLeft = position;
    }
    lastTime = time;
    frame = requestAnimationFrame(animate);
  }
  function syncMotion() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    position = normalize(viewport.scrollLeft);
    if (canMove()) frame = requestAnimationFrame(animate);
  }
  function pauseForInteraction() {
    clearTimeout(resumeTimer);
    interactionPaused = true;
    manualIndex = null;
    syncMotion();
  }
  function resumeAfterInteraction() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { interactionPaused = false; manualIndex = null; syncMotion(); }, 4500);
  }
  function measure() {
    const previousWidth = repeatWidth;
    const progress = previousWidth ? viewport.scrollLeft / previousWidth : 0;
    repeatWidth = group.getBoundingClientRect().width;
    viewport.scrollLeft = normalize(progress * repeatWidth);
    manualIndex = null;
    syncMotion();
  }
  function step(direction, focusedIndex) {
    const stride = repeatWidth / originals.length;
    if (!stride) return 0;
    const currentIndex = focusedIndex ?? manualIndex ?? Math.round(normalize(viewport.scrollLeft) / stride);
    const targetIndex = currentIndex + direction;
    const nextIndex = (targetIndex + originals.length) % originals.length;
    manualIndex = nextIndex;
    const wraps = targetIndex < 0 || targetIndex >= originals.length;
    viewport.scrollTo({ left: nextIndex * stride, behavior: motionPreference.matches || wraps ? 'auto' : 'smooth' });
    return nextIndex;
  }
  viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; syncMotion(); } });
  viewport.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { hovered = false; syncMotion(); } });
  viewport.addEventListener('pointerdown', pauseForInteraction, { passive: true });
  document.addEventListener('pointerup', () => { if (interactionPaused) resumeAfterInteraction(); }, { passive: true });
  viewport.addEventListener('pointercancel', resumeAfterInteraction, { passive: true });
  viewport.addEventListener('wheel', () => { pauseForInteraction(); resumeAfterInteraction(); }, { passive: true });
  viewport.addEventListener('focusin', () => { focused = true; manualIndex = null; syncMotion(); });
  viewport.addEventListener('focusout', event => { focused = viewport.contains(event.relatedTarget); syncMotion(); });
  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const card = event.target.closest('[data-review]');
      const nextIndex = step(event.key === 'ArrowLeft' ? -1 : 1, card ? Number(card.dataset.review) : undefined);
      if (card) originals[nextIndex].focus({ preventScroll: true });
    }
  });
  function updateMotionPreference() {
    if (motionPreference.matches) viewport.scrollLeft = 0;
    syncMotion();
  }
  motionPreference.addEventListener('change', updateMotionPreference);
  document.addEventListener('visibilitychange', syncMotion);
  new ResizeObserver(measure).observe(viewport);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncMotion(); }, { threshold: 0.05 }).observe(carousel);
  measure();
  updateMotionPreference();
})();
