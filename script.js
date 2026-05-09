// =======================
// CLASS SYSTEM (UPDATED)
// =======================

const title = document.getElementById('title');
const content = document.getElementById('content');
const image = document.getElementById('image');

const classButtons = document.querySelectorAll('.classroom h4');

function updateClass(titleText, text, img) {
    title.textContent = titleText;
    content.innerHTML = text;
    image.src = img;

    localStorage.setItem('selectedClass', JSON.stringify({
        title: titleText,
        text,
        image: img
    }));
}

classButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.textContent.trim();

        if (type === "Creche") {
            updateClass(
                'Creche',
                `The creche class is the foundation level of early childhood education,<br>
                designed for very young children, usually between the ages of 1½ and 3 years. At this stage,<br>
                the focus is on creating a safe, warm,and nurturing environment where children 
                feel comfortable and secure away from home.<br><br>
                In the creche class, learning takes place through play, interaction,
                and exploration. Children are introduced to basic social skills such as sharing, cooperation,
                and communication. Simple activities like singing, storytelling, coloring, and playing
                with toys help to develop their motor skills, language, and creativity.<br><br>
                The creche also helps children begin to build independence and confidence while preparing
                them for higher classes such as nursery and kindergarten.<br><br>
                Caring teachers provide close attention to each child’s emotional and physical needs,
                ensuring a smooth transition from home to school life.`,
                './ChatGPT Image May 6, 2026, 01_16_05 PM.png'
            );
        }

        else if (type === "Nursery") {
            updateClass(
                'Nursery',
                `The nursery class is the next level of early childhood education,<br>
                designed for children between the ages of 3 and 5 years. At this stage,<br>
                the focus is on further developing social, emotional, and cognitive skills.<br><br>
                In the nursery class, learning takes place through structured activities,
                play, and exploration. Children are introduced to more complex concepts
                and are encouraged to express themselves creatively.<br><br>
                The nursery also helps children develop independence and confidence while preparing
                them for higher classes such as primary school.<br><br>
                Caring teachers provide close attention to each child’s emotional and physical needs,
                ensuring a smooth transition from home to school life.`,
                './ChatGPT Image May 6, 2026, 01_23_48 PM.png'
            );
        }

        else if (type === "Primary") {
            updateClass(
                'Primary',
                `The primary class is the foundational level of elementary education,<br>
                designed for children between the ages of 6 and 10 years. At this stage,<br>
                the focus is on building a strong academic base and developing critical thinking skills.<br><br>
                In the primary class, learning takes place through a variety of subjects,
                including mathematics, science, language arts, and social studies. Children are encouraged to explore their interests and develop a love for learning.<br><br>
                The primary also helps children develop independence and confidence while preparing
                them for higher classes such as secondary school.<br><br>
                Caring teachers provide close attention to each child’s emotional and physical needs,
                ensuring a smooth transition from home to school life.`,
                './ChatGPT Image May 6, 2026, 01_28_25 PM.png'
            );
        }

        else if (type === "Secondary") {
            updateClass(
                'Secondary',
                `The secondary class is the advanced level of elementary education,<br>
                designed for children between the ages of 11 and 14 years. At this stage,<br>
                the focus is on preparing students for high school and beyond.<br><br>
                In the secondary class, learning takes place through specialized subjects,
                including mathematics, science, language arts, and social studies. Students are encouraged to develop their critical thinking skills and become more independent learners.<br><br>
                The secondary also helps students develop leadership skills and prepares them for the challenges of high school.<br><br>
                Caring teachers provide close attention to each child’s emotional and physical needs,
                ensuring a smooth transition from home to school life.`,
                './ChatGPT Image May 6, 2026, 01_35_15 PM.png'
            );
        }
    });
});

// Restore saved class
window.addEventListener('load', () => {
    const saved = localStorage.getItem('selectedClass');

    if (saved) {
        const data = JSON.parse(saved);
        title.textContent = data.title;
        content.innerHTML = data.text;
        image.src = data.image;
    }
});


// =======================
// MOBILE MENU SYSTEM
// =======================

const menuBtn = document.querySelector('.menu');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.mobile-menu a');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
    }
});