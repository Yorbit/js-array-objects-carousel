const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

function appendParent(image) {

    const parentElement = document.getElementById('wrap');

    parentElement.append(image);

    return parentElement;
}

function createElement(image) {
    const newElement = document.createElement('div');
    newElement.className = ('width text-center col-12');
    newElement.innerHTML =

        `<h3 class="position-absolute title-img">${image.title}</h3>
        <p class="position-absolute subtitle-img">${image.description}</p>
        <img class="block" src="${image.url}" alt="">`

    return newElement;
}

images.forEach((element, index) => {

    const newContainer = createElement(element);

    if (index !== 0) {

        newContainer.classList.add('d-none');
    }

    appendParent(newContainer);
});

const parentWrap = document.getElementById('wrap');

let slideActive = 0;

let containerList = parentWrap.children;

const prevBtn = document.getElementById('prev');

prevBtn.addEventListener('click', function () {

    containerList[slideActive].classList.add('d-none');

    --slideActive;

    if (slideActive === -1) {

        slideActive = images.length - 1;

    }

    containerList[slideActive].classList.remove('d-none');

});