/*
 * JS for TW_SMS_Send generated by Appery.io
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

TW_SMS_Send_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_14': 'TW_SMS_Send_mobilelabel_14',
        'mobilegrid_3': 'TW_SMS_Send_mobilegrid_3',
        'mobilegridcell_4': 'TW_SMS_Send_mobilegridcell_4',
        'mobilelabel_8': 'TW_SMS_Send_mobilelabel_8',
        'mobilegridcell_5': 'TW_SMS_Send_mobilegridcell_5',
        'mobilelabel_15': 'TW_SMS_Send_mobilelabel_15',
        'mobilegridcell_6': 'TW_SMS_Send_mobilegridcell_6',
        'mobilelabel_2': 'TW_SMS_Send_mobilelabel_2',
        'mobilegridcell_7': 'TW_SMS_Send_mobilegridcell_7',
        'sendSmsTo': 'TW_SMS_Send_sendSmsTo',
        'mobilelabel_9': 'TW_SMS_Send_mobilelabel_9',
        'sendSmsContent': 'TW_SMS_Send_sendSmsContent',
        'mobilebutton_13': 'TW_SMS_Send_mobilebutton_13'
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

    Appery.CurrentScreen = 'TW_SMS_Send';

    /*
     * Nonvisual components
     */
    var datasources = [];

    sendMessage = new Appery.DataSource(TW_SMS_sendMessage, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("TW_SMS_Send");
        },
        'onSuccess': function(data) {
            alert('Message succesfully sended.');
            Appery('sendSmsContent').val('');
            Appery('sendSmsTo').val('');
            Appery('mobilelabel_14').hide();
            Appery.navigateTo('TW_SMS_Messages', {});
        },
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['Body'],
            'TYPE': 'STRING',
            'ID': 'sendSmsContent',
            'ATTR': 'value'
        }, {
            'PATH': ['To'],
            'TYPE': 'STRING',
            'ID': 'sendSmsTo',
            'ATTR': 'value'
        }, {
            'PATH': ['From'],
            'TYPE': 'STRING',
            'ATTR': '{PhoneNumber}'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'https://{accountSid}:{authToken}@api.twilio.com/2010-04-01/Accounts/{accountSid}/SMS/Messages.json'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1383590832051'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2726576'
        }]
    });

    datasources.push(sendMessage);

    /*
     * Events and handlers
     */

    // Before Show
    TW_SMS_Send_beforeshow = function() {
        Appery.CurrentScreen = "TW_SMS_Send";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_69E9_onLoad = TW_SMS_Send_onLoad = function() {
        screen_69E9_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        TW_SMS_Send_deviceEvents();
        TW_SMS_Send_windowEvents();
        screen_69E9_elementsEvents();
    }

    // screen window events
    screen_69E9_windowEvents = TW_SMS_Send_windowEvents = function() {

        $('#TW_SMS_Send').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#TW_SMS_Send').bind({
            pageshow: function() {
                Appery('mobilelabel_15').text(TW_Settings['PhoneNumber']);
            },
        });

    }

    // device events
    TW_SMS_Send_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_69E9_elementsExtraJS = TW_SMS_Send_elementsExtraJS = function() {
        // screen (TW_SMS_Send) extra code

    }

    // screen elements handler
    screen_69E9_elementsEvents = TW_SMS_Send_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#TW_SMS_Send_mobilecontainer [name="mobilebutton_13"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    var sendSmsTo = Appery('sendSmsTo').val();
                    var msg = Appery('sendSmsContent').val();
                    if (sendSmsTo && msg) {
                        sendMessage.execute();
                    } else {
                        Appery('mobilelabel_14').show();
                    };

                }
            },
        });

    }

    $("#TW_SMS_Send").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        TW_SMS_Send_beforeshow();
    });

    if (runBeforeShow) {
        TW_SMS_Send_beforeshow();
    } else {
        TW_SMS_Send_onLoad();
    }

}

$("#TW_SMS_Send").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    TW_SMS_Send_js();
});