Crash reporting iOS

FFabric and Crashlytics are shutting down soon. Google will be forcing everyone to move to firebase for their crash reporting and analytics. On top of the problem of firebase being a big dependency to just have crash reporting if you have a lot of small apps it is not feasible to migrate to Fastlane since the free plan is capped to a few applications and after that you need to pay the 29.99 a month subscription which seems excessive to just use it for crash reporting.

I'd already been using sentry for my laravel projects and like it a lot. It can be the one and the only platform you need for all your crash reporting needs.

If you're using Fastlane for your deployments you can even add automatic actions after each deploy to download the dsym files necessary to symbolicate your crashes. The interesting part is that you can even download dsyms for Bitcode enabled applications since Fastlane is going to wait until the application is processed before downloading the dsym for the final version of the app after some has finished processing it.

Example of a Fastfile for symbolication:

lane :upload_symbols do
  download_dsyms
  upload_symbols_to_sentry(
    auth_token: ENV["SENTRYAUTHTOKEN"],
    org_slug: ENV["SENTRYORDSLUG"],
    project_slug: ENV["SENTRYPROJSLUG"],
  )
end

Remember to call this lane only after your application has finished processing if you're using Bitcode.

