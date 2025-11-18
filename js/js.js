// عناصر الشريط
const progressBar = document.querySelector('.bar .html');

// مجموع المحاضرات وعددها
const totalLectures = 6;

// النسبة لكل محاضرة
const percentPerLecture = 100 / totalLectures;

// استرجاع المحاضرات اللي حضرت قبل كده من localStorage
let attendedLectures = JSON.parse(localStorage.getItem('attendedLectures_site1da')) || [];

// تحديث البار بناءً على المحاضرات المحفوظة
progressBar.style.width = (attendedLectures.length * percentPerLecture) + "%";

// إضافة event listener لكل محاضرة
document.querySelectorAll('.morede').forEach(link => {
    link.addEventListener('click', () => {
        const lecNum = link.getAttribute('data-lecture');

        // لو المحاضرة دي مش موجودة في الـ attendedLectures
        if (!attendedLectures.includes(lecNum)) {
            attendedLectures.push(lecNum);
            localStorage.setItem('attendedLectures_site1da', JSON.stringify(attendedLectures));
            progressBar.style.width = (attendedLectures.length * percentPerLecture) + "%";

        }
    });
});
