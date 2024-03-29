const codeEditorBt = document.querySelectorAll('.menu__code_editor');
const communityBt = document.querySelectorAll('.menu__community');
const codeEditorImg = document.querySelectorAll('.menu__code_editor__image');
const communityImg = document.querySelectorAll('.menu__community__image');
const codeEditorSection = document.querySelector('.code_editor');
const communitySection = document.querySelector('.community');
const codeArea = document.querySelector('#code-area');
const highlightButton = document.querySelector('.code__button');
const saveButton = document.querySelector('#save-project');
const language = document.querySelector('#stack-selection');
const colorInput = document.querySelector('#color-selector');
const projectCodeBg = document.querySelector('.code__main');
const projectName = document.querySelector('.details__form__project_name');
const projectDescription = document.querySelector('.details__form__project_description');
const community = document.querySelector('.community');
const profileName = document.querySelector('.profile__name');
const menuHamburguerMobile = document.querySelector('#menu-hamburguer--mobile')
const menuHamburguerTablet = document.querySelector('#menu-hamburguer--tablet')

const localStoragePosts = JSON.parse(localStorage.getItem('cards'));

let posts = localStorage.getItem('cards') !== null ? localStoragePosts : []

const updateLocalStorage = () => {
  localStorage.setItem('cards', JSON.stringify(posts))
}

for (let i = 0; i < codeEditorBt.length; i++) {
  codeEditorBt[i].addEventListener('click', () => {
    codeEditorImg[i].setAttribute(
      'src',
      'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-on.png?raw=true'
    );
    communityImg[i].setAttribute(
      'src',
      'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-off.png?raw=true'
    );
  
    communitySection.classList.remove('active-community');
    codeEditorSection.classList.add('active-code_editor');
  
    codeArea.removeAttribute('data-highlighted');
    codeArea.innerText = '';
    projectCodeBg.style.background = '#6BD1FF';
  });
}

for (let i = 0; i < communityBt.length; i++) {
  communityBt[i].addEventListener('click', () => {
    codeEditorImg[i].setAttribute(
      'src',
      'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-off.png?raw=true'
    );
    communityImg[i].setAttribute(
      'src',
      'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-on.png?raw=true'
    );
  
    codeEditorSection.classList.remove('active-code_editor');
    communitySection.classList.add('active-community');
  
    cardsMap();
  });
}

highlightButton.addEventListener('click', () => {
  codeArea.removeAttribute('data-highlighted');
  codeArea.classList.remove(...codeArea.classList);

  codeArea.classList.add('code__main__black__area');
  codeArea.classList.add(`${language.value}`)

  hljs.highlightElement(codeArea)
});

colorInput.addEventListener('input', () => {
  projectCodeBg.style.backgroundColor = colorInput.value;
})

saveButton.addEventListener('click', (e) => {
  e.preventDefault();

  if(projectName.value === '') {
    alert('Digite um nome para seu projeto!')
    return;
  } else if(projectDescription.value === '') {
    alert('Digite uma descrição para seu projeto!')
    return;
  }

  const newPost = {
    code: codeArea.innerHTML,
    name: projectName.value,
    description: projectDescription.value,
    background: colorInput.value,
    profile: {
      name: profileName.innerText
    },
    social: {
      comments: 0,
      likes: 0
    }
  }

  posts.push(newPost);
  updateLocalStorage();

  alert(`Projeto "${projectName.value}" salvo com sucesso!`)
});

function cardsMap() {
  let cardsHtml = ''

  posts.map((project) => {
    cardsHtml += `
      <div class="community__card">
        <div class="community__card__bg" style="background-color: ${project.background};">
          <div class="community__card__bg__code">
            <img class="community__card__bg__code__image" src="https://raw.githubusercontent.com/HigorStos/alura_desafio-2/bdb8f540592aa0d0d3a434acbf4f3b744ec3a41f/src/image/mac_buttons.svg" alt="Mac buttons">
            <code class="community__card__bg__code__area">
              ${project.code}
            </code>
          </div>
        </div>
        <div class="community__card__content">
          <h5 class="community__card__content__title">${project.name}</h5>
          <p class="community__card__content__desc">${project.description}</p>
        </div>
        <div class="community__card__infos">
          <div class="community__card__infos__social">
            <div class="community__card__infos__social__comments">
              <img class="community__card__infos__social__comments__image" src="https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/comment_icon.png?raw=true" alt="Ícone de comentários">
              <span>${project.social.comments}</span>
            </div>
            <div class="community__card__infos__social__likes">
              <img class="community__card__infos__social__likes__image" src="https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/like_icon.png?raw=true" alt="Ícone de likes">
              <span class="community__card__infos__social__likes__counter">${project.social.likes}</span>
            </div>
          </div>
          <div class="community__card__infos__profile">
            <img src="https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/mr_robot.jpg?raw=true" alt="Foto de perfil">
            <span>${project.profile.name}</span>
          </div>
        </div>
      </div>
    `;
  });

  community.innerHTML = cardsHtml
}

menuHamburguerMobile.addEventListener('click', () => {
  const menu = document.querySelector('.menu--mobile')

  if(menu.style.display === "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
})

menuHamburguerTablet.addEventListener('click', () => {
  const menu = document.querySelector('.menu--tablet')

  if(menu.style.display === "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
})
