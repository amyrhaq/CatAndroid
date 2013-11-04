/*
 * JS for StripePayment_FinalScreen generated by Appery.io
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

StripePayment_FinalScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_4': 'StripePayment_FinalScreen_mobilegrid_4',
        'mobilegridcell_5': 'StripePayment_FinalScreen_mobilegridcell_5',
        'mobilegrid_8': 'StripePayment_FinalScreen_mobilegrid_8',
        'mobilegridcell_9': 'StripePayment_FinalScreen_mobilegridcell_9',
        'firstLabel': 'StripePayment_FinalScreen_firstLabel',
        'mobilegridcell_11': 'StripePayment_FinalScreen_mobilegridcell_11',
        'secondLabel': 'StripePayment_FinalScreen_secondLabel',
        'mobilegridcell_13': 'StripePayment_FinalScreen_mobilegridcell_13',
        'thirdLabel': 'StripePayment_FinalScreen_thirdLabel',
        'mobilelabel1_3': 'StripePayment_FinalScreen_mobilelabel1_3',
        'mobilegridcell_7': 'StripePayment_FinalScreen_mobilegridcell_7',
        'doneButton': 'StripePayment_FinalScreen_doneButton'
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

    Appery.CurrentScreen = 'StripePayment_FinalScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    StripePayment_FinalScreen_beforeshow = function() {
        Appery.CurrentScreen = "StripePayment_FinalScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_132C_onLoad = StripePayment_FinalScreen_onLoad = function() {
        screen_132C_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        StripePayment_FinalScreen_deviceEvents();
        StripePayment_FinalScreen_windowEvents();
        screen_132C_elementsEvents();
    }

    // screen window events
    screen_132C_windowEvents = StripePayment_FinalScreen_windowEvents = function() {

        $('#StripePayment_FinalScreen').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });
        $('#StripePayment_FinalScreen').bind({
            pageshow: function() {
                StripeGlobal.beforeShowFinalScreen();;
            },
        });

    }

    // device events
    StripePayment_FinalScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_132C_elementsExtraJS = StripePayment_FinalScreen_elementsExtraJS = function() {
        // screen (StripePayment_FinalScreen) extra code

    }

    // screen elements handler
    screen_132C_elementsEvents = StripePayment_FinalScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#StripePayment_FinalScreen_mobilecontainer [name="doneButton"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('Screen3', {
                        transition: 'slidedown',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#StripePayment_FinalScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        StripePayment_FinalScreen_beforeshow();
    });

    if (runBeforeShow) {
        StripePayment_FinalScreen_beforeshow();
    } else {
        StripePayment_FinalScreen_onLoad();
    }

}

$("#StripePayment_FinalScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    StripePayment_FinalScreen_js();
});