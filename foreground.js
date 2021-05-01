// Document.querySelectorAll function. DRY!
function selectEm(site){
  document.querySelectorAll(site).forEach((cookie)=>{
    cookie.remove();
  })
}

// Works on:
// https://www.cashper.de/
selectEm("[role='dialog']");

// Works on:
// https://eu.usatoday.com/
selectEm("[class='ot-sdk-row']")

// Works on:
// https://naga.com/de/
selectEm("[id='CybotCookiebotDialog']");

// Works on:
//https://www.formula1.com/
selectEm("[id='cookie-banner']")

//Works on:
// https://www.investing.com/
selectEm("[id='onetrust-consent-sdk']")

// Works on:
// https://www.germany-finance.com/
selectEm("[id='uc-banner-modal']");

// Works on:
// https://www.cnbc.com/
selectEm("[id='onetrust-consent-sdk']");

// Works on:
//https://www.ft.com/
selectEm("[class='o-cookie-message__outer']");

// Works on:
// https://www.howtoforge.com/
selectEm("[id='ez-cookie-dialog-wrapper']")


console.log("Task achieved")
