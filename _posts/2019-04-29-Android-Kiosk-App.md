---
layout: post
title: Create Your Own Android Kiosk Application Using Kotlin
date: 2019-04-29 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---


I needed to build an Android Kiosk app for a client to display a simple web browser. Fortunately since android Lollypop Android itself allows you to lock down the UI and the controls by using "DevicePolicyManager".

*This tutorial assumed basic Android and Kotlin knowledge on top of familiarity with adb, Gradle and Android Studio.*

Make a new Full-Screen Kotlin application from Android Studio. Make sure to set the minimum API version as 24 since android doesn't support DevicePolicyManager before that.

Open the xml of your activity and add a Linear Layout with a WebView inside:

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="horizontal" >

    <WebView
        android:id="@+id/webView"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"/>

</LinearLayout>
```

Open the Android Manifest and add the various intents needed both for internet access and for "kiosk mode":

```
    <uses-permission android:name="android.permission.INTERNET"/>
<application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:testOnly="true">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
                <category android:name="android.intent.category.HOME" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
        </activity>
        <receiver
            android:name=".MyDeviceAdminReceiver"
            android:description="@string/app_name"
            android:label="@string/app_name"
            android:permission="android.permission.BIND_DEVICE_ADMIN">
            <meta-data
                android:name="android.app.device_admin"
                android:resource="@xml/device_admin_receiver"/>
            <intent-filter>
                <action android:name="android.app.action.DEVICE_ADMIN_ENABLED" />
            </intent-filter>
        </receiver>
    </application>
</manifest>
```

In your pro-guard rules (if you're using it) uncomment the "if you're using javascript in your webview uncomment this part" code:

```
# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
-keepclassmembers class fqcn.of.javascript.interface.for.webview {
   public *;
}
```

We can now implement our main activity. The main activity is taken from [Github][1] and edited to add the webview. If you just need a demo of kiosk mode you can simply clone the repository.


First the imports:

```
import android.app.admin.DevicePolicyManager
import android.app.admin.SystemUpdatePolicy
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.os.Build
import android.os.Bundle
import android.os.UserManager
import android.provider.Settings
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient

import android.support.annotation.RequiresApi

class MainActivity : AppCompatActivity() {

    private lateinit var mAdminComponentName: ComponentName
    private lateinit var mDevicePolicyManager: DevicePolicyManager

    companion object {
        const val LOCK_ACTIVITY_KEY = "pl.snowdog.kiosk.MainActivity"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mAdminComponentName = MyDeviceAdminReceiver.getComponentName(this)
        mDevicePolicyManager = getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager

        var isAdmin = false
        if (mDevicePolicyManager.isDeviceOwnerApp(packageName)) {
            Toast.makeText(applicationContext, R.string.device_owner, Toast.LENGTH_SHORT).show()
            isAdmin = true
        } else {
            Toast.makeText(applicationContext, R.string.not_device_owner, Toast.LENGTH_SHORT).show()
        }
        setKioskPolicies(true, isAdmin)

        webView.webViewClient = MyWebViewClient(this)
		webView.clearCache(true);
        webView.clearHistory();
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        webView.loadUrl("http://google.com")
    }

    //webview
    class MyWebViewClient internal constructor(private val activity: MainActivity) : WebViewClient() {

        @RequiresApi(Build.VERSION_CODES.LOLLIPOP)
        override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
            val url: String = request?.url.toString();
            view?.loadUrl(url)
            return true
        }

        override fun shouldOverrideUrlLoading(webView: WebView, url: String): Boolean {
            webView.loadUrl(url)
            return true
        }

        override fun onReceivedError(view: WebView, request: WebResourceRequest, error: WebResourceError) {
            Toast.makeText(activity, "Got Error! $error", Toast.LENGTH_SHORT).show()
        }
    }
