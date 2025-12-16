(()=>{
  const categoryBtns = document.querySelectorAll('.category-btn');

  categoryBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const categoryId = btn.dataset.category;
      const items = document.getElementById(categoryId);
      const isOpen = items.style.display !== 'none';
      
      items.style.display = isOpen ? 'none' : 'grid';
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

})();
