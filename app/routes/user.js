import Route from '@ember/routing/route';

export default class GithubRoute extends Route {
  queryParams = {
    user: {
      refreshModel: true
    }
  };

  model(params) {
    return fetch(`https://api.github.com/users/${params.user}`).then((response) => {
      return response.json();
    });
  }
}
