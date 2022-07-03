class Profile {

    // Getters

    get profileTitle () {return $('#root > div > div > section > h2')}
    get profileImg () {return $('#root > div > div > section > div.profile_pictureFrame__2fvBR > img')}

    get profileTable () {return $('#root > div > div > section > div.profile_data__15ga7')}
    get profileFirstName () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(1) > h3')}
    get profileLastName () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(2) > h3')}
    get profilePhone () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(3) > h3')}
    get profileEmail () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(4) > h3')}
    get profileStatus () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(5) > h3')}
    get profileIsPm () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(6) > h3')}
    get profileAddress () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(7) > h3')}
    get profileDni () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(8) > h3')}
    get profileDate () {return $('#root > div > div > section > div.profile_data__15ga7 > div:nth-child(9) > h3')}

    get editBtn () {return $('#root > div > div > section > div.profile_buttonContainer__4Oia_ > button')}
    get editModalTitle () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > h2')}
    get editModalCross () {return $('div.modal-form_header__uqsio.modal-form_noselect__1pLwl > img')}
    get editModalEdit () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > button:nth-child(2)'
    )}
    get editDni () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > form > div:nth-child(8) > input'
    )}
    get editSuccessMsg () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > div > h2'
    )}
    get editSuccessCross () {return $(
        'div.modal-form_form__1d3ca.modal-form_noselect__1pLwl > div > div > div > div > div > img'
    )}

    // Setters

    async setDNI(dni) {
        await this.editDni.setValue(dni);
    }

    // Methods

    async clickButtons() {
        await this.editBtn.click();
        await this.editModalCross.click();
        await this.editModalEdit.click();
        await this.editSuccessCross.click();
    }

    async dniEdit(dni) {
        await this.editDni.click();
        await this.setDNI(dni);
    }
}

module.exports = new Profile();