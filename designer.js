(function(Fetch) {

//    /* Default width and height of your widget */
//    Fetch.setWidth('200');
//    Fetch.setHeight('20');

//    /* Define custom event for your widget */
//    Fetch.addEvent('myEvent');

//    /* Customize existing properties */
//    Fetch.customizeProperty('test', {
//        title: 'Test Static Value',
//        description: 'Add a datasource to this property.'
//    });

//    /* Add a Label property */
//    Fetch.addLabel({
//        'defaultValue': '',
//        'position': 'top'
//    });

//    /* Set the Design and Styles panels */
//    Fetch.setPanelStyle({
//        'fClass': true,
//        'text': true,
//        'background': true,
//        'border': true,
//        'sizePosition': true,
//        'label': true,
//        'disabled': ['border-radius']
//    });

    /* Override widget's initialization */
    Fetch.prototype.init = function() {
        var imgId = this.id + 'Logo';
        this.node.innerHTML = '<label for="' + imgId + '">Fetch</label>'
            + '<img id="' + imgId + '" class="waf-widget waf-fetch-logo" />';
    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3870.html