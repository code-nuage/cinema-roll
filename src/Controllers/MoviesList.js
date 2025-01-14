import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7D/main_actors',
  headers: {
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

import axios from 'axios';

import ViewNav from '../Views/nav';
import ViewFooter from '../Views/footer';
import ViewUsers from '../Views/users';

const ListUsers = class ListUsers {
  constructor(params) {
    this.app = document.querySelector('#app');
    this.cards = undefined;
    this.params = params;
    this.users = [];
    this.filter = [];

    this.run();
  }

  filterUsers(query) {
    const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    this.filteredUsers = this.users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      return fullName.includes(normalizedQuery);
    });

    this.cards.innerHTML = this.rerender();
  }

  render() {
    return `
    ${ViewNav}
    <div class="cards container">
      ${ViewUsers(this.users)}
    </div>
    ${ViewFooter}
    `;
  }

  rerender() {
    return `
      ${ViewUsers(this.filteredUsers)}
    `;
  }

  run() {
    axios.get('https://randomuser.me/api/', {
      params: {
        results: this.params.results || 1
      }
    })
      .then((res) => {
        this.users = res.data.results;
        this.filteredUsers = [...this.users];

        this.app.innerHTML = this.render();
        this.cards = document.querySelector('.cards');

        document.querySelector('.searchbar').addEventListener('input', (event) => {
          this.filterUsers(event.target.value);
        });
      });
  }
};

export default ListUsers;