//end webview

    private fun setKioskPolicies(enable: Boolean, isAdmin: Boolean) {
        if (isAdmin) {
            setRestrictions(enable)
            enableStayOnWhilePluggedIn(enable)
            setUpdatePolicy(enable)
            setAsHomeApp(enable)
            setKeyGuardEnabled(enable)
        }
        setLockTask(enable, isAdmin)
        setImmersiveMode(enable)
    }

    // region restrictions
    private fun setRestrictions(disallow: Boolean) {
        setUserRestriction(UserManager.DISALLOW_SAFE_BOOT, disallow)
        setUserRestriction(UserManager.DISALLOW_FACTORY_RESET, disallow)
        setUserRestriction(UserManager.DISALLOW_ADD_USER, disallow)
        setUserRestriction(UserManager.DISALLOW_MOUNT_PHYSICAL_MEDIA, disallow)
        setUserRestriction(UserManager.DISALLOW_ADJUST_VOLUME, disallow)
    }

    private fun setUserRestriction(restriction: String, disallow: Boolean) = if (disallow) {
        mDevicePolicyManager.addUserRestriction(mAdminComponentName, restriction)
    } else {
        mDevicePolicyManager.clearUserRestriction(mAdminComponentName, restriction)
    }
    // endregion

    private fun enableStayOnWhilePluggedIn(active: Boolean) = if (active) {
        mDevicePolicyManager.setGlobalSetting(mAdminComponentName,
                Settings.Global.STAY_ON_WHILE_PLUGGED_IN,
                Integer.toString(BatteryManager.BATTERY_PLUGGED_AC
                        or BatteryManager.BATTERY_PLUGGED_USB
                        or BatteryManager.BATTERY_PLUGGED_WIRELESS))
    } else {
        mDevicePolicyManager.setGlobalSetting(mAdminComponentName, Settings.Global.STAY_ON_WHILE_PLUGGED_IN, "0")
    }

    private fun setLockTask(start: Boolean, isAdmin: Boolean) {
        if (isAdmin) {
            mDevicePolicyManager.setLockTaskPackages(mAdminComponentName, if (start) arrayOf(packageName) else arrayOf())
        }
        if (start) {
            startLockTask()
        } else {
            stopLockTask()
        }
    }

    private fun setUpdatePolicy(enable: Boolean) {
        if (enable) {
            mDevicePolicyManager.setSystemUpdatePolicy(mAdminComponentName,
                    SystemUpdatePolicy.createWindowedInstallPolicy(60, 120))
        } else {
            mDevicePolicyManager.setSystemUpdatePolicy(mAdminComponentName, null)
        }
    }

    private fun setAsHomeApp(enable: Boolean) {
        if (enable) {
            val intentFilter = IntentFilter(Intent.ACTION_MAIN).apply {
                addCategory(Intent.CATEGORY_HOME)
                addCategory(Intent.CATEGORY_DEFAULT)
            }
            mDevicePolicyManager.addPersistentPreferredActivity(
                    mAdminComponentName, intentFilter, ComponentName(packageName, MainActivity::class.java.name))
        } else {
            mDevicePolicyManager.clearPackagePersistentPreferredActivities(
                    mAdminComponentName, packageName)
        }
    }

    private fun setKeyGuardEnabled(enable: Boolean) {
        mDevicePolicyManager.setKeyguardDisabled(mAdminComponentName, !enable)
    }

    private fun setImmersiveMode(enable: Boolean) {
        if (enable) {
            val flags = (View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_FULLSCREEN
                    or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY)
            window.decorView.systemUiVisibility = flags
        } else {
            val flags = (View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN)
            window.decorView.systemUiVisibility = flags
        }
    }
}

```


Let's analyze it a bit.

`setKioskPolicies(true, isAdmin)` takes care of enabling the Kiosk part of the app by granting the special permissions. Right below it, we set up the webview to point to Google: `webView.webViewClient = MyWebViewClient(this); webView.loadUrl("http://google.com")`. We also enable javascript (which is disabled by default by adding `webView.getSettings().setJavaScriptEnabled(true); webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);`. On top of blocking most button and turn on full screen and kiosk "setAsHomeApp" also sets the app as the default launcher so that the app gets automatically launched after each reboot so the user can't exit the application in any way.

If you would like to turn off kiosk mode you can either update the .apk by removing the call to `setKioskPolicies(true, isAdmin)` or by performing a factory reset by calling (you can add it on the onCreate method) `devicePolicyManager.wipeData(DevicePolicyManager.WIPE_RESET_PROTECTION_DATA)`. That will only work if you have wipe permissions enabled (if you followed this article you have them), if you don't have them for some reason you can instead call `devicePolicyManager.clearPackagePersistentPreferredActivities(mAdminComponentName, packageName)` to remove the app launching on startup and perform a normal factory reset from the Settings app.

----

Sources:

[Kiosk App][1]
[Linear Layout][2]
[adb remove set-device-owner][3]
[Android Build Version Codes][4]
[Kotlin Webview][5]

[1]: https://github.com/mrugacz95/kiosk
[2]: https://developer.android.com/guide/topics/ui/layout/linear
[3]: https://stackoverflow.com/questions/49128293/how-to-remove-set-device-owner-in-android-dpm
[4]: https://developer.android.com/reference/android/os/Build.VERSION_CODES
[5]: https://www.javatpoint.com/kotlin-android-webview