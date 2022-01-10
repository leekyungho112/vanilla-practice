// 요구사항 분석

// 메뉴 추가
// - 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴 추가
// - 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - 메뉴가 추가되고 나면 , input은 빈값으로 초기화
// - 빈값은 입력값으로 추가되지 않는다.
import { $ } from './utils/dom.js';
import { store } from './store/store.js';
import MenuApi from './api/index.js';
function App() {
  this.menu = {
    espresso: [],
    desert: [],
    blended: [],
    teavana: [],
    frappuccino: [],
  };
  this.currentCategory = 'espresso';
  this.init = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    paintingTemplate();
    eventListener();
  };
  const paintingTemplate = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    const template = this.menu[this.currentCategory]
      .map((item, index) => {
        return `
    <li data-menu-id="${
      item.id
    }" class="menu-list-item d-flex items-center py-2">
<span class="w-100 pl-2 menu-name ${item.isSoldOut ? 'sold-out' : ''} ">${
          item.name
        }</span>
<button
type="button"
class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
>
품절
</button>
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
      })
      .join('');
    $('#menu-list').innerHTML = template;
    updateCountMenu();
  };
  const updateCountMenu = () => {
    const menuCount = this.menu[this.currentCategory].length;
    $('.menu-count').innerText = `총 ${menuCount} 개`;
  };
  const addMenuName = async () => {
    if ($('#menu-input').value === '') {
      return;
    }

    const duplicatedItem = this.menu[this.currentCategory].find(
      (menuItem) => menuItem.name === $('#menu-input').value
    );
    if (duplicatedItem) {
      alert('already exist name');
      $('#menu-input').value = '';
      return;
    }
    const menuName = $('#menu-input').value;
    const newObj = {
      name: menuName,
    };
    // this.menu[this.currentCategory].push(newObj);
    await MenuApi.createMenu(this.currentCategory, newObj);

    paintingTemplate();
    $('#menu-input').value = '';
  };
  const editMenuName = async (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    const $menuName = e.target.closest('li').querySelector('.menu-name');
    const updatedMenuName = prompt('수정하시겠습니까?', $menuName.innerText);
    await MenuApi.updateMenu(this.currentCategory, updatedMenuName, menuId);

    const duplicatedItem = this.menu[this.currentCategory].find(
      (menuItem) => menuItem.name === updatedMenuName
    );
    if (duplicatedItem) {
      alert('already exist name');

      return;
    }
    paintingTemplate();
  };
  const deleteMenuName = async (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    await MenuApi.deleteMenu(this.currentCategory, menuId);

    // this.menu[this.currentCategory].splice(menuId, 1);
    // store.setLocalStorage(this.menu);
    paintingTemplate();
  };

  const soldOutMenu = async (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);

    paintingTemplate();
  };

  const changeCategory = (e) => {
    const isCategoryButton = e.target.classList.contains('cafe-category-name');
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;
      $('#menu-name').innerText = `${e.target.innerText} 메뉴 관리`;

      paintingTemplate();
    }
  };

  const eventListener = () => {
    $('#menu-form').addEventListener('submit', (e) => {
      e.preventDefault();
    });

    $('#menu-input').addEventListener('keypress', (e) => {
      if (e.key !== 'Enter') {
        return;
      }
      addMenuName();
    });
    $('#menu-submit-button').addEventListener('click', addMenuName);
    $('#menu-list').addEventListener('click', (e) => {
      const targetEdit = e.target.classList.contains('menu-edit-button');
      const targetDelete = e.target.classList.contains('menu-remove-button');
      const targetSoldOut = e.target.classList.contains('menu-sold-out-button');
      if (targetEdit) {
        editMenuName(e);
        return;
      }
      if (targetDelete) {
        deleteMenuName(e);
        return;
      }
      if (targetSoldOut) {
        soldOutMenu(e);
        return;
      }
    });
    $('nav').addEventListener('click', changeCategory);
  };
}

const app = new App();
app.init();
