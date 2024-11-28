function toggleDetails() {
    const detailContent = document.querySelector('.detail-content');
    const button = document.querySelector('.toggle-btn');

    if (detailContent.classList.contains('visible')) {
        detailContent.classList.remove('visible');
        button.textContent = 'Tampilkan Detail';
    } else {
        detailContent.classList.add('visible');
        button.textContent = 'Sembunyikan Detail';
    }
}
