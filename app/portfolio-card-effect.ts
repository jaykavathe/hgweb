export const initializePortfolioCardEffect = () => {
  const cards = document.querySelectorAll('.portfolio-card');
  
  const handleMouseMove = (e: MouseEvent, card: Element) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
    (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
  };

  cards.forEach(card => {
    card.addEventListener('mousemove', ((e: Event) => {
      handleMouseMove(e as MouseEvent, card);
    }) as EventListener);
  });
}; 