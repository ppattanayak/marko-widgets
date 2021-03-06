var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        includeWidget: false
    });

    expect(widget).to.equal(undefined);

    expect(helpers.targetEl.innerHTML).contain('[app-conditional-widget]');

    widget = helpers.mount(require('./index'), {
        includeWidget: true
    });

    expect(widget != null).to.equal(true);
};