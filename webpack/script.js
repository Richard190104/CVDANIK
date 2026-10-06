// tu sa musia importovat vsetky js subory ktore vytvoris, aby ich stranka zaregistrovala.
// v html je riadok   <script type="module" src="webpack/script.js"></script>
// ktory importuje prave tento subor. Ten sluzi ako entry point pre vsetky js subory ktore sa budu
// pouzivat. Ked subor nezaregistrujes tu tak ho html nevidi. Teoreticky vies novy subor pridat cisto aj ako
// import do html rovnako ako sme pridali tento subor, ale nech to je konzistentne a nech nemame 
// milion importov v html tak to robme takto.
import "./lang-switcher.js";
import "./block-renderer.js";