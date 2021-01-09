import Controller from '@ember/controller';

import CONSTANTS from '../constants';

export default class GithubController extends Controller {
  queryParams = ['user'];

  user = CONSTANTS.defaultGitUser;
}
