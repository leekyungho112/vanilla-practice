const BASE_URL = 'http://localhost:3000/api';
const MenuApi = {
  async getAllMenuByCategory(category) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`);
    const json = response.json();
    return json;
  },

  async createMenu(category, name) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    });
    const json = response.json();
    return json;
  },

  async toggleSoldOutMenu(category, menuId) {
    const res = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      { method: 'PUT' }
    );
    console.log(res);
    if (!res.ok) {
      console.log('error!');
    }
  },

  async updateMenu(category, name, menuId) {
    console.log('name', name);
    const res = await fetch(`${BASE_URL}/category/${category}/menu/${menuId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) {
      console.log('error!');
    }

    return res.json();
  },

  async deleteMenu(category, menuId) {
    const res = await fetch(`${BASE_URL}/category/${category}/menu/${menuId}`, {
      method: 'DELETE',
    });
    console.log(res);
    if (!res.ok) {
      console.log('error!');
    }
  },
};

export default MenuApi;
