class employeeProfile {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
  get profilePic() {
    return $('#root > div > div > section > div.profile_pictureFrame__2fvBR > img');
  }
  //Table
  get table() {
    return $('#root > div > div > section > div.profile_data__15ga7');
  }
  get firstNameField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(1) > h3');
  }
  get fNData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(1) > p');
  }
  get lastNameField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(2) > h3');
  }
  get lNData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(2) > p');
  }
  get phoneField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(3) > h3');
  }
  get phoneData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(3) > p');
  }
  get emailField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(4) > h3');
  }
  get emailData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(4) > p');
  }
  get statusField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(5) > h3');
  }
  get statusData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(5) > p');
  }
  get isPMField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(6) > h3');
  }
  get isPMData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(6) > p');
  }
  get addressField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(7) > h3');
  }
  get addressData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(7) > p');
  }
  get dniField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(8) > h3');
  }
  get dniData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(8) > p');
  }
  get dobField() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(9) > h3');
  }
  get dobData() {
    return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(9) > p');
  }
  get editBtn() {
    return $('#root > div > div > section > div.profile_buttonContainer__4Oia_ > button');
  }

  // Modal
  get modalProfile() {
    return $('#root > div > div > section > div.modal-form_container__A3c7w > div');
  }
  get modalHeader() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl'
    );
  }
  get modalTitle() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2'
    );
  }

  //Modal inputs
  get firstNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(1) > input'
    );
  }
  get lastNameInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(2) > input'
    );
  }
  get dniInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(3) > input'
    );
  }
  get dobInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(4) > input'
    );
  }
  get addressInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(5) > input'
    );
  }
  get phoneInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_upperFields__39UY_ > div:nth-child(6) > input'
      );
  }
  get picLinkInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_lowerFields__3S3bo > div:nth-child(1) > input'
    );
  }
  get emailInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_lowerFields__3S3bo > div:nth-child(2) > input'
    );
  }
  get pwInput() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div.edit_lowerFields__3S3bo > div:nth-child(3) > input'
    );
  }

  //Modal buttons
  get modalCancel() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button:nth-child(1)'
    );
  }
  get modalEdit() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button:nth-child(2)'
    );
  }
  get crossBtnModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img'
    );
  }
  get errorModal() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > p'
    );
  }
  get crossBtnError() {
    return $(
      '#root > div > div > section > div.modal-form_container__A3c7w > div > div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > div > img'
    );
  }
}

module.exports = new employeeProfile();
