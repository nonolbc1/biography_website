function showContent(id, element) {
    document.querySelectorAll('.content').forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.cat').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
}