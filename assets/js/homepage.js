document.querySelectorAll('.filters').forEach((filters) => {
  filters.hidden = false;
  const papers = [...document.querySelectorAll('.publication')];
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    papers.forEach((paper) => { paper.hidden = button.dataset.filter !== 'all' && paper.dataset.status !== button.dataset.filter; });
    document.getElementById('filter-status').textContent = `${papers.filter((paper) => !paper.hidden).length} publications shown.`;
  });
});
