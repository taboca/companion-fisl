## Brand

gulp web:build
gulp cordova:setup
gulp cordova:fixup
gulp cordova:fixupicons
//vi ./dist/cordova/platforms/android/AndroidManifest.xml 
gulp cordova:release

## The above might not work, the cordova release is doig nothing

And if you do, which is, to ./dist/cordova/ and run cordova build --release 
you will get the -release file however we have a problem with the config.xml plugin section
not being copied to the platform/android/res/xml/config.xml. If you want to be sure of this 
just check the config.xml generated in debug mode and the config.xml generated in release mode
 This can be related to https://github.com/phonegap/phonegap-cli/issues/302 or others

A solution which worked is to, however, ant build --release from the platform android. 

## Might sync with a remote origin master from upstream

https://help.github.com/articles/syncing-a-fork

We solve conflicts 

## sign 

cp ./dist/cordova/platforms/android/ant-build/release.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore taboca-labs-telasocial-fisl.keystore ./release.apk TabocaLabsFISL15
zipalign -v 4 ./release.apk aligned-signed.apk


