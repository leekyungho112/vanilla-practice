// 요구사항 분석

// 메뉴 추가
// - 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴 추가
// - 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - 메뉴가 추가되고 나면 , input은 빈값으로 초기화
// - 빈값은 입력값으로 추가되지 않는다.
const $ = (selector) => document.querySelector(selector);

function App() {
  const addMenuName = () => {
    if ($('#espresso-menu-name').value === '') {
      return;
    }
    const espressoMenuName = $('#espresso-menu-name').value;
    const menuItemTemplate = (espressoMenuName) => {
      return `
      <li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>
      
      `;
    };
    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuItemTemplate(espressoMenuName)
    );
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount} 개`;
    $('#espresso-menu-name').value = '';
  };

  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
  $('#espresso-menu-submit-button').addEventListener('click', () => {
    addMenuName();
  });
  $('#espresso-menu-list').addEventListener('click', (e) => {
    const targetEdit = e.target.classList.contains('menu-edit-button');
    if (targetEdit) {
      const $menuName = e.target.closest('li').querySelector('.menu-name');
      const menuName = $menuName.innerText;
      const updatedMenuName = prompt('수정하시겠습니까?', menuName);
      $menuName.innerText = updatedMenuName;
    }
  });
}

App();
