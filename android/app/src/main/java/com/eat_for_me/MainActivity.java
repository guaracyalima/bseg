package com.eat_for_me;

import com.facebook.react.ReactActivity;
import com.pusher.pushnotifications.PushNotifications;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "eat_for_me";
    }
    PushNotifications.start(getApplicationContext(), "bc2ccd8e-9a78-44f1-8845-5a7c30fdfbaf");
    PushNotifications.subscribe("hello");
}
