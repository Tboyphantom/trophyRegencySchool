const blessOne = document.getElementById('bless_one');
const blesstwo = document.getElementById('bless_two');
const blessthree = document.getElementById('bless_three');
const blessfour = document.getElementById('bless_four');
// const let = document.getElementById('let');
// const van = document.getElementById('van');
const write = document.getElementById('write');
const change = document.getElementById('change');
const slam = document.getElementById('slam');

// Function to update UI + save to localStorage
function updateClass(title, text, image) {
    change.textContent = title;
    write.innerHTML = text;
    slam.src = image;

    // Save to localStorage
    localStorage.setItem('selectedClass', JSON.stringify({
        title,
        text,
        image
    }));
}

// Click events
blessOne.addEventListener('click', () => {
    updateClass(
        'Creche',
        'The creche class is the foundation level of early childhood education,<br> designed for very young children, usually between the ages of 1½ and 3 years. At this stage,<br> the focus is on creating a safe, warm, and nurturing environment where children <br>feel comfortable and secure away from home.<br><br>In the creche class, learning takes place through play, interaction,<br> and exploration. Children are introduced to basic social skills such as sharing, cooperation,<br> and communication. Simple activities like singing, storytelling, coloring, and playing<br> with toys help to develop their motor skills, language, and creativity.<br><br>The creche also helps children begin to build independence and confidence while preparing<br> them for higher classes such as nursery and kindergarten.<br><br> Caring teachers provide close attention to each child’s emotional and physical needs,<br> ensuring a smooth transition from home to school life.',
        './ChatGPT Image May 6, 2026, 01_16_05 PM.png'
    );
});

blesstwo.addEventListener('click', () => {
    updateClass(
        'Nursery',
        'The nursery class is the next level of early childhood education,<br> designed for children between the ages of 3 and 5 years. At this stage,<br> the focus is on further developing social, emotional, and cognitive skills.<br><br>In the nursery class, learning takes place through structured activities,<br> play, and exploration. Children are introduced to more complex concepts<br> and are encouraged to express themselves creatively.<br><br>The nursery also helps children develop independence and confidence while preparing<br> them for higher classes such as primary school.<br><br> Caring teachers provide close attention to each child’s emotional and physical needs,<br> ensuring a smooth transition from home to school life.',
        './ChatGPT Image May 6, 2026, 01_23_48 PM.png'
    );
});

blessthree.addEventListener('click', () => {
    updateClass(
        'Primary',
        'The primary class is the foundational level of elementary education,<br> designed for children between the ages of 6 and 10 years. At this stage,<br> the focus is on building a strong academic base and developing critical thinking skills.<br><br>In the primary class, learning takes place through a variety of subjects,<br> including mathematics, science, language arts, and social studies. Children are encouraged to explore their interests and develop a love for learning.<br><br>The primary also helps children develop independence and confidence while preparing<br> them for higher classes such as secondary school.<br><br> Caring teachers provide close attention to each child’s emotional and physical needs,<br> ensuring a smooth transition from home to school life.',
        './ChatGPT Image May 6, 2026, 01_28_25 PM.png'
    );
});

blessfour.addEventListener('click', () => {
    updateClass(
        'Secondary',
        'The secondary class is the advanced level of elementary education,<br> designed for children between the ages of 11 and 14 years. At this stage,<br> the focus is on preparing students for high school and beyond.<br><br>In the secondary class, learning takes place through specialized subjects,<br> including mathematics, science, language arts, and social studies. Students are encouraged to develop their critical thinking skills and become more independent learners.<br><br>The secondary also helps students develop leadership skills and prepares them for the challenges of high school.<br><br> Caring teachers provide close attention to each child’s emotional and physical needs,<br> ensuring a smooth transition from home to school life.',
        './ChatGPT Image May 6, 2026, 01_35_15 PM.png'
    );
});

        // function showPopup() {
        //     document.getElementById("").style.display = "flex";
        // }

        // function closePopup() {
        //     document.getElementById("let").style.display = "none";
        // }


// Restore saved data when page loads
window.addEventListener('load', () => {
    const saved = localStorage.getItem('selectedClass');

    if (saved) {
        const data = JSON.parse(saved);
        change.textContent = data.title;
        write.innerHTML = data.text;
        slam.src = data.image;
    }
});