import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isEmpty } from '@ember/utils';

import CONSTANTS from '../../constants';

export default class FindUserComponent extends Component {
  @service router;

  @tracked user = CONSTANTS.defaultGitUser;

  @action
  searchUser() {
    const queryParams = { user: this.user };

    this.router.transitionTo({ queryParams });
  }

  @action
  onFocusIn() {
    this.user = '';
  }

  @action
  onFocusOut() {
    if (isEmpty(this.user)) {
      this.user = CONSTANTS.defaultGitUser;
    }
  }
}