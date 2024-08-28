document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.header nav');

    // เมนูหลัก
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // เมนูย่อย
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            // ซ่อนเมนูย่อยอื่นที่เปิดอยู่
            submenuToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.classList.remove('active');
                    otherToggle.nextElementSibling.style.display = 'none'; // ซ่อนเมนูย่อยที่เปิดอยู่
                }
            });

            // แสดงหรือซ่อนเมนูย่อยที่เกี่ยวข้อง
            toggle.classList.toggle('active');
            const submenu = toggle.nextElementSibling; // เลือกเมนูย่อยถัดจากปุ่ม
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none'; // ซ่อนเมนูย่อย
            } else {
                submenu.style.display = 'block'; // แสดงเมนูย่อย
            }
        });
    });
});