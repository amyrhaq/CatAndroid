/*
 * JS for TW_Home generated by Appery.io
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

TW_Home_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_2': 'TW_Home_mobilelabel_2',
        'mobilegroupedbuttons_3': 'TW_Home_mobilegroupedbuttons_3',
        'mobilebutton_4': 'TW_Home_mobilebutton_4',
        'mobilebutton_5': 'TW_Home_mobilebutton_5'
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

    Appery.CurrentScreen = 'TW_Home';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    TW_Home_beforeshow = function() {
        Appery.CurrentScreen = "TW_Home";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_D3D3_onLoad = TW_Home_onLoad = function() {
        screen_D3D3_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        TW_Home_deviceEvents();
        TW_Home_windowEvents();
        screen_D3D3_elementsEvents();
    }

    // screen window events
    screen_D3D3_windowEvents = TW_Home_windowEvents = function() {

        $('#TW_Home').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    TW_Home_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_D3D3_elementsExtraJS = TW_Home_elementsExtraJS = function() {
        // screen (TW_Home) extra code

    }

    // screen elements handler
    screen_D3D3_elementsEvents = TW_Home_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#TW_Home_mobilecontainer [name="mobilebutton_4"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('TW_SMS_Send', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });
        $('#TW_Home_mobilecontainer [name="mobilebutton_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    alert('Please define properly Page for this action');

                }
            },
        });

    }

    $("#TW_Home").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        TW_Home_beforeshow();
    });

    if (runBeforeShow) {
        TW_Home_beforeshow();
    } else {
        TW_Home_onLoad();
    }

}

$("#TW_Home").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    TW_Home_js();
});