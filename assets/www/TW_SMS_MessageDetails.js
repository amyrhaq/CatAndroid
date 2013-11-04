/*
 * JS for TW_SMS_MessageDetails generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '0aa6b59b-95c0-4fe4-845d-4a5b1d8c31f5';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "StripePayment_FinalScreen",
    "location": "StripePayment_FinalScreen.html"
}, {
    "name": "StripePayment_PaymentScreen",
    "location": "StripePayment_PaymentScreen.html"
}, {
    "name": "Screen2",
    "location": "Screen2.html"
}, {
    "name": "Screen3",
    "location": "Screen3.html"
}, {
    "name": "TW_Home",
    "location": "TW_Home.html"
}, {
    "name": "TW_SMS_Send",
    "location": "TW_SMS_Send.html"
}, {
    "name": "TW_SMS_MessageDetails",
    "location": "TW_SMS_MessageDetails.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

TW_SMS_MessageDetails_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_12': 'TW_SMS_MessageDetails_mobilegrid_12',
        'mobilegridcell_13': 'TW_SMS_MessageDetails_mobilegridcell_13',
        'mobilelabel_23': 'TW_SMS_MessageDetails_mobilelabel_23',
        'mobilegridcell_14': 'TW_SMS_MessageDetails_mobilegridcell_14',
        'messageDetailsFrom': 'TW_SMS_MessageDetails_messageDetailsFrom',
        'mobilegridcell_15': 'TW_SMS_MessageDetails_mobilegridcell_15',
        'mobilelabel_24': 'TW_SMS_MessageDetails_mobilelabel_24',
        'mobilegridcell_16': 'TW_SMS_MessageDetails_mobilegridcell_16',
        'messageDetailsTo': 'TW_SMS_MessageDetails_messageDetailsTo',
        'mobilegridcell_17': 'TW_SMS_MessageDetails_mobilegridcell_17',
        'mobilelabel_25': 'TW_SMS_MessageDetails_mobilelabel_25',
        'mobilegridcell_18': 'TW_SMS_MessageDetails_mobilegridcell_18',
        'messageDetailsPrice': 'TW_SMS_MessageDetails_messageDetailsPrice',
        'mobilegridcell_19': 'TW_SMS_MessageDetails_mobilegridcell_19',
        'mobilelabel_27': 'TW_SMS_MessageDetails_mobilelabel_27',
        'mobilegridcell_20': 'TW_SMS_MessageDetails_mobilegridcell_20',
        'messageDetailsContent': 'TW_SMS_MessageDetails_messageDetailsContent',
        'mobilegridcell_21': 'TW_SMS_MessageDetails_mobilegridcell_21',
        'mobilelabel_28': 'TW_SMS_MessageDetails_mobilelabel_28',
        'mobilegridcell_22': 'TW_SMS_MessageDetails_mobilegridcell_22',
        'messageDetailsDateSent': 'TW_SMS_MessageDetails_messageDetailsDateSent'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'TW_SMS_MessageDetails';

    /*
     * Nonvisual components
     */
    var datasources = [];

    SMS_Message_getDetails = new Appery.DataSource(TW_SMS_Message_getDetails, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("TW_SMS_MessageDetails");
        },
        'onSuccess': function(data) {
            $('[dsid="TW_SMS_MessageDetails"] [data-role="content"]').show();
            $('[dsid="messageDetailsPrice"]').text(data.price_unit + ' ' + data.price);
        },
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['date_sent'],
            'ID': 'messageDetailsDateSent',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return (new Date(value)).toLocaleString();
            }
        }, {
            'PATH': ['to'],
            'ID': 'messageDetailsTo',
            'ATTR': '@'
        }, {
            'PATH': ['from'],
            'ID': 'messageDetailsFrom',
            'ATTR': '@'
        }, {
            'PATH': ['body'],
            'ID': 'messageDetailsContent',
            'ATTR': '@'
        }],
        'requestMapping': [{
            'PATH': ['SMSMessageSid'],
            'TYPE': 'STRING',
            'TRANSFORMATION': function(value) {
                return localStorage.getItem('_current_smsMessageSid');
            }
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'https://{accountSid}:{authToken}@api.twilio.com/2010-04-01/Accounts/{accountSid}/SMS/Messages/{SMSMessageSid}.json'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1383590832095'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2726581'
        }]
    });

    datasources.push(SMS_Message_getDetails);

    /*
     * Events and handlers
     */

    // Before Show
    TW_SMS_MessageDetails_beforeshow = function() {
        Appery.CurrentScreen = "TW_SMS_MessageDetails";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_2FB5_onLoad = TW_SMS_MessageDetails_onLoad = function() {
        screen_2FB5_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        TW_SMS_MessageDetails_deviceEvents();
        TW_SMS_MessageDetails_windowEvents();
        screen_2FB5_elementsEvents();
    }

    // screen window events
    screen_2FB5_windowEvents = TW_SMS_MessageDetails_windowEvents = function() {

        $('#TW_SMS_MessageDetails').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#TW_SMS_MessageDetails').bind({
            pageshow: function() {
                try {
                    SMS_Message_getDetails.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            },
        });

    }

    // device events
    TW_SMS_MessageDetails_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_2FB5_elementsExtraJS = TW_SMS_MessageDetails_elementsExtraJS = function() {
        // screen (TW_SMS_MessageDetails) extra code

    }

    // screen elements handler
    screen_2FB5_elementsEvents = TW_SMS_MessageDetails_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#TW_SMS_MessageDetails").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        TW_SMS_MessageDetails_beforeshow();
    });

    if (runBeforeShow) {
        TW_SMS_MessageDetails_beforeshow();
    } else {
        TW_SMS_MessageDetails_onLoad();
    }

}

$("#TW_SMS_MessageDetails").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    TW_SMS_MessageDetails_js();
});