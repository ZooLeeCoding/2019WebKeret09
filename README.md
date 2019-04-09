npm install --save firebase @angular/fire


Bővítsétek ki a firebase adatbázist és az ahhoz kapcsolódó service-t, hogy (username, password, email) attribútumokból álló users kollekciót is tároljon! Alakítsd át a SignupComponentet, hogy a gombnyomásra a beírt adatokból összeállított user dokumentumot töltse fel firebase-re!

(Megj.: élesben egy user dokumentum jelszavát valamilyen hashelési,titkosítási technikával szoktuk eltárolni, sima stringként nem! Ha a beadandó projektből a titkosítás kimarad - mivel csak egy demóról van szó, amelynek az éles login/regisztráció nem is követelménye - ott még nem probléma)
