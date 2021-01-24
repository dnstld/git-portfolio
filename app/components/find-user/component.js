import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import CONSTANTS from '../../constants';

export default class FindUserComponent extends Component {
  @service router;

  @tracked user = CONSTANTS.defaultGitUser;

  @tracked lastUser = '' || CONSTANTS.defaultGitUser;

  @action
  searchUser() {
    const queryParams = { user: this.user };

    this.lastUser = this.user;

    this.router.transitionTo({ queryParams });
  }

  @action
  onFocusIn() {
    this.user = '';
  }

  @action
  onFocusOut() {
    if (this.user.length === 0 && this.lastUser.length !== 0) {
      this.user = this.lastUser;
    }
  }
}