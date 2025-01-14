document.querySelectorAll('.button-green, .button-black, .button-yellow, .user, .loved').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('button-green')) {
            button.classList.add('button-green-pressed');
            setTimeout(() => {
                button.classList.remove('button-green-pressed');
            }, 1200);
        } else if (button.classList.contains('button-black')) {
            button.classList.add('button-black-pressed');
            setTimeout(() => {
                button.classList.remove('button-black-pressed');
            }, 1200);
        } else if (button.classList.contains('button-yellow')) {
            button.classList.add('button-yellow-pressed');
            setTimeout(() => {
                button.classList.remove('button-yellow-pressed');
            }, 1200);
        } else if (button.classList.contains('user')) {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 1200);
        } else if (button.classList.contains('loved')) {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 1200);
        }
    });
});

document.querySelectorAll('.filterstext').forEach((element) => {
    element.addEventListener('click', () => {
        const hiddenContent = document.querySelector('.filters');
        hiddenContent.classList.toggle('show');
    });
});

document.querySelectorAll('.filterstext').forEach((element) => {
    element.addEventListener("click", function () {
        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
        } else {
            this.classList.add("clicked");
        }
    });
});

function toggleDropdown(button) {
    const dropdownMenu = button.nextElementSibling;

    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
        if (menu !== dropdownMenu) {
            menu.style.display = 'none';
            menu.previousElementSibling.classList.remove('open');
        }
    });

    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';

    if (isVisible) {
        button.classList.remove('open');
    } else {
        button.classList.add('open');
    }
}

document.addEventListener('click', function (event) {
    const isDropdown = event.target.closest('.dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
            menu.style.display = 'none';
            menu.previousElementSibling.classList.remove('open');
        });
    }
});

document.querySelectorAll('.favourite').forEach((image) => {
    image.addEventListener('click', function () {
        if (image.src.endsWith('Vector2.png')) {
            image.src = 'images/Property 1=Default.png';
        } else {
            image.src = 'images/Vector2.png';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-button');
    const cards = document.querySelectorAll('.card');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFilters = {
                gender: [],
                age: [],
                size: [],
                location: []
            };

            document.querySelectorAll('.filters input[type="checkbox"]:checked').forEach(checkbox => {
                selectedFilters[checkbox.name].push(checkbox.value);
            });

            cards.forEach(card => {
                const matchesGender = selectedFilters.gender.length === 0 || selectedFilters.gender.some(filter => card.classList.contains(filter));
                const matchesAge = selectedFilters.age.length === 0 || selectedFilters.age.some(filter => card.classList.contains(filter));
                const matchesSize = selectedFilters.size.length === 0 || selectedFilters.size.some(filter => card.classList.contains(filter));
                const matchesLocation = selectedFilters.location.length === 0 || selectedFilters.location.some(filter => card.classList.contains(filter));

                if (matchesGender && matchesAge && matchesSize && matchesLocation) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            document.querySelectorAll('.dropdown-menu').forEach((menu) => {
                menu.style.display = 'none';
                menu.previousElementSibling.classList.remove('open');
            });
        });
    });
});

document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const toggleIcon = this.querySelector(".faq-toggle");
        const parentElement = this.closest('.faq-item');

        parentElement.classList.toggle('changed');

        if (answer.classList.contains("open")) {
            answer.classList.remove("open");
            toggleIcon.classList.remove("rotate");
            toggleIcon.src = "images/Group 129.png";
        } else {
            answer.classList.add("open");
            toggleIcon.classList.add("rotate");
            toggleIcon.src = "images/minus.png";
        }
    });
});

