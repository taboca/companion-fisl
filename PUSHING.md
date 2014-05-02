## Brand

gulp web:build
gulp cordova:setup
gulp cordova:fixup
gulp cordova:fixupicons
//vi ./dist/cordova/platforms/android/AndroidManifest.xml 
gulp cordova:release

## Might sync with a remote origin master from upstream

https://help.github.com/articles/syncing-a-fork

We solve conflicts 

## sign 

cp ./dist/cordova/platforms/android/ant-build/release.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore taboca-labs-telasocial-fisl.keystore ./release.apk TabocaLabsFISL15
zipalign -v 4 ./release.apk aligned-signed.apk

