const codeEditorBt = document.querySelector('.menu__code_editor');
const communityBt = document.querySelector('.menu__community');
const codeEditorImg = document.querySelector('.menu__code_editor__image');
const communityImg = document.querySelector('.menu__community__image');
const codeEditorSection = document.querySelector('.code_editor');
const communitySection = document.querySelector('.community');
const codeArea = document.querySelector('#code-area');
const saveButton = document.querySelector('#save-project');
const language = document.querySelector('#stack-selection');
const background = document.querySelector('#color-selector');
const projectCode = document.querySelector('.code__main__black__input');
const projectName = document.querySelector('.details__form__project_name');
const projectDescription = document.querySelector(
  '.details__form__project_description'
);

let postCard = [
  {
    code: '',
    name: '',
    description: '',
    background: '',
  },
];

codeEditorBt.addEventListener('click', () => {
  codeEditorImg.setAttribute(
    'src',
    'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-on.png?raw=true'
  );
  communityImg.setAttribute(
    'src',
    'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-off.png?raw=true'
  );

  communitySection.classList.remove('active-community');
  codeEditorSection.classList.add('active-code_editor');
});

communityBt.addEventListener('click', () => {
  codeEditorImg.setAttribute(
    'src',
    'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/code_editor_icon-off.png?raw=true'
  );
  communityImg.setAttribute(
    'src',
    'https://github.com/HigorStos/alura_desafio-2/blob/main/src/image/community_icon-on.png?raw=true'
  );

  codeEditorSection.classList.remove('active-code_editor');
  communitySection.classList.add('active-community');

  cardsMap();
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();

  codeArea.classList.add(`${language.value}`);
  hljs.highlightElement(codeArea);

  const bgColor = background.value;
  projectCode.style.backgroundColor = bgColor;

  const projectCodeCard = projectCode.innerHTML;

  postCard = [
    ...postCard,
    {
      code: projectCodeCard,
      name: projectName.value,
      description: projectDescription.value,
      background: background.value,
    },
  ];
});

const community = document.querySelector('.community');

function cardsMap() {
  let html = '';
  postCard.map((project) => {
    html += `
    <div class="community__card">
      <div class="community__card__bg">
        <div class="community__card__bg__code">
          <img class="community__card__bg__code__image" src="./src/image/mac_buttons.svg" alt="Mac buttons">
          <code
            class="community__card__bg__code__area">${project.code}</code>
        </div>
      </div>
      <div class="community__card__content">
        <h5 class="community__card__content__title">${project.name}</h5>
        <p class="community__card__content__desc">${project.description}</p>
      </div>
      <div class="community__card__infos">
        <div class="community__card__infos__likes_comments">
          <span>
            <img src="./src/image/comment_icon.png" alt="Ícone de comentários">
            9
          </span>
          <span>
            <img src="./src/image/like_icon.png" alt="Ícone de likes">
            9
          </span>
        </div>
        <div class="community__card__infos__profile">
          <img src="./src/image/mr_robot.jpg" alt="Foto de perfil">
          <span>Nome</span>
        </div>
      </div>
    </div>
    `;
  });

  console.log(html);

  community.innerHTML = html;
}

cardsMap();
