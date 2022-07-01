class HomePage {
    get homeTG() { return $('aside > div > a')}
    get homeTitle() { return $('div.header_pathname__qN2RB')}
    get adminAccess() { return $('button:nth-child(1)')}
    get employeeAccess() { return $('button:nth-child(2) > a')}
    get socialTW() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(1)')}
    get socialFB() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(2)')}
    get socialIG() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(3)')}
    get socialLKDN() { return $('div.footer_socialContainer__3bbz9 > a:nth-child(4)')}
}

module.exports = new HomePage();