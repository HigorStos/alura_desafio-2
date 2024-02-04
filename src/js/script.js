const codeEditorBt = document.querySelector('.menu__code_editor')
const communityBt = document.querySelector('.menu__community')
const codeEditorImg = document.querySelector('.menu__code_editor__image')
const communityImg = document.querySelector('.menu__community__image')
const codeEditorSection = document.querySelector('.code_editor')
const communitySection = document.querySelector('.community')
const codeArea = document.querySelector('#code-area')
const saveButton = document.querySelector('#save-project')
const language = document.querySelector('#stack-selection')
const background = document.querySelector('#color-selector')
const projectCode = document.querySelector('.code__main')
const projectName = document.querySelector('.details__form__project_name')
const projectDescription = document.querySelector('.details__form__project_description')

let postCard = [
  {
    code: "",
    name: "",
    description: ""
  }
]

codeEditorBt.addEventListener('click', () => {
  codeEditorImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio2/blob/main/public/code_editor_icon-on.png?raw=true')
  communityImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio2/blob/main/public/community_icon-off.png?raw=true')

  communitySection.classList.remove('active-community')
  codeEditorSection.classList.add('active-code_editor')
})

communityBt.addEventListener('click', () => {
  codeEditorImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio2/blob/main/public/code_editor_icon-off.png?raw=true')
  communityImg.setAttribute('src', 'https://github.com/HigorStos/alura_desafio2/blob/main/public/community_icon-on.png?raw=true')

  codeEditorSection.classList.remove('active-code_editor')
  communitySection.classList.add('active-community')
})

saveButton.addEventListener('click', (e) => {
  e.preventDefault()

  codeArea.classList.add(`${language.value}`)
  hljs.highlightElement(codeArea)

  const bgColor = background.value
  projectCode.style.backgroundColor = bgColor;

  const projectCodeCard = projectCode.innerHTML

  postCard = [
    ...postCard,
    {
      code: projectCodeCard,
      name: projectName.value,
      description: projectDescription.value
    }
  ]

  const testing = document.querySelectorAll('.community__card').innerHTML = projectCodeCard
  
  // testing.innerHTML = projectCodeCard

  console.log(projectCodeCard)
  console.log(postCard)
})
