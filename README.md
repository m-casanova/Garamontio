# Garamontio

⟶ __[Download](https://github.com/m-casanova/Garamontio/releases)__ (OTF, TTF, WOFF, WOFF2, variable TTF, source)

![image](images/garamontio_01.jpg)

Per testare il font, vedere la [pagina interattiva](https://m-casanova.github.io/Garamontio/).

Il font è rilasciato con licenza OFL 1.1.

* Font variabile (tondo e corsivo): formati TTF e WOFF2
* Font separati (diversi pesi): formati TTF, WOFF e WOFF2; il formato OTF è sperimentale.

Al momento è preferibile utilizzare il formato TTF, dato con il formato OTF non è stato testato e potrebbe avere problemi.

## Descrizione
_Garamontio_ è derivato da _[EB Garamond](https://github.com/octaviopardo/EBGaramond12)_ di Octavio Pardo, che deriva a sua volta dal font _[EB Garamond](https://github.com/georgd/EB-Garamond)_ di Georg Mayr-Duffner.

Alcuni simboli e operatori matematici sono stati tratti da [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math), con alcune modifiche.

Rispetto a EB Garamond sono state effettuate alcune modifiche. Principalmente è stato modificato il corsivo e sono state fatte modifiche agli operatori matematici.

![image](images/garamontio_11.jpg)

![image](images/garamontio_12.jpg)

![image](images/garamontio_13.jpg)

## Opentype
![image](images/garamontio_21.jpg)

![image](images/garamontio_22.jpg)

![image](images/garamontio_23.jpg)

![image](images/garamontio_24.jpg)

Alcune caratteristiche opentype disponibili:
* __ss01__ = __smcp&c2sc__ : maiuscoletto completo (maiuscole e minuscole)
* __ss02__ = __pcap&c2pc__ : maiuscoletto minore (maiuscole e minuscole)
* __ss03__ : accesso rapido a caratteri fraktur (matematica)
* __ss04__ : maiuscole in tondo selezionando il corsivo (esperimento, solo corsivo)
* __ss05__ : Q con coda corta
* __ss06__ : Q con coda lunga
* __ss07__ : utilizza la lettera [s lunga](https://it.wikipedia.org/wiki/S_lunga) __ſ__
* __ss08__ : utilizza la lettera s lunga, ma non con doppia s lunga
* __ss09__ = __ornm__ : elementi ornamentali disegnati sulla base dell'[esemplare disponibile online](https://sammlungen.ub.uni-frankfurt.de/drucke/content/zoom/7499396)
* __ss10__ : zero alternativo (disponibile anche per __onum__, __pnum__, __smcp__ e __c2sc__)
* __ss11__ : [Block Elements](https://it.wikipedia.org/wiki/Block_Elements)
* __ss12__ : bordi

![image](images/garamontio_31.jpg)

![image](images/garamontio_32.jpg)

![image](images/garamontio_33.jpg)

![image](images/garamontio_34.jpg)

![image](images/garamontio_35.jpg)

* __cv01__ : versione alternativa delle lettere greche per IPA
* __cv02__ : versione alternativa di un punto esclamativo (uni2E54)
* __cv03__ : legature /AE /OE /ae /oe
* __cv04__ : posizione alternativa degli accenti per le lettere /b /d /h /k
* __cv05__ : versione alternativa per le manicule come da [esemplare disponibile online](https://sammlungen.ub.uni-frankfurt.de/drucke/content/zoom/7499396)
* __cv06__ : versione alternativa di e commerciale (&) (solo corsivo)
* __cv07__ : versione alternativa (SS/ss) per __ẞ__ e __ß__
* __cv08__ : versione alternativa del numero 1 per __onum__ e __onum&pnum__
* __cv09__ : numeri romani
* __cv10__ : numeri romani maiuscoletto
* __cv11__ : segno di paragrafo alternativo
* __cv12__ : segni /ordfeminine ª /ordmasculine º /numero №
* __cv13__ : versione alternativa di /endash e /emdash
* __cv14__ : f corta
* __cv28__ : versione alternativa per /Hbar
* __cv31__ : cirillico Serbo/Macedone

![image](images/garamontio_41.jpg)

![image](images/garamontio_42.jpg)

![image](images/garamontio_43.jpg)

Le caratteristiche opentype sono facilmente attivabili in LibreOffice ([it](https://help.libreoffice.org/latest/it/text/shared/01/font_features.html) / [en](https://help.libreoffice.org/latest/en-US/text/shared/01/font_features.html))

![image](images/garamontio_51.jpg)

![image](images/garamontio_52.jpg)

## Garamontio Capo

È disponibile anche il font sperimentale [Garamontio Capo](https://github.com/m-casanova/GaramontioCapo) per ottenere capolettera

![image](images/garamontio_99.jpg)

Si possono anche utilizzare capolettera cinquecenteschi come [Capo Nodi](https://github.com/m-casanova/CapoNodi)

![image](images/garamontio_98.jpg)

## Versioni
- Versione 1.042: modifiche per f corta contestuale + aggiunta cv14
- Versione 1.041: aggiunta ss12 per bordi
- Versione 1.040: sistemazione /tildedoublecomb + aggiunta caratteri box sottili (/uni2500 e seguenti)
- Versione 1.039: esperimento per /tildedoublecomb
- Versione 1.038: esperimento per _mgrk_ (caratteri greci per notazione matematica)
- Versione 1.037: ottimizzazione legature /longs
- Versione 1.036: ottimizzazione legature /f
- Versione 1.035: fix minori
- Versione 1.034: fix cirillico
- Versione 1.033: fix crenatura per _Vu_ e fix minori
- Versione 1.032: fix crenatura smcp e pcap
- Versione 1.031: sistemazione smcp e pcap per /macroncomb e /brevecomb
- Versione 1.030: aggiunta cv31
- Versione 1.029: sistemazione generale per gli elementi "Modifier Letter"
- Versione 1.028: fix minori
- Versione 1.027: aggiunto cv13 (varianti /endash /emdash) + fix macron per smallcaps
- Versione 1.026: fix minori
- Versione 1.025: aggiunta cv12 + fix minori
- Versione 1.024: correzione problema /u corsivo e aggiunta ss11 per [Block Elements](https://it.wikipedia.org/wiki/Block_Elements)
- Versione 1.023: aggiunta di caratteri per menu (☰ /uni2630 e ✕ /uni2715)
- Versione 1.022: aggiunta cv11 (simbolo paragrafo)
- Versione 1.021: fix numeri romani (errore per numero 50)
- Versione 1.020: fix minori e test per versione OTF del font
- Versione 1.019: aggiunta di caratteri
- Versione 1.018: nuovo test % per onum
- Versione 1.017: endash emdash per ordn, sups, subs, sinf -- test % per onum 
- Versione 1.016: miglioramento coda /Q /Q.medium /Q.long per corsivo
- Versione 1.015: fix minori + icone Creative Commons
- Versione 1.014: aggiunta di alcuni caratteri
- Versione 1.013: fix minori
- Versione 1.012: distinzione cv09 e cv10 per numeri romani
- Versione 1.011: aggiunta cv09 per numeri romani
- Versione 1.010: aggiunta cv08 per variante numero 1 (onum, onum&pnum)
- Versione 1.009: fix minori
- Versione 1.008: fix minori
- Versione 1.007: sistemazione maiuscole per __swsh__ (corsivo)
- Versione 1.006: tentativo di rendere più omogenee le maiuscole per __swsh__ (corsivo)
- Versione 1.005: fix problema con accento in maiuscole / rimosso OTF (inutile duplicato TTF)
- Versione 1.004: fix forme per __ss10__ + fix crenatura
- Versione 1.003: fix cifre + __zero__ (slashedzero) + __ss10__ (zero alternativo)
- Versione 1.002: fix minori
- Versione 1.001: fix minori
- Versione 1.000: aggiunta di alcuni caratteri
- Versione 0.973: fix minori
- Versione 0.972: fix larghezza lettera /i per carattere tondo
- Versione 0.971: fix minori
- Versione 0.970: aggiunta /ur (uni1dd1) + aggiunta alcuni ornamenti 
- Versione 0.969: fix minori
- Versione 0.968: fix minori
- Versione 0.967: sistemazione crenatura apostrofo
- Versione 0.966: riorganizzazione caratteristiche ss e cv
- Versione 0.965: fix minori e aggiunta cv05 per manicule
- Versione 0.964: fix legature (liga, hlig, dlig)
- Versione 0.963: aggiunta cv02 (punto esclamativo) e cv04 (esperimento maiuscole in tondo per il corsivo, cfr. Manuzio) 
- Versione 0.962: fix minori
- Versione 0.961: fix posizione dieresi/punto + legature /AE /OE /ae /oe (cv03)
- Versione 0.960: <s>alternativa posizione punto /i /j (cv02)</s> [Rimosso v. 0.961]
- Versione 0.959: fix minori
- Versione 0.958: fix posizione punto /i /j
- Versione 0.957: fix minori
- Versione 0.956: modificato leggermente il peso delle versioni intermedie
- Versione 0.955: fix minori
- Versione 0.954: maiuscoletto coerente tra regular e italic (fix greco)
- Versione 0.953: fix minori + aggiunta caratteri
- Versione 0.952: cv28 /Hbar - Matematica: aggiunta caratteri e simboli matematici + fraktur (cv01)
- Versione 0.951: fix minori + aggiunta caratteri + modifica ss10
- Versione 0.950: fix minori + aggiunta caratteri + prima crenatura per pcap&c2pc
- Versione 0.949: fix minori, incluse alcune ancore per alfabeto cirillico
- Versione 0.948: fix minori + ss09 (elementi ornamentali)
- Versione 0.947: fix minori + ss05 (Q coda corta) + ss06 (Q coda lunga) + ss08 (eszet)
- Versione 0.946: aggiunta /copyleft + test per ss06 (coda lettera Q)
- Versione 0.944: fix accenti + longs
- Versione 0.943: fix minori (dlig e crenatura)
- Versione 0.942: aggiunta caratteri pcap
- Versione 0.941: fix minori + test ss04 (varianti /b /d /h /k)
- Versione 0.940: aggiunta di caratteri per cedilla + test ss04 (varianti /h e /k)
- Versione 0.939: aggiunta di caratteri + fix minori
- Versione 0.938: blocco IPA completato + carattere ℗ + fix minori
- Versione 0.937: aggiunta di caratteri e fix minori
- Versione 0.935: sistemazione di caratteri combinati
- Versione 0.934: tentativo di sistemazione delle ancore per i caratteri combinati
- Versione 0.933: aggiunti caratteri musicali, SS03 (caratteri greci IPA + corsivo), fix kerning / con punteggiatura
- Versione 0.932: blocco IPA (aggiunte caratteri) e sistemazione per alcuni segni diatrici
- Versione 0.931: blocco IPA (aggiunte caratteri) e sistemazione per alcuni segni diatrici
- Versione 0.929: blocco IPA (aggiunte e correzione forma di alcuni caratteri), correzione ę
- Versione 0.928: blocco IPA (aggiunte e correzione forma di alcuni caratteri)
- Versione 0.927: blocco IPA (aggiunte)
- Versione 0.926: fix per caratteri combinati (continuazione)
- Versione 0.925: fix per caratteri combinati (non ancora completato)
- Versione 0.924: fix minori
- Versione 0.923: fix minore e aggiunta carattere F160 da MUFI
- Versione 0.922: tentativo di sistemazione di f.short per alcuni casi
- Versione 0.921: sistemazione problemi di interpolazione di alcuni caratteri (regular + italic)
- Versione 0.919: sistemazione disegno dei caratteri
- Versione 0.918: sistemazione della crenatura per diversi caratteri
- Versione 0.917: sistemazione _dlig_ e alcuni fix ai caratteri
- Versione 0.916: aggiunta di alcuni caratteri per trascrizioni come da progetto [MUFI](https://en.wikipedia.org/wiki/Medieval_Unicode_Font_Initiative)
- Versione 0.915: aggiunta di alcuni caratteri per trascrizioni come da progetto MUFI
- Versione 0.911: fix minori e creazione file per versioni statiche del font (otf, ttf, woff, woff2)
- Versione 0.906: modifiche minime per compatibilità con [Garamontio Sans](https://github.com/m-casanova/GaramontioSans)
- Versione 0.905: fix frazioni
- Versione 0.904: versione di prova con miglioramento delle classi e sistemazione di alcuni riferimenti
